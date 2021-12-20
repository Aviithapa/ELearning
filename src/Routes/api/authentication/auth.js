const router = require("express").Router();

router.get("/", function (res, req) {
  req.send("Hello World");
});
module.exports = router;
