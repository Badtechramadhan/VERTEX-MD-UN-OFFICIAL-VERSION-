require("./config")
const { WA_DEFAULT_EPHEMERAL, getAggregateVotesInPollMessage, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, downloadContentFromMessage, areJidsSameUser, getContentType, useMultiFileAuthState, makeWASocket, fetchLatestBaileysVersion, makeCacheableSignalKeyStore, makeWaSocket } = require("@whiskeysockets/baileys")
const nodemailer = require('nodemailer')
const os = require('os')
const fs = require('fs')
const util = require('util')
const request = require('request')
/*const maker = require('mumaker')*/
const fetch = require('node-fetch')
const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
const fsx = require('fs-extra')
const googleTTS = require('google-tts-api')
/*const fsx = require('fs-extra')*/
const axios = require('axios')
const { exec } = require("child_process")
const chalk = require('chalk')
const moment = require('moment-timezone')
const cheerio = require('cheerio')
const yts = require ('yt-search')
const ytdl = require('@distube/ytdl-core')
const didyoumean = require('didyoumean')
const similarity = require('similarity')
const fg = require('api-dylux')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
/*const {translate} = require('@vitalets/google-translate-api')
const { exec, spawn, execSync } = require('child_process')*/
const qs = require('qs')
const {
    toAudio,
    toPTT,
    toVideo,
    addExifAvatar,
    makeid,
  Telesticker,
  formatBytes,
  formatDuration
} = require('./lib/converter')
const { xvideosSearch, xvideosdl, xnxxdl, xnxxSearch} = require('./lib/scraper3.js')
const { imageToWebp, videoToWebp, writeExif, writeExifImg, writeExifVid } = require('./lib/exif')
const { chatGpt, tiktokDl, ytMp4, ytMp3 } = require('./lib/screaper')
const { formatp, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, webApi, parseMention, generateProfilePicture, getRandom, getGroupAdmins, readFileTxt, readFileJson, getHashedPassword, generateAuthToken, generateToken, batasiTeks, randomText, isEmoji, getAllHTML, fetchBuffer, GIFBufferToVideoBuffer } = require('./lib/function')
module.exports = async (Ramah, m) => {
try {
const from = m.key.remoteJid
const botNumber = await Ramah.decodeJid(Ramah.user.id)
/*const Ramah = isOwner = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)*/
var body = (m.mtype === 'interactiveResponseMessage') ? JSON.parse(m.message.interactiveResponseMessage.nativeFlowResponseMessage.paramsJson).id : (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype == 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ""

const { smsg, fetchJson, getBuffer, fetchBuffer, getGroupAdmins, isUrl, hitungmundur, sleep, clockString, checkBandwidth, runtime, tanggal, getRandom } = require('./lib/myfunc')

const budy = (typeof m.text === 'string') ? m.text : '';
const prefixRegex = /^[°zZ#$@*+,.?=''():√%!¢£¥€π¤ΠΦ_&><`™©®Δ^βα~¦|/\\©^]/;
const prefix = prefixRegex.test(body) ? body.match(prefixRegex)[0] : '.';
const isCmd = body.startsWith(prefix);
const command = isCmd ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase() : '';
const args = body.trim().split(/ +/).slice(1)
const text = q = args.join(" ")
const sender = m.key.fromMe ? (Ramah.user.id.split(':')[0]+'@s.whatsapp.net' || Ramah.user.id) : (m.key.participant || m.key.remoteJid)
/*const botNumber = await Ramah.decodeJid(Ramah.user.id)*/
const senderNumber = sender.split('@')[0]
const isCreator = (m && m.sender && [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)) || false;
const pushname = m.pushName || `${senderNumber}`
const isBot = botNumber.includes(senderNumber)
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const groupMetadata = m.isGroup ? await Ramah.groupMetadata(from).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const input = m.isMention && m.quoted && m.mentionedJid.includes(m.quoted.sender) ? m.mentionedJid : m.isMention && m.quoted ? [...m.mentionedJid, m.quoted.sender] : m.isMention ? m.mentionedJid : m.quoted ? Array(m.quoted.sender) : text !== "" && (text.trim().includes("08") || text.trim().includes("+62") || text.trim().includes("628")) ? text.split("+62").filter((x) => (x !== "" && x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.trim().startsWith("8") ? ("+62" + x.trim()) : x.trim()).join(" ").split(" ").filter((x) => (x.length >= 11 && !isNaN(parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))))).map((x) => x.startsWith("08") ? parseInt(x.replace("08", "628")) : parseInt(x.replace(new RegExp("[()+-/ +/]", "gi"), ""))).map((x) => (x + "@s.whatsapp.net")) : text !== "" && !isNaN(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))) && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length >= 8 && util.format(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), ""))).length <= 15 ? Array(parseInt(text.replace(new RegExp("[()+-/ +/]", "gi"), "")) + "@s.whatsapp.net") : []

if (m.message) {
console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', from))
}

try {
ppuser = await Ramah.profilePictureUrl(m.sender, 'image')
} catch (err) {
ppuser = 'https://files.catbox.moe/0arg0u.jpg'
}
ppnyauser = await getBuffer(ppuser)
try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: 0,
}
} catch (err) {
console.log(err)
} 

const reSize = async(buffer, ukur1, ukur2) => {
   return new Promise(async(resolve, reject) => {
      let jimp = require('jimp')
      var baper = await jimp.read(buffer);
      var ab = await baper.resize(ukur1, ukur2).getBufferAsync(jimp.MIME_JPEG)
      resolve(ab)
   })
}
    const fkethmb = await reSize(ppuser, 300, 300)
    // function resize
    let jimp = require("jimp")
const resize = async (image, width, height) => {
    const read = await jimp.read(image);
    const data = await read.resize(width, height).getBufferAsync(jimp.MIME_JPEG);
    return data;
};

    const createSerial = (size) => {
    return crypto.randomBytes(size).toString('hex').slice(0, size)
}
global.public = true
if (!global.public) {
if (!m.key.fromMe && !isCreator) return
}

const qsal = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363335392141844@newsletter',
    newsletterName: '',
    caption: `${namabot} | 2022 - 2025`
}}}
const reply = (teks) => { 
Ramah.sendMessage(from, { text: teks, contextInfo:{
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: channelname,
newsletterJid: channeljid,
}, externalAdReply: { showAdAttribution: true,
mediaType:  1,
previewType: 0,
renderLargerThumbnail: true,
mediaUrl: `https://wa.me/` + `${global.owner}`,
title: `${global.namabot} Always Your Number 1`,
sourceUrl: `https://wa.me/${global.owner}`, 
thumbnail: fkethmb
}
}},{quoted:qsal})
 }

if (prefix && command) {
let caseNames = getCaseNames();
function getCaseNames() {
const fs = require('fs');
try {
const data = fs.readFileSync('case.js', 'utf8');
const casePattern = /case\s+'([^']+)'/g;
const matches = data.match(casePattern);
if (matches) {
const caseNames = matches.map(match => match.replace(/case\s+'([^']+)'/, '$1'));
return caseNames;
} else {
return [];
} } catch (err) {
console.log('Terjadi kesalahan:', err);
return [];
}}
let noPrefix = command
let mean = didyoumean(noPrefix, caseNames);
let sim = similarity(noPrefix, mean);
let similarityPercentage = parseInt(sim * 100);
if (mean && noPrefix.toLowerCase() !== mean.toLowerCase()) {
let response = `Sorry Buddy, The request you tried to put is not existing in vertex Md:\n\n•> ${prefix+mean}\n•> Similarly: ${similarityPercentage}%`
m.reply(response)
}}

const reactionMessage = ["😀", "😃", "😄", "😁", "😆", "🥹", "😅", "😂", "🤣", "🥲", "☺️", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "🥰", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🥸", "🤩", "🥳", "😏", "😒", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "🥺", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "🥵", "🥶", "😶", "😱", "😨", "😰", "😥", "😓", "🤗", "🤔", "🫣", "🤭", "🫢", "🫡", "🤫", "🫠", "🤥", "😶", "🫥", "😐", "🫤", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😲", "🥱", "😴", "🤤", "😪", "😮", "😵", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🤑", "🤠"]
const randomReaction = reactionMessage[Math.floor(Math.random() * reactionMessage.length)];

async function searchSpotifyTracks(query) {
  const clientId = 'acc6302297e040aeb6e4ac1fbdfd62c3';
  const clientSecret = '0e8439a1280a43aba9a5bc0a16f3f009';
  const auth = Buffer.from(`${clientId}:${clientSecret}`).toString('base64');

  const getToken = async () => {
    const response = await fetch('https://accounts.spotify.com/api/token', {
      method: 'POST',
      timeout: 60000, // 60 seconds
      body: new URLSearchParams({ grant_type: 'client_credentials' }),
      headers: { Authorization: `Basic ${auth}` },
    });
    return (await response.json()).access_token;
  };

  const accessToken = await getToken();
  const offset = 10;
  const searchUrl = `https://api.spotify.com/v1/search?q=${encodeURIComponent(query)}&type=track&offset=${offset}`;
  const response = await fetch(searchUrl, {
    headers: { Authorization: `Bearer ${accessToken}` },
  });
  const data = await response.json();
  return data.tracks.items;
}

function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}

switch(command) {


case 'menu': case 'help': case 'allmenu': case 'han':{
    let kntll = fs.readFileSync('./lib/menu.mp3')
    Ramah.sendMessage(m.chat, { audio: kntll, mimetype: "audio/mp4", ptt: true }, { quoted: m })
Ramah.sendMessage(from, {react: {text: randomReaction, key: m.key}})
let anu = `
╭──❍「 *GREETING* 」❍
├ *Hello👋*
├ USER :  *${m.pushName}* 
├ OWNER : *${global.ownername} ✨* 
├*RUNTIME* : ${runtime(process.uptime())}
╰─┬────❍ ${readmore}
╭─┴❍「 *GUIDE* 」❍
├ |. THIS BOT WAS CREATED 
├ |BY RAMAH SAGE. 
├ | *${global.namabot}*
╰─┬────❍
╭─┴❍「 *𝐌𝐄𝐍𝐔 𝐓𝐎𝐎𝐋𝐒* 」❍
│${setv} ${prefix}play
│${setv} ${prefix}appvn
│${setv} ${prefix}upaudio 
│${setv} ${prefix}ytpm3 
│${setv} ${prefix}ytmp4 
│${setv} ${prefix}playstore 
│${setv} ${prefix}grupsearch
│${setv} ${prefix}fb
│${setv} ${prefix}gimage
│${setv} ${prefix}mediafire
│${setv} ${prefix}gsmarena
│${setv} ${prefix}gdrive
│${setv} ${prefix}videy
│${setv} ${prefix}igmp4
│${setv} ${prefix}tiktok 
│${setv} ${prefix}sfile
│${setv} ${prefix}readmore
│${setv} ${prefix}ttslide
│${setv} ${prefix}igdl
│${setv} ${prefix}sticker
│${setv} ${prefix}qc
│${setv} ${prefix}ttp
│${setv} ${prefix}ttp2
│${setv} ${prefix}ttp4
│${setv} ${prefix}photoleap
│${setv} ${prefix}picsum
│${setv} ${prefix}spotifysearch
│${setv} ${prefix}quote
│${setv} ${prefix}nextlibur
│${setv} ${prefix}drakor
│${setv} ${prefix}rangkum
│${setv} ${prefix}animecharacter
│${setv} ${prefix}kbbi-kemdikbud
│${setv} ${prefix}lahelu
│${setv} ${prefix}pixiv
│${setv} ${prefix}pixeldrain
│${setv} ${prefix}gunungmeletus
│${setv} ${prefix}pahlawannasional
│${setv} ${prefix}bluearchive 
│${setv} ${prefix}rvo
│${setv} ${prefix}penerbit
│${setv} ${prefix}top4top
│${setv} ${prefix}pin
│${setv} ${prefix}steamsearch
│${setv} ${prefix}freetogame
│${setv} ${prefix}elonmu-news
│${setv} ${prefix}ttsearch
│${setv} ${prefix}chord
│${setv} ${prefix}quote
│${setv} ${prefix}npm
│${setv} ${prefix}npmstalk
│${setv} ${prefix}del
│${setv} ${prefix}yts
│${setv} ${prefix}addcase 
│${setv} ${prefix}appvn
│${setv} ${prefix}
│${setv} ${prefix}
│${setv} ${prefix}
│${setv} ${prefix}
│${setv} ${prefix}
╰─┬────❍ ${readmore}
╭─┴❍「 *MENU AI* 」❍
│${setv} ${prefix}gemini
│${setv} ${prefix}morphic
│${setv} ${prefix}songai
│${setv} ${prefix}tomoe
│${setv} ${prefix}prodia
│${setv} ${prefix}editee
│${setv} ${prefix} maintenance 
│${setv} ${prefix}aio
╰─┬────❍
╭─┴❍「 *MENU ISLAM* 」❍
│${setv} ${prefix}quran
│${setv} ${prefix}doaharian
│${setv} ${prefix}kisahnabi
│${setv} ${prefix}surah
╰─┬────❍
╭─┴❍「 *MENU OWNER* 」❍
│${setv} ${prefix}self
│${setv} ${prefix}public
│${setv} ${prefix}everyone 
│${setv} ${prefix}join
│${setv} ${prefix}userjid
│${setv} ${prefix}sendfitur
│${setv} ${prefix}top
│${setv} ${prefix}putar
│${setv} ${prefix}yesorno
│${setv} ${prefix}brutal
╰─┬────❍ ${readmore}
╭─┴❍「 *MENU CHANGER* 」❍
│${setv} ${prefix}bass
│${setv} ${prefix}fat
│${setv} ${prefix}fast
│${setv} ${prefix}deep
│${setv} ${prefix}earrape
│${setv} ${prefix}blown
│${setv} ${prefix}nightcore
│${setv} ${prefix}reverse 
│${setv} ${prefix}robot 
│${setv} ${prefix}slow
│${setv} ${prefix}smooth
│${setv} ${prefix}squirrel 
│${setv} ${prefix}ssweb
│${setv} ${prefix}
│${setv} ${prefix}
│${setv} ${prefix}
╰──────❍`
let messageContent = generateWAMessageFromContent(m.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': anu
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./thumb.png')}, { upload: Ramah.waUploadToServer})), 
                  'title': ``,
                  'gifPlayback': true,
                  'subtitle': global.namabot,
                  'hasMediaAttachment': false  
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0"
            })
          })
        }
      }
    }, {});

    return await Ramah.relayMessage(m.chat, messageContent.message, {})
 }
break;
case 'menu-pict': {
let kntll = fs.readFileSync('./lib/menu.mp3')
    Ramah.sendMessage(m.chat, { audio: kntll, mimetype: "audio/mp4", ptt: true }, { quoted: m })
Ramah.sendMessage(from, {react: {text: randomReaction, key: m.key}})
let anu = `
> *乂 MENU PICT
• waifu
• wallhp
• akira
• akiyama
• ana
• art
• asuna
• ayuzawa
• boruto
• bts
• chiho
• chitoge
• cosplay
• cosplayloli
• cosplaysagiri
• cyber
• deidara
• doraemon
• elaina
• emilia
• erza
• exo
• gamewallpaper
• gremory
• hacker
• hestia
• husbu
• inori
• islamic
• isuzu
• itachi
• itori
• jennie
• jiso
• justina
• kaga
• kagura
• kakasih
• kaori
• cartoon
• shortquote
• keneki
• kotori
• kurumi
• lisa
• loli2
• madara
• megumin
• mikasa
• mikey
• miku
• minato
• mountain
• naruto
• nekonime
• pentol
• nezuko
• onepiece
• pokemon
• programming
• randomnime
• randomnime2
• rize
• rosa
• sagiri
• sakura
• sasuke
• satanic
• shina
• shinka
• shinomiya
• shizuka
• shota
• space
• technology
• tejina
• toukachan
• tsunade
• waifu2
• yotsoba
• yuki
• yulibocil
• yumek

𝕮𝖗𝖊𝖆𝖙𝖊𝖉 𝖆𝖓𝖉 𝖈𝖔𝖒𝖕𝖎𝖑𝖊𝖉 𝖇𝖞 𝕽𝖆𝖒𝖆𝖍 𝕾𝖆𝖌𝖊-𝕿𝖍𝖊 𝖆𝖑𝖕𝖍𝖆

> © ${namabot} 2024 - 2026
┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈✧`
let messageContent = generateWAMessageFromContent(m.chat, {
      'viewOnceMessage': {
        'message': {
          'messageContextInfo': {
            'deviceListMetadata': {},
            'deviceListMetadataVersion': 2
          },
          'interactiveMessage': proto.Message.InteractiveMessage.create({
            'body': proto.Message.InteractiveMessage.Body.create({
              'text': anu
            }),
            'footer': proto.Message.InteractiveMessage.Footer.create({
              'text': ''
            }),
            'header': proto.Message.InteractiveMessage.Header.create({
                ...(await prepareWAMessageMedia({ image : fs.readFileSync('./thumb.png')}, { upload: Ramah.waUploadToServer})), 
                  'title': ``,
                  'gifPlayback': true,
                  'subtitle': global.namabot,
                  'hasMediaAttachment': false  
            }),
            'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.create({
              'buttons': [{
                'name': "cta_url",
                'buttonParamsJson': "{\"display_text\":\"\",\"url\":\"https://www.google.com\",\"merchant_url\":\"https://www.google.com\"}"
              }],
              'messageParamsJson': "\0"
            })
          })
        }
      }
    }, {});

    return await Ramah.relayMessage(m.chat, messageContent.message, {})
 }
