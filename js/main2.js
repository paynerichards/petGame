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
	image: $('#kitten'),
	sleep: 0
}

var body = $('body')

var beenFed = 0

var nameButton = $('#nameButton');
nameButton.click(function(){
	$('#catName').text($('#catNameInput').val())
	cat.name = $('#catNameInput').val()
});

var meowButton = $('#meowButton');
meowButton.click(function(){
	cat.meow();
});

var petButton = $('#petButton');
petButton.click(function(){
	cat.purr();
})

var hungerMeter = $('#hungerMeter');
var feedButton = $('#feedButton');
feedButton.click(function(){
	cat.hunger = 0;
	beenFed++
	cat.purr();
	catNap();
	cat.image.attr('src', 'images/transparentKitten.png');
});

var hungerLevel = function(){
	if (cat.hunger < 10){
		hungerMeter.text("Feeling Fine!");
	}
	else if (cat.hunger < 25){
		hungerMeter.text("Getting Hungry");
	}
	else if (cat.hunger < 40){
		hungerMeter.text("Feed Me!");
	}
	else if (cat.hunger < 50){
		hungerMeter.text("I'm Starving!!!");
		// cat.meow();
	}
	else hungerMeter.text("Dead :(")	
};

var hungry = function(){
	if(cat.hunger >= 30){
		cat.image.attr("src", "images/cat_hungry.png");
	}
}
var notHungry = function(){
	if(cat.hunger < 30){
		cat.image.attr('src', 'images/transparentKitten.png');
	};
};
var dead = function(){
	if (cat.hunger >= 50){
		cat.image.attr('src', 'images/deadCat.gif')
	}
}

setInterval(
	function(){
		cat.hunger++;
		hungerLevel();
		hungry();
		dead();
	},
	5000)



var lightToggle = true


var lightsOut = function(){
	if(lightToggle === true){
		body.css('background-color', 'black')
		lightToggle = false;
		cat.sleep = 0
		cat.image.attr('src', 'images/transparentSleep.png')

	}
	else if(lightToggle === false){
		body.css('background-color', '#AF8B61')
		notHungry();
		hungry();
	}
}
var lightsOutButton = $('#lightsOutButton')
lightsOutButton.click(function(){
	lightsOut()
})

setInterval(
	function(){
		cat.sleep++
		if(cat.sleep < 25){
			$('#sleepMeter').text('Feeling Fine!')
		}
		else if(cat.sleep < 40){
			$('#sleepMeter').text('Tired')
		}
		else if(cat.sleep < 50){
			lightsOut();
		}
	},
	5000)

























