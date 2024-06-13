const { Client, Events, GatewayIntentBits, EmbedBuilder, ButtonBuilder, ButtonStyle, ActionRowBuilder, ActivityType, ModalBuilder, TextInputBuilder, TextInputStyle, Partials, SlashCommandBuilder } = require('discord.js');
const { token } = require('./config.json');
const noblox = require("noblox.js");
const { QuickDB } = require("quick.db");
const db = new QuickDB();
const fs = require("fs")

var express = require("express");
var app = express();

app.use(express.static("public"));
app.get("/", function (request, response) {
    response.sendStatus(200);
});

// Request Listeners.
var listener = app.listen(process.env.PORT, function () {
    console.log("Your app is listening on port " + listener.address().port);
});

const client = new Client({ intents: [GatewayIntentBits.Guilds,GatewayIntentBits.GuildMessages,GatewayIntentBits.MessageContent,GatewayIntentBits.DirectMessages, GatewayIntentBits.GuildMembers], partials: [
    Partials.Channel,
    Partials.Message
  ] });

/*const client = new Client({
  intents: Object.keys(GatewayIntentBits).map((a)=>{
    return GatewayIntentBits[a]
  }),
});*/
const targetServerId = '1136318999936905407';

client.once(Events.ClientReady, async c => {
	console.log(`RoConnection is ready to verify!!`);
  // Set the bot's activity and status
  client.user.setPresence({
    activities: [{ name: "Roblox Verification", type: ActivityType.Watching }],
    status: 'online'
  })
});
client.once(Events.ClientReady, c => {
	console.log(`[LOGS] (/) Slash Commands Ready!`);
  registerSlashCommand();
});

// Generate function
function Generate() {
        let text = '';
        const randomstuff = [
  "Celestial bodies dance cosmos choreography unseen melodies play",
  "Mysteries vast unfold seekers traverse uncharted realms wonders await",
  "Whispers wind carry secrets ancient modern ears listen closely",
  "Eternal galaxies spiral cosmic ballet radiant stars shimmer",
  "Ephemeral moments pass swiftly life's tapestry woven connections vast",
  "Infinite dreams awaken minds consciousness expands like universe",
  "Beneath towering trees life buzzes nature's symphony harmony unending",
  "Transcendent thoughts soar boundless skies imagination knows no limits",
  "Unveiled dimensions beckon explore thresholds reality shatter",
  "Amidst chaos order exists patterns emerge chaos birth creation",
  "Spectrum colors blend twilight dawn hues paint horizon canvas",
  "Emergent souls traverse paths destiny weaves lives intertwine",
  "Interstellar wonders unfold astronomers gaze distant galaxies collide",
  "Resilient spirits rise adversity's tides stories strength courage inscribed",
  "Beneath moon's glow creatures stir night's embrace shadows dance",
  "Cosmic energies connect life threads weave intricate tapestry existence",
  "Essence being transcends mortal coil souls journey eternal",
  "Flowers bloom sun's warmth petals unfold nature's masterpiece revealed",
  "Consciousness merges universe's flow boundaries blur truths shimmer",
  "Echoes past linger present songs unsung futures whisper"
];
        text += randomstuff[Math.floor(Math.random() * randomstuff.length)];
        return text;
      }

const string = Generate()



