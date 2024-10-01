global.owner = [
  "256788028745",
  "256703025571"
]
global.namabot = "VERTEX - MD"
global.ownername = "Ramah Sage"
global.pack = "VERTEX - MD"
global.author = "RAMAH SAGE!!"
global.channelname = "FREE SCRIPTS AND GIVEAWAY!!"
global.prefix = '.'
global.wm = 'Ramah'
global.setv = '🝤'
global.idch = '120363335392141844@newsletter'
global.channeljid = "120363335392141844@newsletter"
global.linkgc = "https://chat.whatsapp.com/HnwIAeT8fl71pjE3ZvTpdX"
global.linksl = "https://whatsapp.com/channel/0029VakZxvW8Pgs8FIrFQx0P"
global.mess = {
    success: 'RAMAH SAGE SAYS ITS DONE BOSS',
    admin: '_*❗THIS COMMAND CAN ONLY BE USED WHEN RAMAH SAGE IS ADMIN...BAKA!*_',
    botAdmin: '_*❗THIS COMMAND CAN ONLY BE USED WHEN RAMAH SAGE BECOMES GROUP ADMIN BAKA!*_',
    OnlyOwner: '_*❗THIS COMMAND CAN ONLY BE USED BY RAMAH SAGE...BOSS!*_',
    OnlyGrup: '_*❗THIS COMMAND CAN ONLY BE USED IN GROUP CHAT...BAKA !*_',
    private: '_(❗BRO THIS COMMAND CAN ONLY BE USED IN PRIVATE CHAT !*_',
    wait: '_*BOSS YOU DID YOUR ROLE LET RAMAH SAGE TAKE UP...CHILL*_',
    notregist: '_*YOU ARE NOT REGISTERED IN THE BOT DATABASE. PLEASE REGISTER FIRSt._*',
    premium: '_*BOSS YOU DID SUBSCRIBE WITH ME" WANT TO BE PREM? CHAT RAMAH SAGE_*',
    endLimit: '_*YOUR DAILY LIMIT HAS BEEN USED UP, THE LIMIT WILL BE RESET EVERY 00:00 WIB_*.',
}

let fs = require('fs')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(`Update ${__filename}`)
delete require.cache[file]
require(file)
})
