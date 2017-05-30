console.log('linked');

var cat = {
	name: "",
	hunger: 0,
	meow: function(){
		alert(this.name + " says Meow");
	},
	purr: function(){
		alert(this.name + " is purring");
	},
	image: document.getElementById('kitten')
}

var nameButton = document.getElementById('nameButton');
nameButton.addEventListener('click', function(){
	var name = document.getElementById("catNameInput").value;
	cat.name = name;
	console.log(cat.name);
	document.getElementById('catName').innerText = cat.name;

});

var meowButton = document.getElementById('meowButton');
meowButton.addEventListener('click', function(){
	cat.meow();
});

var petButton = document.getElementById('petButton');
petButton.addEventListener('click', function(){
	cat.purr();
});

var hungerMeter = document.getElementById('hungerMeter');
var feedButton = document.getElementById('feedButton');
feedButton.addEventListener('click', function(){
	cat.hunger = 0;
	hungerMeter.innerText = cat.hunger;
	cat.purr();
})
hungerMeter.innerText = cat.hunger;

setInterval(
	function(){
		cat.hunger++;
		hungerMeter.innerText = cat.hunger;
	},
	1000)

var hungry = function(){
	if(cat.hunger >= 10){
		cat.image.setAttribute("src", "images/cat_hungry.png");
	}
	// }if else {
	// 	cat.image.setAttribute('src', 'images/kitten.jpg')
	// }
}
setInterval(
	function(){
		hungry();
	},
	1000)



















