const SlackBot = require('slackbots');

module.exports = function(params){
		this.bot = null;
		var self = this;
		this.connect = function(){
				self.bot = new SlackBot(params);
				self.bot.on('start', self.onStart);
				self.bot.on('message', self.onEvent);
		}
		self.onStart = function(){
				// Le bot est connecté
				console.log(self.bot);
				console.log("Le bot est connecté");
				self.bot.postMessageToUser('florentinb', 'Bonjour florentinb !!', params);
		}
		self.onEvent = function(event){
				// reception d'un message
				console.log(event);
				
		}
}
