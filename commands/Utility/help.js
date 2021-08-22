const { MessageButton } = require('discord-buttons')
const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'help',
    description: 'Help Desk',
    run: async(client, message, args) => {

        if(!args[0]){

        const member = message.mentions.users.first() || message.author;
        const avatar = member.displayAvatarURL({ dynamic: true, size: 1024 })


        const help = new MessageEmbed()
        .setTitle('Developer Bot')
        .setDescription('Command List For Developer\'s Bot')
        .addField('Economy Commands', '``Balance``,``Buy``,``Daily``,``Deposit``,``Inventory``,``Pay``,``Rob``,``Store``, \n ``Withdraw``,``Work``')
        .addField('Fun Commands', '``8 Ball``,``Advice``,``DM``,``FacePalm``,``Kiss``,``Meme``,``Shit``,``Slap``,``Triggered``')
        .addField('Admin Commands', '``AddRole``,``Ban``,``Clear``, \n ``DisableWelcome``,``IdBan``,``Kick``,``LockChannel``,``Mute``,``Say``,``SetWelcome``, \n ``Slowmode``,``Unban``,``UnlockChannel``,``Unmute``,``Unwarn``,``Warn``,``Warnings``')
        .addField('Giveaway Commands', '``Start``,``End``,``Reroll``')
        .addField('Music Commands', '``Autoplay``,``Filter``,``Join``,``Leave``,``Loop``,``Pause``,``Play``,``Queue``,``Resume``, \n ``Seek``,``Skip``,``Stop``,``Volume``')
        .addField('Utility Commands', '``Avatar``,``Calculator``,``Config``,``Ping``,``Rank``,``ServerInfo``,``UserInfo``, \n ``Weather``')
        .setThumbnail(avatar)
        .setColor('#29e33f')

        const lol = new MessageButton()
        .setStyle('url')
        .setURL('https://youtu.be/dQw4w9WgXcQ')
        .setLabel('LOML')

        message.channel.send(help, {buttons: [lol]})
        }

        if(args[0] === 'economy'){
            const balance = new MessageEmbed()
            .setTitle('Economy Commands')
            .setDescription('Command list for economy commands')
            .addField('Balance', `<:reply:876740414420422676> Shows the current status of money.`)
            .addField('Buy', '<:reply:876740414420422676> Buys you a specific item.')
            .addField('Daily', '<:reply:876740414420422676> Gives you a specific amount.')
            .addField('Inventory', '<:reply:876740414420422676> Deposits your money in the bank.')
            .addField('Pay', `<:reply:876740414420422676> Pays an amount to a user.`)
            .addField('Rob', '<:reply:876740414420422676> Robs a person.')
            .addField('Store', '<:reply:876740414420422676> A area to buy your things.')
            .addField('Withdraw', '<:reply:876740414420422676> Withdraw your money in the bank.')
            .addField('Work', '<:reply:876740414420422676> Works and earn some money.')

            .setColor('#29e33f')

            message.channel.send(balance)
        }
        else if(args[0] === 'fun'){
            const fun = new MessageEmbed()
            .setTitle('Fun Commands')
            .setDescription('Command list for fun commands')
            .addField('8 Ball', `<:reply:876740414420422676> Only Person who will reply you :\').`)
            .addField('Advice', '<:reply:876740414420422676> Gives you an advice.')
            .addField('DM', '<:reply:876740414420422676> DM\'s the person you want.')
            .addField('FacePalm', '<:reply:876740414420422676> FacePalm anyone.')
            .addField('Kiss', `<:reply:876740414420422676> Kiss anyone you want (IN DISCORD).`)
            .addField('Meme', '<:reply:876740414420422676> Send Some MEMESSSSSS.')
            .addField('Shit', '<:reply:876740414420422676> Yea its a shit.')
            .addField('Slap', '<:reply:876740414420422676> Slap your bff :))).')
            .addField('Triggered', '<:reply:876740414420422676> Gets anyone triggered.')

            .setColor('#29e33f')

            message.channel.send(fun)

        }
        else if(args[0] === 'admin'){
            const admin = new MessageEmbed()
            .setTitle('Admin Commands')
            .setDescription('Command list for admin commands')
            .addField('AddRole', `<:reply:876740414420422676> Adds the specific role to the member.`)
            .addField('Ban', '<:reply:876740414420422676> Ban the mentioned member.')
            .addField('Clear', '<:reply:876740414420422676> Clear the specific amount of message.')
            .addField('Disable Welcome', '<:reply:876740414420422676> Disables the welcoming of the members.')
            .addField('IdBan', `<:reply:876740414420422676> Bans an id.`)
            .addField('Kick', '<:reply:876740414420422676> Kick the mentioned member.')
            .addField('Lock Channel', '<:reply:876740414420422676> Locks the channel mentioned.')
            .addField('Mute', '<:reply:876740414420422676> Mutes the mentioned member.')
            .addField('Say', '<:reply:876740414420422676> Says the message you send.')
            .addField('Set Welcome', '<:reply:876740414420422676> Sets a welcome channel.')
            .addField('Slowmode', '<:reply:876740414420422676> Enables a slowmode in the channel.')
            .addField('Unban', '<:reply:876740414420422676> Unbans the user from the server.')
            .addField('Unlock Channel', '<:reply:876740414420422676> Unlocks the locked channel.')
            .addField('Unute', '<:reply:876740414420422676> Unmute the muted user.')
            .addField('Unwarn', '<:reply:876740414420422676> Unwarn the warned person.')
            .addField('Warn', '<:reply:876740414420422676> Warns a person.')
            .addField('Warnings', '<:reply:876740414420422676> Show the warns of a person.')



            .setColor('#29e33f')

            message.channel.send(admin)

        }
        else if(args[0] === 'giveaway'){
            const giveaway = new MessageEmbed()
            .setTitle('Giveaway Commands')
            .setDescription('Command list for giveaway commands')
            .addField('Start', `<:reply:876740414420422676> Starts a giveaway.`)
            .addField('End', '<:reply:876740414420422676> Ends an existing giveaway.')
            .addField('Reroll', '<:reply:876740414420422676> Rerolls the winner of a giveaway.')
            .setColor('#29e33f')

            message.channel.send(giveaway)

        }
        else if (args[0] === 'music'){
            const music = new MessageEmbed()
            .setTitle('Music Commands')
            .setDescription('Command list for music commands')
            .addField('Autoplay', `<:reply:876740414420422676> Automatically plays similar songs.`)
            .addField('Filter', '<:reply:876740414420422676> Filters your song.')
            .addField('Join', '<:reply:876740414420422676> Joins the channel you are in.')
            .addField('Leave', '<:reply:876740414420422676> Leaves the channel you are in.')
            .addField('Loop', `<:reply:876740414420422676> Loop the queue of your music.`)
            .addField('Pause', '<:reply:876740414420422676> Pauses the current song.')
            .addField('Play', '<:reply:876740414420422676> Plays the song of  your choice.')
            .addField('Queue', '<:reply:876740414420422676> Makes a queue for your songs.')
            .addField('Resume', '<:reply:876740414420422676> Resumes the paused song.')
            .addField('Seek', '<:reply:876740414420422676> Idk.')
            .addField('Skip', '<:reply:876740414420422676> Skips the song in the queue.')
            .addField('Stop', '<:reply:876740414420422676> Stop the current song.')
            .addField('Volume', '<:reply:876740414420422676> Set the volume up n down.')
            .setColor('#29e33f')

            message.channel.send(music)

        }
        else if(args[0] === 'utility') {
            const utility = new MessageEmbed()
            .setTitle('Utility Commands')
            .setDescription('Command list for Utility commands')
            .addField('Avatar', `<:reply:876740414420422676> Can see mentioned user avatar.`)
            .addField('Calculator', '<:reply:876740414420422676> Calculates your maths homework.')
            .addField('Config', '<:reply:876740414420422676> Config.')
            .addField('Ping', '<:reply:876740414420422676> Pong.')
            .addField('Rank', `<:reply:876740414420422676> Shows up your rank.`)
            .addField('ServerInfo', '<:reply:876740414420422676> Tells you the info of the server.')
            .addField('UserInfo', '<:reply:876740414420422676> Tells you the info for the mentioned user.')
            .addField('Weather', '<:reply:876740414420422676> Tells you the weather of any place.')
            .setColor('#29e33f')

            message.channel.send(utility)
   
        }


        }
}