client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  
//  await interaction.deferReply();

  if (commandName === 'help') {

      
       const button = new ButtonBuilder()
	.setCustomId('c')
	.setLabel('Commands')
	.setStyle(ButtonStyle.Primary)

    const row = new ActionRowBuilder()
			.addComponents(button);
    
    let help_command = new EmbedBuilder()
    .setAuthor({ name: 'RoConnection', iconURL: 'https://cdn.discordapp.com/avatars/1136310852199403611/bf8aef8a3dac6ea01b6fbd6b53edcd51.png' })
  	.setTitle('Help Menu!')
		.setDescription(`I see you’re having a difficult time understanding me…\nWell no worries, I am here to help!\nTo view my commands You can press the button: “Commands”\nFor more Info check the /info command!`)
    .setColor('#2F3136')
    .setThumbnail('https://cdn.discordapp.com/avatars/1136310852199403611/bf8aef8a3dac6ea01b6fbd6b53edcd51.png')
    .setTimestamp()


   await interaction.reply({ embeds: [help_command], components: [row] })
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;



  if (interaction.customId === 'c') {
    let embed = new EmbedBuilder()
    .setTitle('My Commands!')
    .setDescription('**All of my commands are stated below, and also their function will be explained.**\n\n1. </help:1136425917992935594>\nShows Information about <@!1136310852199403611>.\n\n2. </progress:1136343969081597992>\nInformation about newest releases/bugs.\n\n3. </verify:1136563804164083762>\nVerification setup.\n\n4. </ping:1136328573813276734>\nReplies with "Pong!"(Small fact, this was one of our first commands)\n\n⚒️ 5. </update-role:1136443331015086141>\n**Command is in development mode**')
    interaction.update({ embeds: [embed], components: [] })
    // 'ephemeral: true' makes the bot's response visible only to the user who clicked the button
  }
});

let name;

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

 // await interaction.deferReply();

  const { commandName, options } = interaction;
 
