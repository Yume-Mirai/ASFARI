//kode js untuk manga.html, seek.html dan expose.html
let avr = document.querySelector(".avr");
let currentIndex = 0;
let figures = [];

//kode untuk mengambil data dan menampilkan api top rating
fetch("https://kitsu.io/api/edge/manga?sort=-averageRating&page%5Blimit%5D=20&page%5Boffset%5D=0")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {
      const link = document.createElement('a');
      link.href = 'expose.html';
      link.setAttribute('onclick', `changeVar(${z.id})`);

      let figure = document.createElement("figure");
      let img = document.createElement("img");
      let figcaption = document.createElement("figcaption");

      if (z.attributes.coverImage && z.attributes.coverImage.original) {
        img.src = z.attributes.coverImage.original;
      } else {
        img.src = z.attributes.posterImage.original;
      }
      figcaption.innerText = z.attributes.canonicalTitle;

      figure.appendChild(img);
      figure.appendChild(figcaption);
      link.appendChild(figure)
      avr.appendChild(link);
      figures.push(link);

    });

    if (figures.length > 0) {
      figures[0].classList.add('active');
    }

    setInterval(() => {
      if (figures.length > 0) {
        figures[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % figures.length;
        figures[currentIndex].classList.add('active');
      }
    }, 5000);
  });

//kode untuk mengambil data dan menampilkan api finished manga
let fis = document.querySelector(".fis");
fetch("https://kitsu.io/api/edge/manga?filter%5Bstatus%5D=finished&page%5Blimit%5D=20&page%5Boffset%5D=0&sort=-averageRating")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {

      const link = document.createElement('a');
      link.href = 'expose.html';
      link.setAttribute('onclick', `changeVar(${z.id})`);

      let figure = document.createElement("figure");
      let img = document.createElement("img");
      let figcaption = document.createElement("figcaption");

      if (z.attributes.status == 'finished') {

        img.src = z.attributes.posterImage.original;
        let rating = document.createTextNode('Rating : ' + z.attributes.averageRating);
        let br = [document.createElement("br"), document.createElement("br"), document.createElement("br")];
        let judul = document.createTextNode(z.attributes.canonicalTitle);

        figure.appendChild(img);
        figure.appendChild(figcaption);
        figcaption.appendChild(br[0]);
        figcaption.appendChild(rating);
        figcaption.appendChild(br[1]);
        figcaption.appendChild(br[2]);
        figcaption.appendChild(judul);

        fis.appendChild(link);
        link.appendChild(figure);
      }
    });
  });

//kode untuk mengambil data dan menampilkan api manhwa
let manhwa = document.querySelector(".manhwa");
fetch("https://kitsu.io/api/edge/manga?filter[subtype]=manhwa&filter[status]=current&page%5Blimit%5D=20&page%5Boffset%5D=0")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {
      if (z.attributes.status == 'current') {
        const link = document.createElement('a');
        link.href = 'expose.html';
        link.setAttribute('onclick', `changeVar(${z.id})`);

        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let figcaption = document.createElement("figcaption");


        img.src = z.attributes.posterImage.original;
        let rating = document.createTextNode('Rating : ' + z.attributes.averageRating);
        let br = [document.createElement("br"), document.createElement("br"), document.createElement("br")];
        let judul = document.createTextNode(z.attributes.canonicalTitle);

        figure.appendChild(img);
        figure.appendChild(figcaption);
        figcaption.appendChild(br[0]);
        figcaption.appendChild(rating);
        figcaption.appendChild(br[1]);
        figcaption.appendChild(br[2]);
        figcaption.appendChild(judul);

        manhwa.appendChild(link);
        link.appendChild(figure);
      }
    });
  });

//kode untuk mengambil data dan menampilkan api manhua
let manhua = document.querySelector(".manhua");
fetch("https://kitsu.io/api/edge/manga?filter[subtype]=manhua&filter[status]=current&page%5Blimit%5D=20&page%5Boffset%5D=0")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {
      const link = document.createElement('a');
      link.href = 'expose.html';
      link.setAttribute('onclick', `changeVar(${z.id})`);

      let figure = document.createElement("figure");
      let img = document.createElement("img");
      let figcaption = document.createElement("figcaption");

      if (z.attributes.status == 'current') {


        img.src = z.attributes.posterImage.original;
        let rating = document.createTextNode('Rating : ' + z.attributes.averageRating);
        let br = [document.createElement("br"), document.createElement("br"), document.createElement("br")];
        let judul = document.createTextNode(z.attributes.canonicalTitle);

        figure.appendChild(img);
        figure.appendChild(figcaption);
        figcaption.appendChild(br[0]);
        figcaption.appendChild(rating);
        figcaption.appendChild(br[1]);
        figcaption.appendChild(br[2]);
        figcaption.appendChild(judul);

        manhua.appendChild(link);
        link.appendChild(figure);
      }
    });
  });

