// Service Worker чек-листа офиса RemGruz #1.
// ВНИМАНИЕ: index.html принудительно отключает SW при каждой загрузке
// (unregister + очистка кэшей), чтобы обновления доходили мгновенно —
// та же схема, что в чек-листе склада. Файл оставлен для совместимости
// с manifest и на случай возврата офлайн-кэширования.
self.addEventListener('install', e => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(clients.claim()));
self.addEventListener('fetch', e => {}); // network-only
