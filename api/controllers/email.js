const Email = require("../models/emailid");

module.exports.emailRead = (req, res) => {
  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      message: "UnauthorizedError: private profile",
    });
  } else {
    // Otherwise continue
    Email.find({ category: req.params.id }).exec(function (
      err,
      emails
    ) {
      res.status(200).json(emails);
    });
  }
};

module.exports.emailWrite = async (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({
      message: "UnauthorizedError: private profile",
    });
  } else {
    const email = new Email({
      email: req.body.email,
      user: req.payload._id,
      category: req.body.category
    });
    const createdemail = await email.save();
    res.status(201).json({ message: "New email Created", order: createdemail });
  }
};

module.exports.emailDelete = async (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({
      message: "UnauthorizedError: private profile",
    });
  } else {
    const email = await Email.findById(req.params.id);
    if (email) {
      const deleteemail = await email.remove();
      res.send({ message: "email Deleted" });
    } else {
      res.status(404).send({ message: "email Not Found" });
    }
  }
};

module.exports.emailEdit = async (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({
      message: "UnauthorizedError: private profile",
    });
  } else {
    var query = { _id: req.body._id };
    Email.findOneAndUpdate(
      query,
      req.newData,
      { upsert: true },
      function (err, doc) {
        if (err) return res.send(500, { error: err });
        return res.send("Succesfully saved.");
      }
    );
  }
};
