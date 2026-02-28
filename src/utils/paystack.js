export function openPaystackPopup({ email, amount, onSuccess, onClose }) {
  console.log("Paystack setup:", {
    email,
    amount: amount * 100,
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
  });

  const handler = window.PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email,
    amount: amount * 100, // converts naira to kobo
    onSuccess: (response) => {
      onSuccess(response.reference);
    },
    onClose,
  });

  handler.openIframe();
}
