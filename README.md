```
##Kunskapskontroll 2: Library API
Instruktioner

##För att uppnå Godkänt är kraven att:
- Den ska vara byggd med ramverket Express
- API:et ska ha följande endpoints:
- GET /books - Hämta alla böcker
- GET /books/:id - Hämta en bok
- POST /books - Skapa en bok
- PUT /books/:id - Ändra en bok (full)
- PATCH /books/:id - Ändra en bok (partial)
- DELETE /books/:id - Ta bort en bok
- API:et ska endast ta emot och skicka data i JSON-format
- API:et ska svara med lämpligt meddelande och statuskod om allt gått väl
- API:et ska svara med lämpligt meddelande och statuskod om något går fel, exempelvis om användaren skickar in fel strukturerad data
- API:et ska lagra och läsa data från en SQL-databas
- API:et ska följa MVC-modellen:
Model - Accessar databasen
(View)
Controller - Interagerar med modellen och returnerar responsen till användaren
```

```
##För att uppnå Väl Godkänt behöver du åtminstone implementera punkt 1:
- API:et ska även ha följande routes:
POST /auth/register - Registrera en användare
POST /auth/login - Logga in en användare och svara med en JWT-token
POST /users/lend - Låna ut en bok (authorized route)
POST /users/return - Lämna tillbaka en bok (authorized route)
GET /me - Användarens aktiva lånade böcker och användar-info (authorized route)
- Endpoints för /books ska även innehålla antalet böcker tillgängliga för utlåning
- Skriv en egen logging-middleware som sparar loggar med relevant info i en eller enskilda filer (tidsstämpel, request-metod, route, status)
```

```
###Att tänka på

/user/return & /user/lend
När man gör post request till return och lend ska man skicka ett JSON object med bookens id.
tex {"bookID": 1}.

Put requests till /books/(id) kräver att man skickar in ett json object som tillexempel

{"title": "Hammarby är bäst",
"author": "Tim G Tegman", 
"published": 1889,
"genre":  "Drama",
"amount": 2000}

Ett patch request kräver minst en av dessa men kan ta fler på samma gång.

  "dependencies": {
    "body-parser": "^1.20.0",
    "cors": "^2.8.5", (användes ej)
    "dotenv": "^16.0.1",
    "express": "^4.18.1",
    "jsonwebtoken": "^8.5.1",
    "md5": "^2.3.0",
    "morgan": "^1.10.0",
    "nodemon": "^2.0.16",
    "sqlite3": "^5.0.8"
  }

  Det finns två typer av loggar då jag ville testa detta på olika sätt.
```