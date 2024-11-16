window.onload = function() {
    const username = sessionStorage.getItem("currentUser");
    const balance = sessionStorage.getItem("balance");
    const transactions = JSON.parse(sessionStorage.getItem("transactions") || "[]");

    if (username && balance !== null) {
        // Formatar o saldo com vírgula como separador decimal
        const formattedBalance = parseFloat(balance).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
        document.getElementById("balance").textContent = formattedBalance;

        // Carregar transações
        const transactionsList = document.getElementById("transactions-list");
        transactions.forEach(transaction => {
            const listItem = document.createElement("li");
            listItem.textContent = `${transaction.date} - ${transaction.description} - R$ ${transaction.amount.toFixed(2).replace('.', ',')}`;
            transactionsList.appendChild(listItem);
        });
    } else {
        window.location.href = "login.html";
    }

    // Voltar para a home
    document.getElementById("backBtn").addEventListener("click", function() {
        window.location.href = "home.html";
    });
};
