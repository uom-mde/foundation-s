const STORIES = [
	{
		"title": "All about the moon",
		"thumbnail": "http://localhost/omeka-s/files/large/8e44fb847824d09180e2c3254745c9a718f99f5c.jpg"
	},
	{
		"title": "Special effects are cool",
		"thumbnail": "http://localhost/omeka-s/files/asset/a33dc579a51172571c3b6817e5b32cbbc0249868.jpg"
	},
	{
		"title": "A pretty house",
		"thumbnail": "http://localhost/omeka-s/files/asset/0a39fe9e5868187628d545c5bd79ee557d98d18d.jpg"
	},
	{
		"title": "The webfarm is complicated",
		"thumbnail": "http://localhost/omeka-s/files/asset/9258ed44349a83bc52de6d577c562914fe8e770d.jpg"
	},
	{
		"title": "Look at this pylon",
		"thumbnail": "http://localhost/omeka-s/files/asset/a71be0d74f25ef4d0ecc27d992f25a24c888f6da.png"
	},
    {
		"title": "All about the moon",
		"thumbnail": "http://localhost/omeka-s/files/large/8e44fb847824d09180e2c3254745c9a718f99f5c.jpg"
	},
	{
		"title": "Special effects are cool",
		"thumbnail": "http://localhost/omeka-s/files/asset/a33dc579a51172571c3b6817e5b32cbbc0249868.jpg"
	},
];

