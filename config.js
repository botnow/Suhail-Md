const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_59_07_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDcwLFxuICAgICAgICA5MCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyNyxcbiAgICAgICAgOTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxOTAsXG4gICAgICAgIDczLFxuICAgICAgICAxMzcsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzQsXG4gICAgICAgIDExOSxcbiAgICAgICAgMzgsXG4gICAgICAgIDg5LFxuICAgICAgICA5OSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ1LFxuICAgICAgICAyMixcbiAgICAgICAgNzJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMTIxLFxuICAgICAgICA4NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjE1LFxuICAgICAgICAzOCxcbiAgICAgICAgMTI2LFxuICAgICAgICAxMDIsXG4gICAgICAgIDgwLFxuICAgICAgICA1NixcbiAgICAgICAgMTEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgNTQsXG4gICAgICAgIDU3LFxuICAgICAgICA3NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxODcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNixcbiAgICAgICAgNzgsXG4gICAgICAgIDk0LFxuICAgICAgICA0NSxcbiAgICAgICAgMjM5LFxuICAgICAgICA4NSxcbiAgICAgICAgODgsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNDUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTE0LFxuICAgICAgICA4NCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxOCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDYxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTExLFxuICAgICAgICAyMDEsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTAyLFxuICAgICAgICA4NixcbiAgICAgICAgMTA3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA4NSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEwNCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMixcbiAgICAgICAgMTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMjMsXG4gICAgICAgIDIzNixcbiAgICAgICAgNTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MSxcbiAgICAgICAgODAsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDAsXG4gICAgICAgIDk1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU0LFxuICAgICAgICA1NixcbiAgICAgICAgMTQ2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMCxcbiAgICAgICAgOTcsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk2LFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTk0LFxuICAgICAgICAxNzksXG4gICAgICAgIDQwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjA3LFxuICAgICAgICAxODgsXG4gICAgICAgIDIyNSxcbiAgICAgICAgODksXG4gICAgICAgIDMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjEsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk0LFxuICAgICAgICA4LFxuICAgICAgICA1MyxcbiAgICAgICAgMTM3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDMsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAzLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNDksXG4gICAgICAgICAgMjAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMThcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMTI2LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA3MCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE1MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc3LFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMjMwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNTcsXG4gICAgICAgIDkyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDE0LFxuICAgICAgICA0MixcbiAgICAgICAgMTM5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTMwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTA5LFxuICAgICAgICAxOTksXG4gICAgICAgIDU1LFxuICAgICAgICAxNTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTcsXG4gICAgICAgIDIyMixcbiAgICAgICAgNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjIsXG4gICAgICAgIDg2LFxuICAgICAgICA0NCxcbiAgICAgICAgMjE3LFxuICAgICAgICA5MyxcbiAgICAgICAgMjMwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MixcbiAgICAgICAgMTIwLFxuICAgICAgICAzOCxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNzksXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAyMDksXG4gICAgICAgIDE4NixcbiAgICAgICAgMTYsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgNCxcbiAgICAgICAgNDAsXG4gICAgICAgIDc5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA4LFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiUXk2VzI1K1FoVW9ZS1I4c1dVSmxUYnh4c3RxSmR3c2ZwbjFUTm9pNXpjST1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDMwMTMwMjcyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUVGNTU1QjA2Mzc0RTQwMUI3OFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjA1NTg3NTBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR3hyNXJjVHRUYm1yUmZ4Y2pKc2NxUVwiLFxuICBcInBob25lSWRcIjogXCJmMzlhYWViZS02YzBmLTQzNDEtYWIzZi03MzVhZGRkZWY5OTBcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjEsXG4gICAgICAxMDQsXG4gICAgICAxNTAsXG4gICAgICAxOTUsXG4gICAgICAyMzQsXG4gICAgICAxNTQsXG4gICAgICAyMjMsXG4gICAgICAxNjgsXG4gICAgICAyNDAsXG4gICAgICAyMTEsXG4gICAgICAxODcsXG4gICAgICAxMzAsXG4gICAgICA3NCxcbiAgICAgIDgsXG4gICAgICAxMDIsXG4gICAgICAxMzYsXG4gICAgICAyNDcsXG4gICAgICAxMSxcbiAgICAgIDIzMyxcbiAgICAgIDI5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE3NyxcbiAgICAgIDE2NSxcbiAgICAgIDEyNixcbiAgICAgIDM4LFxuICAgICAgMjQ4LFxuICAgICAgMjE3LFxuICAgICAgNCxcbiAgICAgIDgzLFxuICAgICAgMjksXG4gICAgICAzMixcbiAgICAgIDEwNixcbiAgICAgIDEsXG4gICAgICAxODcsXG4gICAgICAyMTcsXG4gICAgICAxOTgsXG4gICAgICAxNTIsXG4gICAgICAxODYsXG4gICAgICAyNDMsXG4gICAgICAxOSxcbiAgICAgIDE2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIlE5VFBXN1pDXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDMwMTMwMjcyOjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjEwNjkzNjMzMDY2NjE5OTo5QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlBjXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEdMcHU0RkVKZkp0clFHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJ3ejBzS0xiYytiTGlnZUpwZmFHMSt6bmMwbVY4ODRqLzBOSTM3NU9QNEhvPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImZHY0ZiU051a0YxOE00OTl5MU5GbVlwM2RnY3g3c1o0bjlwZWhnbTVCdVVFekJXc2VuQzhVa1MwMTRkY3hEdTRSUnpkQzl6eFZOcXhoUmt6MlFUS2pBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIi9BU3U2RjNSL2hpYmVsbFA5WExWME56R0M2RUhocVRXeHd3Q2ROZzN0anphU2VUbGY3WUtBWDU0MWt5Z00yakhrNDV0SE5lb1p6MjROVWN1VWl0TURBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzAxMzAyNzI6OUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMjQsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgMTIyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMDU1ODc0NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUQ4WVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBRDhZLmpzb24iOiAie1wia2V5RGF0YVwiOlwiOHBjbFlNWS8yWWxFS1pjVzgwTUhlcXRiNU54aW03THJja2VXRFZZMXBXUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNTczNDg4MTEzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MjA1NTg3NDY3MDZcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
