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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348063738866";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_45_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxODcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMixcbiAgICAgICAgMyxcbiAgICAgICAgNjYsXG4gICAgICAgIDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI3LFxuICAgICAgICA1MCxcbiAgICAgICAgMTczLFxuICAgICAgICAyMDEsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjMxLFxuICAgICAgICAzOSxcbiAgICAgICAgODAsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIxLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTI2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMCxcbiAgICAgICAgMTk1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDUsXG4gICAgICAgIDc2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTM0LFxuICAgICAgICA4MCxcbiAgICAgICAgNTgsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTE5LFxuICAgICAgICA1MixcbiAgICAgICAgMjI3LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjMyLFxuICAgICAgICAyMixcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDkyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTksXG4gICAgICAgIDIyMCxcbiAgICAgICAgNixcbiAgICAgICAgMTEyLFxuICAgICAgICA1NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMjAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDQzLFxuICAgICAgICAyMTYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjUzLFxuICAgICAgICA4MCxcbiAgICAgICAgOTcsXG4gICAgICAgIDI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTgsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDgxLFxuICAgICAgICAyMzEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2OSxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNDIsXG4gICAgICAgIDI2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE4NixcbiAgICAgICAgNTAsXG4gICAgICAgIDMyLFxuICAgICAgICA4LFxuICAgICAgICAxNyxcbiAgICAgICAgMzEsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgsXG4gICAgICAgIDE2LFxuICAgICAgICA1NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAwLFxuICAgICAgICAyMTIsXG4gICAgICAgIDc4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTk1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjMzLFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDE2NCxcbiAgICAgICAgNzBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE5LFxuICAgICAgICAxMDEsXG4gICAgICAgIDUsXG4gICAgICAgIDUwLFxuICAgICAgICAxNzMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxMjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDYwLFxuICAgICAgICAxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTQyLFxuICAgICAgICA1OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2NSxcbiAgICAgICAgMzVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIxMCxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgNyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDExNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDEwM1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTQsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDcxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICA2MixcbiAgICAgICAgICA0MFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MCxcbiAgICAgICAgMjAwLFxuICAgICAgICA4OSxcbiAgICAgICAgMTA0LFxuICAgICAgICA4MixcbiAgICAgICAgMTg4LFxuICAgICAgICAyNDksXG4gICAgICAgIDIxLFxuICAgICAgICAxNTAsXG4gICAgICAgIDYxLFxuICAgICAgICA2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgNzIsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU3LFxuICAgICAgICA0LFxuICAgICAgICA1MCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTM2LFxuICAgICAgICAxODYsXG4gICAgICAgIDEzMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDIwNCxcbiAgICAgICAgNzEsXG4gICAgICAgIDE4LFxuICAgICAgICAxOCxcbiAgICAgICAgMjAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgODksXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxODMsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMjIyLFxuICAgICAgICAyNDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxMixcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDk4LFxuICAgICAgICA1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjU1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjI4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTczLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgNjQsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiA3NyxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCIrSHQyWGJZU3hKRmRkbXQ4cEtzcWFCUURzbWRxa1dJQUxQdFI5cVF6WnQ0PVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJDU0pTV0xnSVE1dWg3MGtWd1lYU19RXCIsXG4gIFwicGhvbmVJZFwiOiBcImRkOTI4MTM1LThhMzItNDI5YS1hNmI4LTUwZWQzNTY5MjAwNlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNTEsXG4gICAgICAxNTYsXG4gICAgICAxMTYsXG4gICAgICA3NCxcbiAgICAgIDE1MSxcbiAgICAgIDE5MyxcbiAgICAgIDEzLFxuICAgICAgODcsXG4gICAgICAyNDQsXG4gICAgICAxMzksXG4gICAgICAxNTgsXG4gICAgICAxNDMsXG4gICAgICAxNDcsXG4gICAgICAxNzksXG4gICAgICAyNTEsXG4gICAgICAxNjQsXG4gICAgICAxOTQsXG4gICAgICAxMTgsXG4gICAgICAxNzMsXG4gICAgICAxMDNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgOTIsXG4gICAgICAxMjAsXG4gICAgICAxOSxcbiAgICAgIDI0MCxcbiAgICAgIDIzNSxcbiAgICAgIDE5NCxcbiAgICAgIDIzNSxcbiAgICAgIDUyLFxuICAgICAgNDUsXG4gICAgICAxNDMsXG4gICAgICA1NixcbiAgICAgIDk1LFxuICAgICAgMTcsXG4gICAgICAyNDYsXG4gICAgICAxOTcsXG4gICAgICA5NyxcbiAgICAgIDEzOCxcbiAgICAgIDE5MixcbiAgICAgIDI0OCxcbiAgICAgIDE4MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCIxUDNCQVM3NFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODA2MzczODg2NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIzNDM2ODEyNjk4MzY6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNSDI2Tk1CRUp5T243VUdHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIk9kNFdRT3c1N1MraytjV1RKVzltM2FrZDAvam41aVJvbkF2YzlmbEVVaGs9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiNlIrMUZQYy9LRnFobG9nNTVEekZ4LzZmVURKUStiZFJManFjbW93ZGdHNVJRMTJmMTZnWnJnSW5ST240SldtbHA4QSs2Vjl1QXlPV1JYVjdCa294RHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZHBtM21Xdld5cHNpb0JkMlB3cWp3UkNhUW9CYXZkT3JmZEVES0IyU0NidXFSMnNZQmdwcFFqTk84MS8xUmNJSVFROXRNUnp0VDVWbDlwejg3TTVlQlE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODA2MzczODg2NjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgMTA0LFxuICAgICAgICAgIDE1NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzIyMjcxNTIwLFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBT3dNXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFPd00uanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJsUGcyRDlGRGNSdVZQSm5keE1EOUVubmV5NXRkZkcvYnV3dTNzNlYrRUprPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjQ0NDIxODE3NyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzIyMjY4MDI0MTE5XCJ9Igp9"  // PUT your SESSION_ID 


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
