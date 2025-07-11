const apiKey = 'pekempxh6ermd3el4dwzwau3upaein1ji5a0udim3wsmvfcfblz5eus0wk8gelyi';

window.addEventListener("load", async () => {
  const loginButton = document.getElementById("login-button");
  const balanceContainer = document.getElementById("balance-container");
  const balanceSpan = document.getElementById("balance");

  loginButton.addEventListener("click", async () => {
    try {
      Pi.init({ version: 2, sandbox: true, apiKey });
      const scopes = ['username', 'payments'];
      const result = await Pi.authenticate(scopes);
      loginButton.style.display = "none";
      balanceContainer.style.display = "block";
      balanceSpan.innerText = "0.25";
    } catch (error) {
      alert("Login failed: " + error);
    }
  });

  document.getElementById("buy-ticket").addEventListener("click", () => {
    alert("Ticket purchased successfully!");
  });

  document.getElementById("view-history").addEventListener("click", () => {
    alert("Transaction history is currently empty.");
  });

  // Simulated News Section
  document.getElementById("news-content").innerHTML = `
    <p>🎊 The next lottery draw will be held at 12:00 UTC!</p>
    <p>🌟 Golden Ticket feature now active! Play daily to win extra Pi.</p>
  `;
});