//await interaction.deferReply()
  
  if (commandName === 'update-role') {
 if (!interaction.guild) return;

    const mention = options.getUser('user');
     // Simulate a delay (you can replace this with your actual command logic)
         //await new Promise(resolve => setTimeout(resolve, 1000));
        
  //  try {
  //  let users = mention.id
    
    
 
// ======================================================================================================== //
      /*  if(get_rank2 === "Trainee Officer") name = `TO - ${username2}`
    if(get_rank2 === "Suspended") name = `SUSP - ${username2}`
    if(get_rank2 === "Contributor") name = `CONT - ${username2}`
    if(get_rank2 === "Probationer") name = `PROB - ${username2}`
    if(get_rank2 === "Federal Officer") name = `FO - ${username2}`
    //
    if(get_rank2 === "Constable") name = `CON - ${username2}`
    if(get_rank2 === "Lead Constable") name = `L/CON - ${username2}`
    if(get_rank2 === "Sergeant") name = `SGT - ${username2}`
    if(get_rank2 === "Lieutenant") name = `LT - ${username2}`
    if(get_rank2 === "Superintendent") name = `SUPT - ${username2}`
    //
    if(get_rank2 === "Commander") name = `CDR - ${username2}`
    if(get_rank2 === "Lead Commander") name = `L/CDR - ${username2}`
    if(get_rank2 === "Assistant Inspector") name = `A/INS - ${username2}`
    if(get_rank2 === "Inspector") name = `INS - ${username2}`
    if(get_rank2 === "Assistant Chief") name = `AC - ${username2}`
    //
    if(get_rank2 === "Deputy Chief ") name = `DC - ${username2}`
    if(get_rank2 === "Chief of Police") name = `CoP - ${username2}`
    if(get_rank2 === "Deputy Commissioner") name = `D/COMM - ${username2}`
    if(get_rank2 === "Federal Commissioner") name = `F/COMM - ${username2}`*/



    
    
//let roleChecker = await noblox.getRoles(17165837)

//const roleNames = roleChecker.map(role => role.name); // Roblox profile checker
  //  const roleString1 = roleNames.join(' ')

//console.log(roleNames);
  //  console.log(rolesList);
   // console.log(roleString)

    


    // function
      try {
      
let guild = interaction.guild;
        
  
    const memberId = interaction.user.id
      const member = await guild.members.fetch(memberId);       



     try{
        if(mention){
    let username2 = await db.get(`${mention.id}_username`)
          if(!username2) return interaction.reply({ content: "Member not verified yet! Type **/verify** to verify."})
          
    let get_user2 = await noblox.getIdFromUsername(username2)
    let get_rank2 = await noblox.getRankNameInGroup(17165837, get_user2)

              let role = guild.roles.cache.find((r) => r.name === get_rank2) || await guild.roles.create({
        name: get_rank,
        color: '#FFFFFF', // Replace with your desired color
        permissions: [], // Replace with your desired permissions
      });

      
    if(!get_rank2) return interaction.reply("Please join the LFP [group](https://www.roblox.com/groups/17165837/Lock-Wood-Federal-Police#!/about)")

      if(get_rank2 === "Trainee Officer") name = `TO - ${username2}`
    if(get_rank2 === "Suspended") name = `SUSP - ${username2}`
    if(get_rank2 === "Contributor") name = `CONT - ${username2}`
    if(get_rank2 === "Probationer") name = `PROB - ${username2}`
    if(get_rank2 === "Federal Officer") name = `FO - ${username2}`
    //
    if(get_rank2 === "Constable") name = `CON - ${username2}`
    if(get_rank2 === "Lead Constable") name = `L/CON - ${username2}`
    if(get_rank2 === "Sergeant") name = `SGT - ${username2}`
    if(get_rank2 === "Lieutenant") name = `LT - ${username2}`
    if(get_rank2 === "Superintendent") name = `SUPT - ${username2}`
    //
    if(get_rank2 === "Commander") name = `CDR - ${username2}`
    if(get_rank2 === "Lead Commander") name = `L/CDR - ${username2}`
    if(get_rank2 === "Assistant Inspector") name = `A/INS - ${username2}`
    if(get_rank2 === "Inspector") name = `INS - ${username2}`
    if(get_rank2 === "Assistant Chief") name = `AC - ${username2}`
    //
    if(get_rank2 === "Deputy Chief ") name = `DC - ${username2}`
    if(get_rank2 === "Chief of Police") name = `CoP - ${username2}`
    if(get_rank2 === "Deputy Commissioner") name = `D/COMM - ${username2}`
    if(get_rank2 === "Federal Commissioner") name = `F/COMM - ${username2}`





            const memberId2 = mention.id
    const member2 = await guild.members.fetch(memberId2);
    const rolesList2 = member2.roles.cache.map(role => role.name);
      const roleString2 = rolesList2.join(' '); 
              await member2.edit({ nick: name });
      await member2.roles.add(role);
      console.log(`[RANK-LOGS]  System have ranked ${member2.user.tag} to "${role.name}" `);

          /*if(roleNames.includes(rolesString)){
      await member.roles.remove(roleString);
      console.log("Remove role!")
    }*/
        
    let roleAdd;
        
        
      if(rolesList2.includes(role.name)) roleAdd = "None.";
      if(!rolesList2.includes(role.name)) roleAdd = role;

      const role1 = [
  "Group Holder",
  "Owner",
  "Federal Commissioner",
  "Deputy Commissioner",
  "Chief of Police",
  "Deputy Chief",
  "Assistant Chief",
  "Inspector",
  "Assistant Inspector",
  "Lead Commander",
  "Commander",
  "Superintendent",
  "Lieutenant",
  "Sergeant",
  "Lead Constable",
  "Constable",
  "Federal Officer",
  "Probationer",
  "Contributor",
  "Suspended",
  "Trainee Officer"
];

        //const rolesToRemove = await member.roles.cache.filter(role => role1.includes(roleString));
        
          //const removedRolesArray = rolesToRemove.map(role => role.name)// Store
        //const reRole1 = removedRolesArray
        //const reRole = reRole1.splice(get_rank)

       // const hasDesiredRole = member.roles.cache.some(role => role1.includes(roleString)); // have role1

        const matchingRole = member2.roles.cache.find(role => role1.includes(role.name));

        const matchedRoleName = matchingRole.name;

        const mentionedRole = matchingRole;

        const roleToExclude = get_rank2;

      
        
        if (matchingRole) {
     // Remove all roles from role1 array except the role to exclude
        const rolesToRemove = member2.roles.cache.filter(role => role1.includes(role.name) && role.name !== roleToExclude);

           const removedRoles = [];
          
          await Promise.all(rolesToRemove.map(async role => {
  try {
    await member2.roles.remove(role);
    console.log(`Removed role "${role.name}" from ${member2.user.tag}`);
    removedRoles.push(role);
  } catch (error) {
    console.error(`Error removing role "${role.name}": ${error}`);
  }
})); 

let removedRolesString = "None.";
if (removedRoles.length > 0) {
  removedRolesString = removedRoles.map(role => role).join('\n- ');
} 
            const mem = interaction.guild.members.cache.get(mention.id);
          const nickname = mem?.nickname;

           const user1 = client.users.cache.get(mention.id);
      const ogUsername = user1?.username || 'User not found';
          
        let update_command1 = new EmbedBuilder()
      	.setAuthor({ name: 'RoConnection', iconURL: 'https://cdn.discordapp.com/avatars/1136310852199403611/bf8aef8a3dac6ea01b6fbd6b53edcd51.png' })
  	.setTitle('🪪 Updated Roles & Nickname!')
		.setDescription(`**✒️ Nickname:**\n- ${nickname || ogUsername}\n**✅ Added Roles:**\n- ${roleAdd}\n**⛔️Removed Roles:**\n- ${removedRolesString}\n\nRecently changed account/username? Type **/verify** to re-verify.`)
    .setColor('#2F3136')
    //.setFooter("Roblox nickname change? type **/verify** to re-verify.")
    
  await interaction.reply({ embeds: [update_command1]}) 
      }
      }
    } catch (error) {
      console.error('[ERROR-LOGS] Error adding role:', error);
      await interaction.reply('An error occurred while processing the command.');
      }

      if (member && !mention) {
         
 let username = await db.get(`${interaction.user.id}_username`)
     
     
  if(!username) return interaction.reply({ content: "Member not verified yet! Type **/verify** to verify."})
  
  let get_user = await noblox.getIdFromUsername(username)

     let get_rank = await noblox.getRankNameInGroup(17165837, get_user)
    if(!get_rank) interaction.reply("Please join the LFP [group](https://www.roblox.com/groups/17165837/Lock-Wood-Federal-Police#!/about)")

            let role = guild.roles.cache.find((r) => r.name === get_rank) || await guild.roles.create({
        name: get_rank,
        color: '#FFFFFF', // Replace with your desired color
        permissions: [], // Replace with your desired permissions
      });
    
    if(get_rank === "Trainee Officer") name = `TO - ${username}`
    if(get_rank === "Suspended") name = `SUSP - ${username}`
    if(get_rank === "Contributor") name = `CONT - ${username}`
    if(get_rank === "Probationer") name = `PROB - ${username}`
    if(get_rank === "Federal Officer") name = `FO - ${username}`
    //
    if(get_rank === "Constable") name = `CON - ${username}`
    if(get_rank === "Lead Constable") name = `L/CON - ${username}`
    if(get_rank === "Sergeant") name = `SGT - ${username}`
    if(get_rank === "Lieutenant") name = `LT - ${username}`
    if(get_rank === "Superintendent") name = `SUPT - ${username}`
    //
    if(get_rank === "Commander") name = `CDR - ${username}`
    if(get_rank === "Lead Commander") name = `L/CDR - ${username}`
    if(get_rank === "Assistant Inspector") name = `A/INS - ${username}`
    if(get_rank === "Inspector") name = `INS - ${username}`
    if(get_rank === "Assistant Chief") name = `AC - ${username}`
    //
    if(get_rank === "Deputy Chief ") name = `DC - ${username}`
    if(get_rank === "Chief of Police") name = `CoP - ${username}`
    if(get_rank === "Deputy Commissioner") name = `D/COMM - ${username}`
    if(get_rank === "Federal Commissioner") name = `F/COMM - ${username}`

        // check for demotion

    
  

     const rolesList = member.roles.cache.map(role => role.name);
      const roleString = rolesList.join(' '); // Discord role checker
       // if(mention) return;

      await member.edit({ nick: name });
      await member.roles.add(role);
      console.log(`[RANK-LOGS] Added role "${role.name}" to ${member.user.tag}`);

          /*if(roleNames.includes(rolesString)){
      await member.roles.remove(roleString);
      console.log("Remove role!")
    }*/
        
    let roleAdd;
        
        
      if(rolesList.includes(role.name)) roleAdd = "None.";
      if(!rolesList.includes(role.name)) roleAdd = role;

      const role1 = [
  "Group Holder",
  "Owner",
  "Federal Commissioner",
  "Deputy Commissioner",
  "Chief of Police",
  "Deputy Chief",
  "Assistant Chief",
  "Inspector",
  "Assistant Inspector",
  "Lead Commander",
  "Commander",
  "Superintendent",
  "Lieutenant",
  "Sergeant",
  "Lead Constable",
  "Constable",
  "Federal Officer",
  "Probationer",
  "Contributor",
  "Suspended",
  "Trainee Officer"
];


        const matchingRole = member.roles.cache.find(role => role1.includes(role.name));

        const matchedRoleName = matchingRole.name;

        const mentionedRole = matchingRole;

        const roleToExclude = get_rank;

      
        
        if (matchingRole) {

     // Remove all roles from role1 array except the role to exclude
        const rolesToRemove = member.roles.cache.filter(role => role1.includes(role.name) && role.name !== roleToExclude);

           const removedRoles = [];
    
          await Promise.all(rolesToRemove.map(async role => {
  try {
    await member.roles.remove(role);
    console.log(`Removed role "${role.name}" from ${member.user.tag}`);
    removedRoles.push(role);
  } catch (error) {
    console.error(`Error removing role "${role.name}": ${error}`);
  }
})); 
      

let removedRolesString = "None.";
if (removedRoles.length > 0) {
  removedRolesString = removedRoles.map(role => role).join('\n- ');
} 
            
        let update_command1 = new EmbedBuilder()
      	.setAuthor({ name: 'RoConnection', iconURL: 'https://cdn.discordapp.com/avatars/1136310852199403611/bf8aef8a3dac6ea01b6fbd6b53edcd51.png' })
  	.setTitle('🪪 Updated Roles & Nickname!')
		.setDescription(`**✒️ Nickname:**\n- ${member.nickname}\n**✅ Added Roles:**\n- ${roleAdd}\n**⛔️Removed Roles:**\n- ${removedRolesString}\n\nRecently changed account/username? do **/verify** to re-verify.`)
    .setColor('#2F3136')
    //.setFooter("Roblox nickname change? type **/verify** to re-verify.")
    
  await interaction.reply({ embeds: [update_command1]}) 
         // }) 
           //})

        }else{
          let update_command1 = new EmbedBuilder()
      	.setAuthor({ name: 'RoConnection', iconURL: 'https://cdn.discordapp.com/avatars/1136310852199403611/bf8aef8a3dac6ea01b6fbd6b53edcd51.png' })
  	.setTitle('Updated Roles!')
		.setDescription(`**Nickname:**\n- ${member.nickname}\n**Added Roles:**\n- ${roleAdd}\n**Removed Roles:**\n- None.\n`)
    .setColor('#2F3136')
    
  await interaction.reply({ embeds: [update_command1]})
        
        }
                
               /* }else {
        await console.log('[ERROR-LOGS] Member not found.');
      }*/
      }
    } catch (error) {
      console.error('[ERROR-LOGS] Error adding role:', error);
      await interaction.reply('An error occurred while processing the command.');
      }
  
  }
});
     
  
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;


  const { commandName } = interaction;

  //await interaction.deferReply();

  if (commandName === 'ping') {
    let ping_command = new EmbedBuilder()
  	.setTitle('Pong!')





     
    
    await interaction.reply({ embeds: [ping_command]})
  }
});


