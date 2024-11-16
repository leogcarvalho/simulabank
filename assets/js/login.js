// User data for login validation
const users = {
    user1: { password: "pass1", balance: 5000 },
    user2: { password: "pass2", balance: 300 },
    user3: { password: "pass3", balance: -20000 }
};

// Login form validation
document.getElementById("loginForm").addEventListener("submit", function (e) {
    e.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    if (users[username] && users[username].password === password) {
        // Save user info in session storage
        sessionStorage.setItem("currentUser", username);
        sessionStorage.setItem("balance", users[username].balance);

        // Redirect to home page
        window.location.href = "home.html";
    } else {
        errorMessage.textContent = "Usuário ou senha incorretos!";
    }
});

window.onload = function() {
    // Dados de exemplo de login e transações
    const users = [
        { username: "usuario1", password: "senha1", balance: 5000, transactions: [
            { date: "01/11/2024", description: "Depósito Inicial", amount: 5000 },
            { date: "05/11/2024", description: "Compra no Mercado", amount: -200 },
            { date: "10/11/2024", description: "Transferência para João", amount: -1500 },
            { date: "11/11/2024", description: "Pagamento de Boleto", amount: -300 },
            { date: "11/11/2024", description: "Recebimento de Transferência", amount: 2000 }
        ]},
        { username: "usuario2", password: "senha2", balance: 300, transactions: [
            { date: "01/11/2024", description: "Depósito Inicial", amount: 300 },
            { date: "05/11/2024", description: "Pagamento de Conta", amount: -50 },
            { date: "10/11/2024", description: "Compra no Supermercado", amount: -100 },
            { date: "11/11/2024", description: "Recebimento de Salário", amount: 500 },
            { date: "11/11/2024", description: "Pagamento de Boleto", amount: -50 }
        ]},
        { username: "usuario3", password: "senha3", balance: -20000, transactions: [
            { date: "01/11/2024", description: "Empréstimo Bancário", amount: 10000 },
            { date: "05/11/2024", description: "Compra de Equipamentos", amount: -5000 },
            { date: "10/11/2024", description: "Pagamento de Dívidas", amount: -5000 },
            { date: "11/11/2024", description: "Compra na Loja", amount: -1000 },
            { date: "11/11/2024", description: "Pagamento Parcial", amount: -2000 }
        ]}
    ];

    // Armazenar transações de exemplo na sessão
    sessionStorage.setItem("users", JSON.stringify(users));
    sessionStorage.setItem("currentUser", "usuario1");  // Definindo usuário logado inicialmente
    sessionStorage.setItem("balance", users[0].balance);  // Definindo saldo do usuário logado
    sessionStorage.setItem("transactions", JSON.stringify(users[0].transactions));  // Armazenando transações do usuário logado
};

