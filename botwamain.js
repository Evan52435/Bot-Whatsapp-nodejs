const qrcode = require('qrcode-terminal');
const { Client, MessageMedia } = require('whatsapp-web.js');

const client = new Client();

client.on('qr', (qr) => {
  console.log("Scan to log into whatsapp bot");
  qrcode.generate(qr, { small: true });
});

client.on('ready', () => {
  console.log('Server side ready');
});
//Client Close

client.on('message', async (message) => {
  const pesan = message.body.trim().toLowerCase();
  const namaPengirim = message._data?.notifyName || message.from;

  console.log(`💬 [${namaPengirim}] mengirim: ${pesan}`);

  if ((pesan === '.stiker' || pesan === '.s'|| pesan === '.sticker') && message.hasQuotedMsg) {
    const quotedMsg = await message.getQuotedMessage();pesan === '.stiker' || pesan === '.s'|| pesan === '.sticker'

    if (quotedMsg.hasMedia) {
      const media = await quotedMsg.downloadMedia();
      if (media) {
        await message.reply(media, undefined, {
          sendMediaAsSticker: true,
          stickerName: 'Stiker bot',
          stickerAuthor: 'Botchargerleptop'
        });
      } else {
        message.reply('Failed to fetch image data');
      }
    } else {
      message.reply('Media not found ⚠️');
    }
    return;
  }
  
//Ping Number Generator lol

let min = 5;
let max = 564;

let randomNum = Math.random() * (max - min) + min;

 
// IMAGE TO STICKER START

  if ((pesan === '.stiker' || pesan === '.s'|| pesan === '.sticker') && message.hasMedia) {
    const media = await message.downloadMedia();
    if (media) {
      await message.reply(media, undefined, {
        sendMediaAsSticker: true,
        stickerName: 'Stiker Bot',
        stickerAuthor: 'Botchargerleptop'
      });
    } else {
      message.reply('Media not found ⚠️');
    }
    return;
  }

    if ((pesan === '.stiker' || pesan === '.s'|| pesan === '.sticker') && message.hasQuotedMsg) {
    const quotedMsg = await message.getQuotedMessage();pesan === '.stiker' || pesan === '.s'|| pesan === '.sticker'

    if (quotedMsg.hasMedia) {
      const media = await quotedMsg.downloadMedia();
      if (media) {
        await message.reply(media, undefined, {
          sendMediaAsSticker: true,
          stickerName: 'Stiker bot',
          stickerAuthor: 'Botchargerleptop'
        });
      } else {
        message.reply('Failed to fetch image data');
      }
    } else {
      message.reply('Media not found ⚠️');
    }
    return;
  }

  //IMAGE TO STICKER END
  //STICKER TO IMAGE START

  if ((pesan === '.toimg' || pesan === '.img') && message.hasMedia) {
    const media = await message.downloadMedia();
    if (media) {
      await message.reply(media, undefined, {
        sendMediaAsSticker: false,
      });
    } else {
      message.reply('Media not found ⚠️');
    }
    return;
  }

    if ((pesan === '.toimg' || pesan === '.img') && message.hasQuotedMsg) {
    const quotedMsg = await message.getQuotedMessage();pesan === '.toimg' || pesan === '.img'

    if (quotedMsg.hasMedia) {
      const media = await quotedMsg.downloadMedia();
      if (media) {
        await message.reply(media, undefined, {
          sendMediaAsSticker: false,
        });
      } else {
        message.reply('Failed to fetch image data');
      }
    } else {
      message.reply('Media not found ⚠️');
    }
    return;
  }

  //STICKER TO IMAGE END
  //MESSAGE AUTOREPLY AREA

  switch (pesan) {
    case '.hi':
      message.reply(`Hello ${namaPengirim}! 👋`);
      break;
    case '.ping':
      message.reply(`Ping : ${randomNum}ms`);
      break;
    case '.yogurt':
      message.reply('sybau');
      break;
    case 'P':
    case 'p':
      message.reply('P');
      break;
    case '.bye':
    case 'cya':
    case 'bye':
      message.reply('byee');
      break;
    case '.test':
      message.reply('Test finished. 0% Packet loss');
      break;
    case '.menu':
      message.reply(
        `*Command List*\n\n` +
        `1. .hi      | say hello\n` +
        `2. .ping    | check current ping\n` +
        `3. .test    | network check\n` +
        `4. .bye     | say goodbye\n` +
        `5. .menu    | show this menu\n` +
        `6. .sticker | turn image into sticker\n` +
        `7  .yogurt  | try it urself mwehehe\n`+
        `and many more hidden command!!11!\n\n` +
         `*Enjoy!*` 
      );
      break;
  }
});

client.initialize();