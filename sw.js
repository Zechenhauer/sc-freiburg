// Sauberer Service Worker für Push-Benachrichtigungen
self.addEventListener('push', function(event) {
    let data = { 
        title: '⚽ Bundesliga-Alarm', 
        body: 'Es gibt ein neues Update!' 
    };

    if (event.data) {
        try {
            data = event.data.json();
        } catch (e) {
            data.body = event.data.text();
        }
    }

    const options = {
        body: data.body,
        icon: 'https://raw.githubusercontent.com/Zechenhauer/sc-freiburg/main/assets/vereinslogos/freiburg.png',
        badge: 'https://raw.githubusercontent.com/Zechenhauer/sc-freiburg/main/assets/vereinslogos/freiburg.png',
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
