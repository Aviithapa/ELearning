const router = require("express").Router();

router.use("/auth", require("./authentication/auth"));
router.use("/site-setting", require("./general/setting"));
router.use("/dashboard", require("./website/general"));

module.exports = router;
