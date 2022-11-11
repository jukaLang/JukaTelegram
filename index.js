const TelegramBot = require('node-telegram-bot-api');
const axios = require('axios');
// replace the value below with the Telegram token you receive from @BotFather
const token = process.env.TELEGRAM_KEY || '';

// Create a bot that uses 'polling' to fetch new updates
const bot = new TelegramBot(token, {polling: true});


bot.onText(/\/[Jj]uka (.+)/, (msg, match) => {
  // 'msg' is the received Message from Telegram
  // 'match' is the result of executing the regexp above on the text content
  // of the message

  const chatId = msg.chat.id;
  const resp = match[1]; // the captured "whatever"

  // send back using Juka Api
	//console.log(resp);
  axios('https://api.jukalang.com/'+resp).then((jukaResponse) => bot.sendMessage(chatId, "<b>Output: </b>"+jukaResponse.data['output'],{parse_mode : "HTML"}));
});

bot.onText(/\/start/, (msg) => {

bot.sendMessage(msg.chat.id, "Welcome to <b>JukaBot</b>. Visit us at <a href=\"https://jukalang.com\">https://jukalang.com</a>. To run Juka, type <pre>/juka code</pre> where code is the function you want to run! Example: <code>func main() = { printLine(\"Hello World\"); }</code>",{parse_mode : "HTML"});

});