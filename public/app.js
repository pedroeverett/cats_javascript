var app = function() {
  // var ul = document.createElement('ul');
  // ul.classList.add('cat');

  // var li = document.createElement('li');
  // li.innerText = 'Name: Boby ';
 
  // var li2 = document.createElement('li');
  // li2.innerText = 'Favourite food: milk';

  // var li3 = document.createElement('li');
  // var image = document.createElement('img')
  // image.style.width = "500px"
  // image.src = "http://www.pedroeverettphotography.com/wp-content/uploads/2014/03/01-960.jpg";

  // li3.appendChild(image)
  // ul.appendChild(li)
  // ul.appendChild(li2)
  // ul.appendChild(li3)
  // var cats = document.getElementById('cats')
  // cats.appendChild(ul)
  var cats = [{name: "Boby", food: "milk", image: "http://www.pedroeverettphotography.com/wp-content/uploads/2014/03/01-960.jpg"}, {name: "Boba", food: "Sock fluff", image: "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg"}]


  addCats(cats)
  // addCat("Boby", "milk", "http://www.pedroeverettphotography.com/wp-content/uploads/2014/03/01-960.jpg");
  // addCat("Boba", "Sock fluff", "http://66.media.tumblr.com/d1f01bbe0150fda0c40d2151c5eaeac8/tumblr_odlqqskjj61v9cejwo1_400.jpg")
}

  var addCats = function(catList) {
    for (cat of catList) {
     addCat(cat.name, cat.food, cat.image)
    }
  }
  

var addCat = function(name, food, image) {
  var ul = createCat();
  var li = createCatName(name);
  var li2 = createCatFood(food);
  var li3 = createCatImage(image);

  appendElements(ul, li, li2, li3);
}

var createCat = function() {
  var ul = document.createElement('ul');
  ul.classList.add('cat');
  return ul;
}

var createCatName = function(name) {
  var li = document.createElement('li');
  li.innerText = "Name: " + name;
  return li;
}

var createCatFood = function(food) {
  var li2 = document.createElement('li');
  li2.innerText = "Favourite food: " + food;
  return li2;
}

var createCatImage = function(imageUrl) {
  var li3 = document.createElement('li');
  var image = document.createElement('img');
  image.style.width = "500px";
  image.src = imageUrl;
  li3.appendChild(image);
  return li3;
}

var appendElements = function(ul, li, li2, li3) {
  ul.appendChild(li)
  ul.appendChild(li2)
  ul.appendChild(li3)
  var cats = document.getElementById('cats')
  cats.appendChild(ul)
}


window.addEventListener('load', app);