client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  

  const { commandName } = interaction;

        
    //await interaction.deferReply();    


  if (commandName === 'verify') {

    let username = await db.get(`${interaction.user.id}_username`)
    

    let verify_command = new EmbedBuilder()
      	.setAuthor({ name: 'RoConnection', iconURL: 'https://cdn.discordapp.com/avatars/1136310852199403611/bf8aef8a3dac6ea01b6fbd6b53edcd51.png' })
  	.setTitle('Verification')
		.setDescription('Verifying using roblox... \n\n\n**Click **`Verify`** button to continue the process.**\n**Click **`Cancel` ** button to stop the process.**')
    .setColor('#2F3136')
    .setThumbnail('https://cdn.discordapp.com/avatars/1136310852199403611/bf8aef8a3dac6ea01b6fbd6b53edcd51.png')
    .setTimestamp()

const button = new ButtonBuilder()
	.setCustomId('ver')
	.setLabel('Verify')
	.setStyle(ButtonStyle.Primary)

            const button2 = new ButtonBuilder()
	.setCustomId('cancel')
	.setLabel('Cancel')
	.setStyle(ButtonStyle.Danger)

    const row = new ActionRowBuilder()
			.addComponents(button, button2);
    
   await interaction.reply({ embeds: [verify_command], components: [row] })
  }
});


 
client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;
  
    
if (interaction.customId === 'cancel') {
    
    const channel = interaction.channel;
    const fetchedMsg = await channel.messages.fetch({ around: interaction.message.id, limit: 1 });
    await fetchedMsg.delete();

    // Alternatively, you could also use this:
    await interaction.message.delete();  // :)
}
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;


  if (interaction.customId === 'ver') {


    // Check if the interaction was triggered by the owner of the original message
  /*if (interaction.message.author.id !== interaction.user.id) {
    return  interaction.reply({ content: 'Sorry, this button is not for you.\n\n**Tip: To get verified type </verify:1136563804164083762> and do the following...**', ephemeral: true });
  }*/

    // Create the modal
        const modal = new ModalBuilder()
            .setCustomId('myModal')
            .setTitle('Verification');

        // Add components to modal

        // Create the text input components
        const roblox_username = new TextInputBuilder()
            .setCustomId('username')
            // The label is the prompt the user sees for this input
            .setLabel("Enter Roblox Username")
            // Short means only a single line of text
            .setStyle(TextInputStyle.Short)
            .setRequired(true)
            .setPlaceholder('Roblox username ONLY!')


        // An action row only holds one text input,
        // so you need one action row per text input.
        const firstActionRow = new ActionRowBuilder().addComponents(roblox_username);

        // Add inputs to the modal
        modal.addComponents(firstActionRow);

        // Show the modal to the user
        await interaction.showModal(modal);
  }
});

