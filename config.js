const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "true"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "true"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_06_11_09_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyOSxcbiAgICAgICAgMjksXG4gICAgICAgIDk1LFxuICAgICAgICA3MyxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDM3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE3NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTg5LFxuICAgICAgICA1MCxcbiAgICAgICAgNDQsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTYyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDUxLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDY0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTUxLFxuICAgICAgICA2MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDIyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDU2LFxuICAgICAgICA0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDgsXG4gICAgICAgIDIwMixcbiAgICAgICAgMjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMTksXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNDgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDI5LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTEyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTk0LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDQxLFxuICAgICAgICA4LFxuICAgICAgICAxMTQsXG4gICAgICAgIDY4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTgwLFxuICAgICAgICA4OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDM5LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgODYsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDY0LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU3LFxuICAgICAgICAyNCxcbiAgICAgICAgMjE5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDUyLFxuICAgICAgICA3NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDExNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgODBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNTUsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzMsXG4gICAgICAgIDUzLFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTU5LFxuICAgICAgICAyMDQsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjU1LFxuICAgICAgICA1NyxcbiAgICAgICAgMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMDQsXG4gICAgICAgIDQ0LFxuICAgICAgICAxODQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTMsXG4gICAgICAgIDY0LFxuICAgICAgICA1NSxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMDQsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTksXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDY2LFxuICAgICAgICAxNjksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTUyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDIwLFxuICAgICAgICA5OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMjUzLFxuICAgICAgICAyNDgsXG4gICAgICAgIDQzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDMyLFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDEyMFxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAxNjAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgODYsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAzNixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxODcsXG4gICAgICAgICAgMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMixcbiAgICAgICAgMTQ2LFxuICAgICAgICA1NixcbiAgICAgICAgNjgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQsXG4gICAgICAgIDExNixcbiAgICAgICAgNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDgyLFxuICAgICAgICA1MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDE0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjI1LFxuICAgICAgICA5NSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjksXG4gICAgICAgIDE2NixcbiAgICAgICAgMTE4LFxuICAgICAgICA1NyxcbiAgICAgICAgMTcxLFxuICAgICAgICA5NSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMDksXG4gICAgICAgIDU3LFxuICAgICAgICAyNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNzAsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDIyOSxcbiAgICAgICAgODYsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzksXG4gICAgICAgIDUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMzQsXG4gICAgICAgIDI0MixcbiAgICAgICAgNzYsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTc1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDgzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDkxLFxuICAgICAgICA2MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNzMsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiOU5KeGxZbGZSVVJSRlYrWDhmVE9JdUFvbU1rNDNYN0Rsc3FJaEkwRTZBUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiREtqNXhPMUFTWWVvbklaeDJXYnYzQVwiLFxuICBcInBob25lSWRcIjogXCJlMmFhZThiYS1lODU1LTQ0YWYtYWJiYS02ZmUwOTA4ZmM1OGJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ4LFxuICAgICAgMTgzLFxuICAgICAgMTIzLFxuICAgICAgMjEsXG4gICAgICA2MSxcbiAgICAgIDE3MCxcbiAgICAgIDE5MyxcbiAgICAgIDkzLFxuICAgICAgMjQyLFxuICAgICAgMjE2LFxuICAgICAgMzksXG4gICAgICAyMTEsXG4gICAgICAyMjgsXG4gICAgICAyMzksXG4gICAgICAxNjEsXG4gICAgICAxNjEsXG4gICAgICA5MCxcbiAgICAgIDc5LFxuICAgICAgMTE3LFxuICAgICAgMjI3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIsXG4gICAgICAyNDAsXG4gICAgICA4MCxcbiAgICAgIDE2NSxcbiAgICAgIDM3LFxuICAgICAgMTU4LFxuICAgICAgOCxcbiAgICAgIDE5MCxcbiAgICAgIDY4LFxuICAgICAgNTcsXG4gICAgICA0NSxcbiAgICAgIDUyLFxuICAgICAgMTI5LFxuICAgICAgMCxcbiAgICAgIDQ1LFxuICAgICAgMTk0LFxuICAgICAgMjA0LFxuICAgICAgODcsXG4gICAgICA2OCxcbiAgICAgIDE2MlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJQUDRGNThHNFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzNDA0ODEyMDk3OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIyMTY4NzkyNTU4Mzg3NjI6MTdAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUE84NkxFREVJQ1V2TGtHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJpM0Z0Zlp1TzdBL1gxS1Y2UmFIR2hZdHoyNi8wNXcwMHY4S2lQOEFvTFhVPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjUwRElVVGMwbXE5Z0ZKT0ViczJWYy9zQ2RVRnplZDl2WU1nTWUzcFczZU8waTYwdzdnd0JOOXdPUXN0VUVaNTF4RHdpdVV1SXhOWGFiZ2xlWXZMZ0RBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIllpNHpsLzVQY1NJTkNvWDVsY2FyS2pjS3p2REx2L1ZaZGFIa1BHMkpwV3hhZ2FLR3FOOHBITnlMUTlwVytVZ3ZYaGhZWFF2eHJ0TUNRU1ZiRDhad0J3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjkyMzQwNDgxMjA5NzoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEzOSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDExN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMxMTM2MDA0LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBS2g0XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFLaDQuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJERkhXRzZXZ1Z3NjVhQVJEVjhDcFdWRTdHZWs3MGZUS2tWUlBTR3ZNOWNZPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjkwOTc3ODU0NSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczMDk3Mzk4NjQ5MFwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
