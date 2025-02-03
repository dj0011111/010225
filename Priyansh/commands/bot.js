const fs = global.nodemodule["fs-extra"];
module.exports.config = {
  name: "goibot",
  version: "1.0.1",
  hasPermssion: 0,
  credits: "MR AWAIS",
  description: "goibot",
  commandCategory: "Noprefix",
  usages: "noprefix",
  cooldowns: 5,
};
module.exports.handleEvent = async function({ api, event, args, Threads, Users }) {
  var { threadID, messageID, reason } = event;
  const moment = require("moment-timezone");
  const time = moment.tz("Asia/Manila").format("HH:MM:ss L");
  var idgr = `${event.threadID}`;
  var id = event.senderID;
  var name = await Users.getNameUser(event.senderID);

  var tl = ["haiy ma sadky jawa teri masoom shaqal py 😂 chabal insan", "Bot nah bol oye ! Janu bol mjhy aur janu sy piyar sy bat kerty hai , rat ko kahan thy nazar nahi ay hawali py 😂", "Shaqal Sy masoom lgty ho 😂 btao kahi Ap ka ghar doup main to nahi", "kash tum single hoty to maza hi koch aur tha pagal insan 😂", "Ha ha ab meri yaad ab ai 😾 ab me ap sy naraz ho jao ap ☹️", "اور ٹھرکی کبھی ہار نہیں مانتے 🙂 ☹️", "G JAWN", شــریـکـٓـاں دا 𝐜𝐡𝐚𝐜𝐡a  یــًس کــٔرواؤ🙂", "محترمہ تہاڈا  عید دا سوٹ کہیڑے رنگ دا اے", "دوائی ہلا کر پیا کر 🌚", "تُو ملے جہاں میرا جہاں ہے وہاں 🌍🔥♥️", "شرم نہیں آتی روزے میں فلرٹ کرتے ہوئے - 🥹", "ادھر آئو تمہیں چونا لگائوں🥹🫶", "اپنــی اوکــﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖٜ۬ﹻــات میــــں رہیـﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖٜ۬ــں محتـــرم 🙂", "لوٹ اؤ اور کہہ دو،،،،،  کسی نے منہ نہیں لگایا", "بے خیالی میں بھی تیرا ہی خیال آۓ♥️", "چــّــرس پـ٘ـیـّـو ، زندگــ٘ی جـٓـیــّو🎭😞", "JAWN خواتین کے لیے inbox میں پردے کا خاص انتظام ہے🙂", "بے وفاؤں کو نالی میں پھینک دے", "یا اللّٰہ  ایک دے اور نیک دے 🙌🏻😇😌", " 🦋🍒____________🙂🎀پتہ لگا تینوں شوق لتراں دا🤝🏻🔐", "یہ دنیا وفا کے قابل نی میری جان", "بــــڑے بــدتمیــــز ہـــو جــــــانــــم 🙂💔", "پیاڑی بچیاں  inbox  آئیں ۔۔۔۔:))😌♥️", "کسی ایک کے لیے خوبصورت رہنا کافی ہوتا ہے۔🙂❤️", "GOR SY SUN LO SABKA CUTY GA", "میری زندگی ہے تو✨🫶♥️", "جھمکے کا سائز بتا", "شرم کر اتنی بڑی ہوگئ ہو", "اب تو شادی کرنی ہی پڑے گی آخر کب تک پولیو والی لڑکیاں مایوس جاتی رہیں گی", "haiy babu ny boliya hai shaid purpose kerna hai mjhy bolo bolo babu 😘", "|😘=تـــیـری لــــے لــــیـں۔۔۔۔۔بـــــلا ئیــــں🥲✌🏻", "Ary chabli nah mar joh kam hai bol do sharma nahi , bol de koi nahi dakh rha 😂", "آپ ہــــــــو ہــــــــی کنـــــــجر🙂🖐🏻😍", "Dur Dur Fity Muh Aur Koi Kam Nahi Kiya Har Waqat Mjhy Tang Kerta Rhta Ha 😂" , "ary ary bolo meri jaan kia hail hai ;) ;* " , "شــــــــٹ آپ ڈارلنــــــگ🤭🖐🏻" , "ary tum ider 🤔 khair hai ider kia ker rhy ho 😂" , "ary babu babu kal hawali py kon bola rha tha 😂" , "🚶🏼‍♂️__غُلامــــی صـــــرف بیگــــم دی-♥️🌸" , "ary tum Wohi ho nah jis ko ma nahi janta 😂" , "kal hawali py mil zara bataou ga 😂" , "tu bot bot krta reh usko koi or pata ly ga 😂" , "aby jaldi bol kal panvel nikalna hai😂" , "🌸-اُس کی نتھلی کے آگے سب جواہرات بیکار ہیں۔۔😍♥️" , "💘‏-__کچھ صلے اس جہاں کے لئے نہیں ہوتے🙂✌🏻" , "🌪️__‏ملتے ہیں مُشکلوں سے یہاں ہم خیال لوگ⭐♥️🙂" , "محبت شاپر میں ڈال کر ڈبل کر دیں۔۔۔🙈😽👉🏻" , "جانم اگر تم حسین ہو تو بھاڑ میں جاؤ 🙂🖤🖐🏻" , "ایدا نی چلدے پیار سوہنیے🥺💔" , "🥀-°اُس لاہورن پہ میں پورے ملک کی لڑکیاں وار دوں🦋🖤" , "اگر تم اوجری نہیں صاف کر سکتی تو تم بھی برگر بچی ہو۔۔🙂🫡" , "CHAL MERA PUTT CHUTI KAR" , "🙊🚶🏼‍♂️سنو لڈو تو سب ہی کھیلتے آؤ میں تمہاری زُلفوں سے کھیلوں🙂" , "🌼تـیـری بیـوفـائـی نـے مجھـے ٹھـرکـی بنـا دیـا🙂👿✌🏻" , "ٹھرکی بولتی پبلک ♥️🦋" , "esy nah dakho piyar ho jay ga 😂" , "EID AA GAI MERA YAAR NI AYA" , "APKI JAAN HAZIR HUKM" , "AAP PY DIL ATY ATY REH GIA" , "KIA HO RHA HAI JAWN" , "KIA APNY ROZA RAKHA" , "MOGAMBO KHUSH HUA" , "MERE PAS TUM HO" , "JAA SIMRAN JEE LY APNI ZINDGI" , "ALL IS WELL" , "پـــونــــک ہــــور پـــونـــک " , " چرس لاؤ دل اُداس ہے🙂🖤" , "کـوئی اپــنا نہیـــــں 🙂ســـب بغیــــرت ہیـــں•🤭" , "بــــڑے بــدتمیــــز ہـــو جــــــانــــم 🙂" , "شکلوں تے شاپر لگدا اے" , "مـٓیری ایک چــومـی کـــــی مــــــار ہــــــــو تـــم - " , "او جــنے مــیرا دل لُـــٹیا🙈🙂🔪" , "NAMAZ PARRH LI YA NHI" , "غلامــــی صـٓــــرف آنٹیوں کی ^ 😮‍💨🫡" , "بــاوا جـی بــیغیــــرتـیــاں 🙂💔" , "TUM JO AYE ZINDGI ME BAAT BAN GAI" , "TUSI JA RHY O TUSI NA JAO" , "TENSION LENY KA NHI SIRF DENY KA" , "AO MADINY CHLEN 💘" , "AA KHI DOOR CHLY JAEN HUM " , "YES BEAUTIFULL" , "PICTURE ABHI BAQI HAI MERE DOST" , "APKA TO BAD LUCK HE KHRAB HAI" , "BHALLY" , "Teri pic dakhna sy phly shukhr hai ma anda hu 😂" , "🚶🏼‍♂️-__سنو پٹ جاؤ مجھے رن مریدی کا شوق ہے😩😞💔"];
  var rand = tl[Math.floor(Math.random() * tl.length)]

    if ((event.body.toLowerCase() == "love bot") || (event.body.toLowerCase() == "love bot")) {
     return api.sendMessage("Hmm... Bot is too shy to love the bot admin :))", threadID);
   };

  if ((event.body.toLowerCase() == "@everyone") || (event.body.toLowerCase() == "love bot")) {
     return api.sendMessage("Hmm... Aby Q everyone kr k Sub ko Tang Kr Rhy :))", threadID);
    };

    if ((event.body.toLowerCase() == "@Muhammad Awais Manzoor") || (event.body.toLowerCase() == "love bot")) {
       return api.sendMessage("Hmm... Mjsy Baat Kro Boss Abhi Busy Hen  :))", threadID);
      };

      if ((event.body.toLowerCase() == "Arrow") || (event.body.toLowerCase() == "love bot")) {
         return api.sendMessage("Kash Mjy b Koi Arrow Game me Ly k Jata :))", threadID);
   };
    if ((event.body.toLowerCase() == "oh bot") || (event.body.toLowerCase() == "oh bot")) {
     return api.sendMessage("Hurry, I have to serve other boxes :)", threadID);
   };

    if ((event.body.toLowerCase() == "does bot love you") || (event.body.toLowerCase() == "bot loves you")) {
     return api.sendMessage("Hi, Bot loves you more than me, love bot <3", threadID);
   };

   if ((event.body.toLowerCase() == "dog bot") || (event.body.toLowerCase() == "dog bot")) {
     return api.sendMessage("What dog just talked bad about me, want to die😠", threadID);
   };

   if ((event.body.toLowerCase() == "dmm bot") || (event.body.toLowerCase() == "dmm bot")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "cursing cmm") || (event.body.toLowerCase() == "undercover cmm")) {
     return api.sendMessage("Being disobedient to your biological parents, you say that's a broken person", threadID);
   };

   if ((event.body.toLowerCase() == "hi") || (event.body.toLowerCase() == "hy")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "morning") || (event.body.toLowerCase() == "good morning")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "good night") || (event.body.toLowerCase() == "night")) {
     return api.sendMessage("Hello dear, good night ❤️", threadID);
      };

      if ((event.body.toLowerCase() == "code") || (event.body.toLowerCase() == "night")) {
        return api.sendMessage("Har Waqt Code Code Toba Hai Vesy ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "good afternoon") || (event.body.toLowerCase() == "afternoon")) {
     return api.sendMessage("Hello dear, good afternoon ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "welcome") || (event.body.toLowerCase() == "wellcome")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "hello")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

  if ((event.body.toLowerCase() == "bsvv nha mng") || (event.body.toLowerCase() == "bsvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "bsvv nha mn") || (event.body.toLowerCase() == "bsvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mng") || (event.body.toLowerCase() == "btvv nha mng")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hi ae") || (event.body.toLowerCase() == "hi ae")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hiii") || (event.body.toLowerCase() == "hiii")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "btvv nha mn") || (event.body.toLowerCase() == "btvv nha mn")) {
     return api.sendMessage("Hello dear, have a nice day ❤️", threadID);
   };

   if ((event.body.toLowerCase() == "hello") || (event.body.toLowerCase() == "sorcerer")) {
     return api.sendMessage("Hi there <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mng") || (event.body.toLowerCase() == "tt go mng")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "let's go") || (event.body.toLowerCase() == "let's go")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "tt mng oi") || (event.body.toLowerCase() == "tt mng oi")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "nn nha mng") || (event.body.toLowerCase() == "nn nha mng")) {
     return api.sendMessage("️Sleep well <3 Wish you all super nice dreams <3", threadID);
   };

   if ((event.body.toLowerCase() == "tt go mn") || (event.body.toLowerCase() == "tt go mn")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "flop over") || (event.body.toLowerCase() == "flop over")) {
     return api.sendMessage("️1 is interaction, 2 is kick :))))", threadID);
   };

   if ((event.body.toLowerCase() == "clmm bot") || (event.body.toLowerCase() == "clmm bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot cc") || (event.body.toLowerCase() == "bot cc")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "cc bot") || (event.body.toLowerCase() == "cc bot")) {
     return api.sendMessage("️Swear something dog :) you've been holding on to you for a long time", threadID);
   };

   if ((event.body.toLowerCase() == "bot dthw too") || (event.body.toLowerCase() == "bot dthw over")) {
     return api.sendMessage("️ that's very commendable hihi :>", threadID);
   };

   if ((event.body.toLowerCase() == "dm bot") || (event.body.toLowerCase() == "dm bot")) {
     return api.sendMessage("️Swear something to your dad :), you're a kid but you like to be alive :)", threadID);
   };

   if ((event.body.toLowerCase() == "nobody loves me") || (event.body.toLowerCase() == "nobody loves me")) {
     return api.sendMessage("️Come on, the bot loves you <3 <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love the admin bot") || (event.body.toLowerCase() == "does the bot love the admin bot")) {
     return api.sendMessage("Yes, love him the most, don't try to rob me", threadID);
   };

   if ((event.body.toLowerCase() == "bot im going") || (event.body.toLowerCase() == "bot im di")) {
     return api.sendMessage("Im cc :))) m stop barking for me, but tell me im :>>", threadID);
   };

   if ((event.body.toLowerCase() == "bot go away") || (event.body.toLowerCase() == "bot cut di")) {
     return api.sendMessage("You're gone, your dad's gone, don't make you speak :))))", threadID);
   };

   if ((event.body.toLowerCase() == "What's the bot swearing") || (event.body.toLowerCase() == "bot cursing")) {
     return api.sendMessage("Damn you, shame on hahaha :>>, still asking", threadID);
   };

   if ((event.body.toLowerCase() == "is the bot sad") || (event.body.toLowerCase() == "is the bot sad")) {
     return api.sendMessage("Why can't I be sad because of everyone <3 love you <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love you") || (event.body.toLowerCase() == "does the bot love you")) {
     return api.sendMessage("Yes I love you and everyone so much", threadID);
   };

   if ((event.body.toLowerCase() == "bot goes to sleep") || (event.body.toLowerCase() == "bot goes to sleep")) {
     return api.sendMessage("I'm a bot, you're the one who should go to sleep <3", threadID);
   };

   if ((event.body.toLowerCase() == "has the bot eaten yet") || (event.body.toLowerCase() == "bot an comrade")) {
     return api.sendMessage("I'm full when I see you eat <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot love me") || (event.body.toLowerCase() == "does the bot love me")) {
     return api.sendMessage("Yes <3", threadID);
   };

   if ((event.body.toLowerCase() == "does the bot have a brand") || (event.body.toLowerCase() == "does the bot fall")) {
     return api.sendMessage("Yes <3", threadID);
   };
   mess = "{name}"

  if (event.body.indexOf("Bot") == 0 || (event.body.indexOf("bot") == 0)) {
    var msg = {
      body: `${name}, ${rand}`
    }
    return api.sendMessage(msg, threadID, messageID);
  };

}

module.exports.run = function({ api, event, client, __GLOBAL }) { }
