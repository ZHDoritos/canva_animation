// Configuração do canvas
const canvas = document.getElementById('meuCanvas');
const ctx = canvas.getContext('2d');

// Definir tamanho do canvas
canvas.width = 500;
canvas.height = 500;

// Definir as propriedades do círculo
let x = canvas.width / 2;
let y = canvas.height / 2;
let raio = 50;
let dx = 2; // Velocidade horizontal
let dy = 2; // Velocidade vertical
let cor = 'blue'; // Cor inicial do círculo

function desenhaCirculo() {
    ctx.beginPath();
    ctx.arc(x, y, raio, 0, Math.PI * 2, false);
    ctx.fillStyle = cor;
    ctx.fill();
    ctx.closePath();
}

function anima() {
    // Limpa o canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Desenha o círculo
    desenhaCirculo();

    // Atualiza a posição
    x += dx;
    y += dy;

    // Inverte a direção quando atinge a borda
    if (x + raio > canvas.width || x - raio < 0) {
        dx = -dx;
    }
    if (y + raio > canvas.height || y - raio < 0) {
        dy = -dy;
    }

    // Requere a próxima frame de animação
    requestAnimationFrame(anima);
}

// Adiciona um evento de clique no canvas para mudar a cor do círculo
canvas.addEventListener('click', (e) => {
    // Obtém a posição do clique em relação ao canvas
    const rect = canvas.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const clickY = e.clientY - rect.top;

    // Verifica se o clique foi dentro do círculo
    const dist = Math.sqrt((clickX - x) ** 2 + (clickY - y) ** 2);
    if (dist <= raio) {
        // Muda a cor para uma cor aleatória
        cor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
});

// Inicia a animação
anima();
