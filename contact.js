// =====================================================
// MongoDB CRUD checkpoint
// Run in mongosh, one step at a time (or the whole file)
// =====================================================

// 1. Create (switch to) the "contact" database.
//    MongoDB creates it for real when the first document is saved.
use("contact");

// 2. Create the "contactlist" collection
db.createCollection("contactlist");

// 3. Insert the 5 contacts (CREATE)
db.contactlist.insertMany([
  { last_name: "Ben", first_name: "Moris", email: "ben@gmail.com", age: 26 },
  { last_name: "Kefi", first_name: "Seif", email: "kefi@gmail.com", age: 15 },
  { last_name: "Emilie", first_name: "brouge", email: "emilie.b@gmail.com", age: 40 },
  { last_name: "Alex", first_name: "brown", age: 4 },
  { last_name: "Denzel", first_name: "Washington", age: 3 },
]);

// 4. Display all the contacts (READ)
db.contactlist.find();

// 5. Display one person using his ID.
//    Copy an _id from step 4 and paste it inside ObjectId("..."), e.g.:
//    db.contactlist.findOne({ _id: ObjectId("6729f0c1a2b3c4d5e6f7a8b9") });
//    Here we look up Ben's id first, so the file runs on its own:
const benId = db.contactlist.findOne({ last_name: "Ben" })._id;
db.contactlist.findOne({ _id: benId });

// 6. Display the contacts with age > 18   ($gt = greater than)
db.contactlist.find({ age: { $gt: 18 } });

// 7. Display the contacts with age > 18 AND a name containing "ah".
//    /ah/i is a regular expression: "ah" anywhere in the text, any case.
//    $or checks both the first name and the last name.
db.contactlist.find({
  age: { $gt: 18 },
  $or: [{ first_name: /ah/i }, { last_name: /ah/i }],
});

// 8. Change "Kefi Seif" to "Kefi Anis" (UPDATE)
db.contactlist.updateOne(
  { last_name: "Kefi", first_name: "Seif" },
  { $set: { first_name: "Anis" } }
);

// 9. Delete the contacts aged under 5 (DELETE)   ($lt = less than)
db.contactlist.deleteMany({ age: { $lt: 5 } });

// 10. Display all the contacts again
db.contactlist.find();
