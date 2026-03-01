import client from "./client";

export const paymentsAPI = {
  verify: (reference, units, amount) =>
    client.post("/energy-purchases", {
      units_purchased: units,
      amount_paid: amount,
      source: "PAYSTACK",
      token_id: reference,
    }),
};
