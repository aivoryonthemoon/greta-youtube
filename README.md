# Greta De Santi

Sito: https://itsladysd.com

Dominio gestito su Cloudflare; hosting statico su GitHub Pages. DNS: quattro record A GitHub Pages sul dominio principale e CNAME www verso aivoryonthemoon.github.io. Il file source/public/CNAME conserva il dominio nelle build future.

Landing responsive con Telegram come azione principale, quattro social, foto ingrandite localmente con Real-ESRGAN 4x e video YouTube.

## Modifiche

Il sorgente React/Vite si trova in `source/`. Eseguire `npm ci` e `npm run dev` da quella cartella. `npm run build` genera `source/dist/`: copiarne il contenuto nella radice del repository per pubblicarlo con GitHub Pages (main, root). Non pubblicare node_modules o i master locali.

Motion, React Bits, shadcn/ui e React Three Fiber sono integrati. Le licenze dei componenti copiati si trovano in source/src/components.

Il totale di circa 830 mila follower è una somma arrotondata dei conteggi del 13 novembre 2026, non un contatore live o un numero di persone uniche.

Build e asset verificati. Test Playwright predisposti in `source/tests`, non eseguiti nel browser nella sessione di realizzazione. Verifica visiva su dispositivi reali da completare.
