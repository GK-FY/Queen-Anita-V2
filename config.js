//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/ad7daf722db5c3f07b11b.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/ad7daf722db5c3f07b11b.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "true";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUVA2eXFTYW8yaXpFM1k4Z2tyaXpmd3VHV09sWUEwOVUyeHJjMGg0Z1FFcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNVpMOWZ6ZTF4eWtKOEZxVnVYRVVDQmg5WXptaTlXbXZJNkQ4ajBtOXlCdz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlSmpzOUhkZHFkL2pqdGZRR1VmL2MwOVEvRXhzSHNJV1VRTXNUVy8xRkZ3PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGVGNSYVNsUkZLbjRkcDRzckx1NElQSFVFQkVTRU5kTlNvK0FoRmJUa2tBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IllHejZkbjNBWjNmM1VQQmhEY2lndHMyT2ZJSzRqK1ZuVEJXUlRnY0ZhRkU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRIQU1Pa09wbkNXakJHTndaSkpMNzBvcDN5dHdlZTNsMTR5bXZIbFI0V0U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0k2eUZkYUN4VzcwZmZSNExlK2lCWDFwdnZ3Ry9qMndreVBTYVhCVEgwZz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMUJ0R3NPOTFSTnJCRFkrWEVFMjNNbkJ6LzlGQW1LMlZxU0hYUzJGNzJsOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldhTmJ6SDVrSEVRSUhHY0JzcmhpSVJnQnZHUVNhUnloVkpDSENhTjNYV0ovVXZFTDR3dXlCV1I2QTNRZFJTc2ZoczhLdkZRSk5TR2ZQRkJjZWdvM0JRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTAzLCJhZHZTZWNyZXRLZXkiOiJQMU5EUVIvaXFZSXpWVVNNcjAraGhwaFExT3pyUTNWbTZyY0JkU3k0MHBvPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJic0REc3MwUlJuRzhfVUVrNFNwb1FBIiwicGhvbmVJZCI6IjQ0OGUyZTEwLWFmYTAtNGZiZi05YWYwLTJhYjkyMzIyYzNkNCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJmY2lOa0FWZlo3NWdBdjI1YXZIWlhOZDNUWk09In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBZTXJZVHIwYWdVdzY5SXh4SHFGL3lxeUY1cz0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lQdC9vZ0VFTExndzdnR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IjcyQzdWZlN1YjFockxPSVY3UUl0U2Z0bDJDa0FmRFNPcXBtK2MrUUQrUlk9IiwiYWNjb3VudFNpZ25hdHVyZSI6IldGbnBvcW5RclB4YTQzVlhrV2txRFFjVndtc2hoREFzWDBxVWtrQUhLTW5HNnNuYm42dEloZE95TVVSdGpCOGxtQkNLR3hPMll1dUxyUldiNFB5K0JRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIyZXZFek1GcVZIcUovRXZTa2VOYTI1M0lPemRRNGZ2WFdMSEpQY2pKendJQVZVSVdhTm5HRXUvN2VGN0pSeUxiM3dVbGI5NndmQ2pXeGM3ajdLL0lEdz09In0sIm1lIjp7ImlkIjoiMjU0MTA3MjQxMDc4OjJAcy53aGF0c2FwcC5uZXQifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU0MTA3MjQxMDc4OjJAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCZTlndTFYMHJtOVlheXppRmUwQ0xVbjdaZGdwQUh3MGpxcVp2blBrQS9rVyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyOTE2MzMzMCwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFIVjYifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "🌹𝙎𝙃𝘼𝙉𝙆",
  botname: process.env.BOT_NAME || "🌹𝙎𝙃𝘼𝙉𝙆 𝙁𝙔",
  ownername: process.env.OWNER_NAME || "🌹𝙎𝙃𝘼𝙉𝙆 𝙁𝙔(𝙁𝙔'𝙎 𝙋𝙍𝙊𝙋𝙀𝙍𝙏𝙔🕊️)",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
