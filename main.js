import './style.css'
import Airtable from 'airtable';

const API_KEY = 'patXrLVWA9XmNqgb6.ebf4e3d5b6b47be4e39e6d023d6f057e7c706d8ee6555dada1b517ed335261e1';

var base = new Airtable({apiKey: API_KEY}).base('app8Xvp783RotQ9EO');

const aP = document.getElementById('app');


const loadCcontainer = document.createElement('div');
loadCcontainer.id='loader-container';
aP.appendChild(loadCcontainer);


const mLoad = document.createElement('div');
mLoad.id='loader';
loadCcontainer.appendChild(mLoad);

document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("loader-container").style.display = "flex";
  setTimeout(function () {
      document.getElementById("loader-container").style.display = "none";
  }, 2000);
});


const titulo = document.createElement('h1');
aP.appendChild(titulo);
titulo.innerHTML='Creatures store';

const subtitulo = document.createElement('h2');
aP.appendChild(subtitulo);
subtitulo.innerHTML='Seres magicos a domicilio.';


const disclaimer = document.createElement('p');
aP.appendChild(disclaimer);
disclaimer.innerHTML='Esta página no es real; es solo un ejemplo de un repositorio que busca demostrar cómo, con HTML, CSS y JS, puedes crear una página dinámica utilizando diversos servicios en la nube.';

const invitacion = document.createElement('p');
aP.appendChild(invitacion);
invitacion.innerHTML='Presiona el botón a continuación para acceder al repositorio.';

const repo = document.createElement('button');
repo.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5" /></svg> \nIr a repo';

const contRepo = document.createElement('a');
contRepo.href='https://github.com/eamarquezh/creatures-store';
contRepo.target='_blank';
contRepo.appendChild(repo);
aP.appendChild(contRepo);


const ul = document.createElement('ul');
ul.className='cartas';
aP.appendChild(ul);




base('tareas').select({
  maxRecords: 10,
  view: "Vista de cuadrícula"
}).eachPage(function page(records, fetchNextPage) {

  records.forEach(function(record) {
    console.log(record.get('name'));
      const li = document.createElement('li');
      li.className='carta';

      const cardTitle = document.createElement('h3');
      li.appendChild(cardTitle);
      cardTitle.textContent=record.get('name');
   

      const img = document.createElement('img');
      img.src=record.get('imagen');
      img.className='img-card';
      li.appendChild(img);

      const p = document.createElement('p');
      p.textContent=record.get('descripcion');
      li.appendChild(p);

      const button = document.createElement('button');
      button.textContent='$'+record.get('precio');
      li.appendChild(button);
      
      ul.appendChild(li);
      

    });

  fetchNextPage();
}, function done(err) {
  if (err) { console.error(err); return; }
});

