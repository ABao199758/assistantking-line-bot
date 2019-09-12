

const express=require('express');
const linebot = require('linebot');
 
const bot = linebot({
  channelId: "1619264201",
  channelSecret: "0ee98a3e5b7ea53216874be4d8cfb8f7",
  channelAccessToken: "g8Urv+qQGqlT+HA2grzpAh4w6F7Gg3lXT95lGREIttGFbRYGj70pycK35H0LojLoTvgkbzwls/ZyAlJvWfcDzxVMX/UWXJj+g1HwfbwzF0n21/JeI1xV6sfPwcGIlBhBN8rJtyXTUTG8U0K//bxRwgdB04t89/1O/w1cDnyilFU="
});
 
bot.on('message', function (event) {
  event.reply(event.message.text).then(function (data) {
    // success
  }).catch(function (error) {
    // error
  });
});
 

const app = express();
const linebotParser = bot.parser();
app.post('/linewebhook', linebotParser);
app.listen(3000);

// 當有人傳送訊息給Bot時
bot.on('message', function (event) {
    // event.message.text是使用者傳給bot的訊息
    // 準備要回傳的內容
    var replyMsg = `Hello你剛才說的是:${event.message.text}`;
    // 透過event.reply(要回傳的訊息)方法將訊息回傳給使用者
    event.reply(replyMsg).then(function (data) {
        // 當訊息成功回傳後的處理
    }).catch(function (error) {
        // 當訊息回傳失敗後的處理
    });
});