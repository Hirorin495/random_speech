const Botkit = require('botkit');
var CronJob =require('cron').CronJob;
var controller = Botkit.slackbot();
var bot = controller.spawn({
  token: process.env.token
}).startRTM(function(err, bot, payload) {
  // 初期処理
  if (err) {
    throw new Error('Could not connect to Slack');
  }

  new CronJob({
    cronTime: '* * * * 0-6',
    onTick: function() {
      bot.say({
        channel: 'bot_test',
        text: randomText()
      });
    },
    start: true,
    timeZone: 'Asia/Tokyo'
  });
});

// 発言内容を決定し、そのまま返す
function randomText() {
  var max = 4;
  var min = 0;
  var message = "";

　// 0 ~ 4 の乱数を生成
  var result = Math.floor(Math.random() * (max + 1 - min)) + min;

  // 発生した数によって発言する内容を決定
  switch(result) {
    case 0:
      message = "ほげ";
      break;
    case 1:
      message = "hoge";
      break;
    case 2:
      message = "hogeeeeeeee";
      break;
    case 3:
      message = "fuuuuuuuuuuuuuuuuuuga";
      break;
    case 4:
      message = "ふが";
      break;
  }
  return message;
}