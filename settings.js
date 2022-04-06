/*
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6288292024190
   * Follow https://github.com/DikaArdnt
*/

const fs = require('fs')
const chalk = require('chalk')

// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'bb7db0147a4e',
}

// Other
global.owner = ['6285601142988','6285601142988','6285601142988']
global.premium = ['6285601142988']
global.ownername = 'Kelvin'
global.botname = 'Ozawa-Md'
global.footer = 'Kelvin'
global.ig = 'https://instagram.com/zippyseve59'
global.email = 'danzd6106@gmai.com'
global.region = 'Indonesia'
global.sc = 'https://youtu.be/1Zsqu-XrYYI'
global.myweb = 'https://api-riychdwayne.herokuap.com'
global.packname = 'Hisoka Morrow'
global.author = 'WhatsApp Bot'
global.sessionName = 'chika'
global.prefa = ['','!','.','馃惁','馃悿','馃椏']
global.sp = '猸�'
global.mess = {
    success: '鉁� Success',
    admin: 'Emang Lu Admin?',
    botAdmin: 'Bot Harus Menjadi Admin Terlebih Dahulu!',
    owner: 'Emang Lu Owner Gua?',
    group: 'Fitur Digunakan Hanya Untuk Group!',
    private: 'Fitur Digunakan Hanya Untuk Private Chat!',
    bot: 'Fitur Khusus Pengguna Nomor Bot',
    wait: 'Loading...',
    endLimit: 'Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12',
}
global.limitawal = {
    premium: "Infinity",
    free: 100
}
global.thumb = fs.readFileSync('./image/chika.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
