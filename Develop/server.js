//imports
const fs = require("fs");
const express = require("express");

const { notes } = require("./db/db.json");

const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

const PORT = process.env.PORT || 3001;
const app = express();

//access to the public directory
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
//appends /api in front of the apiRouted routes
app.use("/api", apiRoutes);
app.use("/", htmlRoutes);

//listening on env port or port 3001 then displays in console what port it is on.
app.listen(PORT, () => {
  console.log(`API server now on port ${PORT}`);
});