client.on(Events.InteractionCreate, async interaction => {
	if (!interaction.isModalSubmit()) return
//    await interaction.deferReply();
	if (interaction.customId === 'myModal') {
		const username = interaction.fields.getTextInputValue('username');

    let load = new EmbedBuilder()
    .setDescription(`<a:Loading:1136598697728286821> Finding username: \`${username}\``)
    .setColor("#2F3136")

    
    interaction.deferUpdate().then(i => {
      interaction.editReply({ embeds: [load], components: [] })
    })

    let get_user = await noblox.getIdFromUsername(username)
    let data = await noblox.getPlayerThumbnail(get_user)
    let des = await noblox.getBlurb(get_user)
    let info = await noblox.getPlayerInfo(get_user)

    //console.log(info)

const imageUrls = data.map(({ imageUrl }) => imageUrl);

     

// Now you can use the imageUrls variable as needed
//console.log(imageUrls);
    
    if(!get_user){
      let notfound = new EmbedBuilder()
        .setTitle("User not found!")
    .setDescription(`> **__Try again, please do give a proper username__**\n\nNot found - \`${username}\``)
    .setColor("#FF0000")

      setTimeout(() => {
        interaction.reply({ embeds: [notfound] })
      }, 1000)
    }else{
      let word;
      if(!info.age) word = "-"
       let found = new EmbedBuilder()
        .setTitle("User found!")
    .setDescription(`> **__A mail has been sent to your DMs. Please check it!__**\n\n**Player info:**\n- Username: ${username} | ${info.displayName} (Display name)\n- Join date: ${info.joinDate}\n- Account age: ${info.age || word} days\n- Banned: ${info.isBanned}\n\nTo remove info from players, do \`/settings\`.`)
       .setThumbnail(`${imageUrls}`)
    .setColor("#00FF00")

      db.set(`${interaction.user.id}_username`, `${username}`)

      let dm = new EmbedBuilder()
      .setTitle("Final Verification!")
      .setDescription(`Go to **__Home > Avatar > About__** \n\n Copy and Paste \`\`\`${string}\`\`\` to your About. Type \`done\` to complete the verification | type \`cancel\` to stop the verification process.\n\n Futher help? [Click here](https://discord.gg/enigmaps)`)
     .setThumbnail(`${imageUrls}`)
      .setColor("#2F3136")


      setTimeout(() => {
        interaction.editReply({ embeds: [found] })
        interaction.member.send({ embeds: [dm] })
        db.set(`${interaction.user.id}_onProcess`, true)
      }, 1000)
      
    }
       
	}
});

