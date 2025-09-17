# Rendszerterv


## Bevezetés
Az app egy egyszerű blogok felvitelére alkalmas React, express és mysql használatával.

## Architektúra

Beviteli mezőben blog szövegét beírom, és kiválasztom a típust, gombnyomásra felviszi adatb-be a blog táblába.


CRUD műveletek:

getAllBlogs → Összes blog lekérése

createBlog → Új blog létrehozása

távlati terv:
getBlogById → Egy blog lekérése ID alapján

updateBlog → Blog frissítése

deleteBlog → Blog törlése


Frontend (React)
     │
     ▼
HTTP Request (GET/POST/PUT/DELETE)
     │
     ▼
Backend (Express)
     │
     ▼
MySQL (CRUD műveletek)
     │
     ▼
Válasz vissza a Frontend-nek

## Technológia
Express, Mysql
React

## Adatbázis
blog tábla:
- blog_id
- blog_szoveg
- blog_datum
- blog_becenev
- blog_tipus

tipus tábla:
- tipus_id
- tipus_nev