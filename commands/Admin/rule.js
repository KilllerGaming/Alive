const { MessageEmbed } = require('discord.js')

module.exports = {
	name: 'rule',
	description: 'rule cmd',
	usage: 'rule',
	run: async (client, message, args) => {
		if(!message.member.hasPermission('VIEW_AUDIT_LOG')){
			message.channel.send('Sorry you don\'t have permission.')
		} else if(message.member.hasPermission('VIEW_AUDIT_LOG')){
			const ruleembed = new MessageEmbed()
			.setAuthor('Rules For α・Alpha  Developers & Designs!', 'https://cdn.discordapp.com/attachments/797823926956195861/878951081818877963/3ae970653b70da3d2f0108cd70f82a73.gif')
			.setTitle('Some Rules You Need to Follow')
			.addField('Be Respectful', 'You must respect all users, regardless of your liking towards them.')
			.addField('No Excessive Cursing', 'Cursing is allowed until you are under the limits, though if you curse out of the limits then you can get a punishment.')
			.addField('No spamming', 'Spamming of any kind This includes  repeated messages, emojis, gifs, bot commands, images, videos or any form of media, big blocks of messages.')
			.addField('No NSFW material', 'This is a community server and not meant to share this kind of material.')
			.addField('Advertisements', 'Advertisements in self promotion channel only')
			.addField('No offensive profile', 'You will be asked to change your name, profile picture or status if the staff deems them inappropriate. \n This includes advertising in your profile.')
			.addField('Server Raiding/Nuking', 'Raiding/Nuking or mentions of raiding/nuking are not allowed.')
			.addField('Racism', 'Racism, sexism or any form of discrimination will not be tolerated.')
			.setFooter('Violation of rules will Result to Ban')
			.setColor('#29e33f')

			const punishmentsembed = new MessageEmbed()
			.setTitle('Punishments')
			.addField('DM Advertising = Kick', '▬▬▬▬▬▬▬▬▬▬')
			.addField('Spamming = Warn', '▬▬▬▬▬▬▬▬▬▬')
			.addField('Harasment = Kick', '▬▬▬▬▬▬▬▬▬▬')
			.addField('Crossposting = Warn', '▬▬▬▬▬▬▬▬▬▬')
			.addField('Discrimination = Mute (1 Day)', '▬▬▬▬▬▬▬▬▬▬')
			.setColor('#29e33f')

			const warnembed = new MessageEmbed()
			.setTitle('Warning Detentions')
			.addField('1 Warn = Mute (10 mins)', '▬▬▬▬▬▬▬▬▬▬')
			.addField('2 Warn = Mute (30 mins)', '▬▬▬▬▬▬▬▬▬▬')
			.addField('3 Warn = Kick', '▬▬▬▬▬▬▬▬▬▬')
			.addField('4 Warn = Ban (1 day)', '▬▬▬▬▬▬▬▬▬▬')
			.addField('5 Warn = Ban (1 week)', '▬▬▬▬▬▬▬▬▬▬')
			.addField('6 Warn = Permanent Ban', '▬▬▬▬▬▬▬▬▬▬')
			.setColor('#29e33f')

			message.channel.send(ruleembed)
			message.channel.send(punishmentsembed)
			message.channel.send(warnembed)
		}
	}
}
