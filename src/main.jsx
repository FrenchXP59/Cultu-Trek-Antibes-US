// src/main.jsx
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

// Si le navigateur supporte les Service Workers…
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/service-worker.js')
      .then((reg) => {
        console.log('✅ SW registered')

        // Quand un nouveau SW est trouvé…
        reg.addEventListener('updatefound', () => {
          const newSW = reg.installing
          newSW.addEventListener('statechange', () => {
            // Une fois installé, et si un SW contrôleur est déjà actif,
            // c’est qu’on a une mise à jour prête à être activée
            if (
              newSW.state === 'installed' &&
              navigator.serviceWorker.controller
            ) {
              showUpdateBanner()
            }
          })
        })
      })
      .catch((err) => console.error('❌ SW registration failed:', err))
  })
}

/**
 * Affiche une bannière fixe en bas pour proposer le rechargement
 * lorsque la nouvelle version du SW est prête à prendre le relais.
 */
function showUpdateBanner() {
  const banner = document.createElement('div')
  banner.style.cssText = `
    position: fixed;
    bottom: 0; left: 0; right: 0;
    background: #1abc9c; color: #fff;
    padding: 12px;
    text-align: center;
    font-family: sans-serif;
    z-index: 20000;
  `
  banner.innerHTML = `
    Nouvelle version disponible&nbsp;
    <button style="
      margin-left: 12px;
      padding: 6px 12px;
      background: #f1c40f;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      font-weight: bold;
    ">
      Recharger
    </button>
  `

  document.body.appendChild(banner)

  // Quand on clique sur “Recharger”, on supprime la bannière et on rafraîchit
  const button = banner.querySelector('button')
  button.addEventListener('click', () => {
    banner.remove()
    window.location.reload()
  })
}
