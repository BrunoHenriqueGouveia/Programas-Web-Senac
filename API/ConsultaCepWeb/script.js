function consultarCEP() {
    var cep = document.getElementById("cepInput").value;
    var url = ` https://viacep.com.br/ws/${cep}/json/`;

    fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error('Erro ao consultar o CEP');
            }
            return response.json();
        })
        .then(data => {
            exibirResultado(data);
        })
        .catch(error => {
            console.error('Erro:', error);
        });
}

function exibirResultado(data) {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = `
        <h2>Informações do CEP:</h2>
        <p><strong>CEP:</strong> ${data.cep}</p>
        <p><strong>Logradouro:</strong> ${data.logradouro}</p>
        <p><strong>Complemento:</strong> ${data.complemento}</p>
        <p><strong>Bairro:</strong> ${data.bairro}</p>
        <p><strong>Localidade:</strong> ${data.localidade}</p>
        <p><strong>UF:</strong> ${data.uf}</p>
        <p><strong>IBGE:</strong> ${data.ibge}</p>
        <p><strong>GIA:</strong> ${data.gia}</p>
        <p><strong>DDD:</strong> ${data.ddd}</p>
        <p><strong>SIAFI:</strong> ${data.siafi}</p>
    `;
}