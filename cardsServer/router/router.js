const express = require("express");
const cardsRestController = require("../cards/routes/cardsRestController");
const { handleError } = require("../utils/handleErrors");
const router = express.Router();

router.use("/cards", cardsRestController);

router.use((req, res) => {
  handleError(res, 404, "Path not found");
});

module.exports = router;
