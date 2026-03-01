export function openPaystackPopup({ email, amount, onSuccess, onClose }) {
  const handler = window.PaystackPop.setup({
    key: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY,
    email,
    amount: amount * 100,
    currency: "NGN",
    ref: `EW_${Date.now()}`,
    callback: (response) => {
      onSuccess(response.reference);
    },
    onClose,
  });
  handler.openIframe();
}
