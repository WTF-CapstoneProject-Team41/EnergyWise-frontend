export function openPaystackPopup({ email, amount, onSuccess, onClose }) {
  const handler = window.PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email,
    amount: amount * 100, // convert naira to kobo
    onSuccess: (response) => {
      // response.reference is what Paystack gives back
      onSuccess(response.reference);
    },
    onClose,
  });

  handler.openIframe();
}
