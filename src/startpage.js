import YuzuRSSClient from "./yuzurss.js";

var client = new YuzuRSSClient('5.39.83.109', '8091');

function fetch(urls, id) {
	document.getElementById(id).innerHTML = "Loading...";

	client.fetch(urls, function (items) {
		document.getElementById(id).innerHTML = "";
		items.forEach(function (x) {
			var newItemHtml = '<div class="box"><div class="box-title">' + (x.author.length > 28 ? x.author.substring(0, 25) + '...' : x.author) + '</div><a href="' + x.link + '">' + x.title + '</a></div>';
			document.getElementById(id).innerHTML += newItemHtml;
		})
	});
}

fetch([
	// Blogs
	"https://www.britvsjapan.com/feed/", // BritVsJapan
	// Youtube
	"https://www.youtube.com/feeds/videos.xml?user=MATTvsJapan", // Matt VS Japan
	"https://www.youtube.com/feeds/videos.xml?channel_id=UCciXXqGRO99KPhhrcaRfG-w", // BritVsJapan
	"https://www.youtube.com/feeds/videos.xml?channel_id=UCQFe3x4WAgm7joN5daMm5Ew" // Yoga MIA
], "mia-feed");

fetch([
	// Documentary
	"https://www.youtube.com/feeds/videos.xml?user=VICEjpch", // VICE Japan
	"https://www.youtube.com/feeds/videos.xml?channel_id=UC4arQnli3ffEuCSrSgAD_Ug", // Osho Taigu’s Heart of Buddha
	// Music
	"https://www.youtube.com/feeds/videos.xml?channel_id=UCWGl1JQoX90LM8hRuRbdFDA", // 打首獄門同好会
	// Video game
	"https://www.youtube.com/feeds/videos.xml?channel_id=UC0NmMkOa4wmjAPllHk681Pw", // ちーたー.
	"https://www.youtube.com/feeds/videos.xml?user=ogawanarihisa48222", // ナリヒサの趣味部屋はいぱー
	"https://www.youtube.com/feeds/videos.xml?user=kojikojibroadcast", // コジコジのオタク文化 情報局
], "youtube-jp-feed");

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
], "news-jp-feed");

fetch([
	// Histoire
	// "https://www.youtube.com/feeds/videos.xml?channel_id=UCt8ctlakIflnSG0ebFps7cw", // Histony
	// "https://www.youtube.com/feeds/videos.xml?user=notabenemovies", // Nota Bene
	// "https://www.youtube.com/feeds/videos.xml?user=histoirebreve", // Dave Sheik
	// Jeux-videos
	// "https://www.youtube.com/feeds/videos.xml?user=joueurdugrenier", // Joueur Du Grenier
	"https://www.youtube.com/feeds/videos.xml?channel_id=UCnOuKKfBkvt2VsXcYSr8W2Q", // Trxns
	// Politique
	// "https://www.youtube.com/feeds/videos.xml?channel_id=UC9NB2nXjNtRabu3YLPB16Hg", // J'suis pas content TV
	// "https://www.youtube.com/feeds/videos.xml?playlist_id=PL0H7ONNEUnnt59niYAZ07dFTi99u2L2n_", // Mediapart: Ouvrez les guillemets
	// "https://www.youtube.com/feeds/videos.xml?playlist_id=PL43OynbWaTMLEbdAWr-DnAfveOonmhlT1", // France Inter: Guillaume Meurice
	// Sciences
	// "https://www.youtube.com/feeds/videos.xml?channel_id=UCGeFgMJfWclTWuPw8Ok5FUQ", // horizon-gull
	// "https://www.youtube.com/feeds/videos.xml?channel_id=UCyJDHgrsUKuWLe05GvC2lng", // Stupid Economics
	// "https://www.youtube.com/feeds/videos.xml?channel_id=UCofQxJWd4qkqc7ZgaLkZfcw", // Linguisticae
	// "https://www.youtube.com/feeds/videos.xml?channel_id=UC5X4e8ScZI2AFd_vkjSoyoQ", // AstronoGeek
	// "https://www.youtube.com/feeds/videos.xml?user=dirtybiology", // DirtyBiology
	// "https://www.youtube.com/feeds/videos.xml?user=ScienceEtonnante", // ScienceEtonnante
	// "https://www.youtube.com/feeds/videos.xml?user=scilabus", // Scilabus
	// Technologie
	// "https://www.youtube.com/feeds/videos.xml?channel_id=UCu34Tq5qMR-FiTYwLyy9U6w", // Webosaures
	"https://www.youtube.com/feeds/videos.xml?channel_id=UCjr2bPAyPV7t35MvcgT3W8Q", // The Hated One
	// "https://www.youtube.com/feeds/videos.xml?playlist_id=PLqmbcbI8U55EfYUVdZfjrfyJyNHD-Bly8", // The Linux Experiment: Switching away from Google
	// Zététique
	// "https://www.youtube.com/feeds/videos.xml?channel_id=UCU0FhLr6fr7U9GOn6OiQHpQ", // Officiel DEFAKATOR
	// "https://www.youtube.com/feeds/videos.xml?user=fauxsceptique", // Hygiène Mentale
	// "https://www.youtube.com/feeds/videos.xml?user=TroncheEnBiais", // La Tronche en Biais

	"https://www.youtube.com/feeds/videos.xml?channel_id=UCiaZZmZwBjKrcRv7aerHuyA" // KEYVAN KHOJANDI
], "youtube-feed");

fetch([
	"https://standblog.org/blog/feed/atom", // Standblog
	"https://korben.info/feed" // Korben
], "blogs-feed");

fetch([
	"https://blog.getbootstrap.com/feed.xml" // Bootstrap Blog
], "dev-feed");
