const mongoose = require("mongoose");

module.exports = (redirectUrl = "/") => {
  return async (req, res, next) => {
    const paramId = ["id", "place_id", "review_id"].find(
      (param) => req.params[param]
    );

    if (!paramId) {
      next();
    } else {
      const id = req.params[paramId];
      if (!mongoose.Types.ObjectId.isValid(id)) {
        req.flash("error_msg", "Invalid Id / Data not found");
        return res.redirect(redirectUrl);
      }
      next();
    }
  };
};
