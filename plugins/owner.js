Skip to content
 
Search Gists
Search...
All gists
Back to GitHub
@lyfe00011
lyfe00011/OWNER.js Secret
Last active last week • Report abuse
Code
Revisions
2
Stars
6
Forks
76
Clone this repository at &lt;script src=&quot;https://gist.github.com/lyfe00011/d38603fd734aab9e4544c015e4d13a84.js&quot;&gt;&lt;/script&gt;
<script src="https://gist.github.com/lyfe00011/d38603fd734aab9e4544c015e4d13a84.js"></script>
OWNER.js
const { bot, getBuffer, genThumbnail, jidToNum } = require('../lib/')

const url = 'https://ibb.co/S5DwjxW'
bot(
	{
		pattern: 'owner ?(.*)',
		fromMe: true,
		desc: 'contact',
		type: 'whatsapp',
	},
	async (message, match) => {
		const thumbnail = await genThumbnail(
			await (
				await getBuffer(url)
			).buffer
		)
		const owner = jidToNum(message.participant)
		const name = message.pushName
		const vcard =
			'BEGIN:VCARD\n' +
			'VERSION:3.0\n' +
			`FN:${name}\n` +
			`ORG:${name};\n` +
			`TEL;type=CELL;type=VOICE;waid=${owner}:+${owner}\n` +
			'END:VCARD'
		await message.send(
			{
				displayName: `${Technical Ravi}`,
				contacts: [{ 919579464434 }],
			},
			{
				linkPreview: {
					head: `${name}`,
					body: '',
					mediaType: 2,
					thumbnail: thumbnail,
					showAdAttribution: true,
					sourceUrl: `https://wa.me/+919579464434`,
				},
				quoted: {
					key: {
						fromMe: false,
						participant: '0@s.whatsapp.net',
						remoteJid: 'status@broadcast',
					},
					message: {
						imageMessage: {
							jpegThumbnail: thumbnail,
							caption: 'Im the one and only Owner',
						},
					},
				},
			},
			'contacts'
		)
	}
)
@Haendel095
Haendel095 commented on Nov 18, 2023
Haendel

@hive-sammie
hive-sammie commented on Nov 20, 2023
Please when I edited it is still showing this code, what should I do

@Technical-Ravi
Comment
 
Leave a comment
 
Footer
© 2024 GitHub, Inc.
Footer navigation
Terms
Privacy
Security
Status
Docs
Contact
Manage cookies
Do not share my personal information
