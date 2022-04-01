module.exports = {
	name: "wikipedia",
	alias: ["wikimedia", "wiki", "wikimed"],
	category: "search",
	wait: true,
	use: "<topik>",
	desc: "Mencari hal hal yang berkaitan di Wikipedia",
	query: `Masukan sesuatu topik yang ingin dicari`,
	async run(msg, conn, q, isOwner, body, map, config, args) {
		var wiki = await rzky.search.wiki(q);
		if (wiki.img == "https://telegra.ph/file/1cde98e7bc902331edc90.png") return msg.reply(`Tidak ditemukan`);
		var img = wiki.img;
		delete wiki.img;
		var result = await rzky.tools.parseResult(wiki, { title: "Wikipedia" });
		await conn.sendFile(msg.from, img, "wiki.jpg", result, msg);
	},
};