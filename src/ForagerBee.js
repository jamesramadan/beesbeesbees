var ForagerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = 'find pollen';
	this.honeyPot = 0;
	this.canFly = true;
	this.treasureChest = [];
};

ForagerBee.prototype = {
	constructor : ForagerBee,
	eat : function(){
		Grub.call(this);
	},
	makeHoney : function(){
		this.honeyPot++;
	},
	giveHoney : function(){
		this.honeyPot--;
	},
	forage : function(treasure){
		this.treasureChest.push(treasure);
	}
};