const mongoose = require("mongoose");

(async () => {
  try {
    await mongoose.connect("mongodb+srv://kumarbhavya1605_db_user:TpxzEviKKfwJWUw3@expensetracker.2h8cgb3.mongodb.net/expenseDB?retryWrites=true&w=majority&ipv6=false");
    console.log("MongoDB connected manually ✅");
    process.exit(0);
  } catch (err) {
    console.error("MongoDB connection error ❌❌", err);
    process.exit(1);
  }
})();
