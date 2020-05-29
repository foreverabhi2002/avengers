var castImg,castDatailsTtext,castList,fadeInOut,prevIndex = 0 ;
window.onload = () =>{
   setTimeout(function(){
      document.querySelector('body').style.overflow = 'visible';
      document.querySelector('.loading-con').style.display = 'none';
   },7000)
    castImg = document.querySelector('.cast-img');
    castDatailsTtext = document.querySelector('.cast-datails');
    castList = document.querySelectorAll('.cast-list-img');
    fadeInOut = document.querySelector('.fade-in-and-out');

    document.getElementById('scroll-down-btn').addEventListener('click', function (e) {

      if (this.hash !== '') {
        e.preventDefault();
    
        const hash = this.hash;
    
        $('html, body')
          .animate({
            scrollTop: $(hash).offset().top
          },300);
      }
    });  
 }
var castName =[
  'Robert Downey Jr.',
  'Chris Evans',
  'Chris Hemsworth',
  'Mark Ruffalo',
  'Scarlet Johansson',
  'Jeremy Lee Renner',
  'Don Cheadle',
  'Paul Bettany',
  'Elizabeth Olsen',
  'Anthony Mackie',
  'Tom Holland',
  'Paul Rudd',
  'Karen Gillan',
  'Benedict Cumberbatch',
  'Brie Larson',
  'Tom Hiddleston',
  'Samuel L. Jackson',
  'Tessa Thompson',
  'Michelle Pfeiffer',
  'Chadwick Boseman',
  'Vin Diesel',
  'Zoe Saldana',
  'Sebastian Stan',
  'Dave Bautista'
  ];

var castRole=[
   "Tony Stark (Iron Man)",
   "Steve Rogers (Captain America)",
   "Thor Odinson (God Of Thunder)",
   "Dr. Bruce Banner (Hulk)",
   "Natalia Romanova (Black Widow)",
   "Clint Barton (Hawkeye)",
   "Rhodey (War Machine)",
   "Vision",
   "Wanda Maximoff (Scarlet Witch)",
   "Samuel Thomas Wilson (Falcon)",
   "Peter Parker (Spider Man)",
   "Scott Lang (Ant Man)",
   "Nebula (Adopted Daughter Of Thanos)",
   "Dr. Stephen Strange",
   "Carol Denvers (Captain Marvel)",
   "Loki Odinson (God Of Mischief)",
   "Nick Fury (Chief Of S.H.I.E.L.D.)",
   "Brunnhilde (Valkyrie)",
   "Janet van Dyne (Wasp)",
   "T'Challa (Black Panther Or King Of Wakanda)",
   "Groot",
   "Gamora (Adopted Daughter Of Thanos)",
   "Bucky Barnes (Winter Soldier)",
   "Drax"
];

var changeCastDetails = (index) => {

  if(prevIndex === index)
  return;
  prevIndex = index;
  fadeInOut.style.opacity = 0;
  setTimeout(function(){
  fadeInOut.style.opacity = 1;
  castImg.src = document.querySelectorAll('.profile-img')[index].src;
  castDatailsTtext.innerHTML = castDetails(index);   
  },500);
     
}
var castDetails = (index) =>{
   html = '<h2 class="cast-datails-text"> %castName% </h2><h2 class="cast-datails-text">Role : %castRole% </h2>';
   html = html.replace('%castName%',castName[index]);
   html = html.replace('%castRole%',castRole[index]);
   return html;
}