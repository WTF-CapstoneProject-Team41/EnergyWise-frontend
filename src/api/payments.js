import client from "./client";

export const paymentsAPI = {
  verify: (reference) => {
    return client.post("/payments/verify", { reference });
  },
};