client.on("messageCreate", async (message) => {
   if (message.author.bot) return; // Ignore messages from bots
   let onProcess = await db.get(`${message.author.id}_onProcess`);
   let username = await db.get(`${message.author.id}_username`)

  if(!username) return;

  // noblox
  let get_user = await noblox.getIdFromUsername(username)
    let data = await noblox.getPlayerThumbnail(get_user)
    let des = await noblox.getBlurb(get_user)
    let info = await noblox.getPlayerInfo(get_user)

  

  if(onProcess){
  if (!message.guild) {
    // Check if the message content contains the target word
    if(message.content === "cancel"){
      message.reply("You cancelled the verification process. To verify again do **/verify**.")
      return db.set(`${message.author.id}_onProcess`, false);
    }
    if (message.content === "done") {
      if(des === string){
        message.reply(`Verification complete! I have verifed **${username}**, you can now access to hidden channels.`)

        const targetServer = client.guilds.cache.get(targetServerId);
    if (targetServer) {
      const member = await targetServer.members.fetch(message.author);
      if (member) {
        try {
          // Edit the member's nickname
          await member.edit({ nick: username });
          message.reply(`Your nickname has been updated to: **${username}**`);

          // bb
      const GUILD_ID = '1136318999936905407';
      const roleName = "Verified"

            const guild = client.guilds.cache.get(GUILD_ID);

      if (!guild) {
        await message.channel.send('Guild not found.');
        return;
      }

      const role = guild.roles.cache.find((r) => r.name === roleName);

      if (!role) {
        await message.channel.send('Role not found.');
        return;
      }

      const member1 = await guild.members.fetch(message.author.id);

      if (!member1) {
        await message.channel.send('You are not a member of the guild.');
        return;
      }

      try {
        await member1.roles.add(role);
        await message.channel.send(`Role '${roleName}' added successfully.`);
      } catch (error) {
        console.error(error);
        await message.channel.send('An error occurred while adding the role.');
      }
        } catch (error) {
          console.error('Error updating nickname:', error);
          message.reply('An error occurred while updating your nickname.');
        }
      } else {
        message.reply('You are not a member of the target server.');
      }
    } else {
      message.reply('Target server not found.');
    }
        return db.set(`${message.author.id}_onProcess`, false);
      }else{
        message.reply(`Could not find \`\`\`${string}\`\`\` in your **About**, try again.`)
      }



      
    
  }else{
    return;
  }
  }
  }
})

