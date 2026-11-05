# MongoDB CRUD: Contact List

Practising MongoDB CRUD operations (**C**reate, **R**ead, **U**pdate, **D**elete) on a `contact` database with a `contactlist` collection.

- `contact.js`: every command, in order, with comments
- `screenshots/`: the result of each step

## How to run it

1. Install **MongoDB Community Server** (https://www.mongodb.com/try/download/community) and **mongosh**, the MongoDB Shell (https://www.mongodb.com/try/download/shell).
2. Open a terminal and start the shell:
   ```
   mongosh
   ```
3. Type or paste each command below, one step at a time.

You can also use **MongoDB Compass**: connect to `mongodb://localhost:27017` and open the **_MONGOSH** tab at the bottom.

## Steps

| # | Task | Command | Screenshot |
|---|------|---------|-----------|
| 1 | Create the database and collection, insert the 5 contacts | `use contact`, `db.createCollection("contactlist")`, `db.contactlist.insertMany([...])` | [01-create](screenshots/01-create.png) |
| 2 | Display all the contacts | `db.contactlist.find()` | [02-display-all](screenshots/02-display-all.png) |
| 3 | Display one person using his ID | `db.contactlist.findOne({ _id: ObjectId("...") })` | [03-find-by-id](screenshots/03-find-by-id.png) |
| 4 | Contacts with age > 18 | `db.contactlist.find({ age: { $gt: 18 } })` | [04-age-over-18](screenshots/04-age-over-18.png) |
| 5 | Age > 18 and a name containing "ah" | `db.contactlist.find({ age: { $gt: 18 }, $or: [{ first_name: /ah/i }, { last_name: /ah/i }] })` | [05-age-over-18-and-ah](screenshots/05-age-over-18-and-ah.png) |
| 6 | Change "Kefi Seif" to "Kefi Anis" | `db.contactlist.updateOne({ last_name: "Kefi", first_name: "Seif" }, { $set: { first_name: "Anis" } })` | [06-update-kefi](screenshots/06-update-kefi.png) |
| 7 | Delete the contacts aged under 5 | `db.contactlist.deleteMany({ age: { $lt: 5 } })` | [07-delete-under-5](screenshots/07-delete-under-5.png) |
| 8 | Display all the contacts again | `db.contactlist.find()` | [08-display-all-final](screenshots/08-display-all-final.png) |

## Notes

- **Step 3:** every document gets a unique `_id` when it's inserted. Copy one from the step 2 output and paste it inside `ObjectId("...")`. Your IDs will be different from the ones in the screenshots.
- **Step 5 returns nothing.** No contact's first or last name contains "ah", so an empty result is the correct answer.
- **Step 7** deletes Alex (age 4) and Denzel (age 3), so 3 contacts are left.

## Operators used

| Operator | Meaning |
|---|---|
| `$gt` | greater than |
| `$lt` | less than |
| `$or` | at least one of the conditions is true |
| `$set` | change the value of a field |
| `/ah/i` | regular expression: contains "ah", ignoring upper/lower case |
