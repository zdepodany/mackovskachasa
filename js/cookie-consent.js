document.addEventListener('DOMContentLoaded', function() {
    const cookieConsent = document.querySelector('.cookie-consent');
    const acceptButton = document.querySelector('.cookie-consent-accept');
    const rejectButton = document.querySelector('.cookie-consent-reject');

    // Kontrola, zda uživatel již dal souhlas
    if (!localStorage.getItem('cookieConsent')) {
        cookieConsent.classList.add('active');
    }

    // Funkce pro nastavení Google Analytics
    function enableGoogleAnalytics() {
        // Google Analytics je již načten v HTML, stačí povolit tracking
        gtag('consent', 'update', {
            'analytics_storage': 'granted'
        });
    }

    // Funkce pro zakázání Google Analytics
    function disableGoogleAnalytics() {
        gtag('consent', 'update', {
            'analytics_storage': 'denied'
        });
    }

    // Přijetí cookies
    acceptButton.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'accepted');
        cookieConsent.classList.remove('active');
        enableGoogleAnalytics();
    });

    // Odmítnutí cookies
    rejectButton.addEventListener('click', function() {
        localStorage.setItem('cookieConsent', 'rejected');
        cookieConsent.classList.remove('active');
        disableGoogleAnalytics();
    });

    // Inicializace Google Analytics podle předchozího souhlasu
    if (localStorage.getItem('cookieConsent') === 'accepted') {
        enableGoogleAnalytics();
    } else if (localStorage.getItem('cookieConsent') === 'rejected') {
        disableGoogleAnalytics();
    }
}); 