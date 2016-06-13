var HoneyMakerBee = function() {
	Bee.call(this);
	this.age = 10;
	this.job = 'make honey';
	this.honeyPot = 0;
};

HoneyMakerBee.prototype = {
	constructor : HoneyMakerBee,
	eat : function(){
		Grub.call(this);
	},
	makeHoney : function(){
		this.honeyPot++;
	},
	giveHoney : function(){
		this.honeyPot--;
	}
};

