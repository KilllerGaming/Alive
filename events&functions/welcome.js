const { Client, MessageAttachment, MessageEmbed, GuildMember } = require("discord.js")
const db = require('quick.db')

module.exports = (client) => {
    client.on('guildMemberAdd', (member) => {
        
        let guildConfig = db.get(`guildConfigurations_${member.guild.id}.welcome`)
        const channelId = db.get(`Welcome_Channel_${member.guild.id}`)
        if(channelId === null) return;
        if(guildConfig === null) guildConfig = 'disabled'
        if(guildConfig === 'disabled') return;

        const welcome = new MessageEmbed()
        .setAuthor('The Developers')
        .setTitle('Welcome to the Developers')
        .addField(`Hey ${member.user.username}. Welcome to the server`, '●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●')
        .addField('There are some important things you need to see',    '●▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬●')
        .addField('Rules are important', '<#862365001172123671>')
        .addField('Get Some Roles', '<#862365001172123674>')
        .addField('Check out the lounge', '<#862365001708208159>')
        .addField('Ask your code problems here', '<#862365001925525557>')
        .addField('Play some games', '<#862365001925525564>')
        .setAuthor('The Developers', 'https://cdn.discordapp.com/attachments/797823926956195861/877054744634478602/particles_2.gif')
        .setImage('https://cdn.discordapp.com/attachments/797823926956195861/877073573246824458/Comp_11.gif')
        .setThumbnail(member.user.displayAvatarURL({dynamic: false, format: 'png'}))
        .setFooter(`You are our ${member.guild.memberCount} Member`)
        .setColor('#29e33f')

        const channel = member.guild.channels.cache.get(channelId)
        
        channel.send(welcome)
    })

        client.on('guildMemberRemove', (member) => {
        
        let guildConfig = db.get(`guildConfigurations_${member.guild.id}.welcome`)
        const byechannel = member.guild.channels.cache.get('862365002098016329')

        const byeEmbed = new MessageEmbed()
        .setTitle(`${member.user.username} Has left the Developers. Hope to see ${member.user.username} again.`)
        .setAuthor('The Developers', 'https://cdn.discordapp.com/attachments/797823926956195861/877054744634478602/particles_2.gif')
        .setThumbnail(member.user.displayAvatarURL({dynamic: false, format: 'png'}))
        .setFooter(`Members Remaining ${member.guild.memberCount}`)
        .setColor('#29e33f')
        
        byechannel.send(byeEmbed)
    })
}