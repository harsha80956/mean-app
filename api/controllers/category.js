const Category = require("../models/category");

module.exports.categoryRead = (req, res) => {
  // If no user ID exists in the JWT return a 401
  if (!req.payload._id) {
    res.status(401).json({
      message: "UnauthorizedError: private profile",
    });
  } else {
    // Otherwise continue
    Category.find({ user: req.payload._id}).exec(function (
      err,
      categories
    ) {
      res.status(200).json(categories);
    });
  }
};

module.exports.categoryWrite = async (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({
      message: "UnauthorizedError: private profile",
    });
  } else {
    const category = new Category({
      category: req.body.category,
      user: req.payload._id,
    });
    const createdCategory = await category.save();
    res
      .status(201)
      .json({ message: "New Category Created", category: createdCategory });
  }
};

module.exports.categoryDelete = async (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({
      message: "UnauthorizedError: private profile",
    });
  } else {
    const category = await Category.findById(req.params.id);
    if (category) {
      const deleteCategory = await category.remove();
      res.send({ message: "category Deleted" });
    } else {
      res.status(404).send({ message: "category Not Found" });
    }
  }
};

module.exports.categoryEdit = async (req, res) => {
  if (!req.payload._id) {
    res.status(401).json({
      message: "UnauthorizedError: private profile",
    });
  } else {
    var query = { _id: req.body._id };
    category.findOneAndUpdate(
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
