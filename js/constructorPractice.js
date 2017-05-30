var me = {
	name: "Payne",
	age: 22,
	hometown: "Batavia",
	destinations: ["NYC", "SF", "Seattle"],
	outfit: [{type: "pants", style: "chinos", color: "navy"}, {type: "shirt", style: "tee", color: 'white'}, {type: 'shoes', style: "new balance", color: "beige"}],
	intro: function(){
		console.log("hello my name is " + this.name + ' and Im from ' + this.hometown)
	},
	aging: function(){
		this.age++;
		console.log(this.age);
	},
	fly: function(location){
		this.destinations.push(location);
	},
	changeOutfit: function(newOutfit){
		this.outfit = newOutfit;
	}
}

var friend = {
	name: "Shana",
	age: 21,
	hometown: "Jersey",
	destinations: ["Chicago", "SF", "Florida"],
	outfit: [{type: "pants", style: "jeans", color: "black"}, {type: "shirt", style: "tee", color: 'white'}, {type: 'shoes', style: "chucks", color: "white"}],
	intro: function(){
		console.log("hello my name is " + this.name + ' and Im from ' + this.hometown)
	},
	aging: function(){
		this.age++;
		console.log(this.age);
	},
	fly: function(location){
		this.destinations.push(location);
	},
	changeOutfit: function(newOutfit){
		this.outfit = newOutfit;
	}
}


//Constructors

var Person = function(name, age, from, destinations, outfit){
	this.name = name; 
	this.age = age;
	this.from = from;
	this.destinations = destinations;
	this.outfit = outfit;
	this.isHuman = true;
	this.breathes = true;

	this.intro = function(){
		console.log("hello my name is " + this.name)
	}
}

var ayo = new Person("Ayo", "20", 'Chicago', ["nigeria", 'us', 'saudi arabia'], [{pants: 'jeans', color: 'navy'}, {shirt: 'tee', color: 'white'}])







































