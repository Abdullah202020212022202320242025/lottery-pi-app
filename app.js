function joinLottery(event) {
  // منع إعادة تحميل الصفحة
  if (event) event.preventDefault();

  // تحقق من وجود Pi SDK
  if (!window.Pi) {
    alert("يرجى فتح التطبيق من داخل Pi Browser.");
    return;
  }

  // تهيئة SDK
  Pi.init({
    version: "2.0",
    sandbox: false,
  });

  // تنفيذ الدفع
  Pi.createPayment({
    amount: 1,
    memo: "Join Monthly Pi Lottery",
    metadata: { type: "lottery" },
    to: RECEIVER_WALLET,
  }).then(function(payment) {
    alert("✅ تم الاشتراك! معرف العملية: " + payment.txid);
    fetchBalance();
  }).catch(function(err) {
    alert("❌ حدث خطأ أثناء الاشتراك:\n" + err.message);
  });
}
