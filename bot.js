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
				self.bot.postMessageToUser('florentinb', 'Bonjour florentinb !!', params);
				console.log(self.bot.getUsers());
		}
		self.onEvent = function(event){
				// reception d'un message
				console.log(event);
				if(!event.bot_id && event.type == "message" && event.text != "")
						 self.bot.postMessageToUser('florentinb', 'Hello !!', params);
						 //self.bot.postMessage(event.user, "Hello !!", params);
						 //self.bot.postMessageToChannel(event.channel, "Hello", params);
		}
}
