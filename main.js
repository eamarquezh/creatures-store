import './style.css'
import Airtable from 'airtable';

const API_KEY = 'patXrLVWA9XmNqgb6.ebf4e3d5b6b47be4e39e6d023d6f057e7c706d8ee6555dada1b517ed335261e1';

var base = new Airtable({apiKey: API_KEY}).base('app8Xvp783RotQ9EO');

const aP = document.getElementById('app');


const titulo = document.createElement('h1');
aP.appendChild(titulo);
titulo.innerHTML='Creatures store';

const subtitulo = document.createElement('h2');
aP.appendChild(subtitulo);
subtitulo.innerHTML='Seres magicos a domicilio.';

const ul = document.createElement('ul');
ul.className='cartas';
aP.appendChild(ul);




base('tareas').select({
  maxRecords: 15,
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

