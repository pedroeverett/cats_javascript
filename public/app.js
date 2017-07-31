var app = function() {
  var ul = document.createElement('ul');
  ul.classList.add('cat');

  var li = document.createElement('li');
  li.innerText = 'Name: Boby ';
 
  var li2 = document.createElement('li');
  li2.innerText = 'Favourite food: milk';

  var li3 = document.createElement('li');
  var image = document.createElement('img')//.setAttribute("width", "500");;
  image.style.width = "500px"
  image.src = "http://www.pedroeverettphotography.com/wp-content/uploads/2014/03/01-960.jpg";

  li3.appendChild(image)
  ul.appendChild(li)
  ul.appendChild(li2)
  ul.appendChild(li3)

  var cats = document.getElementById('cats')
  cats.appendChild(ul)
}



window.addEventListener('load', app);