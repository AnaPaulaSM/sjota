let currentIndex = 0;
const images = document.getElementById('carousel-images');
const totalImages = images.children.length;
const descricao = document.getElementById('descricao');
const textos = [
  "Fluxo 1: Automação de relatórios financeiros",
  "Fluxo 2: Integração de sistemas ERP",
  "Fluxo 3: Gestão automatizada de estoques",
  "Fluxo 4: Atendimento inteligente via chatbot",
  "Fluxo 5: Monitoramento de indicadores de performance"
];

function showSlide(index) {
  if (index >= totalImages) currentIndex = 0;
  else if (index < 0) currentIndex = totalImages - 1;
  else currentIndex = index;

  images.style.transform = `translateX(${-100 * currentIndex}%)`;
  descricao.textContent = textos[currentIndex];
}

function nextSlide() {
  showSlide(currentIndex + 1);
}

function prevSlide() {
  showSlide(currentIndex - 1);
}

setInterval(nextSlide, 5000);
