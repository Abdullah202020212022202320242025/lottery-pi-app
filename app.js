// app.js

// إعدادات Pi SDK
const PI_API_KEY = "usuxvv3cscc3gevmnj9cvay7ue3hi032pnlg0tblims1coroivqyqervgy5mksmt";
const RECEIVER_WALLET = "GCW4WBMEEPMPFKZL2NOUKDJXQCS2NOJPFDKZXXPHFUTXRQXXGSRSQ3W";

function joinLottery() {
  alert("جارٍ التحقق من الاتصال بـ Pi Network...");

  if (!window.Pi) {
    alert("يرجى فتح التطبيق من داخل Pi Browser.");
    return;
  }

  Pi.init({
    version: "2.0",
    sandbox: false,
  });

  Pi.createPayment({
    amount: 1,
    memo: "Join Monthly Pi Lottery",
    metadata: { type: "lottery" },
    to: RECEIVER_WALLET,
  }).then(function(payment) {
    alert("✅ تم الاشتراك بنجاح! المعاملة: " + payment.txid);
    fetchBalance(); // تحديث الرصيد
  }).catch(function(err) {
    alert("❌ فشل في إتمام العملية:\n" + err.message);
  });
}

function fetchBalance() {
  // عرض رصيد وهمي مؤقت (لأننا لا نملك اتصال فعلي بـ Pi Wallet هنا)
  document.getElementById("balance").innerText = "1 Pi";
}

// قائمة فائزين وهميين مؤقتة
const winners = [
  "Ahmed E. - 70 Pi",
  "Mona S. - 70 Pi",
  "Ziad M. - 70 Pi",
  "Sara H. - 70 Pi",
  "Tarek B. - 70 Pi",
  "Nour F. - 70 Pi",
  "Yasser K. - 70 Pi",
  "Laila N. - 70 Pi",
  "Mostafa A. - 70 Pi",
  "Heba W. - 70 Pi"
];

function showWinners() {
  const list
