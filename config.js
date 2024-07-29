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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_15_46_07_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxMDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc1LFxuICAgICAgICAzMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA5OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxODAsXG4gICAgICAgIDg1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDk5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNDEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU1LFxuICAgICAgICAxMSxcbiAgICAgICAgODRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE3LFxuICAgICAgICAxNTIsXG4gICAgICAgIDIzMixcbiAgICAgICAgMjA3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjQyLFxuICAgICAgICAzMixcbiAgICAgICAgNzcsXG4gICAgICAgIDE4LFxuICAgICAgICA1MixcbiAgICAgICAgNTAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjE2LFxuICAgICAgICA5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDY1LFxuICAgICAgICA3OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzMixcbiAgICAgICAgMTQsXG4gICAgICAgIDgzLFxuICAgICAgICA4MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMjYsXG4gICAgICAgIDg1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTUxLFxuICAgICAgICA2LFxuICAgICAgICAyLFxuICAgICAgICA2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTUsXG4gICAgICAgIDUyLFxuICAgICAgICAxMTUsXG4gICAgICAgIDk0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMjM1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyNDksXG4gICAgICAgIDgwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDgyXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDM1LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTksXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTIxLFxuICAgICAgICA2OSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4NCxcbiAgICAgICAgOTksXG4gICAgICAgIDQxLFxuICAgICAgICAyMzIsXG4gICAgICAgIDIzNCxcbiAgICAgICAgNCxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMTQ0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDI0LFxuICAgICAgICA5MyxcbiAgICAgICAgNzksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxOTEsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEwMixcbiAgICAgICAgNjUsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMzAsXG4gICAgICAgIDE1NyxcbiAgICAgICAgNSxcbiAgICAgICAgMTY3LFxuICAgICAgICAzMixcbiAgICAgICAgNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjQ3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjAsXG4gICAgICAgIDIwMixcbiAgICAgICAgMTI2LFxuICAgICAgICA2OSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDExOCxcbiAgICAgICAgNTgsXG4gICAgICAgIDMzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgMjAwLFxuICAgICAgICAxNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTM1LFxuICAgICAgICAzMixcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNyxcbiAgICAgICAgODEsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDI1MixcbiAgICAgICAgMzMsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxNzgsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjAwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDE1NCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAyNDIsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgODYsXG4gICAgICAgICAgMzBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODYsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTQ2LFxuICAgICAgICA4LFxuICAgICAgICAzMixcbiAgICAgICAgMTI0LFxuICAgICAgICAyMixcbiAgICAgICAgMjQyLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExLFxuICAgICAgICAxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNjksXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjA1LFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgNjgsXG4gICAgICAgIDcxLFxuICAgICAgICAyMyxcbiAgICAgICAgMTI2LFxuICAgICAgICA3OSxcbiAgICAgICAgODksXG4gICAgICAgIDIzNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAzMixcbiAgICAgICAgMTc0LFxuICAgICAgICA2NixcbiAgICAgICAgMTEwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDczLFxuICAgICAgICAxOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQyLFxuICBcImFkdlNlY3JldEtleVwiOiBcIjh2eEhzYTY0UzBPV3k3Tmg3dzBwWXNRS2RwM1FnNGwyTEhkUWlwQUlYSWs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIldWV0pBSWt5U0JxYVk3a2lKTFpZLUFcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjIwMTY2ODEtYTI1NS00YTMzLWI3NDYtNGJmNjk1MDQxNDk3XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDY1LFxuICAgICAgMTE0LFxuICAgICAgMjA3LFxuICAgICAgMjQ1LFxuICAgICAgODUsXG4gICAgICA4NyxcbiAgICAgIDkwLFxuICAgICAgMTY3LFxuICAgICAgMTUyLFxuICAgICAgODcsXG4gICAgICA2NSxcbiAgICAgIDI0MixcbiAgICAgIDcsXG4gICAgICAxNTQsXG4gICAgICAxNzksXG4gICAgICAxODAsXG4gICAgICAyMTUsXG4gICAgICAyMSxcbiAgICAgIDExNixcbiAgICAgIDBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTI3LFxuICAgICAgMTI5LFxuICAgICAgNTQsXG4gICAgICA2OCxcbiAgICAgIDEyNCxcbiAgICAgIDEzOCxcbiAgICAgIDMyLFxuICAgICAgMixcbiAgICAgIDIxMCxcbiAgICAgIDE0MyxcbiAgICAgIDE3NCxcbiAgICAgIDIyMyxcbiAgICAgIDIwNyxcbiAgICAgIDIyMyxcbiAgICAgIDI0NSxcbiAgICAgIDE5MixcbiAgICAgIDE0LFxuICAgICAgMTE4LFxuICAgICAgMTEsXG4gICAgICAyMDdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiNU1HTDVXUUFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgwNjM3Mzg4NjY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMzQzNjgxMjY5ODM2OjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTUgyNk5NQkVObnluclVHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJPZDRXUU93NTdTK2srY1dUSlc5bTNha2QwL2puNWlSb25BdmM5ZmxFVWhrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIlRkMUNiMElBNmRDTVNvQWVQVEdqVVBteldKdFFOekhzQ2RzbVd4Mm95Q2dzQVQ3TFozbTN2endwL1hBWHRKdStlbjZMaisvYk0yRHQxVkVTTkg2cEF3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk1UT0FKWnVhMHdwR2dPTEhUalNQWTdERmlLM2hwQWVvYlBWYm5HT0h1YjZPWmpiQmRjMU1qRUZnTjdsdE90aGtqTU1zbnlPYkhGZ1p3Nzc2WnVaZEJBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgwNjM3Mzg4NjY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxMTEsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMjI2Nzk5NlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


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
