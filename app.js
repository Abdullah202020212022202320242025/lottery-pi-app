const RECEIVER_WALLET = "GCW4WBMEEPMPFKZL2NOUKDJXQCS2NOJPFDKZXXPHFUTXRQXXGSRSQ3WE";

function joinLottery(event) {
  if (event) event.preventDefault();

  if (!window.Pi) {
    alert("❌ يرجى فتح التطبيق من داخل Pi Browser.");
    return;
  }

  Pi.init({
    version: "2.0",
    sandbox: true // ✅ تم تفعيل Testnet هنا
  });

  Pi.createPayment({
    amount: 1,
    memo: "Join Monthly Pi Lottery",
    metadata: { type: "lottery" },
    to: RECEIVER_WALLET,
  }).then(function(payment) {
    alert("✅ تم الاشتراك بنجاح!\nرقم العملية (Testnet): " + payment.txid);
  }).catch(function(err) {
    alert("❌ حدث خطأ أثناء الاشتراك:\n" + err.message);
  });
}
