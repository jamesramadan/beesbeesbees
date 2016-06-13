var RetiredForagerBee = function() {
	ForagerBee.call(this);
	this.age = 40;
	this.job = 'gamble';
	this.color = 'grey';
	this.canFly = false;
	
};

RetiredForagerBee.prototype = {
	constructor : RetiredForagerBee,
	eat : function(){
		Grub.call(this);
	},
	forage : function(treasure){
		return'I am too old, let me play cards instead';
	},
	gamble : function(treasure){
		this.treasureChest.push(treasure);
	}
};

