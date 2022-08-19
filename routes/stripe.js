const router = require("express").Router();
const stripe = require("stripe")(
  "sk_test_51LXPi9SJ692gsp5iKkFMHCCIbmmHTv7XoKCT2d2auN9MVEXKBkHvOHhtrMzPKvXmlJeOtHroUcMN84NMRjD2AHm500yUo45k2E"
);

router.post("/payment", (req, res) => {
  stripe.charges.create(
    {
      source: req.body.tokenId,
      amount: req.body.amount,
      currency: "usd",
    },
    (stripeErr, stripeRes) => {
      if (stripeErr) {
        res.status(500).json(stripeErr);
      } else {
        res.status(200).json(stripeRes);
      }
    }
  );
});

module.exports = router;