client.on("messageCreate", async (message) => {
  let onProcess = await db.get(`${message.author.id}_onProcess`);

  let msg;

  if(onProcess) msg = true
  if(!onProcess) msg = false
  
  if(message.content === "!check"){
    message.reply(`Database status: ${msg}`)
  }
})

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;

 // await interaction.deferReply();

  if (commandName === 'control-panel') {

      
       const button = new ButtonBuilder()
	.setCustomId('re')
	.setLabel('Reboot')
	.setStyle(ButtonStyle.Danger)

    const row = new ActionRowBuilder()
			.addComponents(button);
    
    let control_command = new EmbedBuilder()
    .setAuthor({ name: 'RoConnection', iconURL: 'https://cdn.discordapp.com/avatars/1136310852199403611/bf8aef8a3dac6ea01b6fbd6b53edcd51.png' })
  	.setTitle('Control Panel Menu!')
		.setDescription(`Ude the buttons to use the control-panel`)
    .setColor('#2F3136')
    .setThumbnail('https://cdn.discordapp.com/avatars/1136310852199403611/bf8aef8a3dac6ea01b6fbd6b53edcd51.png')
    .setTimestamp()
    

    await interaction.reply({ embeds: [control_command], components: [row] })
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isButton()) return;
  //await interaction.update();

  if (interaction.customId === 're') {
    let embed = new EmbedBuilder()
    .setTitle('Rebooting..')
    .setDescription('The bot is now rebooting')
    interaction.reply({ embeds: [embed], components: [], ephemeral: 'true'})
    // 'ephemeral: true' makes the bot's response visible only to the user who clicked the button
  }
});
 