//kode untuk mengambil data dan menampilkan api popular manga
let tops = document.getElementById("tops");
fetch("https://kitsu.io/api/edge/manga?sort=popularityRank&page%5Blimit%5D=20&page%5Boffset%5D=0")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {
      const link = document.createElement('a');
      link.href = 'expose.html';
      link.setAttribute('onclick', `changeVar(${z.id})`);

      let figure = document.createElement("figure");
      let img = document.createElement("img");
      let figcaption = document.createElement("figcaption");

      img.src = z.attributes.posterImage.original;
      let rating = document.createTextNode('Rating : ' + z.attributes.averageRating);
      let br = [document.createElement("br"), document.createElement("br"), document.createElement("br")];
      let judul = document.createTextNode(z.attributes.canonicalTitle);

      figure.appendChild(img);
      figure.appendChild(figcaption);
      figcaption.appendChild(br[0]);
      figcaption.appendChild(rating);
      figcaption.appendChild(br[1]);
      figcaption.appendChild(br[2]);
      figcaption.appendChild(judul);

      link.appendChild(figure);
      tops.appendChild(link);
    });
  });

//kode untuk mengambil data dan menampilkan berdasarkan id manga
function changeVar(n) {
  localStorage.setItem('idmanga', n);
}
document.addEventListener('DOMContentLoaded', function () {
  let key = localStorage.getItem('idmanga');
  let image = document.getElementById("image");
  let inf = document.getElementById("inf");
  let jdl = document.querySelector(".jdl");
  let syn = document.getElementById("syn");
  let cov = document.getElementById("cov");

  fetch(`https://kitsu.io/api/edge/manga/${key}`)
    .then((response) => response.json())
    .then((x) => {
      let c = x.data;
      image.src = c.attributes.posterImage.original;

      let par = [];
      for (let i = 0; i < 10; i++) {
        par.push(document.createElement("p"));
      }
      let title = document.createTextNode(c.attributes.canonicalTitle);
      let type = document.createTextNode('Type : ' + c.attributes.subtype);
      let chp = document.createTextNode('Chapter Count : ' + c.attributes.chapterCount);
      let vol = document.createTextNode('Volume Count : ' + c.attributes.volumeCount);
      let status = document.createTextNode('Status : ' + c.attributes.status);
      let start = document.createTextNode('Start Date : ' + c.attributes.startDate);
      let end = document.createTextNode('End Date : ' + c.attributes.endDate);
      let pr = document.createTextNode('Popularity Rank : ' + c.attributes.popularityRank);
      let ar = document.createTextNode('Average Rating : ' + c.attributes.averageRating);
      let rr = document.createTextNode('Rating Rank : ' + c.attributes.ratingRank);
      let age = document.createTextNode('Age Rating : ' + c.attributes.ageRating + ', ' + c.attributes.ageRatingGuide);
      let isi = [type, chp, vol, status, start, end, pr, ar, rr, age];
      jdl.appendChild(title);
      let p = document.createElement("p");
      let sin = document.createTextNode(c.attributes.synopsis);
      p.appendChild(sin);
      syn.appendChild(p);

      if (c.attributes.coverImage && c.attributes.coverImage.original) {
        cov.src = c.attributes.coverImage.original;
      } else {
        cov.src = c.attributes.posterImage.original;
      }

      for (let i = 0; i < 10; i++) {
        par[i].appendChild(isi[i]);
        inf.appendChild(par[i]);
      }

    });
});

//kode untuk mengambil data dan menampilkan api manga berdasarkan nama yang dicari
const form = document.getElementById("forms");
const input = document.getElementById("searchings");

form.addEventListener("submit", function () {
  localStorage.setItem('exp', input.value);

});

document.addEventListener('DOMContentLoaded', function () {
  let key = localStorage.getItem('exp');
  let src = document.getElementById("src");
  fetch(`https://kitsu.io/api/edge/manga?filter[text]=${key}&page%5Blimit%5D=20&page%5Boffset%5D=0`)
    .then((response) => response.json())
    .then((x) => {
      let c = x.data;
      c.map((z) => {
        const link = document.createElement('a');
      link.href = 'expose.html';
      link.setAttribute('onclick', `changeVar(${z.id})`);

        let figure = document.createElement("figure");
        let img = document.createElement("img");
        let figcaption = document.createElement("figcaption");

        img.src = z.attributes.posterImage.original;
        let rating = document.createTextNode('Rating : ' + z.attributes.averageRating);
        let br = [document.createElement("br"), document.createElement("br"), document.createElement("br")];
        let judul = document.createTextNode(z.attributes.canonicalTitle);

        figure.appendChild(img);
        figure.appendChild(figcaption);
        figcaption.appendChild(br[0]);
        figcaption.appendChild(rating);
        figcaption.appendChild(br[1]);
        figcaption.appendChild(br[2]);
        figcaption.appendChild(judul);

        src.appendChild(link);
        link.appendChild(figure);
      });
    });
    localStorage.setItem('exp','a');
});

