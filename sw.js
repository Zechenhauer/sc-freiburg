// Service Worker mit personalisiertem "JS"-Icon für die Push-Benachrichtigungen
self.addEventListener('push', function(event) {
    let data = { title: '⚽ Fußball-Alarm', body: 'Es gibt ein neues Update!' };
    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data.body = event.data.text();
        }
    }

    const options = {
        body: data.body,
        // Generiert ein sauberes Icon mit deinen Initialen JS
        icon: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="12" fill="%231f242d"/><text x="32" y="42" font-size="28" font-weight="bold" fill="%23f0f6fc" text-anchor="middle" font-family="sans-serif">JS</text></svg>',
        badge: 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="64" height="64"><rect width="64" height="64" rx="12" fill="%231f242d"/><text x="32" y="42" font-size="28" font-weight="bold" fill="%23f0f6fc" text-anchor="middle" font-family="sans-serif">JS</text></svg>',
        vibrate: [200, 100, 200]
    };

    event.waitUntil(
        self.registration.showNotification(data.title, options)
    );
});

self.addEventListener('notificationclick', function(event) {
    event.notification.close();
    event.waitUntil(
        clients.openWindow('./')
    );
});