const LATEST = [
	{
		"name": "ragrag",
		"title": "Rag Rag",
		"released": "2022-04-08 11:48:12",
		"thumbnail": "/images/RagRag.jpg",
		"itemsTally": 14,
		"pagesTally": 884
	},
	{
		"name": "goldenmummies",
		"title": "Golden Mummies",
		"released": "2024-05-31 10:35:30",
		"thumbnail": "/images/GoldenMummies.jpg",
		"itemsTally": 100,
		"pagesTally": 118
	},
	{
		"name": "ruskin",
		"title": "The Letters of John Ruskin",
		"released": "2021-07-30 13:54:59",
		"thumbnail": "/images/Ruskin.jpg",
		"itemsTally": 146,
		"pagesTally": 283
	},
	{
		"name": "cunard",
		"title": "Nancy Cunard Correspondence",
		"released": "2021-07-30 13:54:59",
		"thumbnail": "/images/Cunard.jpg",
		"itemsTally": 124,
		"pagesTally": 168
	},
	{
		"name": "bibleillustrations",
		"title": "Bible illustrations",
		"released": "2020-05-18 00:00:00",
		"thumbnail": "/images/BibleIllustrations.jpg",
		"itemsTally": 34,
		"pagesTally": 5610
	},
	{
		"name": "bowinthecloud",
		"title": "The Bow in the Cloud",
		"released": "2020-05-20 00:00:00",
		"thumbnail": "/images/BowInTheCloud.jpg",
		"itemsTally": 302,
		"pagesTally": 804
	},
	{
		"name": "pali",
		"title": "Pali Manuscripts",
		"released": "2024-07-29 14:35:30",
		"thumbnail": "/images/Pali.jpg",
		"itemsTally": 21,
		"pagesTally": 6401
	},
	{
		"name": "hebrew",
		"title": "Hebrew Manuscripts",
		"released": "2019-12-18 00:00:00",
		"thumbnail": "/images/Hebrew.jpg",
		"itemsTally": 150,
		"pagesTally": 30179
	},
	{
		"name": "magicmonstersmacabre",
		"title": "Magic, Monsters and Macabre",
		"released": "2020-10-30 12:11:41",
		"thumbnail": "/images/MagicMonstersMacabre.jpg",
		"itemsTally": 40,
		"pagesTally": 5486
	},
	{
		"name": "dante",
		"title": "Dante",
		"released": "2021-03-30 10:08:12",
		"thumbnail": "/images/Dante.jpg",
		"itemsTally": 6,
		"pagesTally": 3206
	},
	{
		"name": "latin",
		"title": "Latin Manuscripts",
		"released": "2019-10-21 00:00:00",
		"thumbnail": "/images/Latin.jpg",
		"itemsTally": 52,
		"pagesTally": 16898
	},
	{
		"name": "maryhamilton",
		"title": "Mary Hamilton Papers",
		"released": "2019-12-06 00:00:00",
		"thumbnail": "/images/MaryHamilton.jpg",
		"itemsTally": 1471,
		"pagesTally": 5174
	},
	{
		"name": "middleenglish",
		"title": "Middle English Manuscripts",
		"released": "2020-02-19 00:00:00",
		"thumbnail": "/images/MiddleEnglish.jpg",
		"itemsTally": 33,
		"pagesTally": 10249
	},
	{
		"name": "revolutionaryfrance",
		"title": "Revolutionary France",
		"released": "2020-10-02 10:24:04",
		"thumbnail": "/images/RevolutionaryFrance.jpg",
		"itemsTally": 201,
		"pagesTally": 217
	},
	{
		"name": "broadsideballads",
		"title": "Broadside Ballads",
		"released": "2020-11-27 12:11:57",
		"thumbnail": "/images/BroadsideBallads.jpg",
		"itemsTally": 47,
		"pagesTally": 47
	},
	{
		"name": "museum",
		"title": "Manchester Museum",
		"released": "2019-12-10 00:00:00",
		"thumbnail": "/images/Museum.jpg",
		"itemsTally": 12,
		"pagesTally": 14
	},
	{
		"name": "gaskelldickens",
		"title": "Elizabeth Gaskell and Charles Dickens",
		"released": "2021-02-05 13:06:42",
		"thumbnail": "/images/GaskellDickens.jpg",
		"itemsTally": 38,
		"pagesTally": 3809
	},
	{
		"name": "simonpapers",
		"title": "The Heinrich Simon Papers",
		"released": "2023-05-19 12:38:40",
		"thumbnail": "/images/HeinrichSimon.jpg",
		"itemsTally": 671,
		"pagesTally": 14142
	},
	{
		"name": "papyrustoprint",
		"title": "Papyrus to Print",
		"released": "2020-10-02 11:20:48",
		"thumbnail": "/images/PapyrusToPrint.jpg",
		"itemsTally": 162,
		"pagesTally": 17520
	},
	{
		"name": "japanesemaps",
		"title": "Japanese Maps",
		"released": "2021-03-05 10:07:50",
		"thumbnail": "/images/JapaneseMaps.jpg",
		"itemsTally": 78,
		"pagesTally": 406
	},
	{
		"name": "peterloo",
		"title": "Peterloo",
		"released": "2019-10-21 00:00:00",
		"thumbnail": "/images/Peterloo.jpg",
		"itemsTally": 592,
		"pagesTally": 5129
	},
	{
		"name": "syriac",
		"title": "Syriac Manuscripts",
		"released": "2021-09-17 11:55:02",
		"thumbnail": "/images/Syriac.jpg",
		"itemsTally": 10,
		"pagesTally": 2614
	},
	{
		"name": "gasteramulets",
		"title": "Gaster Amulets",
		"released": "2023-10-06 12:35:18",
		"thumbnail": "/images/GasterAmulets.jpg",
		"itemsTally": 229,
		"pagesTally": 661
	},
	{
		"name": "ethiopic",
		"title": "Ethiopic Manuscripts",
		"released": "2024-09-30 12:18:08",
		"thumbnail": "/images/collectionsView/collection-ethiopic.jpg",
		"itemsTally": 10,
		"pagesTally": 4059
	},
	{
		"name": "samaritan",
		"title": "Samaritan Manuscripts",
		"released": "2024-09-30 12:18:08",
		"thumbnail": "/images/Samaritan.jpg",
		"itemsTally": 30,
		"pagesTally": 5252
	},
	{
		"name": "earlyphotography",
		"title": "Early Photographic Albums",
		"released": "2023-11-21 15:35:21",
		"thumbnail": "/images/EarlyPhotography.jpg",
		"itemsTally": 9,
		"pagesTally": 602
	},
	{
		"name": "petrarch",
		"title": "Petrarch",
		"released": "2019-10-29 00:00:00",
		"thumbnail": "/images/jrl17111055cropped.jpg",
		"itemsTally": 83,
		"pagesTally": 32806
	},
	{
		"name": "womeninwartime",
		"title": "Women in wartime",
		"released": "2020-06-24 00:00:00",
		"thumbnail": "/images/WomenInWartime.jpg",
		"itemsTally": 166,
		"pagesTally": 237
	},
	{
		"name": "maps",
		"title": "Mapping Manchester",
		"released": "2019-11-20 00:00:00",
		"thumbnail": "/images/Maps.jpg",
		"itemsTally": 32,
		"pagesTally": 71
	},
	{
		"name": "photojewellery",
		"title": "Photo Jewellery",
		"released": "2020-08-28 17:25:22",
		"thumbnail": "/images/PhotoJewellery.jpg",
		"itemsTally": 12,
		"pagesTally": 20
	},
	{
		"name": "persian",
		"title": "Persian Manuscripts",
		"released": "2019-11-21 00:00:00",
		"thumbnail": "/images/Persian.jpg",
		"itemsTally": 11,
		"pagesTally": 5998
	},
	{
		"name": "whitworth",
		"title": "The Whitworth",
		"released": "2019-12-10 00:00:00",
		"thumbnail": "/images/Whitworth.jpg",
		"itemsTally": 10,
		"pagesTally": 11
	},
	{
		"name": "chinese",
		"title": "Chinese",
		"released": "2021-10-15 15:55:02",
		"thumbnail": "/images/Chinese.jpg",
		"itemsTally": 19,
		"pagesTally": 1493
	},
	{
		"name": "historyofmedicine",
		"title": "History of Medicine",
		"released": "2020-07-31 00:00:00",
		"thumbnail": "/images/HistoryofMedicine.jpg",
		"itemsTally": 35,
		"pagesTally": 2292
	}
];