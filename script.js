document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-contato');

    form.addEventListener('submit', (e) => {
        // Impede o comportamento padrão de recarregar a página
        e.preventDefault();

        // Pega os valores digitados pelo usuário
        const nome = document.getElementById('nome').value;
        const email = document.getElementById('email').value;

        // Validação simples ou feedback visual
        if (nome && email) {
            alert(`Obrigado pelo contato, ${nome}! Juntos faremos um agro mais forte e sustentável. Em breve responderemos no e-mail: ${email}.`);
            
            // Limpa o formulário
            form.reset();
        }
    });
});