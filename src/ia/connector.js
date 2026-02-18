// connector.js — Conexión con Gemini API (free tier) + fallback "Abrir en Gemini"

const IA = {
  modelo: 'gemini-2.5-flash-lite',
  maxOutputTokens: 600,
  temperature: 0.7,
  urlBase: 'https://generativelanguage.googleapis.com/v1beta/models/',

  // Estimar tokens antes de enviar (4 chars ≈ 1 token)
  estimarTokens(texto) {
    return Math.ceil(texto.length / 4);
  },

  // Llamada a Gemini API
  async generar(prompt, opciones = {}) {
    const apiKey = Storage.getApiKey();
    if (!apiKey) {
      return { error: 'no_api_key', mensaje: 'Configure su API key de Gemini en Ajustes.' };
    }

    const modelo = opciones.modelo || this.modelo;
    const url = `${this.urlBase}${modelo}:generateContent?key=${apiKey}`;

    const tokensEstimados = this.estimarTokens(prompt);

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: prompt }] }],
          generationConfig: {
            maxOutputTokens: opciones.maxTokens || this.maxOutputTokens,
            temperature: opciones.temperature || this.temperature
          }
        })
      });

      if (!response.ok) {
        const err = await response.json().catch(() => ({}));
        if (response.status === 429) {
          return { error: 'rate_limit', mensaje: 'Límite de consultas alcanzado. Intente en unos minutos.' };
        }
        if (response.status === 403 || response.status === 401) {
          return { error: 'api_key_invalida', mensaje: 'API key inválida. Verifique su clave en Ajustes.' };
        }
        return { error: 'api_error', mensaje: err.error?.message || `Error ${response.status}` };
      }

      const data = await response.json();
      const texto = data.candidates?.[0]?.content?.parts?.[0]?.text || '';

      const resultado = {
        texto,
        tokensInput: tokensEstimados,
        tokensOutput: this.estimarTokens(texto),
        modelo
      };

      // Guardar en historial
      Storage.addHistorialIA({
        prompt: prompt.substring(0, 200) + '...',
        respuesta: texto.substring(0, 300) + '...',
        tokens: resultado.tokensInput + resultado.tokensOutput,
        modelo
      });

      return resultado;

    } catch (e) {
      if (e.name === 'TypeError' && e.message.includes('fetch')) {
        return { error: 'sin_conexion', mensaje: 'Sin conexión a internet. Use el botón "Abrir en Gemini" como alternativa.' };
      }
      return { error: 'desconocido', mensaje: e.message };
    }
  },

  // Fallback: abrir prompt en Gemini web (0 tokens, 0 API key)
  abrirEnGemini(prompt) {
    const encoded = encodeURIComponent(prompt);
    // Gemini web acepta texto via URL hasta ~4000 chars
    if (encoded.length > 4000) {
      // Copiar al portapapeles y abrir Gemini vacío
      navigator.clipboard?.writeText(prompt);
      window.open('https://gemini.google.com/app', '_blank');
      return { metodo: 'clipboard', mensaje: 'Prompt copiado al portapapeles. Péguelo en Gemini.' };
    }
    window.open(`https://gemini.google.com/app?q=${encoded}`, '_blank');
    return { metodo: 'url', mensaje: 'Abriendo Gemini con el prompt...' };
  },

  // Verificar si la API key funciona — retorna { ok, mensaje }
  async verificarApiKey(apiKey) {
    try {
      const url = `${this.urlBase}${this.modelo}:generateContent?key=${apiKey}`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          contents: [{ parts: [{ text: 'Responde solo: OK' }] }],
          generationConfig: { maxOutputTokens: 10 }
        })
      });
      if (response.ok) return { ok: true, mensaje: 'API key válida' };
      const err = await response.json().catch(() => ({}));
      return { ok: false, mensaje: err.error?.message || `Error ${response.status}` };
    } catch (e) {
      return { ok: false, mensaje: e.message || 'Error de conexión' };
    }
  }
};
