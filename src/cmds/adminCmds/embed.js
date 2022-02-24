const DiscordJS = require('discord.js');
const { MessageEmbed } = DiscordJS;

module.exports = {
  category: 'adminCmds'
  , description: 'Send an embed to a given channel.'
  , slash: false

  , callback: async ({ message }) => {
    if (!message.member.permissions.has("ADMINISTRATOR")) {
      message.reply('That is an admin only command, sorry. 🙃')
      return;
    }
    const targetChannel = message.mentions.channels.first()
    if (!targetChannel || targetChannel.guild.id != message.guild.id) {
      message.reply('Please specify the channel you want to send the embed to.\nExample: `-embed {#channel}`')
      return;
    }

    var Title = ''
    var Description = ''
    var Color = ''
    var url = ''

    // counter is incremented after every message to determine where we are in the process.
    let counter = 0

    // replyId is used to store the ID of the original reply, so we can fetch and edit the message.
    var replyId = ''
    await message.reply(`Sending an embed to ${targetChannel}\n\nWhat do you want the title to say?`).then(reply => replyId = reply.id);
    const Reply = await message.channel.messages.fetch(replyId);

    // ensure only the author's messages are collected
    const filter = (m) => {
      return m.author.id == message.author.id;
    }
    const collector = message.channel.createMessageCollector({
      filter
      , max: 4
      , time: 1000 * 60 * 5
      , errors: ['time']
    });

    // fires upon every message recieved that passes the filter
    collector.on('collect', async msg => {
      msg.delete();

      if (counter == 0) {
        // title recieved
        Title = msg.content
        Reply.edit(`Sending an embed to ${targetChannel}\n\nWhat do you want the description to say?`);
      }
      if (counter == 1) {
        // description recieved
        Description = msg.content
        Reply.edit(`Sending an embed to ${targetChannel}\n\nWhat do you want the embed color to be?\nYou can use a hex code (no #), or one of the following colors:
        \`\`\`DEFAULT, WHITE, AQUA, GREEN, BLUE, YELLOW, PURPLE, LUMINOUS_VIVID_PINK, FUCHSIA, GOLD, ORANGE, RED, GREY, NAVY, DARK_AQUA, DARK_GREEN, DARK_BLUE, DARK_PURPLE, DARK_VIVID_PINK, DARK_GOLD, DARK_ORANGE, DARK_RED, DARK_GREY, DARKER_GREY, LIGHT_GREY, DARK_NAVY, BLURPLE, GREYPLE, DARK_BUT_NOT_BLACK, NOT_QUITE_BLACK, RANDOM\`\`\``);
      }
      if (counter == 2) {
        // color recieved
        Color = msg.content.toUpperCase();
        Reply.edit(`Sending an embed to ${targetChannel}\n\nPlease provide a URL for a thumbnail, or reply "none".`);
      }
      if (counter == 3) {
        // url recieved
        url = msg.content
        Reply.edit('Working...');
      }
      counter++
    });

    // fires upon time limit or message limit
    collector.on('end', collected => {
      if (collected.size < 4) {
        // did not recieve all required responses
        Reply.edit('Time limit reached.')
        return;
      }

      try {
        const embed = new MessageEmbed()
          .setTitle(Title)
          .setDescription(Description)
          .setColor(Color)
          .setFooter(message.author.username, message.author.avatarURL())
          .setTimestamp()

        if (url.includes('http')) {
          embed.setThumbnail(url)
        }

        targetChannel.send({ embeds: [embed] });

        Reply.edit('Sent!');
      } catch (err) {
        message.channel.send(`${err.message}`);
      }
    });
  }
}