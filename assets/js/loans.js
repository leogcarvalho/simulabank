document.addEventListener("DOMContentLoaded", function () {
    const loanForm = document.getElementById("loan-form");
    const loanMessage = document.getElementById("loan-message");
    const loanSubmitButton = document.getElementById("loan-submit");

    // Obtém o usuário atual do sessionStorage
    const currentUser = sessionStorage.getItem("currentUser");

    // Verifica se há dados armazenados para o usuário atual
    let userLoans = JSON.parse(sessionStorage.getItem("userLoans")) || {};
    const hasLoan = userLoans[currentUser]?.hasLoan || false;

    if (hasLoan) {
        loanMessage.textContent = "Você já tem um empréstimo contratado em andamento. Novos empréstimos não estão disponíveis.";
        loanForm.style.display = "none";
    } else {
        loanMessage.textContent = "Selecione um valor para contratar seu empréstimo pré-aprovado.";
        loanForm.style.display = "block";
    }

    // Lógica para contratar empréstimo
    loanSubmitButton.addEventListener("click", function () {
        const selectedLoan = document.querySelector('input[name="loan"]:checked');

        if (!selectedLoan) {
            alert("Por favor, selecione um valor de empréstimo.");
            return;
        }

        const loanAmount = parseFloat(selectedLoan.value);

        // Confirmação do empréstimo
        const confirmLoan = confirm(`Tem certeza que deseja contratar um empréstimo de R$ ${loanAmount.toFixed(2).replace('.', ',')}?`);

        if (confirmLoan) {
            // Atualiza o saldo do usuário
            let balance = parseFloat(sessionStorage.getItem("balance")) || 0;
            balance += loanAmount;
            sessionStorage.setItem("balance", balance);

            // Atualiza o status de empréstimo para o usuário atual
            userLoans[currentUser] = { hasLoan: true };
            sessionStorage.setItem("userLoans", JSON.stringify(userLoans));

            // Adiciona o empréstimo ao extrato do usuário
            let transactions = JSON.parse(sessionStorage.getItem("transactions")) || [];
            transactions.push({
                date: new Date().toLocaleDateString(),
                description: "Empréstimo contratado",
                amount: loanAmount
            });
            sessionStorage.setItem("transactions", JSON.stringify(transactions));

            // Redireciona para a página de sucesso
            window.location.href = "success.html";
        }
    });
});
