document.getElementById('bill-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio normal do formulário

    // Obtem os dados do formulário
    const barcode = document.getElementById('barcode').value;
    const amount = parseFloat(document.getElementById('bill-amount').value.replace(',', '.'));

    // Verifica se o valor é válido
    if (isNaN(amount) || amount <= 0) {
        alert('Valor do boleto inválido.');
        return;
    }

    // Subtrai o valor do saldo do usuário
    let balance = parseFloat(sessionStorage.getItem("balance"));
    balance -= amount; // Subtrai o valor pago

    // Atualiza o saldo do usuário no sessionStorage
    sessionStorage.setItem('balance', balance);

    // Adiciona a transação no extrato do usuário
    let transactions = JSON.parse(sessionStorage.getItem("transactions"));
    transactions.push({
        date: new Date().toLocaleDateString(),
        description: "Pagamento de Boleto",
        amount: -amount
    });
    sessionStorage.setItem("transactions", JSON.stringify(transactions));

    // Redireciona para a página de sucesso
    window.location.href = 'success.html';
});
