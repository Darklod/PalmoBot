/* 
node-telegram-bot-api deprecated Automatic enabling of cancellation of promises is deprecated.
In the future, you will have to enable it yourself.
See https://github.com/yagop/node-telegram-bot-api/issues/319. module.js:635:30
*/
const Promise = require('bluebird');
Promise.config({ cancellation: true });

const fbf = require('./fbf/main');

const TelegramBot = require('node-telegram-bot-api');

// replace the value below with the Telegram token you receive from @BotFather
const token = '488579075:AAF__5WvU2PXZNUAZ35IufU10qbEvSthpao';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});

// Matches "/echo [whatever]"
bot.onText(/\/echo (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back the matched "whatever" to the chat
  bot.sendMessage(chatId, resp);
});

// Listen for any kind of message. There are different kinds of
// messages.

// -->//bot.on('message', (msg) => {
// -->//const chatId = msg.chat.id;

  // send a message to the chat acknowledging receipt of their message
// --> //bot.sendMessage(chatId, 'Ok');
//});

bot.onText(/\/start/, function(msg){
	const opts = {
			reply_to_message_id: msg.message_id,
			reply_markup: JSON.stringify({
			keyboard: [
				[{text: '('}, {text: ')'}, {text: '0'}, {text: '1'}],
					[{text: 'Non'}, {text: 'E'}, {text: 'O'}],
							    [{text: 'Implica'}],
							    [{text: 'Conferma'}]
			]
		})
	};

	bot.sendMessage(msg.chat.id, 'Benvenuto, sono PalmoBot!', opts);
});

bot.onText(/\/help/, function(msg){
	const chatId = msg.chat.id;

	bot.sendMessage(chatId, 'Sono PalmoBot!\nScrivimi una formula logica e io ti dirò se è ben formata\ne se vera o falsa');
});

bot.onText(/\/eval/, function(msg){
	const chatId = msg.chat.id;

	bot.sendMessage(chatId, 'Calcolo ' + msg.text.substring(6).trim() + "...");
	bot.sendMessage(chatId, fbf.calculate(msg.text.substring(6).trim()) );
});
