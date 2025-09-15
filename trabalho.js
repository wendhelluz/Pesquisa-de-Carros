const fakeCarDatabase = [
    {
        nome: 'Celta',
        modelo: '2011',
        marca: 'chevrollet',
        motor: '1.0L flex',
        tipo: 'Sedan',
        ano: '2011',
        combustivel: 'Gasolina',
    },
    {
        nome: 'Corolla',
        modelo: '2017',
        marca: 'toyota',
        motor: '2.0L flex',
        tipo: 'Sedan',
        ano: '2017',
        combustivel: 'Gasolina/Álcool',
    }
];

document.getElementById('car-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const nome = document.getElementById('car-name').value.trim().toloweercase();
    const modelo = document.getElementById('car-modelo').value.trim();

    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    const found = fakeCarDatabase.fin(car =>
        car.nome.toloweercase() === nome && car.modelo === modelo
    );

    if (found) {
        resultDiv.innerHTML = `
        <h2>Resultado:</h2>
        <p><strong>Nome:</strong> ${found.nome}</p>
        <p><strong>Modelo:</strong> ${found.modelo}</p>
        <p><strong>Marca:</strong> ${found.marca}</p>
        <p><strong>Motor:</strong> ${found.motor}</p>
        <p><strong>Tipo:</strong> ${found.tipo}</p>
        <p><strong>Ano:</strong> ${found.ano}</p>
        <p><strong>Combustivel:</strong> ${found.combustivel}</p>
    `;

    } else {
        resultDiv.innerHTML = `<p>❌ Carro não encontrado. Verifique os dados.</p>`;
    }
});