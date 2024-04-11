// Obtém todos os elementos da div navmenu
const navmenuItems = document.querySelectorAll('.navmenu > div');

// Obtém todas as seções
const sections = document.querySelectorAll('.all > div');

// Define uma altura fixa para todas as seções
let maxHeight = 0;
sections.forEach((section) => {
  const sectionHeight = section.offsetHeight;
  if (sectionHeight > maxHeight) {
    maxHeight = sectionHeight;
  }
});
sections.forEach((section) => {
  section.style.height = maxHeight + 'px';
});

// Adiciona um ouvinte de evento de clique a cada elemento da div navmenu
navmenuItems.forEach((item, index) => {
  item.addEventListener('click', () => {
    // Remove a classe ativa de todos os elementos da div navmenu
    navmenuItems.forEach((item) => {
      item.classList.remove('active');
    });

    // Adiciona a classe ativa ao elemento clicado
    item.classList.add('active');

    // Oculta todas as seções
    sections.forEach((section) => {
      section.style.display = 'none';
    });

    // Exibe a seção correspondente ao índice do elemento clicado
    sections[index].style.display = 'flex';
  });
});
