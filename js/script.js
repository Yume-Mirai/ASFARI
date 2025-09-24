//kode js untuk index.html, search.html dan show.html
let slide = document.querySelector(".slide");
let currentIndex = 0;
let figures = [];

// kode untuk mengambil data dan menampilkan api anime now//
fetch("https://kitsu.io/api/edge/anime?filter%5BseasonYear%5D=2025&filter[season]=summer&page%5Blimit%5D=20&page%5Boffset%5D=0")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {
      const link = document.createElement('a');
      // menambahkan atribut href dan onclick berdasarkan id untuk function changeVar
      link.href = 'show.html';
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
      slide.appendChild(link);
      figures.push(link);

    });

    if (figures.length > 0) {
      // menambah class active untuk keperluan animation
      figures[0].classList.add('active');
    }

    setInterval(() => {
      if (figures.length > 0) {
        // menghilangkan class active dan menggantinya dengan index selanjutnya dengan jeda lima detik untuk menambahkan efek animation
        figures[currentIndex].classList.remove('active');
        currentIndex = (currentIndex + 1) % figures.length;
        figures[currentIndex].classList.add('active');
      }
    }, 5000);
  });

  // kode untuk mengambil data dan menampilkan api upcoming anime//
let cur = document.querySelector(".cur");
fetch("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=current&page%5Blimit%5D=20&page%5Boffset%5D=20")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {

      const link = document.createElement('a');
      link.href = 'show.html';
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

        cur.appendChild(link);
        link.appendChild(figure);
      }
    });
  });

// kode untuk mengambil data dan menampilkan api ongoing anime//
let up = document.querySelector(".up");
fetch("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=upcoming&page%5Blimit%5D=20&page%5Boffset%5D=20")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {
      if (z.attributes.canonicalTitle !== "deleted" || "Delete" && z.attributes.status == 'up') {
        const link = document.createElement('a');
        link.href = 'show.html';
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

        up.appendChild(link);
        link.appendChild(figure);
      }
    });
  });

// kode untuk mengambil data dan menampilkan api completed anime//
let finish = document.querySelector(".finish");
fetch("https://kitsu.io/api/edge/anime?filter%5Bstatus%5D=finished&page%5Blimit%5D=20&page%5Boffset%5D=20")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {
      const link = document.createElement('a');
      link.href = 'show.html';
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

        finish.appendChild(link);
        link.appendChild(figure);
      }
    });
  });

// kode untuk mengambil data dan menampilkan api popular anime//
let pop = document.getElementById("pop");
fetch("https://kitsu.io/api/edge/anime?sort=popularityRank&page[limit]=20&page[offset]=0")
  .then((response) => response.json())
  .then((x) => {
    let c = x.data;
    c.map((z) => {
      const link = document.createElement('a');
      link.href = 'show.html';
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

      pop.appendChild(link);
      link.appendChild(figure);
    });
  });

// kode untuk menampilkan data api dari suatu anime berdasarkan id//
function changeVar(n) {
  // function untuk mengganti data id berdasarkan anime yang diklik
  localStorage.setItem('idanime', n);
}
document.addEventListener('DOMContentLoaded', function () {
  let key = localStorage.getItem('idanime');
  let image = document.getElementById("image");
  let inf = document.getElementById("inf");
  let jdl = document.querySelector(".jdl");
  let syn = document.getElementById("syn");
  let vid = document.getElementById("idx");

  fetch(`https://kitsu.io/api/edge/anime/${key}?include=genres`)
    .then((response) => response.json())
    .then((x) => {
      let c = x.data;
      let idy = c.attributes.youtubeVideoId;
      vid.src = `https://www.youtube.com/embed/${idy}`
      image.src = c.attributes.posterImage.original;
      let par = [];
      for (let i = 0; i < 10; i++) {
        par.push(document.createElement("p"));
      }
      let title = document.createTextNode(c.attributes.canonicalTitle);
      let type = document.createTextNode('Type : ' + c.attributes.subtype);
      let eps = document.createTextNode('Episode : ' + c.attributes.episodeCount);
      let status = document.createTextNode('Status : ' + c.attributes.status);
      let start = document.createTextNode('Start Date : ' + c.attributes.startDate);
      let end = document.createTextNode('End Date : ' + c.attributes.endDate);
      let pr = document.createTextNode('Popularity Rank : ' + c.attributes.popularityRank);
      let ar = document.createTextNode('Average Rating : ' + c.attributes.averageRating);
      let rr = document.createTextNode('Rating Rank : ' + c.attributes.ratingRank);
      let age = document.createTextNode('Age Rating : ' + c.attributes.ageRating + ', ' + c.attributes.ageRatingGuide);
      let isi = [type, eps, status, start, end, pr, ar, rr, age];
      jdl.appendChild(title);
      let p = document.createElement("p");
      let sin = document.createTextNode(c.attributes.synopsis);
      p.appendChild(sin);
      syn.appendChild(p);
      for (let i = 0; i < 10; i++) {
        par[i].appendChild(isi[i]);
        inf.appendChild(par[i]);
      }

    });
});

// kode untuk menampilkan anime yang sedang dicari berdasarkan nama//
const form = document.getElementById("forms");
const input = document.getElementById("searchings");

form.addEventListener("submit", function () {
  // function untuk mengganti data input berdasarkan yang di search
  localStorage.setItem('cari', input.value);

});

document.addEventListener('DOMContentLoaded', function () {
  let key = localStorage.getItem('cari');
  let src = document.getElementById("src");
  fetch(`https://kitsu.io/api/edge/anime?filter[text]=${key}&page%5Blimit%5D=20&page%5Boffset%5D=0`)
    .then((response) => response.json())
    .then((x) => {
      let c = x.data;
      c.map((z) => {
        const link = document.createElement('a');
      link.href = 'show.html';
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
    localStorage.setItem('cari','');
});