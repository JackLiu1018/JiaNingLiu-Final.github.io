/* eslint-disable no-unused-vars */
const games = [
  {
    picture: 'images/GOW.jpg',
    name: 'GOD of WAR \n',
    desc: 'A second-hand disk of God of War with the box on PS4',
    cate: 'PS4',
    price: 40.0
  },
  {
    picture: 'images/DBH.jpg',
    name: 'DETROIT: BECOME HUMAN',
    desc: 'A second-hand disk of Detroit-Become Human with the box on PS4',
    cate: 'PS4',
    price: 20.0
  },
  {
    picture: 'images/RDR2.jpg',
    name: 'RED DEAD REDEMPTION II',
    desc: 'A second-hand disk of Red Dead Redemption II with the box on PS4',
    cate: 'PS4',
    price: 20.0
  },
  {
    picture: 'images/RSS.jpg',
    name: "TOM CLANCY'S RAINBOW-SIX SIEGE",
    desc: "A second-hand disk of Tom Clancy's Rainbow-Six Siege with the box on PS4",
    cate: 'PS4',
    price: 30.0
  },
  {
    picture: 'images/LZ.jpg',
    name: 'THE LEGEND OF ZELDA: BREATH OF THE WILD',
    desc: 'A second-hand disk of The Legend of Zelda-Breath of the Wild with the box on PS4',
    cate: 'Switch',
    price: 40.0
  },
  {
    picture: 'images/GTA5.jpg',
    name: 'GRAND THEFT AUTO V',
    desc: 'A second-hand disk of Grand Theft Auto V (GTA 5) with the box on Xbox One',
    cate: 'XBOX-ONE',
    price: 40.0
  },
  {
    picture: 'images/AC-BF.jpg',
    name: "ASSASSIN'S CREED IV: BLACK FLAG",
    desc: "A second-hand disk of Assassin's Creed IV-Black Flag with the box on Xbox One",
    cate: 'XBOX-ONE',
    price: 20.0
  },
  {
    picture: 'images/QB.jpg',
    name: 'QUANTUM BREAK',
    desc: 'A second-hand disk of Quantum Break with the box on Xbox One',
    cate: 'kburns99753@usermail.com',
    price: 20.0
  },
  {
    picture: 'images/HALO.jpg',
    name: 'HALO: THE MASTER CHIEF COLLECTION',
    desc:
      'A second-hand disk of Halo with the box on Xbox One, the master chief collection means that this disk season 1-4 of the Halo series',
    cate: 'XBOX-ONE',
    price: 20.0
  },
  {
    picture: 'images/F5.jpg',
    name: 'FORZA 5',
    desc: 'A second-hand disk of Forza 5 with the box on Xbox One',
    cate: 'XBOX-ONE',
    price: 10.0
  },
  {
    picture: 'images/JD2014.jpg',
    name: 'JUST DANCE 2014',
    desc: 'A second-hand disk of Just Dance 2014 with the box on Xbox One',
    cate: 'XBOX-ONE',
    price: 10.0
  },
  {
    picture: 'images/MC.jpg',
    name: 'MINECRAFT',
    desc: 'A second-hand disk of Minecraft with the box on Xbox One',
    cate: 'XBOX-ONE',
    price: 15.0
  }
];

function All() {
  clear();
  games.forEach(function(element) {
    let fig = document.createElement('figure');
    document.getElementById('items').appendChild(fig);
    let img = document.createElement('img');
    let figc = document.createElement('figcaption');
    img.src = element.picture;
    img.alt = element.name;
    fig.appendChild(img);
    fig.appendChild(figc);
    figc.innerHTML += element.name;
    let p = document.createElement('p');
    fig.append(p);
    p.innerHTML += `Description:  ${element.desc}`;
    let price = document.createElement('p');
    fig.append(price);
    price.innerHTML += `Price:  ${element.price}`;
  });
}
function Xbox() {
  clear();
  games.forEach(function(element) {
    if (element.cate === 'XBOX-ONE') {
      let fig = document.createElement('figure');
      document.getElementById('items').appendChild(fig);
      let img = document.createElement('img');
      let figc = document.createElement('figcaption');
      img.src = element.picture;
      img.alt = element.name;
      fig.appendChild(img);
      fig.appendChild(figc);
      figc.innerHTML += element.name;
      let p = document.createElement('p');
      fig.append(p);
      p.innerHTML += `Description:  ${element.desc}`;
      let price = document.createElement('p');
      fig.append(price);
      price.innerHTML += `Price:  ${element.price}`;
    }
  });
}
function PS4() {
  clear();
  games.forEach(function(element) {
    if (element.cate === 'PS4') {
      let fig = document.createElement('figure');
      document.getElementById('items').appendChild(fig);
      let img = document.createElement('img');
      let figc = document.createElement('figcaption');
      img.src = element.picture;
      img.alt = element.name;
      fig.appendChild(img);
      fig.appendChild(figc);
      figc.innerHTML += element.name;
      let p = document.createElement('p');
      fig.append(p);
      p.innerHTML += `Description:  ${element.desc}`;
      let price = document.createElement('p');
      fig.append(price);
      price.innerHTML += `Price:  ${element.price}`;
    }
  });
}
function Switch() {
  clear();
  games.forEach(function(element) {
    if (element.cate === 'Switch') {
      let fig = document.createElement('figure');
      document.getElementById('items').appendChild(fig);
      let img = document.createElement('img');
      let figc = document.createElement('figcaption');
      img.src = element.picture;
      img.alt = element.name;
      fig.appendChild(img);
      fig.appendChild(figc);
      figc.innerHTML += element.name;
      let p = document.createElement('p');
      fig.append(p);
      p.innerHTML += `Description:  ${element.desc}`;
      let price = document.createElement('p');
      fig.append(price);
      price.innerHTML += `Price:  ${element.price}`;
    }
  });
}
function clear() {
  document.getElementById('items').innerHTML = '';
}
window.onload = All;
