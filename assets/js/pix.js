document.getElementById("pix-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura os valores inseridos no formulário
    const pixKey = document.getElementById("pix-key").value;
    let amount = document.getElementById("pix-amount").value.replace(",", ".");

    // Converte o valor para número
    amount = parseFloat(amount);

    // Definir o limite de Pix
    const PIX_LIMIT = 3000.00;

    // Verifica se o valor do Pix é maior que o limite
    if (amount > PIX_LIMIT) {
        // Exibe mensagem de erro
        document.getElementById("error-message").style.display = "block";
        return; // Impede o envio do Pix
    }

    // Esconde a mensagem de erro se o valor for válido
    document.getElementById("error-message").style.display = "none";

    // Verifica se os dados são válidos
    if (pixKey && amount && !isNaN(amount) && amount > 0) {
        // Recupera o saldo atual do usuário
        let balance = parseFloat(sessionStorage.getItem("balance"));

        // Subtrai o valor do saldo
        balance -= amount;

        // Atualiza o saldo no sessionStorage
        sessionStorage.setItem("balance", balance);

        // Recupera o extrato de transações e adiciona uma nova transação
        let transactions = JSON.parse(sessionStorage.getItem("transactions"));
        transactions.push({
            date: new Date().toLocaleDateString(),
            description: `Pix para ${pixKey}`,
            amount: -amount
        });

        // Atualiza as transações no sessionStorage
        sessionStorage.setItem("transactions", JSON.stringify(transactions));

        // Redireciona o usuário para a página de sucesso
        window.location.href = "success.html";
    } else {
        alert("Por favor, insira uma chave Pix válida e um valor correto.");
    }
});
