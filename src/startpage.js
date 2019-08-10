import YuzuRSSClient from "./yuzurss.js";

var client = new YuzuRSSClient('5.39.83.109', '8091');

function fetch(urls, limit, id) {
	document.getElementById(id).innerHTML = "Loading...";

	client.fetch(urls, limit, function (items) {
		document.getElementById(id).innerHTML = "";
		items.forEach(function (x) {
			var newItemHtml = '<div class="box"><div class="box-title">' + (x.author.length > 28 ? x.author.substring(0, 25) + '...' : x.author) + '</div><a href="' + x.link + '">' + x.title + '</a></div>';
			document.getElementById(id).innerHTML += newItemHtml;
		})
	});
}

fetch([
	"https://www.youtube.com/feeds/videos.xml?channel_id=UC4arQnli3ffEuCSrSgAD_Ug", // Osho Taigu’s Heart of Buddha
	"https://www.youtube.com/feeds/videos.xml?channel_id=UCWGl1JQoX90LM8hRuRbdFDA", // 打首獄門同好会
	"https://www.youtube.com/feeds/videos.xml?channel_id=UC1kk8pmQ3Rg5DZtwOrpFDMA", // しょっぴん / SHOPPIN
	"https://www.youtube.com/feeds/videos.xml?channel_id=UC59ZURfw529EQEE1gVUMSlw", // Learn Japanese with Manga
	// MIA
	"https://www.youtube.com/feeds/videos.xml?user=MATTvsJapan", // Matt vs. Japan
	"https://www.youtube.com/feeds/videos.xml?channel_id=UCciXXqGRO99KPhhrcaRfG-w", // BritVsJapan
	"https://www.youtube.com/feeds/videos.xml?channel_id=UCQFe3x4WAgm7joN5daMm5Ew" // Yoga MIA
	// Documentary
	//"https://www.youtube.com/feeds/videos.xml?user=VICEjpch", // VICE Japan
	// Music
	// Podcast / vlog
	//"https://www.youtube.com/feeds/videos.xml?user=0212asuka", // 0212asuka
	//"https://www.youtube.com/feeds/videos.xml?user=himagoroshi", // ヒマゴロシ
	//"https://www.youtube.com/feeds/videos.xml?user=PDRKabushikigaisha", // PDRさん
	//"https://www.youtube.com/feeds/videos.xml?channel_id=UC01NIbffDPzWfilG7DdxW0A", // あらた Arata 
	// Video game
	//"https://www.youtube.com/feeds/videos.xml?channel_id=UC0NmMkOa4wmjAPllHk681Pw", // ちーたー.
	//"https://www.youtube.com/feeds/videos.xml?user=ogawanarihisa48222", // ナリヒサの趣味部屋はいぱー
	//"https://www.youtube.com/feeds/videos.xml?user=kojikojibroadcast", // コジコジのオタク文化 情報局
], 999, "youtube-feed");

fetch([
	"https://www.jiji.com/rss/ranking.rdf",
	"http://www3.nhk.or.jp/rss/news/cat-live.xml",
	"http://www3.nhk.or.jp/rss/news/cat0.xml",
	"http://www3.nhk.or.jp/rss/news/cat1.xml",
	"http://www3.nhk.or.jp/rss/news/cat3.xml",
	"http://www3.nhk.or.jp/rss/news/cat4.xml",
	"http://www3.nhk.or.jp/rss/news/cat5.xml",
	"http://www3.nhk.or.jp/rss/news/cat6.xml",
	"http://www3.nhk.or.jp/rss/news/cat7.xml",
	"http://www3.nhk.or.jp/rss/news/cat2.xml",
	"http://feeds.afpbb.com/rss/afpbb/afpbbnews",
	"http://feeds.afpbb.com/rss/afpbb/access_ranking",
	/*"http://feeds.afpbb.com/rss/afpbb/sports",*/
	"http://feeds.afpbb.com/rss/afpbb/modepress"
], 10, "news-feed");
