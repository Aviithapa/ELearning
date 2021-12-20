const router = require("express").Router();
router.get("/", function (res, req) {
  req.send("Hello From Website");
});
module.exports = router;
