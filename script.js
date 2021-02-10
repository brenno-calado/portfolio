const createList = (array, list) => {
  array.forEach((index) => {
    let listItem = document.createElement('li');
    listItem.innerText = index;
    list.appendChild(listItem);
  });
};

function createMainTitle() {
  const mainTitle = document.createElement('div');
  mainTitle.className = 'main-title';
  document.body.appendChild(mainTitle);
  const heading = document.createElement('h1');
  heading.className = 'title-orange';
  heading.id = 'titulo';
  heading.innerText = 'Brenno Calado Vieira de Melo Nascimento';
  mainTitle.appendChild(heading);
}

function createHeader() {
  const header = document.createElement('header');
  document.body.appendChild(header);
}

function uploadProfileImage() {
  const header = document.querySelector('header');
  const mainPicture = document.createElement('div');
  mainPicture.className = 'main-picture';
  header.appendChild(mainPicture);
  const profileImage = document.createElement('img');
  profileImage.src = 'perfil_insta.jpg';
  profileImage.alt = 'foto do criador do site';
  mainPicture.appendChild(profileImage);
}

function createDescription() {
  const header = document.querySelector('header');
  const description = document.createElement('div');
  description.className = 'description';
  header.appendChild(description);
  const subtitle = document.createElement('p');
  subtitle.innerText = 'Brasileiro 🇧🇷 criado pelos becos e ruas do Recife, Pernambuco';
  description.appendChild(subtitle);
  const unorderedList = document.createElement('ul');
  description.appendChild(unorderedList);
  const joblist = ['Bacharel em Geografia por ser apaixonado desde pequeno pelo Google Earth 🌎❤️',
  'Fiz pesquisas e mapeamentos sobre o mercado imobiliário do centro histórico do Recife 🏙️🔍',
  'Participei da fundação da empresa júnior MapGeo na UFPE 🗺️',
  'Fiz coleta e analise de dados para uma pesquisa encomendada pela 99 🚕'];
  createList(joblist, unorderedList);
}

function createSkills() {
  const skills = document.createElement('div');
  skills.className = 'skills';
  document.body.appendChild(skills);
  const skillsTitle = document.createElement('h2');
  skillsTitle.className = 'title-orange';
  skillsTitle.innerText = 'Skills';
  skills.appendChild(skillsTitle);
  const unorderedList = document.createElement('ul');
  unorderedList.className = 'skills';
  skills.appendChild(unorderedList);
  let skillsList = ['Inglês','HTML','CSS','Javascript','Git','Bash','QGIS','Excel','Inkscape','Gimp'];
  createList(skillsList, unorderedList);
}

function createProjects() {
  const projects = document.createElement('div');
  projects.className = 'projects';
  document.body.appendChild(projects);
  const heading = document.createElement('h2');
  heading.className = 'title-orange';
  heading.innerText = 'Projects';
  projects.appendChild(heading);
  const projectList = {
    memeGenerator: 'projects/project-meme-generator/index.html',
    pixelsArt: 'projects/project-pixels-art/index.html',
    toDoList: 'projects/project-todo-list/index.html',
    colorGuess: 'projects/project-color-guess/index.html'
  }
  Object.entries(projectList).forEach((entry) => {
    let link = document.createElement('a');
    link.className = 'project-link';
    link.target = '_blank';
    link.href = entry[1];
    link.innerText = `Project ${entry[0]}`;
    projects.appendChild(link);
  })
}

function createLinks() {
  const blogs = document.createElement('div');
  blogs.className = 'blogs';
  document.body.appendChild(blogs);
  const heading = document.createElement('h2');
  heading.className = 'title-orange';
  heading.innerText = 'Blog pessoal';
  blogs.appendChild(heading);
  const linksList = ['blog/remoteplaces.html'];
  const linksTitle = ['Lugares Distantes da Terra'];
  for (let index = 0; index < linksList.length; index += 1) {
    let link = document.createElement('a');
    link.href = linksList[index];
    link.target = '_blank';
    link.innerText = linksTitle[index];
    link.style.display = 'block';
    blogs.appendChild(link);
  }
}

function createFooter() {
  const footer = document.createElement('footer');
  footer.className = 'footer';
  document.body.appendChild(footer);
  const gostasse = document.createElement('h3');
  gostasse.innerText = 'Gostasse? Fala comigo pelo Linkedin 👇🏽';
  gostasse.style.display = 'block';
  gostasse.className = 'title-orange';
  footer.appendChild(gostasse);
  const linkedin = document.createElement('a');
  linkedin.href = 'https://www.linkedin.com/in/brenno-calado-vieira-de-melo-nascimento/';
  linkedin.innerText = 'Link para o meu linkedin';
  linkedin.target = '_blank';
  footer.appendChild(linkedin)
}

function spawnMainPage() {
  createMainTitle();
  createHeader();
  uploadProfileImage();
  createDescription();
  createSkills();
  createProjects();
  createLinks();
  createFooter();
}

window.onload = function () {
  spawnMainPage();
}