/// where ur interactionCreate

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName } = interaction;
  
  //await interaction.deferReply();

  if (commandName === 'progress') {
    let pro_command = new EmbedBuilder()
      	.setAuthor({ name: 'RoConnection', iconURL: 'https://cdn.discordapp.com/avatars/1136310852199403611/bf8aef8a3dac6ea01b6fbd6b53edcd51.png' })
  	.setTitle('Current Progress:')
		.setDescription(`**75%**\nOnly small new updates for commands and have to finish "get verified" button.`)
  	.setImage('https://o.remove.bg/downloads/12c2ab2d-f56f-42c8-b9b4-a44de3e71131/IMG_8021-removebg-preview.png')
    .setColor('#2F3136')
    
    await interaction.reply({ embeds: [pro_command]})
  }
});

client.on('interactionCreate', async (interaction) => {
  if (!interaction.isCommand()) return;

  const { commandName, options } = interaction;

  if (commandName === 'ban') {
    const userOption = options.getUser('user');
    const reasonOption = options.getString('reason');

    if (!userOption) {
      await interaction.reply('You must provide a user to ban.');
      return;
    }

    const userToBan = userOption;

    if (!userToBan) {
      await interaction.reply('User not found.');
      return;
    }

    const reason = reasonOption || 'No reason provided';

    try {
      const bannedUser = await interaction.guild.members.ban(userToBan, { reason });
      await interaction.reply(`${bannedUser.user.tag} has been banned for: ${reason}`);
    } catch (error) {
      console.error(error);
      await interaction.reply('An error occurred while banning the user.');
    }
  }
});

async function registerSlashCommand() {
  const commandData = {

   name: "progress",
  description: "shows current development progress.",

   name: 'help',
   description: 'Help command',


  name: 'verify',
 description: 'verification',

     name: 'ping',
  description: 'replies with pong',
    
    name: 'control-panel',
    description: 'Developers only',
    
    name: 'update-role',
   description: 'Update your roles gained in the linked group.',
   options: [
  {
    type: 6,
    name: 'user',
    description: 'Update one user.',
    required: false,
  }
]

  //  name: 'check-logs',
   // descriptioon: "Check user logs"
    
  };



  
  try {
    // Register the slash command globally
    await client.application.commands.create(commandData);
    console.log('Global slash command registered:', commandData.name);
  } catch (error) {
    console.error('Error registering global slash command:', error);
  }
}

// Logging function to log errors to a file
function logError(error) {
    const timestamp = new Date().toISOString();
    fs.appendFileSync('error.log', `[${timestamp}] ${error.stack}\n`);
    console.error('An error occurred and was logged:', error);
}

// Centralized handling for unhandled promise rejections
process.on('unhandledRejection', (reason, promise) => {
    const error = new Error(`Unhandled Promise Rejection:\n${reason}`);
    logError(error);
});

// Log in to Discord with your client's token
client.login(TOKEN || AltToken);     