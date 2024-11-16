// Carregar saldo do usuário da sessão
window.onload = function() {
    const username = sessionStorage.getItem("currentUser");
    const balance = sessionStorage.getItem("balance");
    
    if (username && balance !== null) {
        // Formatar o saldo com vírgula como separador decimal
        const formattedBalance = parseFloat(balance).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

        // Exibir o saldo e aplicar a cor vermelha se for negativo
        const balanceElement = document.getElementById("balance");
        balanceElement.textContent = formattedBalance;

        if (parseFloat(balance) < 0) {
            balanceElement.style.color = "red";  // Muda a cor para vermelho se saldo for negativo
        } else {
            balanceElement.style.color = "black";  // Mantém a cor preta para saldo positivo
        }
    } else {
        window.location.href = "login.html";  // Redireciona para login caso não haja usuário logado
    }

    // Navegar para a página de extrato
    document.getElementById("viewStatementBtn").addEventListener("click", function() {
        window.location.href = "statement.html";
    });

    // Navegar para a página de Pix
    document.getElementById("makePixBtn").addEventListener("click", function() {
        window.location.href = "pix.html";
    });

    // Navegar para a página de pagamento de boletos
    document.getElementById("payBillsBtn").addEventListener("click", function() {
        window.location.href = "pay-bills.html";
    });

    // Navegar para a página de investimentos
    document.getElementById("loansBtn").addEventListener("click", function() {
        window.location.href = "loans.html";
    });
};