break;
case 'appvn': {
//wm Ramah
async function searchAppVn(query) {
const link = "https://appvn.com"
  const response = await fetch(link + "/android/search?keyword=" + query); // Ganti URL dengan URL yang sesuai
  const body = await response.text();
//wm Ramah
  const $ = cheerio.load(body);
  const resultArray = [];
//wm Ramah
  $("div.section-content li.item").each((index, element) => {
    const item = {
      title: $(element).find("div.info > a").text().trim(),
      url: link + $(element).find("div.info > a").attr("href"),
      image: $(element).find("img.lazy").attr("data-src"),
//wm senn
      version: $(element).find("div.vol-chap.ver.text-left > p:first-child").text().trim(),
      date: $(element).find("div.vol-chap.ver.text-left > p.new-chap").text().trim(),
      author: $(element).find("div.new-chap.author > a").text().trim(),
      detailLink: link + $(element).find("div.btn.btn-download > a").attr("href"),
    };
//wm Ramah
    resultArray.push(item);
  });
//wm Ramah
  return resultArray;
}
if (!text) return m.reply('```🚩 Example : .appvn dreamleague```')
//wm Ramah
m.reply('wait a minute...')
let results = await searchAppVn(text)
if (results.length > 0) {
let message = 'Hasil pencarian:\n\n';
//wm Ramah
results.forEach((result, index) => {
message += `Title : ${result.title}\nVersi : ${result.version}\nDeveloper : ${result.author}\nUrl : ${result.url}\n\n`;
 });
//wm Ramah
m.reply(message)
 } else {
m.reply('No result.');
}
//wm Ramah
}
break
case 'addcase': {
 if (!isCreator) return reply('who are you dog?)
 if (!text) return reply('Where is the case?');
    const fs = require('fs');
const namaFile = 'case.js';
const caseBaru = `${text}`;
fs.readFile(namaFile, 'utf8', (err, data) => {
    if (err) {
        console.error('An error occurred while reading the file:', err);
        return;
    }
    const posisiAwalGimage = data.indexOf("case 'addcase':");

    if (posisiAwalGimage !== -1) {
        const kodeBaruLengkap = data.slice(0, posisiAwalGimage) + '\n' + caseBaru + '\n' + data.slice(posisiAwalGimage);
        fs.writeFile(namaFile, kodeBaruLengkap, 'utf8', (err) => {
            if (err) {
                reply('An error occurred while writing the file:', err);
            } else {
                reply('New case successfully added.');
            }
        });
    } else {
        reply('Cannot add case in file.');
    }
});

}
break
case 'ai-logic':{
//if (!isCreator) reply('This is RAMAH SAGE how can I help you')
         if(!text) return m.reply('Hlo hope you are fyn this is Ramah Sage How can I help you??');
         try {
        let logic = 'THIS IS RAMAH SAGE' //The logic is up to you as long as it connects and makes sense   
      await Ramah.sendMessage(m.chat, { react: { text: "💬", key: m.key } }); 
//wm Ramah       
        let aii = await fetchJson(`https://widipe.com/ai/c-ai?prompt=${logic}&text=${text}`);
          await Ramah.sendMessage(m.chat, { text: aii.result,
            contextInfo: { 
              mentions: [m.sender],
                externalAdReply: {
                  showAdAttribution: true,
                    title: `R A M A H  -  A I`,//This can be changed as you wish 
                    body: '',
                    thumbnailUrl: "https://e.top4top.io/p_3197kprnb1.jpg",//gambar pun terserah yo
                    sourceUrl: "https://github.com/tanakasenn",
                    mediaType: 1,
                    renderLargerThumbnail: true
                    }
                  }
                },
//wm Ramah
             { quoted : m }
           )
        } catch ( err ) {
        console.error(err);
       await Ramah.sendMessage(m.chat, { react: { text: "❌", key: m.key } });                
       m.reply("lol sis it will be right later");
     }
//wm Ramah
   }
 break		
case 'ssweb':{
			if (!isCreator) reply('Your not Ramah Sage')
//wm Ramah
				if (!text) return m.reply(`Example: ${prefix + command} https://xxxxxxxxxxxxx`)
			let skrinsut = 'https://rest-api-plugins.vercel.app/api/ssweb?apikey=yo&url=' + q;
//wm Ramah
		await Ramah.sendMessage(m.chat, { image: { url: skrinsut }, caption: 'Done' }, { quoted: m })
//wm Ramah
		}
break
case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let search = await yts(text)
let teks = '*YouTube Search*\n\nResult From '+text+'\nketik *getmusic* untuk mengambil mp3 dan *getvideo* untuk mp4\ngunakan dengan nomor urutan, contoh *getmusic 1*\n\n'
let no = 1
for (let i of search.all) {
teks += `⭔ No Urutan : ${no++}\n⭔ Type : ${i.type}\n⭔ Video ID : ${i.videoId}\n⭔ Title : ${i.title}\n⭔ Views : ${i.views}\n⭔ Duration : ${i.timestamp}\n⭔ Upload At : ${i.ago}\n⭔ Url : ${i.url}\n─────────────────\n`
}
Ramah.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
}
break





		
		
case 'tiktoksearch':
case 'ttsearch': {
    const dann = require('d-scrape')
if (!text) return reply(`Contoh : ${prefix + command} jj epep`)
reply('Sedang Diproses ⏳')
try {
let anu = await dann.search.tiktoks(text)
Ramah.sendMessage(m.chat, { video: { url: anu.no_watermark }, mimetype: 'video/mp4', caption: anu.title }, { quoted : m })
} catch (error) {
reply('Error :v')
}
}
break
        
