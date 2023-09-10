import azalea from '@core';

function initializeWindow() {
    window.azalea = azalea;

    // Disable sentry
    if (window.__sparxweb) {
        window.__sparxweb.environment = 'development';
    }

    // Workaround for routes not being defined early enough
    if (window.location.href.includes('azalea')) {
        window.location.href = window.location.href.replace(/azalea\/.*/g, '')
    }
}

export default initializeWindow;