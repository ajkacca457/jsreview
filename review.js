const reviews= [
  {
    id:1,
    author:"Steven Smith",
    title:"Enterprenuer",
    img:"https://us.res.keymedia.com/files/image/Ryan%20Kirk%20Surexdirect.jpg",
    text:"At distant inhabit amongst by. Appetite welcomed interest the goodness boy not. Estimable education for disposing pronounce her. John size good gay plan sent old roof own. Inquietude saw understood his friendship frequently yet. Nature his marked ham wished."
  },

  {
    id:2,
    author:"Samantha morton",
    title:"Actress",
    img:"https://us.res.keymedia.com/files/image/Jess%20Dametto%20Webber%20Insurance%20Services.JPG",
    text:"Unpleasant nor diminution excellence apartments imprudence the met new. Draw part them he an to he roof only. Music leave say doors him. Tore bred form if sigh case as do. Staying he no looking if do opinion. Sentiments way understood end partiality and his."
  },

  {
    id:3,
    author:"Josh Peak",
    title:"Retailer",
    img:"https://www.hotscal.com/wp-content/uploads/2019/04/client-2.jpg",
    text:"Received the likewise law graceful his. Nor might set along charm now equal green. Pleased yet equally correct colonel not one. Say anxious carried compact conduct sex general nay certain. Mrs for recommend exquisite household eagerness preserved now. My improved honoured he am ecstatic quitting greatest formerly."
  },

  {
    id:4,
    author:"Susan Shark",
    title:"Writer",
    img:"https://www.univaasa.fi/en/midcom-serveattachmentguid-1ea1fd70f70a3a41fd711eaabf16143111055685568/gallery_laura-perttola-vaitos-1.jpg",
    text:"Living valley had silent eat merits esteem bed. In last an or went wise as left. Visited civilly am demesne so colonel he calling. So unreserved do interested increasing sentiments. Vanity day giving points within six not law. Few impression difficulty his use has comparison decisively. "
  }
]


const img=document.querySelector("img");
const author=document.querySelector("#author");
const title=document.querySelector("#title");
const text=document.querySelector("#text");

const next=document.querySelector("#next");
const prev=document.querySelector("#prev");
const random=document.querySelector("#random");

let currentItem=0;

document.addEventListener("DOMContentLoaded",function(){

showreview(currentItem);
})

function showreview(person){
  const item= reviews[person];
  img.src=item.img;
  author.innerText=item.author;
  title.innerText=item.title;
  text.innerText=item.text;
}


next.addEventListener("click",function(){
currentItem++;
if(currentItem>reviews.length-1){
  currentItem=0;
}
showreview(currentItem);
})


prev.addEventListener("click",function(){
  currentItem--;
  if(currentItem<0){
    currentItem=reviews.length-1;
  }
  showreview(currentItem);
})


random.addEventListener("click",function(){
  currentItem=Math.floor(Math.random()*reviews.length);
  showreview(currentItem);
})
