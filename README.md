# Flat 3D

3D-модель квартиры (зал и кухня), собранная по фото телефона.

- `apartment/` — зал и кухня вместе. Откройте `apartment/index.html` через сервер.
- `living-room/` — первая версия, только зал.
- `engine/` — копия движка room-from-photos (навык skylarkitchen-skills) с одной правкой: `box` можно поднять над полом (`mount`).

## Как открыть

**GitHub Pages.** Settings → Pages → Deploy from a branch, ветка `claude/skills-3d-apartment-creation-tsmcdx`, папка `/ (root)`. Через пару минут модель будет по адресу `https://<аккаунт>.github.io/<репозиторий>/apartment/`.

**Локально.** В папке `apartment/` выполните `python3 -m http.server 8000` и откройте `http://localhost:8000/index.html`. Двойной клик по файлу не подойдёт: текстуры не загрузятся. Нужен интернет: three.js подгружается с `cdn.jsdelivr.net`.

Все размеры оценены по фото, их список в блоке «Estimates» на странице и в `apartment/config.js`.

## Пересборка

`python3 engine/build.py apartment` собирает `apartment/index.html` из `apartment/config.js`.
