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
	cat.purr();
})

var hungerLevel = function(){
	if (cat.hunger < 10){
		hungerMeter.innerText = "Feeling Fine!";
	}
	else if (cat.hunger < 25){
		hungerMeter.innerText = "Getting Hungry";
	}
	else if (cat.hunger < 40){
		hungerMeter.innerText = "Feed Me!";
	}
	else if (cat.hunger < 50){
		hungerMeter.innerText = "I'm Starving!!!";
		cat.meow();
	}
	else hungerMeter.innerText = "Dead :("	
};

var hungry = function(){
	if(cat.hunger >= 10){
		cat.image.setAttribute("src", "images/cat_hungry.png");
	}
}
var notHungry = function(){
	if(cat.hunger < 10){
		cat.image.setAttribute('src', 'images/kitten.jpg');
	};
};
var dead = function(){
	if (cat.hunger >= 50){
		cat.image.setAttribute('src', 'images/deadCat.gif')
	}
}

setInterval(
	function(){
		cat.hunger++;
		hungerLevel();
		hungry();
		notHungry();
		dead();
	},
	1000)






















