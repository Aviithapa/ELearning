const router = require("express").Router();
router.get("/", function (res, req) {
  req.send("Hello From Setting");
});
module.exports = router;
