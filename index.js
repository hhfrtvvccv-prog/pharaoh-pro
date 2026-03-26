const { Client, LocalAuth } = require('whatsapp-web.js');
const qrcode = require('qrcode-terminal');
const client = new Client({
    authStrategy: new LocalAuth(),
    puppeteer: { args: ['--no-sandbox', '--disable-setuid-sandbox'] }
});
client.on('qr', qr => {
    console.log('امسح الكود ده بسرعة:');
    qrcode.generate(qr, {small: true});
});
client.on('ready', () => console.log('البوت جاهز يا فرعون!'));
client.on('message', msg => {
    if (msg.body === 'هلا') msg.reply('هلا والله، السيرفر شغال والبوت معاك!');
});
client.initialize();