case 'surah': {
  if (!q) return reply(`Example ${prefix+command} 113`)
async function surah(no){
	return new Promise(async(resolve, reject) => {
		axios.get('https://kalam.sindonews.com/surah/' + no)
		.then(({ data }) => {
			const $ = cheerio.load(data)
			const result = [];
			const ar = [];
			const id = [];
			const lt = [];
			const au = [];
			$('div.breadcrumb-new > ul > li:nth-child(5)').each(function(c,d) {
			result.audio = $(d).find('a').attr('href').replace('surah','audioframe')
			})
			$('div.ayat-arab').each(function(a, b) {
				ar.push($(b).text()) 
			})
			$('li > div.ayat-text').each(function(e, f) {
				id.push($(f).text().replace(',','').trim()) })
			$('div.ayat-latin').each(function(g, h) {
				lt.push($(h).text().trim())	})
			for(let i = 0; i < ar.length ; i++){
			result.push({
				arab: ar[i],
				indo: id[i],
				latin: lt[i],
			})
		}
			resolve(result)
		})
		.catch(reject)
	})
}
surah(q).then(result => {
 if (result.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTexttt = `Hasil dari Surah untuk "${q}":\n\n`;
 result.forEach((result, index) => {
 replyTexttt += `${result.indo}\n${result.arab}\n${result.latin}\n\n`;
 });
 
 m.reply(replyTexttt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat memasuki angka di surah.');
 console.error(error);
 });
}
break
case 'sendfitur': {
if (!isCreator) return reply(mess.OnlyOwner);
if (!m.quoted) return m.reply('Kutip pesan seseorang!');
if (!text) return m.reply(`Contoh: ${prefix+command} menu`);
const getCase = async (caseName) => {
try {
const fileContent = await fs.promises.readFile("./case.js", "utf-8");
const caseRegex = new RegExp(`case '${caseName}'[\\s\\S]*?break`, 'g');
const match = fileContent.match(caseRegex);
if (!match) {
return m.reply(`Case '${caseName}' tidak ditemukan.`);
}
return match[0];
} catch (error) {
return m.reply(`Terjadi kesalahan saat membaca file: ${error.message}`);
}};
const caseName = text.trim();
getCase(caseName)
.then(caseCode => {
const recipient = m.quoted ? m.quoted.sender : m.mentionedJid[0];
if (!recipient || !recipient.includes('@s.whatsapp.net')) {
return m.reply('Format ID WhatsApp tidak valid!');
}
const sendFeature = async (recipient, caseCode) => {
try {
const contact = (await Ramah.onWhatsApp(recipient.split('@')[0]))[0] || {};
if (!contact) return m.reply('Kontak tidak ditemukan di WhatsApp.');
const message = `Hi, kamu dapet kiriman fitur nih!\n\n${caseCode}`;
await Ramah.sendMessage(recipient, { text: message }, { quoted: m });
m.reply('Fitur berhasil terkirim!');
} catch (error) {
console.error('Terjadi kesalahan:', error.message);
m.reply('Terjadi kesalahan saat mengirim fitur: ' + error.message);
}};
sendFeature(recipient, caseCode);
})
.catch(error => m.reply(`Terjadi kesalahan: ${error.message}`));
}
break;

case 'igdl': {
  if (!text) return reply("Example: .igdl ig reels\n\nonly reels")
async function igdl(url) {
  return new Promise(async (resolve, reject) => {
    const payload = new URLSearchParams(
      Object.entries({
        url: url,
        host: "instagram"
      })
    )
    await axios.request({
      method: "POST",
      baseURL: "https://saveinsta.io/core/ajax.php",
      data: payload,
      headers: {
        "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
        cookie: "PHPSESSID=rmer1p00mtkqv64ai0pa429d4o",
        "user-agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36"
      }
    })
    .then(( response ) => {      
      const $ = cheerio.load(response.data)
      const mediaURL = $("div.row > div.col-md-12 > div.row.story-container.mt-4.pb-4.border-bottom").map((_, el) => {
        return "https://saveinsta.io/" + $(el).find("div.col-md-8.mx-auto > a").attr("href")
      }).get()
      const res = {
        status: 200,
        media: mediaURL
      }
      resolve(res)
    })
    .catch((e) => {
      console.log(e)
      throw {
        status: 400,
        message: "error",
      }
    })
  })
}
let kanjutgedeu = await igdl(text)
Ramah.sendMessage(m.chat, {video: {url: kanjutgedeu.media}, caption: mess.success}, {quoted: m})
}
break

case 'kisahnabi': {
if (!text) return reply("nama nabinya?")
let url = await fetch(`https://raw.githubusercontent.com/ZeroChanBot/Api-Freee/a9da6483809a1fbf164cdf1dfbfc6a17f2814577/data/kisahNabi/${text}.json`)
     let kisah = await url.json().catch(_ => "Error")
     if (kisah == "Error") throw "*Not Found*\n*Coba Jangan Gunakan Huruf Kapital*"
     
     let hasil = `_*Nama Nabi :*_ ${kisah.name} 
_*Tanggal Lahir :*_ ${kisah.thn_kelahiran}
_*Tempat Lahir :*_ ${kisah.tmp}
_*Usia :*_ ${kisah.usia}

* — [ K I S A H ] — *

${kisah.description}`

     reply(hasil)
}
break

 case 'prodia': {
if (!q) return m.reply(`quwry?`)
    async function prodia(query) {
        const headers = { // wm avz
            'user-agent': 'Mozilla/5.0 (Linux; Android 11; Avosky) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/104.0.5112.79 Mobile Safari/537.36'
        };
        try {            // wm avz
            const AvoskyX = await axios.get('https://api.prodia.com/generate', {
                params: {
                    "new": "true",
                    "prompt": query,
                    "model": "dreamshaper_6BakedVae.safetensors [114c8abb]",
                    "steps": "50",
                    "cfg": "9.5",
                    "seed": Math.floor(Math.random() * 10000) + 1,
                    "sampler": "Euler",
                    "aspect_ratio": "square"
                }, // wm avz
                headers,
                timeout: 30000
            });
            const avos = AvoskyX.data;
            let AvoskyNih;
            do {
                const syra = await axios.get(`https://api.prodia.com/job/${avos.job}`, { headers });
                AvoskyNih = syra.data;
            } while (AvoskyNih.status !== 'succeeded');
            const imageUrl = `https://images.prodia.xyz/${avos.job}.png?download=1`;
            Ramah.sendMessage(m.chat, { image: { url: imageUrl }, caption: '_donee ketua_.' });
        } catch (error) {
            m.reply('Gagal');
        }
    }    
    prodia(`${q}`);
}
// wm avz
break

case 'npmstalk': {
  if (!text) return reply("Example: .npmstalk axios")
async function npmstalk(packageName) {
  let stalk = await axios.get("https://registry.npmjs.org/"+packageName)
  let versions = stalk.data.versions
  let allver = Object.keys(versions)
  let verLatest = allver[allver.length-1]
  let verPublish = allver[0]
  let packageLatest = versions[verLatest]
  return {
    name: packageName,
    versionLatest: verLatest,
    versionPublish: verPublish,
    versionUpdate: allver.length,
    latestDependencies: Object.keys(packageLatest.dependencies).length,
    publishDependencies: Object.keys(versions[verPublish].dependencies).length,
    publishTime: stalk.data.time.created,
    latestPublishTime: stalk.data.time[verLatest]
  }
}
try {
let jut = await npmstalk(text)
let ahwoi = `[ *NPM STALK* ]

Name: ${jut.name}
Version Latest: ${jut.versionLatest}
Version Publish: ${jut.versionPublish}
Version Update: ${jut.versionUpdate}
Latest Dependencies: ${jut.latestDependencies}
Publish Dependencies: ${jut.publishDependencies}
Publish Time: ${jut.publishTime}
Latest Publish Time: ${jut.latestPublishTime}
`
Ramah.sendMessage(m.chat, {text: ahwoi}, {quoted: m})
} catch (error) {
  m.reply(error.message)
}
}
break

case 'ttp3': {
  if (!text) return reply("Example: .ttp3 hann")
async function ttp(text) {
    try {
        const response = await fetch("https://www.picturetopeople.org/p2p/text_effects_generator.p2p/transparent_text_effect", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/102.0.0.0 Safari/537.36",
                Cookie: "_ga=GA1.2.1667267761.1655982457; _gid=GA1.2.77586860.1655982457; __gads=ID=c5a896288a559a38-224105aab0d30085:T=1655982456:RT=1655982456:S=ALNI_MbtHcmgQmVUZI-a2agP40JXqeRnyQ; __gpi=UID=000006149da5cba6:T=1655982456:RT=1655982456:S=ALNI_MY1RmQtva14GH-aAPr7-7vWpxWtmg; _gat_gtag_UA_6584688_1=1",
            },
            body: new URLSearchParams({
                TextToRender: text,
                FontSize: "100",
                Margin: "30",
                LayoutStyle: "0",
                TextRotation: "0",
                TextColor: "ffffff",
                TextTransparency: "0",
                OutlineThickness: "3",
                OutlineColor: "000000",
                FontName: "Lekton",
                ResultType: "view",
            }).toString(),
        });

        const bodyText = await response.text();
        const $ = cheerio.load(bodyText);
        const results = [];
        $('form[name="MyForm"]').each((index, formElement) => {
            const resultFile = $(formElement).find('#idResultFile').attr('value');
            const refTS = $(formElement).find('#idRefTS').attr('value');
            results.push({
                url: 'https://www.picturetopeople.org' + resultFile,
                title: refTS
            });
        });

        return results;
    } catch (error) {
        console.error('Error:', error);
        return [];
    }
}
try {
let haiij = await ttp(text)
Ramah.sendMessage(m.chat, {image: {url: haiij}.url}, {quoted: m})
} catch (error) {
  reply(`error bang`)
}
}
break 
case 'editee': {
    if (!q) return m.reply(`_Tanya Ap?`);
// wm avz
    async function getSession() {
        const res = await axios.get("https://editee.com/chat-gpt");
        return res.headers['set-cookie'] ? res.headers['set-cookie'][0].split(';')[0].split('=')[1] : null;
    }
// wm avz
    async function avz(query) {
        const sessionCookie = await getSession();
        const headers = {
            "content-type": "application/json",
            "cookie": `editeecom_session=${sessionCookie}`,
            "user-agent": "Mozilla/5.0",
            "x-requested-with": "XMLHttpRequest"
        };
// wm avz
        const response = await axios.post("https://editee.com/submit/chatgptfree", {
            context: " ",
            selected_model: "gemini",
            important: `aV77OsKy`, // ubah aja kalau mau error wkwk
            user_input: query
        }, { headers });
// wm avz
        return response.data;
    }
// wm avz
    try {
        const answer = await avz(q);
        m.reply(answer.text);
    } catch (error) {
        console.error("Error :", error);
        m.reply("Terjadi ?.");
    }
}
break
        
        case 'ttslide': {
    let input = `[!] *wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`

    if (!text) return m.reply(input)

    if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
    
    async function tiktok(url) {
    try {
        const data = new URLSearchParams({
            'id': url,
            'locale': 'id',
            'tt': 'RFBiZ3Bi'
        });

        const headers = {
            'HX-Request': true,
            'HX-Trigger': '_gcaptcha_pt',
            'HX-Target': 'target',
            'HX-Current-URL': 'https://ssstik.io/id',
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
            'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Mobile Safari/537.36',
            'Referer': 'https://ssstik.io/id'
        };

        const response = await axios.post('https://ssstik.io/abc?url=dl', data, {
            headers
        });
        const html = response.data;

        const $ = cheerio.load(html);

        const author = $('#avatarAndTextUsual h2').text().trim();
        const title = $('#avatarAndTextUsual p').text().trim();
        const video = $('.result_overlay_buttons a.download_link').attr('href');
        const audio = $('.result_overlay_buttons a.download_link.music').attr('href');
        const imgLinks = [];
        $('img[data-splide-lazy]').each((index, element) => {
            const imgLink = $(element).attr('data-splide-lazy');
            imgLinks.push(imgLink);
        });

        const result = {
            author,
            title,
            result: video || imgLinks,
            audio
        };
        return result
    } catch (error) {
        console.error('Error:', error);
        return null;
    }
}

try {
    const {
        result } = await tiktok(text);
    m.reply(mess.wait)
    let no = 1
    for (let i of result) {
        Ramah.sendMessage(m.sender, {image: {url: i}, caption: `Gambar ke - ${no++}`}, {quoted: m})
}
} catch (error) {
 m.reply(error)
}
}
break
        
        case 'steamsearch': {
  if (!q) return reply("Example: .steamsearch honkai impact")
async function Steam(search) {
  return new Promise(async (resolve, reject) => {
    try {
      const { data, status } = await axios.get('https://store.steampowered.com/search/?term=' + search)
      const $ = cheerio.load(data)
      const hasil = []
      $('#search_resultsRows > a').each((a, b) => {
        const link = $(b).attr('href')
        const judul = $(b).find(`div.responsive_search_name_combined > div.col.search_name.ellipsis > span`).text()
        const harga = $(b).find(`div.responsive_search_name_combined > div.col.search_price_discount_combined.responsive_secondrow > div.col.search_price.responsive_secondrow `).text().replace(/ /g, '').replace(/\n/g, '')
        var rating = $(b).find(`div.responsive_search_name_combined > div.col.search_reviewscore.responsive_secondrow > span`).attr('data-tooltip-html')
        const img = $(b).find(`div.col.search_capsule > img`).attr('src')
        const rilis = $(b).find(`div.responsive_search_name_combined > div.col.search_released.responsive_secondrow`).text()

        if (typeof rating === 'undefined') {
          var rating = 'no ratings'
        }
        if (rating.split('<br>')) {
          let hhh = rating.split('<br>')
          var rating = `${hhh[0]} ${hhh[1]}`
        }
        hasil.push({
          judul: judul,
          img: img,
          link: link,
          rilis: rilis,
          harga: harga ? harga : 'no price',
          rating: rating
        })
      })
      if (hasil.every(x => x === undefined)) return resolve({ developer: '@xorizn', mess: 'no result found' })
      resolve(hasil)
    } catch (err) {
      console.error(err)
    }
  })
}
Steam(q).then(results => {
 if (results.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyTextt = `Hasil pencarian untuk "${q}":\n\n`;
 results.forEach((hasil, index) => {
 replyTextt += `${index + 1}. ${hasil.judul}\nHarga: ${hasil.harga}\nLink: ${hasil.link}\nRilis: ${hasil.rilis}\nRating: ${hasil.rating}\n\n`;
 });
 
 m.reply(replyTextt);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat mencari game di steam.');
 console.error(error);
 });
}
break
        
        case 'top4top': {
  const request = require("request")
const { fromBuffer } = require('file-type');
async function top4top(baper) {
	return new Promise(async (resolve, reject) => {
		const {
			ext
		} = await fromBuffer(baper) || {}
		var req = await request({
				url: "https://top4top.io/index.php",
				method: "POST",
				"headers": {
					"accept": "text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
					"accept-language": "en-US,en;q=0.9,id;q=0.8",
					"cache-control": "max-age=0",
					'content-type': 'multipart/form-data; boundary=----WebKitFormBoundaryAmIhdMyLOrbDawcA',
					'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+'
				}
			},
			function(error, response, body) {
				if (error) { return resolve({
					result: 'error'
				}) }
				const $ = cheerio.load(body)
				let result = $('div.alert.alert-warning > ul > li > span').find('a').attr('href') || "gagal"
				if (result == "gagal") {
					resolve({
						status: "error",
						msg: "maybe file not allowed or try another file"
					})
				}
				resolve({
					status: "sukses",
					result
				})
			});
		let form = req.form()
		form.append('file_1_', baper, {
			filename: `${Math.floor(Math.random() * 10000)}.` + `${ext}`
		})
		form.append('file_1_', '')
		form.append('submitr', '[ رفع الملفات ]')
	})
}
let spas = "                "
    let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!/image/g.test(mime)) throw "Reply Gambar Aja"
  let media = await q.download()
  let link = await top4top(media)
  let { result, status } = link
  let caption = `*[ ${status.toUpperCase()} ]*

📮 *L I N K :*
${result}
📊 *S I Z E :* ${media.length} Byte
`

reply(caption)
}
break
        
        case 'chord': {
async function chord(query) {
 return new Promise(async (resolve, reject) => {
 try {
 const head = {
 "User-Agent": "Mozilla/5.0 (Linux; Android 9; CPH1923) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/93.0.4577.62 Mobile Safari/537.36",
 "Cookie": "__gads=ID=4513c7600f23e1b2-22b06ccbebcc00d1:T=1635371139:RT=1635371139:S=ALNI_MYShBeii6AFkeysWDKiD3RyJ1106Q; _ga=GA1.2.409783375.1635371138; _gid=GA1.2.1157186793.1635371140; _fbp=fb.1.1635371147163.1785445876"};
 
 const { data } = await axios.get(`http://app.chordindonesia.com/?json=get_search_results&exclude=date,modified,attachments,comment_count,comment_status,thumbnail,thumbnail_images,author,excerpt,content,categories,tags,comments,custom_fields&search=${query}`, { headers: head });
 
 const anu = await axios.get(`http://app.chordindonesia.com/?json=get_post&id=${data.posts[0].id}`, { headers: head });
 
 let $ = cheerio.load(anu.data.post.content);
 
 resolve({
 title: $("img").attr("alt"),
 chord: $("pre").text().trim()
 });
 } catch (error) {
 reject(error);
 }
 });
}

if (!text) return m.reply('Input Judul Lagu');
 
let query = text.replace(/\s/g, '+'); // Mengganti spasi dengan "+"
let a = await chord(query);
 
m.reply(`*Song :* ${a.title}\n*Chord :*\n\n${a.chord}`);
};
break
case 'quran': {
const quran = JSON.parse(fs.readFileSync('./lib/quran.json'))
var tobatlah = pickRandom(quran)
let bismillah = `[ *QURAN* ]

Nomor Surah: ${tobatlah.nomor}
Surah: ${tobatlah.nama}
Asma: ${tobatlah.asma}
Arti: ${tobatlah.arti}
Tipe: ${tobatlah.type}
Nomor Urut: ${tobatlah.urut}
Keterangan: ${tobatlah.keterangan}

${global.namabot}
`
reply(bismillah)
}
break
case 'quotes': {
const quo = JSON.parse(fs.readFileSync('./lib/quotes.json'))
var teu = pickRandom(quo)
let beir = `[ *QUOTES* ]

Quote: ${teu.quote}
Author: ${teu.author}
Catogory: ${teu.category}

${global.namabot}
`
reply(beir)
}
break
case 'penerbit': {
const quoo = JSON.parse(fs.readFileSync('./lib/penerbit.json'))
var teup = pickRandom(quoo)
let mnk = `[ *PENERBIT* ]

Penerbit: ${teup.penerbit}
No Anggota: ${teup.no_anggota}
Wilayah: ${teup.wilayah}
Tahun: ${teup.tahun_masuk}
Anggota Luar Biasa: ${teup.anggota_luar_biasa}

${global.namabot}
`
reply(mnk)
}
break
case 'pahlawannasional': {
const quoo = JSON.parse(fs.readFileSync('./lib/penerbit.json'))
var teup = pickRandom(quoo)
let mnk = `[ *PENERBIT* ]

Penerbit: ${teup.penerbit}
No Anggota: ${teup.no_anggota}
Wilayah: ${teup.wilayah}
Tahun: ${teup.tahun_masuk}
Anggota Luar Biasa: ${teup.anggota_luar_biasa}

${global.namabot}
`
reply(mnk)
}
break
case 'gunungmeletus': {
const quooo = JSON.parse(fs.readFileSync('./lib/gunungmeletus.json'))
var teupp = pickRandom(quooo)
let mnka = `[ *GUNUNG MELETUS* ]

Nama: ${teupp.nama}
Bentuk: ${teupp.bentuk}
Tinggi Meter: ${teupp.tinggi_meter}
Tahun: ${teupp.estimasi_letusan_terakhir}
Lokasi: ${teupp.geolokasi}

${global.namabot}
`
reply(mnka)
}
break
case 'genshinimpact': {
const qpo = JSON.parse(fs.readFileSync('./lib/genshinimpact.json'))
var knut = pickRandom(qpo)
let bjirpo = `[ *GENSHIN IMPACT* ]

Nama: ${knut.name}
Elemen: ${knut.elemenType}
Link: ${knut.link}

${global.namabot}
`
Ramah.sendMessage(m.chat, {image: {url: knut.imgSrc}, caption: bjirpo}, {quoted: m})
}
break
case 'tomoe': {
    if (!text) {
        return m.reply(`Contoh: .tomoe hai manis`);
    }

const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ'; // Dapatkan apikey dari  https://aistudio.google.com/app/apikey
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; 
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};

    m.reply("tomoe sedang berfikir...");
    const prompt = `Nama kamu adalah tomoe, kamu adalah assisten virtual yang dikembangkan langsung dari google.`;
    const combinedPrompt = `${prompt} ${text}`;
    try {
        // Mengirim prompt ke API Gemini
        const response = await sendToGemini(combinedPrompt);

        if (response) {
            const candidates = response.candidates;
            let message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text
                : 'Tidak ada respons yang diterima dari model.';
            
            // Mengganti ** dengan * dan mengedit jawaban jika perlu
            message = message.replace(/\*\*/g, '*').replace(/#{2,}/g, '#');

            // Mengirim respons dari Gemini ke user
            await Ramah.sendMessage(m.chat, { text: message }, { quoted: m });
        } else {
            await Ramah.sendMessage(
                m.chat,
                { text: 'Gagal mendapatkan respons dari Gemini.' },
                { quoted: m }
            );
        }
    } catch (error) {
        console.error(error);
        await Ramah.sendMessage(
            m.chat,
            { text: 'Terjadi kesalahan saat memproses permintaan Anda.' },
            { quoted: m }
        );
    }
}
break
case 'waifu': {
const waifud = await fetchJson 
(`https://pic.re/image.json`)
const waifut = "https://" + waifud.file_url
  Ramah.sendMessage(from, { image: { url: waifut }, caption: `Hell nah\n\nSize: ${waifud.file_size}` }, { quoted: m })
}
break
case 'elonmu-news': {
const arsipp = await fetchJson 
(`https://elonmu.sh/api`)
  let bluee = `[ *ELONMU-NEWS* ]
  
  Source: ${arsipp.source}
  Title: ${arsipp.title}
  Deskripsi: ${arsipp.description}
  Link: ${arsipp.link}
  Rilis Berita: ${arsipp.publishDate}
  `
  Ramah.sendMessage(from, {image: {url: arsipp.urlImage}, caption: bluee}, {quoted: m})
}
break
case 'tebakumur': {
          if (!text) return m.reply("Example .tebakumur hann")
const mmeeg = await fetchJson 
(`https://api.agify.io/?name=${text}`)
  let qour = `[ *TEBAK UMUR* ]
  
  Count: ${mmeeg.count}
  Nama: ${mmeeg.name}
  Umur: ${mmeeg.age}
  `
  await Ramah.sendMessage(from, {text: qour}, {quoted: m})
}
break
case 'freetogame': {
const kocakk = await fetchJson 
(`https://www.freetogame.com/api/games?platform=pc`)
let brak = pickRandom(kocakk)
  let gamefree = `[ *FREE TO GAME* ]
  
  Judul: ${brak.title}
  Deskripsi: ${brak.short_description}
  Link: ${brak.game_url}
  Genre: ${brak.genre}
  Platform: ${brak.platform}
  Publisher: ${brak.publisher}
  Developer: ${brak.developer}
  Rilis: ${brak.release_date}
  `
  await Ramah.sendMessage(from, {image: {url: brak.thumbnail}, caption: gamefree}, {quoted: m})
}
break
case 'yesorno': {
          if (!text) return reply("Example .yesorno aku ganteng ga")
const haij = await fetchJson 
(`https://yesno.wtf/api`)
  let prik = `[ *YES OR NO* ]
  
  Pertanyaan: ${text}
  Jawaban: ${haij.answer}
  `
  let buttonMessage = {
                 video: {url: haij.image},
                 gifPlayback:true,
                    caption: prik,
                }
            Ramah.sendMessage(m.chat, buttonMessage,{ quoted:m })
}
break
case 'doaharian': {
var pripayerr = [
  {
    "id": "1",
    "doa": "Doa sebelum tidur",
    "ayat": "بِسْمِكَ االلّٰهُمَّ اَحْيَا وَبِاسْمِكَ اَمُوْتُ",
    "latin": "Bismikallaahumma ahyaa wa ammuut",
    "artinya": "Dengan menyebut nama Allah, aku hidup dan aku mati"
  },
  {
    "id": "2",
    "doa": "Doa bangun tidur",
    "ayat": "اَلْحَمْدُ ِللهِ الَّذِىْ اَحْيَانَا بَعْدَمَآ اَمَاتَنَا وَاِلَيْهِ النُّشُوْرُ",
    "latin": "Alhamdu lillahil ladzii ahyaanaa ba’da maa amaa tanaa wa ilahin nusyuuru",
    "artinya": "Segala puji bagi Allah yang telah menghidupkan kami sesudah kami mati (membangunkan dari tidur) dan hanya kepada-Nya kami dikembalikan"
  },
  {
    "id": "3",
    "doa": "Doa masuk kamar mandi",
    "ayat": "اَللّٰهُمَّ اِنّىْ اَعُوْذُبِكَ مِنَ الْخُبُثِ وَالْخَبَآئِثِ",
    "latin": "Allahumma Innii a'uudzubika minal khubutsi wal khoaaitsi",
    "artinya": "Ya Allah, aku berlindung pada-Mu dari godaan setan laki-laki dan setan perempuan"
  },
  {
    "id": "4",
    "doa": "Doa ketika bercermin",
    "ayat": "اَلْحَمْدُ ِللهِ كَمَا حَسَّنْتَ خَلْقِىْ فَحَسِّـنْ خُلُقِىْ",
    "latin": "Alhamdulillaahi kamaa hassanta kholqii fahassin khuluqii",
    "artinya": "Segala puji bagi Allah, baguskanlah budi pekertiku sebagaimana Engkau telah membaguskan rupa wajahku"
  },
  {
    "id": "5",
    "doa": "Doa keluar rumah",
    "ayat": "بِسْمِ اللهِ تَوَكَّلْتُ عَلَى اللهِ لاَحَوْلَ وَلاَقُوَّةَ اِلاَّ بِالله",
    "latin": "Bismillaahi tawakkaltu 'alalloohi laa hawlaa walaa quwwata illaa bilaahi",
    "artinya": "Dengan menyebut nama Allah aku bertawakal kepada Allah, tiada daya kekuatan melainkan dengan pertolongan Allah."
  },
  {
    "id": "6",
    "doa": "Doa masuk rumah",
    "ayat": "اَللّٰهُمَّ اِنّىْ اَسْأَلُكَ خَيْرَالْمَوْلِجِ وَخَيْرَالْمَخْرَجِ بِسْمِ اللهِ وَلَجْنَا وَبِسْمِ اللهِ خَرَجْنَا وَعَلَى اللهِ رَبّنَا تَوَكَّلْنَا",
    "latin": "Allahumma innii as-aluka khoirol mauliji wa khoirol makhroji bismillaahi wa lajnaa wa bismillaahi khorojnaa wa'alallohi robbina tawakkalnaa",
    "artinya": "Ya Allah, sesungguhnya aku mohon kepada-Mu baiknya tempat masuk dan baiknya tempat keluar dengan menyebut nama Allah kami masuk, dan dengan menyebut nama Allah kami keluar dan kepada Allah Tuhan kami, kami bertawakkal"
  },
  {
    "id": "7",
    "doa": "Doa memohon ilmu yang bermanfaat",
    "ayat": "اَللّٰهُمَّ اِنِّى اَسْأَلُكَ عِلْمًا نَافِعًا وَرِزْقًا طَيِّبًا وَعَمَلاً مُتَقَبَّلاً",
    "latin": "Allahumma innii as-aluka 'ilmaan naafi'aan wa rizqoon thoyyibaan wa 'amalaan mutaqobbalaan",
    "artinya": "Ya Allah, sesungguhnya aku mohon kepada-Mu ilmu yang berguna, rezki yang baik dan amal yang baik Diterima. (H.R. Ibnu Majah)"
  },
  {
    "id": "8",
    "doa": "Doa sebelum belajar",
    "ayat": "يَارَبِّ زِدْنِىْ عِلْمًا وَارْزُقْنِىْ فَهْمًا",
    "latin": "Yaa robbi zidnii 'ilman warzuqnii fahmaa",
    "artinya": "Ya Allah, tambahkanlah aku ilmu dan berikanlah aku rizqi akan kepahaman"
  },
  {
    "id": "9",
    "doa": "Doa sesudah belajar",
    "ayat": "اَللّٰهُمَّ اِنِّى اِسْتَوْدِعُكَ مَاعَلَّمْتَنِيْهِ فَارْدُدْهُ اِلَىَّ عِنْدَ حَاجَتِىْ وَلاَ تَنْسَنِيْهِ يَارَبَّ الْعَالَمِيْنَ",
    "latin": "Allaahumma innii astaudi'uka maa 'allamtaniihi fardud-hu ilayya 'inda haajatii wa laa tansaniihi yaa robbal 'alamiin",
    "artinya": "Ya Allah, sesungguhnya aku menitipkan kepada Engkau ilmu-ilmu yang telah Engkau ajarkan kepadaku, dan kembalikanlah kepadaku sewaktu aku butuh kembali dan janganlah Engkau lupakan aku kepada ilmu itu wahai Tuhan seru sekalian alam."
  },
  {
    "id": "10",
    "doa": "Doa sebelum wudhu",
    "ayat": "نَوَيْتُ الْوُضُوْءَ لِرَفْعِ الْحَدَثِ اْلاَصْغَرِ فَرْضًا لِلّٰهِ تَعَالَى",
    "latin": "Nawaitul whudu-a lirof'il hadatsii ashghori fardhon lillaahi ta'aalaa",
    "artinya": "Saya niat berwudhu untuk menghilangkan hadast kecil fardu (wajib) karena Allah ta'ala"
  },
  {
    "id": "11",
    "doa": "Doa setelah wudhu",
    "ayat": "اَشْهَدُ اَنْ لاَّاِلَهَ اِلاَّاللهُ وَحْدَهُ لاَشَرِيْكَ لَهُ وَاَشْهَدُ اَنَّ مُحَمَّدًاعَبْدُهُ وَرَسُوْلُهُ. اَللّٰهُمَّ اجْعَلْنِىْ مِنَ التَّوَّابِيْنَ وَاجْعَلْنِىْ مِنَ الْمُتَطَهِّرِيْنَ، وَجْعَلْنِيْ مِنْ عِبَادِكَ الصَّالِحِيْنَ",
    "latin": "Asyhadu allaa ilaaha illalloohu wahdahuu laa syariika lahu wa asyhadu anna muhammadan ‘abduhuuwa rosuuluhuu, alloohummaj’alnii minat tawwaabiina waj’alnii minal mutathohhiriina, waj'alnii min 'ibadikash shaalihiina.",
    "artinya": "Aku bersaksi, tidak ada Tuhan selain Allah Yang Maha Esa, tidak ada sekutu bagi-Nya, dan aku mengaku bahwa Nabi Muhammad itu adalah hamba dan Utusan Allah. Ya Allah, jadikanlah aku dari golongan orang-orang yang bertaubat dan jadikanlah aku dari golongan orang-orang yang suci dan jadikanlah aku dari golongan hamba-hamba Mu yang shaleh"
  },
  {
    "id": "12",
    "doa": "Doa sebelum membaca al-qur'an",
    "ayat": "اَللّٰهُمَّ افْتَحْ عَلَىَّ حِكْمَتَكَ وَانْشُرْ عَلَىَّ رَحْمَتَكَ وَذَكِّرْنِىْ مَانَسِيْتُ يَاذَاالْجَلاَلِ وَاْلاِكْرَامِ",
    "latin": "Allahummaftah 'alayya hikmataka wansyur 'alayya rohmataka wa dzakkirnii maanasiitu yaa dzal jalaali wal ikhroomi",
    "artinya": "Ya Allah bukakanlah hikmahMu padaku, bentangkanlah rahmatMu padaku dan ingatkanlah aku terhadap apa yang aku lupa, wahai Dzat yang memiliki keagungan dan kemuliaan"
  },
  {
    "id": "13",
    "doa": "Doa setelah membaca al-qur'an",
    "ayat": "اَللّٰهُمَّ ارْحَمْنِىْ بِالْقُرْآنِ. وَاجْعَلْهُ لِىْ اِمَامًا وَنُوْرًا وَّهُدًى وَّرَحْمَةً. اَللّٰهُمَّ ذَكِّرْنِىْ مِنْهُ مَانَسِيْتُ وَعَلِّمْنِىْ مِنْهُ مَاجَهِلْتُ. وَارْزُقْنِىْ تِلاَ وَتَهُ آنَآءَ اللَّيْلِ وَاَطْرَافَ النَّهَارٍ. وَاجْعَلْهُ لِىْ حُجَّةً يَارَبَّ الْعَالَمِيْنَ",
    "latin": "Allahummarhamnii bil qur'aani. waj'alhu lii imaaman wa nuuran wa hudan wa rohman. Allahumma dzakkirnii minhu maa nasiitu wa'allimnii minhu maa jahiltu. wazuqnii tilaa watahu aanaa-al laili wa athroofan nahaari. waj'alhu lii hujjatan yaa robbal 'aalamiina.",
    "artinya": "Ya Allah, rahmatilah aku dengan Al-Quran yang agung, jadikanlah ia bagiku ikutan cahaya petunjuk rahmat. Ya Allah, ingatkanlah apa yang telah aku lupa dan ajarkan kepadaku apa yang tidak aku ketahui darinya, anugerahkanlah padaku kesempatan membacanya pada sebagian malam dan siang, jadikanlah ia hujjah yang kuat bagiku, wahai Tuhan seru sekalian alam."
  },
  {
    "id": "14",
    "doa": "Doa sebelum mandi",
    "ayat": "اَللّٰهُمَّ اغْفِرْلِى ذَنْبِى وَوَسِّعْ لِى فِىْ دَارِىْ وَبَارِكْ لِىْ فِىْ رِزْقِىْ",
    "latin": "Allahummaghfirlii dzambii wa wassi'lii fii daarii wa baarik lii fii rizqii",
    "artinya": "Ya Allah ampunilah dosa kesalahanku dan berilah keluasaan di rumahku serta berkahilah pada rezekiku"
  },
  {
    "id": "15",
    "doa": "Doa hendak berpergian",
    "ayat": "اَللّٰهُمَّ هَوِّنْ عَلَيْنَا سَفَرَنَا هَذَا وَاطْوِعَنَّابُعْدَهُ اَللّٰهُمَّ اَنْتَ الصَّاحِبُ فِى السَّفَرِوَالْخَلِيْفَةُفِى الْاَهْلِ",
    "latin": "Allahumma hawwin 'alainaa safaranaa hadzaa waatwi 'annaa bu'dahu. Alloohumma antashookhibu fiissafari walkholiifatu fiil ahli",
    "artinya": "Ya Allah, mudahkanlah kami berpergian ini, dan dekatkanlah kejauhannya. Ya Allah yang menemani dalam berpergian, dan Engkau pula yang melindungi keluarga."
  },
  {
    "id": "16",
    "doa": "Doa ketika sampai di tempat tujuan",
    "ayat": "اَلْحَمْدُ ِللهِ الَّذِى سَلَمَنِى وَالَّذِى اَوَنِى وَالَّذِى جَمَعَ الشَّمْلَ بِ",
    "latin": "Alhamdulillahil ladzi sallamani wal ladzi awani wal ladzi jama’asy syamla bi",
    "artinya": "Segala puji bagi Allah, yang telah menyelamatkan akau dan yang telah melindungiku dan yang mengumpulkanku dengan keluargaku."
  },
  {
    "id": "17",
    "doa": "Doa memakai pakaian",
    "ayat": "بِسْمِ اللهِ اَللّٰهُمَّ اِنِّى اَسْأَلُكَ مِنْ خَيْرِهِ وَخَيْرِ مَاهُوَ لَهُ وَاَعُوْذُبِكَ مِنْ شَرِّهِ وَشَرِّمَا هُوَلَهُ",
    "latin": "Bismillaahi, Alloohumma innii as-aluka min khoirihi wa khoiri maa huwa lahuu wa'a'uu dzubika min syarrihi wa syarri maa huwa lahuu",
    "artinya": "Dengan nama-Mu yaa Allah akku minta kepada Engkau kebaikan pakaian ini dan kebaikan apa yang ada padanya, dan aku berlindung kepada Engkau dari kejahatan pakaian ini dan kejahatan yang ada padanya"
  },
  {
    "id": "18",
    "doa": "Doa memakai pakaian baru",
    "ayat": " اَلْحَمْدُ لِلّٰهِ الَّذِىْ كَسَانِىْ هَذَا وَرَزَقَنِيْهِ مِنْ غَيْرِ حَوْلٍ مِنِّىْ وَلاَقُوَّةٍ",
    "latin": "Alhamdu lillaahil ladzii kasaanii haadzaa wa rozaqoniihi min ghoiri hawlim minni wa laa quwwatin",
    "artinya": "Segala puji bagi Allah yang memberi aku pakaian ini dan memberi rizeki dengan tiada upaya dan kekuatan dariku"
  },
  {
    "id": "19",
    "doa": "Doa melepas pakaian",
    "ayat": "بِسْمِ اللهِ الَّذِيْ لاَ إِلَهَ إِلَّا هُوَ",
    "latin": "Bismillaahil ladzii laa ilaaha illaa huwa",
    "artinya": "Dengan nama Allah yang tiada Tuhan selain-Nya"
  },
  {
    "id": "20",
    "doa": "Doa menjelang sholat subuh",
    "ayat": "اَللّٰهُمَّ اِنِّى اَعُوْذُ بِكَ مِنْ ضِيْقِ الدُّنْيَا وَضِيْقِ يَوْمِ الْقِيَامَةِ",
    "latin": "Allaahumma inni a'udzubika min dzhiiqid-dunyaa wa dzhiiqi yaumal-qiyaamati",
    "artinya": "Ya Allah! Sesungguhnya aku berlindung kepada-Mu dari kesempitan dunia dan kesempitan hari kiamat. (HR. Abu Daud)"
  },
  {
    "id": "21",
    "doa": "Doa menyambut pagi hari",
    "ayat": "اَللّٰهُمَّ بِكَ اَصْبَحْنَا وَبِكَ اَمْسَيْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ النُّشُوْرُ",
    "latin": "Alloohumma bika ashbahnaa wa bika amsainaa wa bika nahyaa wa bika namuutu wa ilaikan nusyuuru",
    "artinya": "Ya Allah, karena Engkau kami mengalami waktu pagi dan waktu petang, dan karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali."
  },
  {
    "id": "22",
    "doa": "Doa menyambut sore hari",
    "ayat": "اَللّٰهُمَّ بِكَ اَمْسَيْنَا وَبِكَ اَصْبَحْنَا وَبِكَ نَحْيَا وَبِكَ نَمُوْتُ وَاِلَيْكَ الْمَصِيْرُ",
    "latin": "Allahumma bika amsainaa wa bika ashbahnaa wa bika nahyaa wa bika namuutu wa ilaikal mashiir",
    "artinya": "Ya Allah, karena Engkau kami mengalami waktu petang dan waktu pagi, karena Engkau kami hidup dan mati dan kepada-Mu juga kami akan kembali."
  },
  {
    "id": "23",
    "doa": "Doa bercermin",
    "ayat": "اللَّهُمَّ كَمَا حَسَّنْتَ خَلْقِي فَحَسِّنْ خُلُقِي",
    "latin": "Alloohumma kamaa hassanta kholqii fahassin khuluqi",
    "artinya": "Ya Allah, sebagaimana Engkau baguskan tubuhku, maka baguskanlah akhlaqku"
  },
  {
    "id": "24",
    "doa": "Doa pergi ke masjid",
    "ayat": "اللَّهُمَّ اجْعَلْ فِى قَلْبِى نُورًا . وَفِى بَصَرِى نُورًا . وَفِى سَمْعِى نُورًا . وَعَنْ يَمِينِى نُورًا . وَعَنْ يَسَارِى نُورًا . وَفَوْقِى نُورًا . وَتَحْتِى نُورًا . وَأَمَامِى نُورًا . وَخَلْفِى نُورًا . وَاجْعَلْ لِى نُورًا",
    "latin": "Alloohummaj’al fii qolbi nuuron. Wa fii bashori nuuron. Wa fii sam’i nuuron. Wa ‘an yamiinii nuuron. Wa ‘ay yasaarii nuuron. Wa fauqi nuuron. Wa tahti nuuron. Wa amaamii nuuron. Wakholqi nuuron. Waj’al lii nuuron",
    "artinya": "Ya Allah, jadikanlah di dalam hatiku cahaya. Dalam penglihatanku cahaya. Pada pendengaranku cahaya. Sebelah kananku cahaya. Sebelah kiriku cahaya. Atasku cahaya. Bawahku cahaya. Depanku cahaya. Belakangku cahaya. Dan berikanlah cahaya kepadaku."
  },
  {
    "id": "25",
    "doa": "Doa masuk masjid",
    "ayat": "اللَّهُمَّ افْتَحْ لِى أَبْوَابَ رَحْمَتِكَ",
    "latin": "Alloohummaf tahlii abwaaba rohmatik",
    "artinya": "Ya Allah, bukakanlah pintu-pintu rahmatMu untukku"
  },
  {
    "id": "26",
    "doa": "Doa keluar masjid",
    "ayat": "اللَّهُمَّ إِنِّى أَسْأَلُكَ مِنْ فَضْلِكَ",
    "latin": "Alloohumma innii as-aluka min fadllik",
    "artinya": "Ya Allah, sesungguhnya aku memohon keutamaan kepadaMu"
  },
  {
    "id": "27",
    "doa": "Doa setelah adzan",
    "ayat": "اللَّهُمَّ رَبَّ هَذِهِ الدَّعْوَةِ التَّامَّةِ وَالصَّلاَةِ الْقَائِمَةِ آتِ مُحَمَّدًا الْوَسِيلَةَ وَالْفَضِيلَةَ وَابْعَثْهُ مَقَامًا مَحْمُودًا الَّذِى وَعَدْتَهُ",
    "latin": "Alloohumma robba haadzihid da’watit taammah washsholaatil qoo-imah. Aati Muhammadanil wasiilata wal fadliilah. Wab’atshu maqooman mahmuudanil ladzii wa ‘adtah",
    "artinya": "Ya Allah, Tuhan panggilan yang sempurna dan shalat yang akan didirikan ini. Berikanlah wasilah dan keutamaan kepada Muhammad. Bangkitkanlah dia pada kedudukan yang terpuji seperti yang Engkau janjikan kepadanya."
  },
  {
    "id": "28",
    "doa": "Doa naik kendaraan",
    "ayat": "سُبْحَانَ الَّذِى سَخَّرَ لَنَا هَذَا وَمَا كُنَّا لَهُ مُقْرِنِينَ وَإِنَّا إِلَى رَبِّنَا لَمُنْقَلِبُونَ",
    "latin": "Subhaanal ladzii sakhkhoro lanaa haadzaa wamaa kunnaa lahuu muqriniin. Wa innaa ilaa robbinaa lamunqolibuun",
    "artinya": "Mahasuci Dia yang telah menundukkan semua ini bagi kami padahal sebelumnya kami tidak mampu menguasainya. Dan sesungguhnya kami akan kembali kepada Tuhan kami."
  },
  {
    "id": "29",
    "doa": "Doa masuk pasar",
    "ayat": "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكُ لَهُ لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِى وَيُمِيتُ وَهُوَ حَىٌّ لاَ يَمُوتُ بِيَدِهِ الْخَيْرُ وَهُوَ عَلَى كُلِّ شَىْءٍ قَدِيرٌ",
    "latin": "Laa ilaaha illalloohu wahdahu laa syariikalah. Lahul mulku walahul hamdu. Yuhyii wa yumiitu wahuwa hayyun laa yamuut. Biyadihil khoir wahuwa ‘alaa kulli syai-in qodiir",
    "artinya": "Tiada tuhan selain Allah Yang Maha Esa, tiada sekutu bagiNya. Dia yang mempunyai kerajaan dan segala pujian. Dialah yang menghidupkan dan mematikan, dan Dia Mahahidup yang tidak mati. Di tangan-Nya segala kebaikan dan Dia Mahakuasa atas segala sesuatu."
  },
  {
    "id": "30",
    "doa": "Doa sebelum makan",
    "ayat": "اَللّٰهُمَّ بَارِكْ لَنَا فِيْمَا رَزَقْتَنَا وَقِنَا عَذَابَ النَّارِ",
    "latin": "Allahumma baarik lanaa fiimaa rozaqtanaa wa qinaa 'adzaa bannaar.",
    "artinya": "Ya Allah, berkahilah kami dalam rezeki yang telah Engkau berikan kepada kami dan peliharalah kami dari siksa api neraka"
  },
  {
    "id": "31",
    "doa": "Doa sesudah makan",
    "ayat": "اَلْحَمْدُ ِللهِ الَّذِىْ اَطْعَمَنَا وَسَقَانَا وَجَعَلَنَا مُسْلِمِيْنَ",
    "latin": "Alhamdulillahilladzi ath-amanaa wa saqoonaa wa ja'alanaa minal muslimiin.",
    "artinya": "Segala puji bagi Allah yang telah memberi kami makan dan minum serta menjadikan kami termasuk dari kaum muslimin."
  },
  {
    "id": "32",
    "doa": "Doa ketika turun hujan",
    "ayat": "اللَّهُمَّ صَيِّبًا نَافِعًا",
    "latin": "Allahumma shayyiban nafi’an.",
    "artinya": "Ya Allah, curahkanlah air hujan yang bermanfaat. (HR Bukhar dari Aisyah RA)"
  },
  {
    "id": "33",
    "doa": "Doa ketika takut bahaya hujan lebat",
    "ayat": "اللَّهُمَّ حَوَالَيْنَا وَلاَ عَلَيْنَا ، اللَّهُمَّ عَلَى الآكَامِ وَالظِّرَابِ ، وَبُطُونِ الأَوْدِيَةِ ، وَمَنَابِتِ الشَّجَرِ",
    "latin": "Allahumma hawalaina wala ‘alaina. Allahumma ‘alal akami wa adhirabi, wa buthunil auwdiyati, wamanabitisyajari.",
    "artinya": "Ya Allah turunkan hujan ini di sekitar kami jangan di atas kami. Ya Allah curahkanlah hujan ini di atas bukit-bukit, di hutan-hutan lebat, di gunung-gunung kecil, di lembah-lembah, dan tempat-tempat tumbuhnya pepohonan. (HR Bukhari Muslim)"
  },
  {
    "id": "34",
    "doa": "Doa setelah turun hujan",
    "ayat": "مُطِرْنَا بِفَضْلِ اللـهِ ورَحْمَتِهِ",
    "latin": "Muthirnaa bifadhlillahi wa rahmatihi.",
    "artinya": "Diturunkan kepada kami hujan berkat anugerah Allah dan rahmat-Nya. (HR Bukhari)"
  },
  {
    "id": "35",
    "doa": "Doa bertemu binatang buas",
    "ayat": "إِنَّهُۥ مِن سُلَيْمَٰنَ وَإِنَّهُۥ بِسْمِ ٱللَّهِ ٱلرَّحْمَٰنِ ٱلرَّحِيمِ",
    "latin": "Innahụ min sulaimāna wa innahụ bismillāhir-raḥmānir-raḥīm",
    "artinya": "Sesungguhnya surat itu, dari SuIaiman dan sesungguhnya (isi)nya: Dengan menyebut nama Allah Yang Maha Pemurah lagi Maha Penyayang. (Qs. An Naml: 30 )"
  },
  {
    "id": "36",
    "doa": "Doa agar selalu dicukupkan rezeki",
    "ayat": "اَللّٰهُمَّ اَكْفِنِيْ بِحَلَالِكَ عَنْ حَرَامِكَ، وَأَغْنِنِيْ بِفَضْلِكَ عَمَّنْ سِوَاكَ",
    "latin": "Allahummakfini bihalalika ‘an haramik wa aghnini bifadhlika amman siwak",
    "artinya": "Ya Allah, berilah aku kecukupan dengan rezeki yang halal, sehingga aku tidak memerlukan yang haram, dan berilah aku kekayaan dengan karuniamu, sehingga aku tidak memerlukan bantuan orang lain, selain diri-mu. (HR. Ahmad)"
  },
  {
    "id": "37",
    "doa": "Doa ketika menyisir rambut",
    "ayat": "اَللّهُمَّ حَرِّمْ شَعْرِى وَبَشَرِى عَلىَ النَّار",
    "latin": "ALLAHUMMA HARRIM SYA'RII WA BASYARII 'ALAN NAAR",
    "artinya": "Ya Allah, halangilah rambut dan kulitku dari api neraka"
  }
]
var tobat = pickRandom(pripayerr)
let deks = ` [ *DOA HARIAN* ]

- ${tobat.doa}

Ayat: ${tobat.ayat}
Latin: ${tobat.latin}
Artinya: ${tobat.artinya}
`
m.reply(deks)
}
break
case 'ttp2': {
  if (!q) return m.reply(`input teks`)
// wm avz
  const { createCanvas, loadImage } = require('canvas');
  const { Buffer } = require('buffer');
  const canvasWidth = 800;
  const canvasHeight = 600;
  const backgroundColor = '#f0f0f0';
// wm avz
  const canvas = createCanvas(canvasWidth, canvasHeight);
  const ctx = canvas.getContext('2d');
// wm avz
  const backgroundImage = 'https://example.com/background-image.jpg';
  try {
    const img = await loadImage(backgroundImage);
    ctx.drawImage(img, 0, 0, canvasWidth, canvasHeight);
  } catch (error) {
    ctx.fillStyle = backgroundColor;
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
  }
// wm avz
  ctx.strokeStyle = '#000';
  ctx.lineWidth = 4;
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.strokeRect(20, 20, canvasWidth - 40, canvasHeight - 40);
// wm avz
  let fontSize = 80;
  ctx.font = `${fontSize}px 'Arial'`;
  ctx.textAlign = 'center';
  ctx.textBaseline = 'middle';
  ctx.fillStyle = '#333';
// wm avz  
  const textGradient = ctx.createLinearGradient(0, 0, canvasWidth, canvasHeight);
  textGradient.addColorStop(0, '#ff0000');
  textGradient.addColorStop(1, '#0000ff');
  ctx.fillStyle = textGradient;
// wm avz
  let textWidth = ctx.measureText(text).width;
  while (textWidth > canvasWidth - 40) {
    fontSize--;
    ctx.font = `${fontSize}px 'Arial'`;
    textWidth = ctx.measureText(text).width;
  }
// wm avz
  ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';
  ctx.shadowBlur = 10;
  ctx.fillText(text, canvasWidth / 2, canvasHeight / 2);
// wm avz
  const buffer = canvas.toBuffer('image/png');
// wm avz
  Ramah.sendImageAsSticker(m.chat, buffer, m, { packname: global.pack, author: global.author });
}
break
        case 'wallhp': case 'akira': case 'akiyama': case 'ana': case 'art': case 'asuna': case 'ayuzawa': case 'boruto': case 'bts': case 'chiho': case 'chitoge': case 'cosplay': case 'cosplayloli': case 'cosplaysagiri': case 'cyber': case 'deidara': case 'doraemon': case 'elaina': case 'emilia': case 'erza': case 'exo':  case 'gamewallpaper': case 'gremory': case 'hacker': case 'hestia': case 'husbu': case 'inori': case 'islamic': case 'isuzu': case 'itachi': case 'itori': case 'jennie': case 'jiso': case 'justina': case 'kaga': case 'kagura': case 'kakasih': case 'kaori': case 'cartoon': case 'shortquote': case 'keneki': case 'kotori': case 'kurumi': case 'lisa': case 'loli2': case 'madara': case 'megumin': case 'mikasa': case 'mikey': case 'miku': case 'minato': case 'mountain': case 'naruto': case 'nekonime': case 'nezuko': case 'onepiece': case 'pentol': case 'pokemon': case 'programming':  case 'randomnime': case 'randomnime2': case 'rize': case 'rose': case 'sagiri': case 'sakura': case 'sasuke': case 'satanic': case 'shina': case 'shinka': case 'shinomiya': case 'shizuka': case 'shota': case 'space': case 'technology': case 'tejina': case 'toukachan': case 'tsunade': case 'waifu2': case 'yotsuba': case 'yuki': case 'yulibocil': case 'yumeko':{
let heyy
if (/akira/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akira.json')
if (/akiyama/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/akiyama.json')
if (/ana/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ana.json')
if (/art/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/art.json')
if (/asuna/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/asuna.json')
if (/ayuzawa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ayuzawa.json')
if (/boneka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boneka.json')
if (/boruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/boruto.json')
if (/bts/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/bts.json')
if (/cecan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cecan.json')
if (/chiho/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chiho.json')
if (/chitoge/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/chitoge.json')
if (/cogan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cogan.json')
if (/cosplay/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplay.json')
if (/cosplayloli/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplayloli.json')
if (/cosplaysagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cosplaysagiri.json')
if (/cyber/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/cyber.json')
if (/deidara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/deidara.json')
if (/doraemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/doraemon.json')
if (/eba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/eba.json')
if (/elaina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/elaina.json')
if (/emilia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/emilia.json')
if (/erza/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/erza.json')
if (/exo/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/exo.json')
if (/femdom/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/femdom.json')
if (/freefire/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/freefire.json')
if (/gamewallpaper/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gamewallpaper.json')
if (/glasses/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/glasses.json')
if (/gremory/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/gremory.json')
if (/hacker/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hekel.json')
if (/hestia/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/hestia.json')
if (/husbu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/husbu.json')
if (/inori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/inori.json')
if (/islamic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/islamic.json')
if (/isuzu/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/isuzu.json')
if (/itachi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itachi.json')
if (/itori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/itori.json')
if (/jennie/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jeni.json')
if (/jiso/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/jiso.json')
if (/justina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/justina.json')
if (/kaga/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaga.json')
if (/kagura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kagura.json')
if (/kakasih/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kakasih.json')
if (/kaori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kaori.json')
if (/cartoon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kartun.json')
if (/shortquote/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/katakata.json')
if (/keneki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/keneki.json')
if (/kotori/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kotori.json')
if (/kpop/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kpop.json')
if (/kucing/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kucing.json')
if (/kurumi/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/kurumi.json')
if (/lisa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/lisa.json')
if (/loli2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/loli.json')
if (/madara/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/madara.json')
if (/megumin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/megumin.json')
if (/mikasa/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikasa.json')
if (/mikey/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mikey.json')
if (/miku/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/miku.json')
if (/minato/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/minato.json')
if (/mobile/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mobil.json')
if (/motor/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/motor.json')
if (/mountain/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/mountain.json')
if (/naruto/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/naruto.json')
if (/nekonime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nekonime.json')
if (/nezuko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/nezuko.json')
if (/onepiece/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/onepiece.json')
if (/pentol/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pentol.json')
if (/pokemon/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pokemon.json')
if (/profil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/profil.json')
if (/progamming/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/programming.json')
if (/pubg/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/pubg.json')
if (/randblackpink/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randblackpink.json')
if (/randomnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime.json')
if (/randomnime2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/randomnime2.json')
if (/rize/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rize.json')
if (/rose/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/rose.json')
if (/ryujin/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/ryujin.json')
if (/sagiri/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sagiri.json')
if (/sakura/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sakura.json')
if (/sasuke/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/sasuke.json')
if (/satanic/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/satanic.json')
if (/shina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shina.json')
if (/shinka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinka.json')
if (/shinomiya/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shinomiya.json')
if (/shizuka/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shizuka.json')
if (/shota/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/shota.json')
if (/space/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tatasurya.json')
if (/technology/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/technology.json')
if (/tejina/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tejina.json')
if (/toukachan/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/toukachan.json')
if (/tsunade/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/tsunade.json')
if (/waifu2/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/waifu.json')
if (/wallhp/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallhp.json')
if (/wallml/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallml.json')
if (/wallmlnime/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/wallnime.json')
if (/yotsuba/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yotsuba.json')
if (/yuki/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yuki.json')
if (/yulibocil/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yulibocil.json')
if (/yumeko/.test(command)) heyy = await fetchJson('https://raw.githubusercontent.com/DGXeon/XeonMedia/master/yumeko.json')
let yeha = heyy[Math.floor(Math.random() * heyy.length)]
Ramah.sendMessage(m.chat, {image: {url: yeha }, caption: mess.success}, {quoted: m})
}
break
case 'putar': {
    if (!text || !text.includes('|')) {
        return m.reply(`Silakan masukkan beberapa opsi dipisahkan oleh "|" (contoh: ${prefix + command} ayam|nasi|pisang|apel)`)
    }
const { createCanvas } = require('canvas')
let previousResult = null
    const items = text.split('|').map(item => item.trim())

    if (items.length < 2) {
        return m.reply('Masukkan setidaknya dua pilihan untuk diputar!')
    }

    let randomIndex, selectedItem
    do {
        randomIndex = Math.floor(Math.random() * items.length)
        selectedItem = items[randomIndex]
    } while (selectedItem === previousResult)

    previousResult = selectedItem

    const canvas = createCanvas(400, 400)
    const ctx = canvas.getContext('2d')

    const colors = ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
    const centerX = canvas.width / 2
    const centerY = canvas.height / 2
    const outerRadius = 150
    const innerRadius = 30
    const angleStep = (2 * Math.PI) / items.length

    items.forEach((item, index) => {
        const startAngle = index * angleStep
        const endAngle = startAngle + angleStep

        ctx.beginPath()
        ctx.moveTo(centerX, centerY)
        ctx.arc(centerX, centerY, outerRadius, startAngle, endAngle)
        ctx.fillStyle = colors[index % colors.length]
        ctx.fill()
        ctx.stroke()

        const textAngle = startAngle + angleStep / 2
        const textX = centerX + outerRadius / 1.5 * Math.cos(textAngle)
        const textY = centerY + outerRadius / 1.5 * Math.sin(textAngle)
        ctx.fillStyle = 'black'
        ctx.font = '20px Arial'
        ctx.fillText(item, textX - ctx.measureText(item).width / 2, textY)
    })

    ctx.beginPath()
    ctx.arc(centerX, centerY, innerRadius, 0, 2 * Math.PI)
    ctx.fillStyle = 'white'
    ctx.fill()

    const arrowLength = 50
    const arrowWidth = 10
    const selectedAngle = randomIndex * angleStep + angleStep / 2

    const arrowTipX = centerX + (outerRadius + 10) * Math.cos(selectedAngle)
    const arrowTipY = centerY + (outerRadius + 10) * Math.sin(selectedAngle)
    const arrowBase1X = centerX + (outerRadius + 10 + arrowWidth) * Math.cos(selectedAngle - Math.PI / 12)
    const arrowBase1Y = centerY + (outerRadius + 10 + arrowWidth) * Math.sin(selectedAngle - Math.PI / 12)
    const arrowBase2X = centerX + (outerRadius + 10 + arrowWidth) * Math.cos(selectedAngle + Math.PI / 12)
    const arrowBase2Y = centerY + (outerRadius + 10 + arrowWidth) * Math.sin(selectedAngle + Math.PI / 12)

    ctx.beginPath()
    ctx.moveTo(arrowTipX, arrowTipY)
    ctx.lineTo(arrowBase1X, arrowBase1Y)
    ctx.lineTo(arrowBase2X, arrowBase2Y)
    ctx.closePath()
    ctx.fillStyle = 'red'
    ctx.fill()
    ctx.strokeStyle = 'black'
    ctx.lineWidth = 2
    ctx.stroke()

    ctx.fillStyle = 'black'
    ctx.font = '15px Arial'
    ctx.fillText('@pontadev', 10, canvas.height - 10)

    const buffer = canvas.toBuffer()

    let msgs = generateWAMessageFromContent(m.chat, {
        viewOnceMessage: {
            message: {
                "messageContextInfo": {
                    "deviceListMetadata": {},
                    "deviceListMetadataVersion": 2
                },
                interactiveMessage: proto.Message.InteractiveMessage.create({
                    body: proto.Message.InteractiveMessage.Body.create({
                        text: `_Nih Kak Hasil Putaran: *${selectedItem}*_`
                    }),
                    footer: proto.Message.InteractiveMessage.Footer.create({
                        text: 'Spin Lagi untuk mencoba lagi'
                    }),
                    header: proto.Message.InteractiveMessage.Header.create({
                        hasMediaAttachment: false,
                        ...await prepareWAMessageMedia({ image: buffer }, { upload: Ramah.waUploadToServer })
                    }),
                    nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.create({
                        buttons: [{
                            "name": "quick_reply",
                            "buttonParamsJson": `{\"display_text\":\"Spin Lagi\",\"id\":\".putar ${text}\"}`
                        }],
                    })
                })
            }
        }
    }, { quoted: m })

    return await Ramah.relayMessage(m.chat, msgs.message, {})
}
break
case 'sfile': {
	if (args[0] && args[0].match(/(https:\/\/sfile.mobi\/)/gi)) {
	  const sfile = {
	search: async (query, page = 1) => {
		let res = await fetch(`https://sfile.mobi/search.php?q=${query}&page=${page}`)
		let $ = cheerio.load(await res.text()), arr = []
		$('div.list').each((idx, el) => {
			let title = $(el).find('a').text(),
				size = $(el).text().trim().split(' (')[1],
				link = $(el).find('a').attr('href')
			if (link) arr.push({ title, size: size.replace(')', ''), link })
		})
		return arr
	},
	download: async url => {
		let res = await fetch(url)
		let $ = cheerio.load(await res.text()), obj = {}
		obj.filename = $('div.w3-row-padding').find('img').attr('alt')
		obj.mimetype = $('div.list').text().split(' - ')[1].split('\n')[0]
		obj.filesize = $('#download').text().replace(/Download File/g, '').replace(/\(|\)/g, '').trim()
		obj.download = await getLink(url)
		return obj
	}
}

async function getLink(url) {
	url = 'https://sfile.mobi/download' + (new URL(url)).pathname
	let html = await (await fetch(url)).text()
	return html.split('" rel="nofollow"')[0].split('start, <a href="')[1]
}
		let res = await sfile.download(args[0])
		if (!res) throw 'Error'
		await m.reply(Object.keys(res).map(v => `*• ${v.capitalize()}:* ${res[v]}`).join('\n') + '\n\n_Sending file..._')
		await Ramah.sendMessage(
			m.chat,
			{
				document: { url: res.download },
				fileName: res.filename,
				mimetype: res.mimetype,
			},
			{ quoted: m },
		);
	} else if (args[0]) {
		let query = args.join` `.split`|`[0], page = parseInt(args.join` `.split`|`[1]) || 1,
			res = await sfile.search(query, page)
		if (!res.length) throw `Query "${query}" not found`
		res = res.map(v => `*Title:* ${v.title}\n*Size:* ${v.size}\n*Link:* ${v.link}`).join`\n\n`
		await reply(res + `\nPage: ${page}`)
	} else return m.reply(`Masukan Query Atau Link!\n\nContoh:\n${prefix + command} growtopia\n${prefix + command} https://sfile.mobi/1BnLYfsHEcO7`)
}
break

case 'songai':
case 'songgen': {
    if (!text) {
        return reply(`Masukkan teks\nContoh: ${prefix + command} aku cinta tobrut`);
    }
    const api = {
    xterm: {
        url: "https://ai.xterm.codes",
        key: "Bell409"
    }
}; 
    const SongGenerator = async (prompt) => {
        try {
            const { key } = await Ramah.sendMessage(m.chat, { text: "Please wait.." }, { quoted: m });
            const response = await axios({
                method: 'post',
                url: `${api.xterm.url}/api/audioProcessing/song-generator`,
                params: { prompt, key: api.xterm.key },
                responseType: 'stream'
            });
            return new Promise((resolve, reject) => {
                response.data.on('data', (chunk) => {
                    try {
                        const eventString = chunk.toString();
                        const eventData = eventString.match(/data: (.+)/);
                        if (eventData && eventData[1]) {
                            const data = JSON.parse(eventData[1]);
                            switch (data.status) {
                                case 'queueing':
                                case 'generating':
                                    Ramah.sendMessage(m.chat, { text: data.msg, edit: key });
                                    break;
                                case 'failed':
                                    response.data.destroy();
                                    reject(new Error(data.msg));
                                    break;
                                case 'success':
                                    response.data.destroy();
                                    resolve(data);
                                    break;
                                default:
                                    Ramah.sendMessage(m.chat, { text: "Unknown status: " + data, edit: key });
                            }
                        }
                    } catch (e) {
                        Ramah.sendMessage(m.chat, { text: "Error processing chunk: " + e.message, edit: key });
                        response.data.destroy();
                        reject(e);
                    }
                });
                response.data.on('error', (err) => {
                    Ramah.sendMessage(m.chat, { text: "Stream error: " + err.message, edit: key });
                    reject(err);
                });
            });
        } catch (error) {
            Ramah.sendMessage(m.chat, { text: "Error: " + error.message, edit: key });
            throw error;
        }
    };
    try {
        const data = await SongGenerator(text);
        await Ramah.sendPresenceUpdate('recording', m.chat);
        await Ramah.sendMessage(m.chat, { audio: { url: data.result.audioUrl }, mimetype: "audio/mpeg", ptt: true }, { quoted: m });
        let doc = {
            text: data.result.lyrics,
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: `http://wa.me/256788028745/${Math.floor(Math.random() * 100000000000000000)}`,
                    title: `${ucapanWaktu} ${m.pushName}`,
                    body: `Created by ${ownername}`,
                    sourceUrl: "https://instagram.com/hanzzrillnopekpek",
                    thumbnail: fkethmb
                }
            }
        };
        await Ramah.sendMessage(m.chat, doc, { quoted: m });  
    } catch (err) {
        console.error(err);
    }
    }
    break;
                case 'userjid':{
          	if(!isCreator) return reply(mess.OnlyOwner)
        const groupMetadata = m.isGroup ? await Ramah.groupMetadata(m.chat).catch((e) => {}) : ""
		const participants = m.isGroup ? await groupMetadata.participants : ""
    let textt = `_Here is jid address of all users of_\n *- ${groupMetadata.subject}*\n\n`
    for (let mem of participants) {
            textt += `${mem.id}\n`
        }
      reply(textt)
    }
    break
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                let media = await Ramah.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return reply(err)
                let buff = fs.readFileSync(ran)
                Ramah.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
                } catch (e) {
                reply(e)
                }
                break
case 'spotify': case 'spotifysearch': {
if (!text) return m.reply('❌ *Spotify Search* ❌\n\nSilakan masukkan kata kunci untuk mencari lagu di Spotify.')
  try {
 do2 = await searchSpotifyTracks(text)
let ini_text = '✨ *Spotify Search* ✨';
for (const x of do2) {
ini_text += `\n
      •🎵 *Judul:* ${x.name}
👥 *Artis:* ${x.artists.map(v => v.name).join(', ')}
👥 *Artis Album:* ${x.album.artists.map(v => v.name).join(', ')}
🆔 *ID:* ${x.id}
📅 *Tanggal Rilis Album:* ${x.album.release_date}
🆔 *ID Album:* ${x.album.id}
🎵 *Jumlah Trek Album:* ${x.album.total_tracks}
🔢 *Nomor Trek:* ${x.album.track_number}
⏳ *Durasi:* ${x.duration_ms} ms
🔗 *Uri:* ${x.uri}
🎵 *URL Album*: ${x.album.external_urls.spotify}\n
───────────────────
`;
}
reply(ini_text)
} catch (e) {
    return m.reply('❌ *Spotify Search* ❌\n\nTerjadi Kesalahan, Coba Lagi Nanti.')
  }
  }
break
	    case 'ttp':{
	   if (!text) return m.reply(` • *Example* ${prefix + command} NoaMu Chan`)
	const text2png = require('text2png');
	await fs.writeFileSync('out.png', text2png(q, {font: '100px coolvetica rg',
		localFontPath: 'src/font/coolvetica rg.otf',
	  localFontName: 'coolvetica rg',                                            
	  color: 'white',
	  textAlign: "left",
	  lineSpacing: 10,
	  strokeColor: "black",
	  strokeWidth : 2,
	  padding: 20}))
	let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
	let media = fs.readFileSync('out.png')
	let jancok = new Sticker(media, {
		pack: global.pack, // The pack name
		author: global.author, // The author name
		type: StickerTypes.FULL, // The sticker type
		categories: ['🤩', '🎉'], // The sticker category
		id: '12345', // The sticker id
		quality: 70, // The quality of the output file
		background: '#FFFFFF00' // The sticker background color (only for full stickers)
	})
	let stok = getRandom(".webp")
	let nono = await jancok.toFile(stok)
	let nah = fs.readFileSync(nono)
	await Ramah.sendMessage(m.chat,{sticker: nah},{quoted:m})
	await fs.unlinkSync(stok)
	await fs.unlinkSync('out.png')
	}
	break
	
	case 'everyone': {
if (!isCreator) return
let mem = m.isGroup ? await groupMetadata.participants.map(a => a.id) : ""
Ramah.sendMessage(m.chat, {
	text: `@${m.chat} ${text}`,
	contextInfo: {
mentionedJid: mem, 
		groupMentions: [
			{
				groupSubject: `everyone - [ *${global.namabot}* ] ||`,
				groupJid: m.chat,
			},
		],
	},
});
}
break
case 'bluearchive': {
var archive = JSON.parse(fs.readFileSync('./lib/bluearchive.json'))
var hasil = pickRandom(archive)
let deks = `
*Info Characters*
----------------------
_👤Nama : ${hasil.character.name}_
🍁Umur : ${hasil.info.age}
⭐Birthday : ${hasil.info.birthDate}
📈Tinggi : ${hasil.info.height}
📖Sekolah : ${hasil.info.school}
☘️Klub : ${hasil.info.club}
🎯Profile : ${hasil.character.profile}
--------------------------
*Stats*
_⚔️Attack level 1 : ${hasil.stat.attackLevel1}_
⚔️Attack level 100 : ${hasil.stat.attackLevel100}
♻️Max Hp Level 1 : ${hasil.stat.maxHPLevel1}
♻️Max Hp Level 100 : ${hasil.stat.maxHPLevel100}
🛡Devense level 1 : ${hasil.stat.defenseLevel1}
🛡Devense level 100 : ${hasil.stat.defenseLevel100}
💚Heal power level 1 : ${hasil.stat.healPowerLevel1}
💚Heal power level 100 : ${hasil.stat.healPowerLevel100}
🪓Def penetrate level 1: ${hasil.stat.defPenetrateLevel1}
🪓Def penetrate level 100 : ${hasil.stat.defPenetrateLevel100}
🔫Ammo count : ${hasil.stat.ammoCount}
🔫Ammo cost : ${hasil.stat.ammoCost}
🔭Range : ${hasil.stat.range}
🌱Move speed : ${hasil.stat.moveSpeed}
❤️‍🩹Street mood : ${hasil.stat.streetMood}
📌Out door mood : ${hasil.stat.outdoorMood}
🛢Indoor mood : ${hasil.stat.indoorMood}
--------------------------
`
Ramah.sendMessage(m.chat, {
text: deks,
contextInfo: {
mentionedJid: [m.sender],
forwardingScore: 9999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: {
newsletterJid: channeljid,
serverMessageId: 20,
newsletterName: channelname
},
externalAdReply: {  
title: `Nama : ${hasil.character.name}`, 
body: `Birthday : ${hasil.info.birthDate}`,
thumbnailUrl: hasil.image.icon, 
sourceUrl: "",
mediaType: 1,
renderLargerThumbnail: false
}}}, { quoted: m }).catch((err) => reply('_⛩️Maaf terjadi Kesalahan!_'))
}
break

case 'quote': {
  try {
    if (!q) return m.reply(`contoh\n\nquote dingin tapi tidak mematikan`);
// wm avs
    const { createCanvas, loadImage } = require('canvas');
    const fs = require('fs');
    const path = require('path');
// wm avs
    const canvasWidth = 800;
    const canvasHeight = 400;
    const canvas = createCanvas(canvasWidth, canvasHeight);
    const ctx = canvas.getContext('2d');
// wm avs
    ctx.fillStyle = '#ffffff'; //serah kalian kalau mau ubah warna
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);
// wm avs
    ctx.fillStyle = '#000000';
    ctx.font = 'bold 32px Arial';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
// wm avs
    const words = q.split(' ');
    const lines = [];
    let currentLine = '';
// wm avs    
    words.forEach(word => {
      const testLine = currentLine + word + ' ';
      const testWidth = ctx.measureText(testLine).width;
      if (testWidth > canvasWidth - 40) {
        lines.push(currentLine);
        currentLine = word + ' ';
      } else {
        currentLine = testLine;
      }
    });
    lines.push(currentLine);
// wm avs
    const lineHeight = 40;
    const textY = (canvasHeight - (lines.length * lineHeight)) / 2;
// wm avs
    lines.forEach((line, index) => {
      ctx.fillText(line.trim(), canvasWidth / 2, textY + (index * lineHeight));
    });
// wm avs
    const outputPath = path.join(__dirname, 'quote.png');
    const out = fs.createWriteStream(outputPath);
    const stream = canvas.createPNGStream();
    stream.pipe(out);
// wm avs
    out.on('finish', async () => {
      await Ramah.sendMessage(from, { image: { url: outputPath }, caption: '_done nih_.', fileName: 'quote.png' }, { quoted: m });
      fs.unlinkSync(outputPath);
    });
// wm avs
} catch (err) {
    console.error(err);
    m.reply('error bntar.');
  }
}
break
case 'mediafire': {
	if (!args[0]) return m.reply(`Masukkan url mediafire\nContoh: ${prefix + command} https://www.mediafire.com/××××××××`);
	async function mediafire(link) {
	return new Promise(async(resolve, reject) => {
		try {
			const res = await axios.get(link);
			const $ = cheerio.load(res.data);
			const url = $('a#downloadButton').attr('href');
			const size = $('a#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('', '').trim();
			const title = url.split('/')[5].split("+").join(" ").split(".").reverse().slice(1).reverse().join(".");
			const type = url.split("/")[5].split('.').reverse()[0];
			resolve({
				title,
				size,
				type,
				url
			});
		} catch (err) {
			reject({
				error: err
			})
		}
	})
}
	m.reply(mess.wait);
	const { title, size, type, url } = await mediafire(args[0]);
	let bjirrbangg = `*Mediafire*\n\nNama: ${title}\Size: ${size}\nMime: ${type}`
  reply(bjirrbangg)
  await Ramah.sendMessage(m.chat, { document: { url: url }, fileName: title, mimetype: type }, { quoted: m })
}
break
        case 'rvo': {
  const isQuotedViewOnce = m.message.extendedTextMessage?.contextInfo?.quotedMessage?.viewOnceMessageV2 ? true : false;
if (!isQuotedViewOnce) return reply('Reply viewonce')
let type = Object.keys(m.quoted.message)[0]
let quotedType = m.quoted.message[type]
let media = await downloadContentFromMessage(quotedType, type == "imageMessage" ? "image" : "video")
let buffer = Buffer.from([])
for await (const chunk of media) {
buffer = Buffer.concat([buffer, chunk])
}
if (/video/.test(type)) {
await Ramah.sendMessage(m.chat, { video: buffer, caption: quotedType.caption })
} else if (/image/.test(type)) {
await Ramah.sendMessage(m.chat, { image: buffer, caption: quotedType.caption })
}
}
break
        case 'pixeldrain': {
	if (!args[0])
		return reply(`Input Pixeldrain URL\n${prefix + command} > Url <\n\nContoh:\n${
		prefix + command
		} https://pixeldrain.com/u/HoGp3Hva\n\n Opsi kedua:\n https://pixeldrain.com/l/2xrapNPF#item=9`);

	if (!/pixeldrain.com\//.test(args[0])) return reply("URL Salah!!");
function formatSize(num) {
	return `${(num / 1000 / 1000).toFixed(2)} MB`;
}

async function fetchFileData(id) {
	const response = await axios.get(
		`https://pixeldrain.com/api/file/${id}/info`,
	);
	const json = response.data;
	const download = `https://pixeldrain.com/api/file/${id}?download`;
	return { download, ...json };
}

async function scrapeListData(url) {
	try {
		const response = await axios.get(url);
		const html = response.data;
		const $ = cheerio.load(html);

		const scriptContent = $("script")
			.toArray()
			.map((script) => $(script).html())
			.find((content) => content.includes("window.viewer_data"));

		if (scriptContent) {
			const viewerDataString = scriptContent.match(
				/window.viewer_data\s*=\s*({.*?});/,
			)[1];
			const viewerData = JSON.parse(viewerDataString);

			const data = viewerData.api_response.files.map((file) => ({
				title: file.name,
				id: file.id,
			}));

			return data;
		} else {
			console.error("window.viewer_data not found");
			return [];
		}
	} catch (error) {
		console.error("Error fetching the page:", error);
		return [];
	}
}
	const url = args[0];
	const fileIdMatch = url.match(/\/u\/(\w+)/);
	const listIdMatch = url.match(/\/l\/(\w+)/);

	if (fileIdMatch) {
		const id = fileIdMatch[1];
		const fileData = await fetchFileData(id);
		const formattedSize = formatSize(fileData.size);
		const sizeMatch = formattedSize.match(/^([\d.]+)\s*(GB|MB)$/i);

		if (!sizeMatch) {
			return m.reply("Unit file size tidak dikenal.");
		}

		const size = parseFloat(sizeMatch[1]);
		const unit = sizeMatch[2].toUpperCase();
		let sizeInMB;

		if (unit === "GB") {
			sizeInMB = size * 1024;
		} else if (unit === "MB") {
			sizeInMB = size;
		} else {
			return m.reply("Unit file size tidak dikenal.");
		}

		const w = "`";

		let message =
			`PixelDrain Downloader\n\n- Name: ${fileData.name}\n` +
			`- Size: ${formattedSize}\n` +
			`- Views: ${fileData.views}\n` +
			`- Downloads: ${fileData.downloads}\n` +
			`- Uploaded: ${fileData.date_upload.split("T")[0]}\n` +
			`- Type: ${fileData.mime_type}\n\n_Sedang Mengirim File..._`;
		await m.reply(message);

		await Ramah.sendMessage(
			m.chat,
			{
				document: { url: fileData.download },
				fileName: fileData.name,
				mimetype: fileData.mime_type,
			},
			{ quoted: m },
		);
	} else if (listIdMatch) {
		Ramah.pixpix = Ramah.pixpix || {};
		const listData = await scrapeListData(url);
		if (listData.length === 0) return m.reply("No files found.");

		const fileList = listData.map((item, index) => ({
			title: item.title,
			id: item.id,
		}));

		const fileListText = fileList
			.map((item, index) => `${index + 1}. ${item.title}`)
			.join("\n");
		const { key } = await reply(`Daftar Hasil:\n\n${fileListText}\n\nBalas pesan ini dengan nomor, link yang ingin ditampilkan.`);
		Ramah.pixpix[m.chat] = {
			list: fileList,
			key,
			timeout: setTimeout(
				() => {
					Ramah.sendMessage(m.chat, { delete: key });
					setTimeout(() => {
						delete Ramah.pixpix[m.chat];
					}, 60 * 1000);
				},
				5 * 60 * 1000,
			),
		};
	} else {
		return reply("URL Salah!!");
	}
}
break
        case 'gdrive': { 
if (!text) return reply(`Example ${prefix + command} url`)
async function GDriveDl(url) {
	let id = (url.match(/\/?id=(.+)/i) || url.match(/\/d\/(.*?)\//))?.[1]
	if (!id) throw 'ID Not Found'
	let res = await fetch(`https://drive.google.com/uc?id=${id}&authuser=0&export=download`, {
		method: 'post',
		headers: {
			'accept-encoding': 'gzip, deflate, br',
			'content-length': 0,
			'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
			'origin': 'https://drive.google.com',
			'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/65.0.3325.181 Safari/537.36',
			'x-client-data': 'CKG1yQEIkbbJAQiitskBCMS2yQEIqZ3KAQioo8oBGLeYygE=',
			'x-drive-first-party': 'DriveWebUi',
			'x-json-requested': 'true' 
		}
	})
	let { fileName, sizeBytes, downloadUrl } =  JSON.parse((await res.text()).slice(4))
	if (!downloadUrl) throw 'Link Download Limit!'
	let data = await fetch(downloadUrl)
	if (data.status !== 200) throw data.statusText
	return {
		downloadUrl, fileName,
		fileSize: (sizeBytes / 1024 / 1024).toFixed(2),
		mimetype: data.headers.get('content-type')
	}
}
try {
  let kanjuttgede = await GDriveDl(text)
  let bjirrbang = `*Google Drive*\n\nNama: ${kanjuttgede.fileName}\nLink: ${kanjuttgede.downloadUrl}`
  reply(bjirrbang)
  await Ramah.sendMessage(m.chat, { document: { url: kanjuttgede.downloadUrl }, fileName: kanjuttgede.fileName, mimetype: kanjuttgede.mimetype }, { quoted: m })
} catch (error) {
  m.reply(`${error.message}`)
}
}
break
case 'morphic': {
  if (!text) return reply(`Example: ${prefix + command} hai`)
async function morphic(query) {
  const url = 'https://www.morphic.sh/';
  const formData = new FormData();
  
  formData.append('1', JSON.stringify({ id: '6399a7e212fa477d1a783edade27c8354a64e1ab', bound: null }));
  formData.append('2', JSON.stringify({ id: '9eed8f3e1c51044505fd5c0d73e8d2a92572691c', bound: null }));
  formData.append('3_input', query);
  formData.append('3_include_images', 'true');
  formData.append('0', JSON.stringify([{"action":"$F1","options":{"onSetAIState":"$F2"}},{"chatId":"9TI931x","messages":[]},"$K3",false,"$undefined","$undefined"]));

  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'User-Agent': 'Mozilla/5.0 (X11; Linux x86_64; rv:130.0) Gecko/20100101 Firefox/130.0',
        Accept: 'text/x-component',
        'Accept-Language': 'en-US,en;q=0.5',
        'Accept-Encoding': 'gzip, deflate, br, zstd',
        Referer: 'https://www.morphic.sh/',
        'Next-Action': 'c54d85c7f9588581807befbe1a35958acc57885b',
        'Next-Router-State-Tree': '%5B%22%22%2C%7B%22children%22%3A%5B%22__PAGE__%22%2C%7B%7D%2C%22%2F%22%2C%22refresh%22%5D%7D%2Cnull%2Cnull%2Ctrue%5D',
        Origin: 'https://www.morphic.sh',
        Connection: 'close',
        Cookie: 'ph_phc_HK6KqP8mdSmxDjoZtHYi3MW8Kx5mHmlYpmgmZnGuaV5_posthog=%7B%22distinct_id%22%3A%220191839d-890a-7a97-b388-bc7191ac7047%22%2C%22%24sesid%22%3A%5B1724490025781%2C%220191839d-8909-72e8-b586-d66ff3bde34f%22%2C1724490025225%5D%7D',
        Priority: 'u=0',
        TE: 'trailers',
      },
      body: formData
    });

    const data = await response.text();

    const regex = /"diff":\[0,"([^"]+)"\]/g;
    let result;
    let finalText = "";

    while ((result = regex.exec(data)) !== null) {
      finalText += result[1];
    }

    return finalText;
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
}
try {
  let hannpler = await morphic(text)
  Ramah.sendMessage(m.chat, {text: hannpler}, {quoted: m})
} catch (error) {
  m.reply("Error bang")
}
}
break
case 'pixiv': {
  if (!text) return reply(`Example: ${prefix + command} harimau`);
  async function pixiv(word) {
  var { get } = require("axios")
  const url = 'https://www.pixiv.net/touch/ajax/tag_portal';
  const params = { word, lang: 'en', version: 'b355e2bcced14892fe49d790ebb9ec73d2287393' };
  const headers = {
    'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/125.0.0.0 Mobile Safari/537.36',
    'Referer': 'https://www.pixiv.net/',
    'Accept-Encoding': 'gzip, deflate, br'
  };
  const { data } = await get(url, { params, headers });
  const illusts = data.body.illusts;
  const random = illusts[Math.floor(Math.random() * illusts.length)].url;
  const image = await axios.get(random, { responseType: 'arraybuffer', headers });

  return image.data;
}
  m.reply(mess.wait)
  let hannunibakwan = await pixiv(text)
  await Ramah.sendMessage(m.chat, { image: hannunibakwan, caption: "Done" }, { quoted:m });
}
break
        case 'playstore': {
  let [tema, urutan] = text.split(/[^\w\s]/g)
  if (!tema) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]")
  m.reply(mess.wait)
  async function playstore(query) {
  let html = (await axios.get(`https://play.google.com/store/search?q=${query}&c=apps`)).data
  let $ = cheerio.load(html)
  return $("div.VfPpkd-aGsRMb").get().map(x => {
    return {
      title: $(x).find("span.DdYX5").text(),
      rating: $(x).find("span.w2kbF").text(),
      author: $(x).find("span.wMUdtb").text(),
      thumbnail: $(x).find(".j2FCNc img").attr("src").replace("s64", "s256"),
      link: "https://play.google.com" + $(x).find("a.Si6A0c").attr("href")
    }
  })
}
  try {
    let data = await playstore(tema)
    if (!urutan) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    if (isNaN(urutan)) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    if (urutan > data.length) return m.reply("Input query!\n*Example:*\n.playstore [query]|[nomor]\n\n*Pilih angka yg ada*\n" + data.map((item, index) => `*${index + 1}.* ${item.title}`).join("\n"))
    let out = data[urutan - 1]
    let caption = `*I N F O R M A S I*

*Judul Aplikasi:* ${out.title || "-"}
*Link:* ${out.link || "-"}
*ID Produk:* ${out.product_id || "-"}
*Rating:* ${out.rating || "-"}
*Pengembang:* ${out.author || "-"}
*Kategori:* ${out.category || "-"}
*Unduhan:* ${out.downloads || "-"}
*Video:* ${out.video || "-"}
*Thumbnail:* ${out.thumbnail || "-"}
*Gambar Fitur:* ${out.feature_image || "-"}
*Deskripsi:* ${out.description || "-"}`
    await m.reply(caption)
  } catch (e) {
    await m.reply(`${error.message}`)
  }
}
break
        case "qc": {
if (!quoted){
const getname = await Ramah.getName(mentionUser[0])
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": getname,
"photo": {
"url": ppuser
}
},
"text": quotedMsg.chats,
"replyMessage": {}
}
]
};
const response = axios.post('https://quotly.netorare.codes/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.pack, author: global.author }
Ramah.sendImageAsSticker(from, buffer, m, opt)
});
} else if (q) {
const json = {
"type": "quote",
"format": "png",
"backgroundColor": "#000000",
"width": 512,
"height": 768,
"scale": 2,
"messages": [
{
"entities": [],
"avatar": true,
"from": {
"id": 1,
"name": pushname,
"photo": {
"url": ppuser
}
},
"text": q,
"replyMessage": {}
}
]
};
const response = axios.post('https://quotly.netorare.codes/generate', json, {
headers: {'Content-Type': 'application/json'}
}).then(res => {
const buffer = Buffer.from(res.data.result.image, 'base64')
const opt = { packname: global.pack, author: global.author }
Ramah.sendImageAsSticker(from, buffer, m, opt)
});
} else {
reply(`Kirim perintah ${prefix+command} text atau reply pesan dengan perintah ${prefix+command}`)
}
}
break
        
        case 'aio': {
    if (!text) return reply(`Penggunaan: ${prefix + command} [link video]\nLIST LINK YANG SUPPORT:\n- YouTube\n- instagram\n- tiktok\n- facebook\n- twitter\n- dan lain lainnya, masih banyak lagi`);
    
class Fuck extends Error {
    constructor(message) {
        super(message);
        this.name = "Fuck";
    }
}

class API {
    constructor(search, prefix) {
        this.api = {
            search: search,
            prefix: prefix
        };
    }

    headers(custom = {}) {
        return {
            'Content-Type': 'application/x-www-form-urlencoded',
            'authority': 'retatube.com',
            'accept': '*/*',
            'accept-language': 'id-MM,id;q=0.9',
            'hx-current-url': 'https://retatube.com/',
            'hx-request': 'true',
            'hx-target': 'aio-parse-result',
            'hx-trigger': 'search-btn',
            'origin': 'https://retatube.com',
            'referer': 'https://retatube.com/',
            'sec-ch-ua': '"Not-A.Brand";v="99", "Chromium";v="124"',
            'sec-ch-ua-mobile': '?1',
            'sec-ch-ua-platform': '"Android"',
            'user-agent': 'Postify/1.0.0',
            ...custom
        };
    }

    handleError(error, context) {
        const errors = error.response ? JSON.stringify(error.response.data || error.message) : error.message;
        console.error(`[${context}] Error:`, errors);
        throw new Fuck(errors);
    }

    getEndpoint(name) {
        return this.api[name];
    }
}

class RetaTube extends API {
    constructor() {
        super('https://retatube.com/api/v1/aio/search', 'https://retatube.com/api/v1/aio/index?s=retatube.com');
    }

    async getPrefix() {
        try {
            const response = await axios.get(this.getEndpoint('prefix'));
            return this.scrapePrefix(response.data); 
        } catch (error) {
            this.handleError(error, 'GetPrefix');
        }
    }

    scrapePrefix(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const prefix = $('#aio-search-box input[name="prefix"]').val();
        return prefix;
    }

    async fetch(videoId) {
        try {
            const prefix = await this.getPrefix();
            const response = await axios.post(this.getEndpoint('search'), `prefix=${encodeURIComponent(prefix)}&vid=${encodeURIComponent(videoId)}`, { headers: this.headers() });
            return this.parseHtml(response.data);
        } catch (error) {
            this.handleError(error, 'Fetch');
        }
    }

    parseHtml(htmlContent) {
        const $ = cheerio.load(htmlContent);
        const result = {
            title: '',
            description: '',
            videoLinks: [],
            audioLinks: []
        };

        $('.col').each((_, element) => {
            const titles = $(element).find('#text-786685718 strong').first();
            result.title = titles.text().replace('Title：', '').trim() || result.title;

            const description = $(element).find('.description').text();
            result.description = description.trim() || '';

            $(element).find('a.button.primary').each((_, linkElement) => {
                const linkUrl = $(linkElement).attr('href');
                const quality = $(linkElement).find('span').text().toLowerCase();

                if (linkUrl !== 'javascript:void(0);') {
                    if (quality.includes('audio')) {
                        result.audioLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    } else {
                        result.videoLinks.push({
                            quality: quality,
                            url: linkUrl
                        });
                    }
                }
            });
        });

        return result;
    }

    async scrape(links) {
        try {
            return await this.fetch(links);
        } catch (error) {
            console.error(`${error.message}`);
            throw error;
        }
    }
}

    const retatube = new RetaTube();
    try {
        const result = await retatube.scrape(text);
        let videoMessage = `*Judul*: ${result.title}\n*Deskripsi*: ${result.description}\n\n*Video*:`;
        let audioMessage = `*Audio*:`;

        // Mengirimkan video
        if (result.videoLinks.length > 0) {
            const video = result.videoLinks[0]; // Mengambil video dengan kualitas terbaik
            await Ramah.sendMessage(m.chat, { video: { url: video.url }, caption: videoMessage }, { quoted: m });
        } else {
            await reply("Maaf, video tidak ditemukan.");
        }

     

    } catch (error) {
        await reply(`Terjadi kesalahan: ${error.message}`);
    }
}
break
case 'top': {
            if (!m.isGroup) return m.reply(mess.OnlyGrup)
if (!text) return m.reply(`Contoh: .top penyuka tobrut`)
let member = participants.map(u => u.id)
            let top1 = member[Math.floor(Math.random() * member.length)]
            let top2 = member[Math.floor(Math.random() * member.length)]
let top3 = member[Math.floor(Math.random() * member.length)]
            let top4 = member[Math.floor(Math.random() * member.length)]
let top5 = member[Math.floor(Math.random() * member.length)]
            let jawab = `Top 5 *${text}*

1. @${top1.split('@')[0]}
2. @${top2.split('@')[0]}
3. @${top3.split('@')[0]}
4. @${top4.split('@')[0]}
5. @${top5.split('@')[0]}
`
            let menst = [top1, top2, top3, top4, top5]
                    await Ramah.sendText(m.chat, jawab, m, {mentions: menst})
            }
            break
            case 'del': case 'd':{
Ramah.sendMessage(m.chat,
{
delete: {
remoteJid: m.chat,
fromMe: true,
id: m.quoted.id,
participant: m.quoted.sender
}
})
}
break
case 's': case 'sticker': case 'stiker': {
if (!quoted) return reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await Ramah.sendImageAsSticker(m.chat, media, m, { packname: global.pack, author: global.author + "\n".repeat(1000) })
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return reply('Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds')
let media = await quoted.download()
let encmedia = await Ramah.sendVideoAsSticker(m.chat, media, m, { packname: global.pack, author: global.author + "\n".repeat(1000) })
} else {
reply(`Send/Reply Images/Videos/Gifs With Captions ${prefix+command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'npms':{
	if (!text) return m.reply('Input Query')
	let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
	let { objects } = await res.json()
	if (!objects.length) throw `Query "${text}" not found :/`
	let txt = objects.map(({ package: pkg }) => {
		return `*${pkg.name}* (v${pkg.version})\n_${pkg.links.npm}_\n_${pkg.description}_`
	}).join`\n\n`
	m.reply(txt)
}
break
case 'nextlibur': {
  m.reply(mess.wait)
  async function nexLibur() {
  const { data } = await axios.get("https://www.liburnasional.com/");
  let libnas_content = [];
  let $ = cheerio.load(data);
  let result = {
    nextLibur:
      "Hari libur" +
      $("div.row.row-alert > div").text().split("Hari libur")[1].trim(),
    libnas_content,
  };
  $("tbody > tr > td > span > div").each(function (a, b) {
    let summary = $(b).find("span > strong > a").text();
    let days = $(b).find("div.libnas-calendar-holiday-weekday").text();
    let dateMonth = $(b).find("time.libnas-calendar-holiday-datemonth").text();
    libnas_content.push({ summary, days, dateMonth });
  });
  return result;
  }
  try {
    let teks = `*${(await nexLibur()).nextLibur}*\n\n`
    let result = (await nexLibur()).libnas_content

    for (let a of result) {
      teks += `Ringkasan: ${a.summary}\nHari: ${a.days}\nBulan: ${a.dateMonth}\n\n`
    }
    reply(teks)
  } catch (e) {
    throw e
  }
}
break
case 'lahelu': {
	let tags = ['lucu', 'relate', 'gaming', 'nostalgia', 'teknologi', 'random', 'komik', 'editan', 'wtf', 'olahraga', 'opini', 'dark', 'absurd', 'cringe', 'sus', 'binatang']
	if(text && !tags.includes(text)) return m.reply(`Meme "${text}" tidak di temukan! \n\n${tags.map(v => `- ${v}`).join('\n')}`) 
	let url;
	let page = Math.round(Math.random() * 25)
	if(!text) url = `https://lahelu.com/api/post/get-posts?feed=1&page=${page}`
	if(text) url = `https://lahelu.com/api/post/get-posts?feed=1&hashtags[]=${text}&page=${page}`
	let anu = (await axios.get(url)).data
	let data = anu.postInfos[Math.floor(Math.random() * anu.postInfos.length)]
	if(/^video/i.test(data.media)) return await Ramah.sendMessage(m.chat, { video: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted: m }) 
	if(/^image/i.test(data.media)) return await Ramah.sendMessage(m.chat, { image: { url: 'https://cache.lahelu.com/'+data.media }, caption: data.title, viewOnce: true }, { quoted: m }) 
	}
break
    case 'gemini': {
    const prompt = text.trim();
    if (!prompt) {
        return m.reply("Masukkan prompt untuk digunakan! Contoh: .gemini Explain how AI works");
    }
// Fungsi untuk mengirim permintaan ke API Gemini
const sendToGemini = async (prompt) => {
    const apiKey = 'AIzaSyB2mvsGVTZAU-h-GtCLzoLhjHEdvugx9uQ';
    const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${apiKey}`;
    
    const body = {
        contents: [
            {
                parts: [
                    { text: prompt }
                ]
            }
        ]
    };

    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        });

        const data = await response.json();

        if (response.ok) {
            return data; // Mengembalikan data respons dari API
        } else {
            throw new Error(data.error.message || 'Request failed');
        }
    } catch (error) {
        console.error('Error:', error.message);
        return null;
    }
};
    
    try {
        const response = await sendToGemini(prompt); 
        if (response) {
            // Mengambil teks dari respons API
            const candidates = response.candidates;
            const message = candidates && candidates.length > 0
                ? candidates[0].content.parts[0].text // Mengambil bagian teks
                : 'Tidak ada respons yang diterima dari model.';

            // Menampilkan respons yang didapat dari Gemini
            m.reply(`Hasil Gemini:\n${message}`);
        } else {
            m.reply('Gagal mendapatkan respons dari Gemini API.');
        }
    } catch (error) {
        console.error(error);
        m.reply('Terjadi kesalahan saat memproses permintaan Anda.');
    }
    }
    break
        case 'videy' : {
if (!args[0]) {
    return m.reply(`• Contoh: ${prefix + command} https://videy.co/v?id=K7wdQnbm`);
  }
async function videy(url) {
	return new Promise(async (resolve, reject) => {
		try {
			const res = await axios(`${url}`, { method: 'get' });
			const $ = cheerio.load(res.data);
			const video = $('source[type="video/mp4"]').attr('src');
			if (video) {
				resolve(video);
			} else {
				throw new Error('Video source not found');
			}
		} catch (error) {
			reject(`Error while fetching the URL: ${error.message}`);
h		}
	});
}
  if (!/^http(s):\/\/videy\.co/i.test(args[0])) {
    return m.reply('Link Invalid');
  }

  try {
    let result = await videy(args[0]);
    await Ramah.sendMessage(m.chat, { video: { url: result }, caption: "Done" }, { quoted: m });
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
}
break
 case 'drakor': {
  if (!text) {
    throw 'Contoh: Drakor The Red Sleeve';
  }
  m.reply('Mencari informasi drama Korea...');
  try {
    const url = `https://mydramalist.com/search?q=${encodeURIComponent(q)}`;
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
    const judul = $('.title').first().text().trim();
    const konten = $('.content').first().find('p').map((i, el) => $(el).text().trim()).get().join('\n\n');
    const link = $('.title').first().find('a').attr('href');
// wm avs    
    if (!konten) {
      throw new Error('Tidak Drakor Itu.');
    }
// wm avs
    const artikel = `*Judul:* ${judul}\n\n*Konten:* ${konten}\n\n*Link:* https://mydramalist.com${link}`;
    m.reply(artikel);
  } catch (error) {
    m.reply(`Maaf, terjadi kesalahan: ${error.message}`);
  }
}
break

case 'ebay': {
  if (!q) return m.reply(`Mau cari apa?`);
  const axios = require('axios');
  const cheerio = require('cheerio');
// wm avs
  async function azvxz(query) {
    try { // wm avs
      const url = `https://www.ebay.com/sch/i.html?_nkw=${encodeURIComponent(query)}`;
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const results = [];
      $('.s-item').each((index, element) => {
        const title = $(element).find('.s-item__title').text().trim();
        const price = $(element).find('.s-item__price').text().trim();
        const link = $(element).find('.s-item__link').attr('href');
        if (title && title !== "Shop on eBay") { // Jgn Di Hapus Ini
          results.push({ title, price, link });
        }
      });
      return results;
    } catch (error) {
      console.error('Error:', error);
      return [];
    }
  }
// wm avs
  const query = m.text;
  try {
    const results = await azvxz(query);
// wm avs
    if (results.length === 0) {
      m.reply("Tidak ada hasil ditemukan untuk pencarian Anda.");
    } else {
      let response = "Hasil pencarian eBay:\n\n";
      results.forEach((item, index) => {
        response += `${index + 1}. ${item.title}\nHarga: ${item.price}\nLink: ${item.link}\n\n`;
      });
      m.reply(response);
    }
  } catch (error) {
    m.reply("Terjadi Error.");
  }
}
break

case 'rangkum': {
   if (!q) return m.reply(`Masukkan kalimat Yang Mau di rangkum`);
// wm avs
  const sentences = `${q}`.match(/[^.!?]+[.!?]/g) || [];
// wm avs
  const wordFrequency = {};
  sentences.forEach(sentence => {
    const words = sentence.toLowerCase().split(/\s+/);
    words.forEach(word => {
      word = word.replace(/[.,!?]/g, '');
      if (word.length > 0) {
        if (wordFrequency[word]) {
          wordFrequency[word]++;
        } else {
          wordFrequency[word] = 1;
        }
      }
    });
  });
// wm avs
  const sortedWords = Object.keys(wordFrequency).sort((a, b) => wordFrequency[b] - wordFrequency[a]);
// wm avs
  const summarySentences = sentences
    .filter(sentence => {
      const words = sentence.toLowerCase().split(/\s+/).map(word => word.replace(/[.,!?]/g, ''));
      return words.some(word => sortedWords.includes(word));
    })
    .slice(0, 3);
// wm avs
  const summary = summarySentences.join(' ');
// wm avs
  m.reply(summary || "Gagal merangkum teks.");
}
break
case 'animecharacter': {
 if (!text) {
 m.reply('Contoh: animecharacter naruto');
 return;
 }
// wm avs
 m.reply('_Sabar tuan, sedang mencari karakter anime..._');
// wm avs
 async function getCharacterInfo(characterName) {
 const query = `
 query ($search: String) {
 Character(search: $search) {
 name {
 full
 }
 description
 media {
 nodes {
 title {
 romaji
 }
 }
 }
 }
 }
 `;
 const variables = {
 search: characterName
 };
// wm avs
 const response = await fetch('https://graphql.anilist.co', {
 method: 'POST',
 headers: {
 'Content-Type': 'application/json',
 'Accept': 'application/json',
 },
 body: JSON.stringify({
 query: query,
 variables: variables
 })
 });
 if (!response.ok) {
 throw new Error('Gagal mengambil data karakter');
 }
// wm avs
 const data = await response.json();
 return data.data.Character;
 }
// wm avs
 try {
 const query = text.trim();
 const characterInfo = await getCharacterInfo(query);
// wm avs
 if (!characterInfo) {
 m.reply('Karakter Gda.');
 return;
 }
// wm avs
 // Format hasil pencarian karakter
 const name = characterInfo.name.full;
 const description = characterInfo.description || 'Deskripsi tidak Ada';
 const mediaTitles = characterInfo.media.nodes.map(node => node.title.romaji).join(', ');
// wm avs
 const formattedDescription = description
 .replace(/\n/g, '\n\n') // jgb ubah
 .replace(/__([^__]+)__/g, '*$1*') // jgn ubah 
 .replace(/~\!?\[([^\]]+)]\(([^)]+)\)~?/g, '*$1* ($2)') // jgn ubah ini
 .replace(/^\s+/gm, '');
// wm avs
 const result = `*Nama Karakter:* ${name}\n\n*Deskripsi:* ${formattedDescription}\n\n*Media Terkait:* ${mediaTitles}`;
// wm avs
 m.reply(result);
// wm avs
 } catch (error) {
 m.reply(`Terjadi kesalahan: ${error.message}`);
 }
}
break
        case 'gimage': {
    if (!text) return m.reply(`gimage avosky`)
    m.reply(mess.wait)
    const axios = require('axios')
    const cheerio = require('cheerio')
// wm avs
    const nyariGambar = async (query) => {
        const url = `https://www.google.com/search?q=${encodeURIComponent(query)}&tbm=isch`
        const { data } = await axios.get(url)
        const $ = cheerio.load(data)
        let images = []
        $('img').each((i, elem) => {
            images.push($(elem).attr('src'))
        })
        return images
    }
// wm avs
    nyariGambar(text).then(images => {
        if (images.length === 0) {
            return m.reply('Tidak ada gambar.')
        }
        let imageAvz = images[Math.floor(Math.random() * images.length)]
        Ramah.sendMessage(m.chat, { image: { url: imageAvz }, caption: `*Query* : ${text}\n*Media Url* : ${imageAvz}` }, { quoted: m })
    }).catch(error => {
        m.reply('Terjadi kesalahan.')
    })
}
break

case 'kbbi-kemdikbud': {
    if (!text) return m.reply('contoh kbbi-kemdikbud')
    const axios = require('axios')
    const url = `https://kbbi.kemdikbud.go.id/entri/${encodeURIComponent(text)}`
 // wm avs
    axios.get(url).then(response => {
        const cheerio = require('cheerio')
        const $ = cheerio.load(response.data)
        let definition = $('ol').first().text().trim()
 // wm avs       
        if (!definition) {
            return m.reply('Kata tidak ditemukan dalam KBBI.')
        }
 // wm avs        
        Ramah.sendMessage(m.chat, { text: `${definition}` }, { quoted: m })
    }).catch(error => {
        m.reply('Terjadi elol.')
    })
}
break
case 'photoleap': {
 if (!q) return m.reply(`contoh \n\nphotoleAp girl crying`);
  async function textToImageVsky(text) {
    try {
      const { data } = await axios.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + encodeURIComponent(text));
      return data;
    } catch (err) {
      return null;
    }
  }
//avosky
  const result = await textToImageVsky(text);
//avosky
  if (result && result.result_url) {
    const imageUrl = result.result_url;
    const message = {
      image: { url: imageUrl },
      caption: 'done nih'
    };
    Ramah.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break

case 'picsum': {
  if (!q) return m.reply(`contoh \n\npicsum nature`);
  
  async function picSumAvz(text) {
    try {
      const imageUrl = `https://picsum.photos/seed/${q}/800/600`;
      return imageUrl;
    } catch (err) {
      return null;
    }
  }
//avs
  const result = await picSumAvz(q);
  if (result) {
    const message = {
      image: { url: result },
      caption: `hasil dari pencarian gambar : ${q}`
    };
    Ramah.sendMessage(m.chat, message);
  } else {
    m.reply('err.');
  }
}
break
  
        case 'readmore': {
            const more = String.fromCharCode(8206)
const readmore = more.repeat(4001)
	let [l, r] = text.split`|`
    if (!l) l = ''
    if (!r) r = ''
    Ramah.sendMessage(m.chat, {text: l + readmore + r}, {quoted: m})
}
break;
        
case 'gsmarena': {
 if (args.length === 0) {
 m.reply('Silakan masukkan nama perangkat yang ingin dicari.');
 return;
 }

 async function gsmSearch(q) {
 try {
 const response = await axios({
 method: "get",
 url: `https://gsmarena.com/results.php3?sQuickSearch=yes&sName=${q}`
 });
 const $ = cheerio.load(response.data);
 const result = [];
 
 const device = $(".makers").find("li");
 device.each((i, e) => {
 const img = $(e).find("img");
 result.push({
 id: $(e).find("a").attr("href").replace(".php", ""),
 name: $(e).find("span").html().split("<br>").join(" "),
 description: img.attr("title")
 });
 });
 return result;
 } catch (error) {
 console.error(error);
 throw error;
 }
 }

 gsmSearch(q).then(results => {
 if (results.length === 0) {
 m.reply('Tidak ada hasil yang ditemukan.');
 return;
 }
 
 let replyText = `Hasil pencarian untuk "${q}":\n\n`;
 results.forEach((device, index) => {
 replyText += `${index + 1}. ${device.name}\nDeskripsi: ${device.description}\nLink: https://gsmarena.com/${device.id}.php\n\n`;
 });
 
 m.reply(replyText);
 }).catch(error => {
 m.reply('Terjadi kesalahan saat mencari perangkat.');
 console.error(error);
 });
}
break
case 'igvid': case 'igmp4': {
    if (!text) return m.reply(`Anda perlu memberikan URL video, reel`);
    let res;
    try {
        res = await fetch(`https://widipe.com/download/igdl?url=${encodeURIComponent(text)}`);
    } catch (error) {
        return m.reply(`An error occurred: ${error.message}`);
    }

    let api_response;
    try {
        api_response = await res.json();
    } catch (error) {
        return m.reply(`Failed to parse API response: ${error.message}`);
    }

    if (!api_response || !api_response.result || api_response.result.length === 0) {
        return m.reply(`No video or image found or Invalid response from API.`);
    }

try {
    const mediaData = api_response.result[0]; // Ambil elemen pertama dari array result
    //const mediaType = mediaData.thumbnail ? 'image' : 'video'; // Periksa apakah thumbnail ada
    const mediaURL = mediaData.url;
    const cap = `HERE IS THE VIDEO`;

            await Ramah.sendMessage(m.chat, { video: { url: mediaURL }, caption: cap }, { quoted: m });
        
    } catch (error) {
        return m.reply(`Failed to send media: ${error}`);
    }
}
break

        case 'tiktok':
case 'tt': {
if (args.length == 0) return reply(`Example: ${prefix + command} link lu`)
const api = require('btch-downloader')
if (!args[0]) return reply(`Masukan URL!\n\ncontoh:\n${prefix + command} https://vm.tiktok.com/ZGJAmhSrp/`);
if (!args[0].match(/tiktok/gi)) return reply(`URL Yang Tuan Berikan *Salah!!!*`);
try {
let maximus = await api.ttdl(args[0]);
let caption = `乂 *T I K T O K  D O W N L O A D* 

• *ɴᴀᴍᴀ ᴠɪᴅᴇᴏs:* 
${maximus.title}

• *ɴᴀᴍᴀ ᴀᴜᴅɪᴏ:* 
${maximus.title_audio}

${global.namabot}`;
await Ramah.sendMessage(m.chat, { video: { url: maximus.video[0] }, caption: caption })
await Ramah.sendMessage(m.chat, { audio: { url: maximus.audio[0] }, mimetype: "audio/mpeg", ptt: true }, { quoted: m })
      } catch (e) {
		console.log(e)
		reply(e)
	}
}
break
        case  'pin': {
  if (!text) return reply(`Example: .pin Nakano Ninoo`);
  await reply("Mohon tunggu kak");

  async function createImage(url) {
    const { imageMessage } = await generateWAMessageContent({
      image: {
        url
      }
    }, {
      upload: Ramah.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let push = [];
  let { data } = await axios.get(`https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D${text}&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22${text}%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559`);
  let res = data.resource_response.data.results.map(v => v.images.orig.url);

  shuffleArray(res);
  let ult = res.splice(0, 5); 
  let i = 1;

  for (let lucuy of ult) {
    push.push({
      body: proto.Message.InteractiveMessage.Body.fromObject({
        text: `Image ke - ${i++}`
      }),
      footer: proto.Message.InteractiveMessage.Footer.fromObject({
        text: global.namabot
      }),
      header: proto.Message.InteractiveMessage.Header.fromObject({
        title: 'Hasil.',
        hasMediaAttachment: true,
        imageMessage: await createImage(lucuy)
      }),
      nativeFlowMessage: proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        buttons: [
          {
            "name": "cta_url",
            "buttonParamsJson": `{"display_text":"Source","url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}","merchant_url":"https://www.pinterest.com/search/pins/?rs=typed&q=${text}"}`
          }
        ]
      })
    });
  }

  let bot = generateWAMessageFromContent(m.chat, {
    viewOnceMessage: {
      message: {
        messageContextInfo: {
          deviceListMetadata: {},
          deviceListMetadataVersion: 2
        },
        interactiveMessage: proto.Message.InteractiveMessage.fromObject({
          body: proto.Message.InteractiveMessage.Body.create({
            text: "Done"
          }),
          footer: proto.Message.InteractiveMessage.Footer.create({
            text: `Search: ${text} | Nama: ${pushname}`
          }),
          header: proto.Message.InteractiveMessage.Header.create({
            hasMediaAttachment: false
          }),
          carouselMessage: proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            cards: [
              ...push
            ]
          })
        })
      }
    }
  }, {});

  await Ramah.relayMessage(m.chat, bot.message, {
    messageId: bot.key.id
  });
  
}
break
        case 'play' : {
 if (!text) return reply('Enter Title / Link From YouTube!');
 reply(mess.wait)
 try {
 	let search = require("yt-search");
let { youtube } = require("btch-downloader");
 const look = await search(text);
 const convert = look.videos[0];
 if (!convert) return reply('Video/Audio Tidak Ditemukan');
 if (convert.seconds >= 3600) {
 return reply(m.chat, 'Video is longer than 1 hour!');
 } else {
 let audioUrl;
 try {
 audioUrl = await youtube(convert.url);
 } catch (e) {
 reply(mess.wait)
 audioUrl = await youtube(convert.url);
 }

 await Ramah.sendMessage(m.chat, {
 audio: {
 url: audioUrl.mp3
 },
 mimetype: 'audio/mpeg',
 contextInfo: {
 externalAdReply: {
 title: convert.title,
 body: "",
 thumbnailUrl: convert.image,
 sourceUrl: audioUrl.mp3,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: m
 });
 }
 } catch (e) {
 reply(m.chat, `*Error:* ` + e.message);
 }
};
break
case 'self': {
if (!isCreator) return m.reply(mess.OnlyOwner)
global.public = false
m.reply('Sukses Change To Self Mode')
}
break
case 'ringtone':
    {
//wm Ramah
       async function RingTone(search) {
    return new Promise(async (resolve, reject) => {
        try {
            const { data } = await axios.get('https://meloboom.com/en/search/' + search)
//wm Ramah
            let $ = cheerio.load(data)
            let hasil = []
            $('#__next > main > section > div.jsx-2244708474.container > div > div > div > div:nth-child(4) > div > div > div > ul > li').each(function (a, b) {
//wm Ramah
                hasil.push({
                    title: $(b).find('h4').text(), 
                    source: 'https://meloboom.com/' + $(b).find('a').attr('href'), 
                    audio: $(b).find('audio').attr('src')
                })
            })
//wm Ramah
            resolve(hasil)
        } catch (err) {
            console.error(err)
            return []
//wm Ramah
        }
    })
}
//wm Ramah
//wm Ramah
 if(!text) return m.reply('```🚩 Ramah Says Input query??```')
  let yapit = await RingTone(text)
//wm Ramah
  let src = pickRandom(yapit)
  let txt = `RAMAH SAGE RINGTONE
❃ Title : ${src.title}
❃ Source : ${src.source}
  
_wait ramah sage sending audio_`
//wm Ramah
  let ngawur = await Ramah.sendMessage(m.chat,{text: txt,mentions:[m.sender]},{quoted:m})
  await sleep(3000)
   //wm Ramah
 Ramah.sendMessage(m.chat, {
        audio: {
        	url: src.audio
        },
//wm Ramah
        mimetype: "audio/mpeg",
        ptt: true
        }, {
        	quoted: ngawur
        })
 //wm Ramah         Ramah.sendMessage(m.chat, { react: { text: '✅', key: m.key }})
}
//wm Ramah
break
case 'public': {
if (!isCreator) return m.reply(mess.OnlyOwner)
global.public = true
m.reply('Success Change To Public Mode')
}
break
case 'grupsearch': {
  if (!text) return m.reply('Ramah Sage Says Enter a search query, for example: groupsearch india');
  const cheerio = require('cheerio');
  const axios = require('axios');
// wm Ramah
  async function skyZo(url) {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const links = [];
// wm Ramah
      $('a.entry-image-link').each((index, element) => {
        const href = $(element).attr('href');
        if (href) {
          links.push(href);
        }
      });
// wm Ramah
      return links;
    } catch (error) {
      console.error('Error fetching the page:', error);
      return [];
    }
  }
// wm Ramah
  async function avoskyJ(url) {
    try {
      const { data } = await axios.get(url);
      const $ = cheerio.load(data);
      const links = [];
      let counter = 1;
// wm Ramah
      $('a[href*="chat.whatsapp.com"]').each((index, element) => {
        const href = $(element).attr('href');
        if (href) {
          links.push(`${counter}). ${href}`);
          counter++;
        }
      });
// wm Ramah
      return links.length > 0 ? links.join('\n') : 'There is no any link WhatsApp.';
    } catch (error) {
      console.error('Error fetching the page:', error);
      return 'Error.';
    }
  }
// wm Ramah
  const query = text.trim();
  const searchUrl = `https://whatsgrouplink.com/?s=${encodeURIComponent(query)}`;
// wm Ramah
  skyZo(searchUrl).then(async links => {
    if (links.length > 0) {
// wm Ramah
      const randomLink = links[Math.floor(Math.random() * links.length)];
// wm Ramah
      const result = await avoskyJ(randomLink);
// wm avz
      m.reply(`Link Selected Source: ${randomLink}\n\nLink WhatsApp groups found:\n${result}`);
    } else {
      m.reply('Tidak ada link yang.');
    }
  }).catch(error => {
    console.error('Error:', error);
    m.reply('There is an error 404 Errrrr Rrorr');
  });
}
break
case 'tt2': {
  //don't delete wm, this is Ramah
  let input = `[!] *Ramah Sage says wrong input*
	
Ex : ${prefix + command} https://vt.tiktok.com/ZSFSqcuXb/`
//jangan hapus wm, ini hann
    if (!text) return m.reply(input)
   //jangan hapus wm, ini hann 
  if (!(text.includes('http://') || text.includes('https://'))) return m.reply(`url invalid, please input a valid url. Try with add http:// or https://`)
    if (!text.includes('tiktok.com')) return m.reply(`Invalid Tiktok URL.`)
    //don't delete wm, this is Ramah
async function tiktokDl(url) {
	return new Promise(async (resolve, reject) => {
		try {
			let data = []
			function formatNumber(integer) {
				let numb = parseInt(integer)
				return Number(numb).toLocaleString().replace(/,/g, '.')
			}
			//don't delete wm, this is Ramah
			function formatDate(n, locale = 'en') {
				let d = new Date(n)
				return d.toLocaleDateString(locale, {
					weekday: 'long',
					day: 'numeric',
					month: 'long',
					year: 'numeric',
					hour: 'numeric',
					minute: 'numeric',
					second: 'numeric'
				})
			}
			//don't delete wm, this is Ramah
			let domain = 'https://www.tikwm.com/api/';
			//jangan hapus wm, ini hann
			let res = await (await axios.post(domain, {}, {
				headers: {
					'Accept': 'application/json, text/javascript, */*; q=0.01',
					'Accept-Language': 'id-ID,id;q=0.9,en-US;q=0.8,en;q=0.7',
					'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
					'Origin': 'https://www.tikwm.com',
					'Referer': 'https://www.tikwm.com/',
					'Sec-Ch-Ua': '"Not)A;Brand" ;v="24" , "Chromium" ;v="116"',
					'Sec-Ch-Ua-Mobile': '?1',
					'Sec-Ch-Ua-Platform': 'Android',
					'Sec-Fetch-Dest': 'empty',
					'Sec-Fetch-Mode': 'cors',
					'Sec-Fetch-Site': 'same-origin',
					'User-Agent': 'Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Mobile Safari/537.36',
					'X-Requested-With': 'XMLHttpRequest'
				},
				params: {
					url: url,
					count: 12,
					cursor: 0,
					web: 1,
					hd: 1
				}
			})).data.data
			//don't delete wm, this is Ramah
			if (res && !res.size && !res.wm_size && !res.hd_size) {
				res.images.map(v => {
					data.push({ type: 'photo', url: v })
				})
			} else {
			  //don't delete wm, this is Ramah
				if (res && res.wmplay) {
					data.push({ type: 'watermark', url: 'https://www.tikwm.com' + res.wmplay })
				}
				//don't delete wm, this is Ramah
				if (res && res.play) {
					data.push({ type: 'nowatermark', url: 'https://www.tikwm.com' + res.play })
				}
				//don't delete wm, this is Ramah
				if (res && res.hdplay) {
					data.push({ type: 'nowatermark_hd', url: 'https://www.tikwm.com' + res.hdplay })
				}
			}
			//don't delete wm, this is Ramah
			let json = {
				status: true,
				title: res.title,
				taken_at: formatDate(res.create_time).replace('1970', ''),
				region: res.region,
				id: res.id,
				durations: res.duration,
				duration: res.duration + ' Seconds',
				cover: 'https://www.tikwm.com' + res.cover,
				size_wm: res.wm_size,
				size_nowm: res.size,
				size_nowm_hd: res.hd_size,
				data: data,
				music_info: {
					id: res.music_info.id,
					title: res.music_info.title,
					author: res.music_info.author,
					album: res.music_info.album ? res.music_info.album : null,
					url: 'https://www.tikwm.com' + res.music || res.music_info.play
				},
				stats: {
					views: formatNumber(res.play_count),
					likes: formatNumber(res.digg_count),
					comment: formatNumber(res.comment_count),
					share: formatNumber(res.share_count),
					download: formatNumber(res.download_count)
				},
				author: {
					id: res.author.id,
					fullname: res.author.unique_id,
					nickname: res.author.nickname,
					avatar: 'https://www.tikwm.com' + res.author.avatar
				}
			}
			resolve(json)
		} catch (e) {
			reject(e)
		}
	});
}
//don't delete wm, this is Ramah
let down = await tiktokDl(text)
//don't delete wm, this is Ramah
let berak = `[ *TIKTOK DOWNLOADER* ]

Videos:
${down.title}
${down.region}
${down.id}
${down.duration}
${down.size_nowm_hd}

Music Info:
${down.music_info.id}
${down.music_info.title}
${down.music_info.author}

Stats: 
${down.stats.views}
${down.stats.likes}
${down.stats.comment}
${down.stats.share}
${down.stats.download}

Author: 
${down.author.id}
${down.author.fullname}
${down.author.nickname}
${down.author.avatar}
`
//don't delete wm, this is Ramah
await Ramah.sendMessage(m.chat, { video: { url: down.data[2].url }, caption: berak }, { quoted: m })
await Ramah.sendMessage(m.chat, { audio: { url: down.music_info.url }, mimetype: "audio/mp4", ptt: true }, { quoted: m })
}
break
case 'gpt4': {
  if (!text) return m.reply(`Hey Buddy,This is Ramah Sage what can I do to help you please??`)
async function openai(text, logic) { // Create an openai function to call
    let response = await axios.post("https://chateverywhere.app/api/chat/", {
        "model": {
            "id": "gpt-4",
            "name": "GPT-4",
            "maxLength": 32000,  // Adjust token limit if necessary
            "tokenLimit": 8000,  // Adjust token limit for model GPT-4
            "completionTokenLimit": 5000,  // Adjust if necessary
            "deploymentName": "gpt-4"
        },
        "messages": [
            {
                "pluginId": null,
                "content": text, 
                "role": "user"
            }
        ],
        "prompt": logic, 
        "temperature": 0.5
    }, { 
        headers: {
            "Accept": "/*/",
            "User-Agent": "Mozilla/5.0 (Linux; Android 10; K) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36"
        }
    });
    
    let result = response.data;
    return result;
}

let Ramah = await openai(text, "Your name is Ramah Sage, you are an artificial intelligence assistant who often helps others if they have questions.")
m.reply(Ramah)
}
break
case 'vtuber': {
if (!text) return reply(`Example ${prefix+command} the cowboy hat`)
const { wiki } = require("vtuber-wiki");
async function getVTuber(vtuber) {
    try {
        const result = await wiki(vtuber);
        if (!result.image_url) return { error: "No such vTuber" };
        return result;
    } catch (err) {
        return { error: "No such vTuber" };
    }
}
try {
let tuber = await getVTuber(text)
let pituber = `[ *VERTEX VTUBER WIKI* ]

Title: ${tuber.title}
Link: ${tuber.url}
Author: ${tuber.author}
Account: ${tuber.account}
Date: ${tuber.date}
Type: ${tuber.type}
Channel: ${tuber.channel}
Social Media: ${tuber.social_media}
Offcial Website: ${tuber.official_website}
Gender: ${tuber.gender}
Age: ${tuber.age}
Description: ${tuber.description}
More: ${tuber.more}
`

Ramah.sendMessage(m.chat, {image: {url: tuber.image_url}, caption: pituber}, {quoted: m})
} catch (e) {
  m.reply(e)
}
}
break
case 'listgroup':
case 'listgrup':
case 'listgrup':
case 'listgroub':
case 'listgrub':
case 'listgc':
case 'gruplist':
case 'groplist':
case 'grouplist':
if (!isCreator) return reply(mess.owner)
let getallgrub = await Ramah.groupFetchAllParticipating();
async function formatGrup(index, grup) {
    let response2 = '-';
    let link_grouplist = '';
try {
response2 = await autoresbot.groupInviteCode(grup.id);
    link_grouplist = `https://chat.whatsapp.com/${response2}`;
} catch{
    link_grouplist = '-'
}
return `╭─「 ${index} 」 *${grup.subject}*
│ Anggota : ${grup.participants.length}
│ ID Grub : ${grup.id}
│ Link    : ${link_grouplist}
╰─────────────────────
©𝐑𝖆𝖒𝖆𝖍 𝕾𝖆𝖌𝖗 𝕿𝖍𝖊 𝖆𝖑𝖕𝖍𝖆`;
}
const grupTerurut = Object.values(getallgrub).sort((a, b) => b.participants.length - a.participants.length);
let nomorUrut = 0;
const listGrupString = await Promise.all(grupTerurut.map((grup) => formatGrup(++nomorUrut, grup)));

return reply(`_*Total Group : ${nomorUrut}*_ \n\n`+listGrupString.join('\n\n'));
break;
case'upaudio':{
if (!isCreator) return m.reply(mess.owner)
if (!/audio/.test(mime)) return m.reply(`Ramah Sage sats Only audio, .upaudio jid|request from|Title of Song`)
    yaelahh = text.split("|")[0]
    ngawi = text.split("|")[1]
    bjirrwoila = text.split("|")[2]
 Ramah.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
 await sleep(6000)
Ramah.sendMessage(yaelahh, { 
  audio: await quoted.download(), 
viewOnce: false, 
seconds: "900000000", ptt: true, 
mimetype: "audio/mpeg", 
fileName: "bot.mp3", 
waveform: [0, 153, 0, 494, 976], 
contextInfo: {
forwardingScore: 999, 
isForwarded: true, 
forwardedNewsletterMessageInfo: { 
newsletterName: `${ownername}`, 
newsletterJid: idch
}, 
externalAdReply: { 
showAdAttribution: true, 
mediaType: 2, 
mediaUrl: `http://wa.me/256703025571/${Math.floor(Math.random() * 100000000000000000)}`, 
title: `[🎶] - ${bjirrwoila}`, 
body: `Request by ${ngawi}`, 
sourceUrl: "", 
thumbnail: fkethmb 
}
}
})
await sleep(2000)
Ramah.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break
case 'upch-image':{
if (!isCreator) return m.reply(mess.owner)
if (!/video/.test(mime) && !/image/.test(mime)) return m.reply(`\`\`\`🚩 Reply Image with ${prefix + command} Write The caption\`\`\``)  
Ramah.sendMessage(m.chat, { react: { text: '🕐', key: m.key }})
media = await Ramah.downloadAndSaveMediaMessage(quoted)
let anu = await uploadToUguu(media)
Ramah.sendMessage(`${global.idch}`, { 
    image: { 
        url: `${util.format(anu)}` 
    }, 
    caption: text,
    contextInfo: {
        forwardingScore: 9999, 
        isForwarded: true, 
        forwardedNewsletterMessageInfo: {
            newsletterJid: idch,
            serverMessageId: 20,
            newsletterName: '❃ Ramah - Assistant'
        }, 
        externalAdReply: {
            title: "Vertex - Md", 
            body: "",
            thumbnailUrl: "https://files.catbox.moe/vikf6c.jpg", 
            sourceUrl: null,
            mediaType: 1
        }, 
    }
});
await sleep(2000)
Ramah.sendMessage(m.chat, { react: { text: '✅', key: m.key, }})
}
break		
case'fbdl':  {
if (!text) return m.reply(`Contoh: ${prefix+command} the link`)
if (!text.includes('facebook.com')) return m.reply('Must be a Facebook link!')
Ramah.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
/*try {
let hua = await fetchJson(`https://skizo.tech/api/facebook?apikey=${skizo}&url=${text}`)
return await ptz.sendMessage(m.chat, { video: { url: hua.media }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada API skizo.tech:', err)*/
/*try {
let anu = await bochil.snapsave(text)
return await slimecode.sendMessage(m.chat, { video: { url: anu[0].url }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada bochil.snapsave:', err)*/
try {
let anu = await fg.fbdl(text)
return await Ramah.sendMessage(m.chat, { video: { url: anu.videoUrl }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Error on Ramah.fbdl:', err)
/*try {
let anu = await snapsave(text)
return await ptz.sendMessage(m.chat, { video: { url: anu.links["Download High Quality"] }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada snapsave:', err)
try {
let anu = await snapsavev2(text)
return await ptz.sendMessage(m.chat, { video: { url: anu.result[0].url }, caption: `© ${wm}` }, { quoted: m })
} catch (err) {
console.error('Kesalahan pada snapsavev2:', err)*/
m.reply('There is an error')
}}

break
case'ytmp4':
case 'playmp4':
 //   if (!isGroup) return onlyGroup()
if (args.length == 0) return reply(`Example: ${prefix + command} https://www.youtube.com/watch?v=qZIQAk-BUEc`)
			reply(mess.wait)
			axios.get(`https://api.lolhuman.xyz/api/ytvideo2?apikey=9174374619a0353273a70311&url=${args[0]}`)
				.then(({ data }) => {
				var caption = `❖ Title    : *${data.result.title}*\n`
				caption += `❖ Size     : *${data.result.size}*`
				Ramah.sendMessage(m.chat, { image: { url: data.result.thumbnail }, caption }).then(() => {
						Ramah.sendMessage(m.chat, { video: { url: data.result.link }, mimetype: 'video/mp4', fileName: `${data.result.title}.mp4` })
})
})
				.catch(console.error)
break
case'ytmp3' : {
 if (!text) return reply('Enter Title / Link From YouTube!');
 reply(mess.wait)
 try {
 	let search = require("yt-search");
let { youtube } = require("btch-downloader");
 const look = await search(text);
 const convert = look.videos[0];
 if (!convert) return reply('Video/Audio Not found');
 if (convert.seconds >= 3600) {
 return reply(m.chat, 'Video is longer than 1 hour!');
 } else {
 let audioUrl;
 try {
 audioUrl = await youtube(convert.url);
 } catch (e) {
 reply(mess.wait)
 audioUrl = await youtube(convert.url);
 }

 await 
Ramah.sendMessage(m.chat, {
 audio: {
 url: audioUrl.mp3
 },
 mimetype: 'audio/mpeg',
 contextInfo: {
 externalAdReply: {
 title: convert.title,
 body: "",
 thumbnailUrl: convert.image,
 sourceUrl: audioUrl.mp3,
 mediaType: 1,
 showAdAttribution: true,
 renderLargerThumbnail: true
 }
 }
 }, {
 quoted: m
 });
 }
 } 
 catch (e) {
 reply(m.chat, `*Error:* ` + e.message);
 }
};
break
case 'd': case 'del': case 'delete': case 'hapus':
if (!m.quoted) return reply('Reply pesan yang ingin dihapus!')
Ramah.sendMessage(from, {delete: {remoteJid: from, id: m.quoted.id, fromMe: m.quoted.fromMe, participant: m.quoted.sender }})
break








		
default:
if (budy.startsWith('=>')) {
if (!isCreator) return
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return
let kode = budy.trim().split(/ +/)[0]
let teks
try {
teks = await eval(`(async () => { ${kode == ">>" ? "return" : ""} ${q}})()`)
} catch (e) {
teks = e
} finally {
await m.reply(require('util').format(teks))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return
exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}

} catch (err) {
console.log(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
