// app.js

// إعدادات Pi SDK
const PI_API_KEY = "usuxvv3cscc3gevmnj9cvay7ue3hi032pnlg0tblims1coroivqyqervgy5mksmt";
const RECEIVER_WALLET = "GCW4WBMEEPMPFKZL2NOUKDJXQCS2NOJPFDKZXXPHFUTXRQXXGSRSQ3WE"; // ← المحفظة الصحيحة

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

  // تنفيذ عملية الدفع
  Pi.createPayment({
    amount: 1,
    memo: "Join Monthly Pi Lottery",
    metadata: { type: "lottery" },
    to: RECEIVER_WALLET,
  }).then(function(payment) {
    alert("✅ تم الاشتراك بنجاح! معرف المعاملة: " + payment.txid);
    fetchBalance(); // تحديث الرصيد (وهمي)
  }).catch(function(err) {
    alert("❌ فشل الاشتراك:\n" + err.message);
  });
}

function fetchBalance() {
  // مؤقتًا: رصيد وهمي للعرض فقط
  document.getElementById("balance").innerText = "1 Pi";
}

// قائمة فائزين وهمية
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
  const list = document.getElementById("winners-list");
  list.innerHTML = "";
  winners.forEach(name => {
    const li = document.createElement("li");
    li.textContent = name;
    list.appendChild(li);
  });
}

// عند تحميل الصفحة
window.onload = function () {
  fetchBalance();
  showWinners();
};
