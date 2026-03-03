const movies = [
  // Trending
  {
    id: 1,
    title: "Stranger Things",
    image: "https://image.tmdb.org/t/p/w500/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg",
    banner: "https://image.tmdb.org/t/p/original/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
    description:
      "When a young boy disappears, a small town uncovers a mystery involving secret experiments and supernatural forces.",
    category: "Trending",
    year: 2016,
    rating: 8.7,
  },
  {
    id: 2,
    title: "Money Heist",
    image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
    banner: "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/12/Money-Heist-Season-6-will-it-happen.jpg?w=1600&h=900&fit=crop",
    description:
      "A criminal mastermind recruits eight thieves to carry out the biggest heist in history.",
    category: "Trending",
    year: 2017,
    rating: 8.2,
  },
  {
    id: 3,
    title: "Squid Game",
    image: "https://image.tmdb.org/t/p/w500/dDlEmu3EZ0Pgg93K2SVNLCjCSvE.jpg",
    banner: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQVylBzU37ZpOJaV_EWOfGm7R3S6KJxdwj1KUgk7YQNg_vr7mSCnXzWJ7OaLdgqhKCGX2qeyrkWINXY_FJfoeRCsaIylCBHtQczT5GSpoHv7i0L0xCcQtXN4O8mAwzQZQqeUCXyLtVuwjlz50PCU66aV1.jpg?r=0f1",
    description:
      "Hundreds of cash-strapped players accept a strange invitation to compete in children's games for a tempting prize.",
    category: "Trending",
    year: 2021,
    rating: 8.1,
  },

  // Top Rated
  {
    id: 4,
    title: "Breaking Bad",
    image: "https://image.tmdb.org/t/p/w500/ggFHVNu6YYI5L9pCfOacjizRGt.jpg",
    banner: "https://image.tmdb.org/t/p/original/tsRy63Mu5cu8etL1X7ZLyf7UP1M.jpg",
    description:
      "A high school chemistry teacher turned meth producer partners with a former student to secure his family's future.",
    category: "Top Rated",
    year: 2008,
    rating: 9.5,
  },
  {
    id: 5,
    title: "The Crown",
    image: "https://m.media-amazon.com/images/S/compressed.photo.goodreads.com/books/1498873375i/34974747.jpg",
    banner: "https://stanforddaily.com/wp-content/uploads/2021/01/the-crown.png",
    description:
      "Follows the political rivalries and romance of Queen Elizabeth II's reign and the events that shaped the second half of the 20th century.",
    category: "Top Rated",
    year: 2016,
    rating: 8.6,
  },
  {
    id: 6,
    title: "Dark",
    image: "https://m.media-amazon.com/images/I/61k2hzn9f6L._AC_UF894,1000_QL80_.jpg",
    banner: "https://jasonliloquies.wordpress.com/wp-content/uploads/2020/10/dark-image-1.jpg?w=1568",
    description:
      "A family saga with a supernatural twist set in a German town where the disappearance of two children exposes the relationships among four families.",
    category: "Top Rated",
    year: 2017,
    rating: 8.8,
  },

  // Action
  {
    id: 7,
    title: "The Witcher",
    image: "https://image.tmdb.org/t/p/w500/zrPpUlehQaBf8YX2NrVrKK8IEpf.jpg",
    banner: "https://image.tmdb.org/t/p/original/foGkPxpw9h8zln81j63mix5B7m8.jpg",
    description:
      "Geralt of Rivia, a mutated monster hunter, struggles to find his place in a world where people often prove more wicked than beasts.",
    category: "Action",
    year: 2019,
    rating: 8.2,
  },
  {
    id: 8,
    title: "Extraction",
    image: "https://m.media-amazon.com/images/I/713+JsN7ZjL._AC_UF894,1000_QL80_.jpg",
    banner: "https://image.tmdb.org/t/p/original/nygOUcBKPHFTbxsYRFZVePqgPK6.jpg",
    description:
      "A black ops mercenary's mission to rescue an Indian crime lord's kidnapped son in Dhaka, Bangladesh goes awry.",
    category: "Action",
    year: 2020,
    rating: 6.7,
  },
  {
    id: 9,
    title: "6 Underground",
    image: "https://image.tmdb.org/t/p/w500/lnWkyG3LLgbbrIEeyl5mK5VRFe4.jpg",
    banner: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/11/6-Underground-Cast.jpg",
    description:
      "Six individuals from all around the globe, each the very best at what they do, have been chosen to delete their pasts and change the future.",
    category: "Action",
    year: 2019,
    rating: 6.1,
  },

  // Comedy
  {
    id: 10,
    title: "The Good Place",
    image: "https://image.tmdb.org/t/p/original/6RiaRiQWsjN4uURQCazOdEONGnJ.jpg",
    banner: "https://hips.hearstapps.com/hmg-prod/images/nup-183106-0203-jpg-1546458718.jpg?crop=1xw:0.843328335832084xh;0,0",
    description:
      "Four people and their otherworldly frenemy struggle in the afterlife to define what it means to be good.",
    category: "Comedy",
    year: 2016,
    rating: 8.2,
  },
  {
    id: 11,
    title: "Sex Education",
    image: "https://i.redd.it/xgucynq0a6d41.jpg",
    banner: "https://w0.peakpx.com/wallpaper/977/1007/HD-wallpaper-tv-show-sex-education.jpg",
    description:
      "A socially awkward high school student teams up with a whip-smart bad girl to set up an underground sex therapy clinic at school.",
    category: "Comedy",
    year: 2019,
    rating: 8.3,
  },
  {
    id: 12,
    title: "Brooklyn Nine-Nine",
    image: "https://m.media-amazon.com/images/I/81OTLa6h7iL.jpg",
    banner: "https://slidechef.net/wp-content/uploads/2024/09/brooklyn-nine-nine-wallpaper.png",
    description:
      "Comedy series following the exploits of Det. Jake Peralta and his diverse, lovable colleagues as they police the NYPD's 99th Precinct.",
    category: "Comedy",
    year: 2013,
    rating: 8.4,
  },

  // More Trending (to make 10)
  {
    id: 13,
    title: "Wednesday",
    image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
    banner: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQYOeCCpkwPAFykI7lEUIouxmiXsvxOnDs_bjQGo2Whf9FrwPXpQ6VmVKlnmMbxHBfqja2iOaEOayofhH0erJrzKxVkRz5-yQZDVFcRWnALggiACpb-9VbXOi6r6bFDT2EIPaW59Vh6GKpjsGRuvP-aASPhs.jpg?r=af7",
    description:
      "Wednesday Addams navigates life at Nevermore Academy while mastering her psychic abilities and solving a murder mystery.",
    category: "Trending",
    year: 2022,
    rating: 8.0,
  },
  {
    id: 14,
    title: "The Night Agent",
    image: "https://image.tmdb.org/t/p/original/4c5yUNcaff4W4aPrkXE6zr7papX.jpg",
    banner: "https://m.media-amazon.com/images/M/MV5BYzQ0NzRjODMtMzU5NS00OWZlLTk3MDQtYjA3OTU2MGIyZjNiXkEyXkFqcGdeQXZ3ZXNsZXk@._V1_QL75_UX500_CR0,0,500,281_.jpg",
    description:
      "An FBI agent working in the White House basement becomes entangled in a fast-moving and dangerous conspiracy.",
    category: "Trending",
    year: 2023,
    rating: 7.3,
  },
  {
    id: 15,
    title: "All of Us Are Dead",
    image: "https://wallpapers.com/images/hd/all-of-us-are-dead-pictures-rr2isget20woglet.jpg",
    banner: "https://media2.firstshowing.net/firstshowing/img12/allofusaredeadZombietrailermainimg59.jpg",
    description:
      "A zombie virus outbreak traps students in their high school as they fight to survive and escape.",
    category: "Trending",
    year: 2022,
    rating: 7.5,
  },
  {
    id: 16,
    title: "You",
    image: "https://oaklandpostonline.com/wp-content/uploads/2019/01/you-imdb.jpg",
    banner: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2021/09/you-season-3-poster-netflix-social-featured.jpg",
    description:
      "A charming bookstore manager becomes dangerously obsessed with the women who enter his life.",
    category: "Trending",
    year: 2018,
    rating: 7.5,
  },
  {
    id: 17,
    title: "Outer Banks",
    image: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABQy-HH9EQheOt3yhvkFNJ6UD581ekiegoq_jibPvlouqFRGBZIUY2bfVJ-KtifSrspzV9jBfK7O-BYEeEswFA3UWz2zJv5Il3cuC.jpg?r=7d3",
    banner: "https://dnm.nflximg.net/api/v6/BvVbc2Wxr2w6QuoANoSpJKEIWjQ/AAAAQauO7GPL0Q90st13nc-UFEm-vrhGtpOSej0bKXQrJv-u7xffQFp6ZMpCu9Km9zyHtF96c4-jWXe8lSFVJCAxPcwrbp4rQRVDIkdaw4mrnDJdwQZ2KpD_IqxaG2On1AjmIPZZLbYPchqL1yBRMoKT6-LUYoc.jpg?r=083",
    description:
      "A group of teens in the Outer Banks of North Carolina hunt for a legendary treasure tied to a missing father.",
    category: "Trending",
    year: 2020,
    rating: 7.6,
  },
  {
    id: 18,
    title: "Bridgerton",
    image: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABeebvKubISSO-Bmwr0DttJiVi_TJY_BS1bo7sf16Cph5WOvKaAX3zIeZHfMzJxz4-CrAZOzP866MB9V_K4VQ5GqcM3bS1mVUAkpy.jpg?r=fb9",
    banner: "https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQWwucrLAEgNm2_m13gHbQn-PEEpukbd8CBgvmtKKp_vtjHiuKfRltB_2uB__ZXDcr214DM8Dyd7vLqWaH502mm5t-H75WZjO1uV7gfWrNQgCuKmyCiReoQgsczT6N6khBl9Aa1lD4El80i2Q1og6GEBf.jpg?r=399",
    description:
      "In Regency-era London, eight close-knit siblings of the powerful Bridgerton family attempt to find love.",
    category: "Trending",
    year: 2020,
    rating: 7.8,
  },
  {
    id: 19,
    title: "Lupin",
    image: "https://resizing.flixster.com/dSRCMVNh0Zks_20M1pDoJ08Ynrw=/fit-in/352x330/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p19204868_b_v9_ab.jpg",
    banner: "https://cdn.theatlantic.com/thumbor/XD52OO9wED9w6VeGI6jH8Ji8RPo=/0x0:6291x3539/960x540/media/img/mt/2021/01/AL_101_Unit_01963/original.jpg",
    description:
      "Inspired by the adventures of Arsène Lupin, a gentleman thief sets out to avenge his father.",
    category: "Trending",
    year: 2021,
    rating: 7.5,
  },

  // More Top Rated (to make 10)
  {
    id: 20,
    title: "Chernobyl",
    image: "https://image.tmdb.org/t/p/w500/hlLXt2tOPT6RRnjiUmoxyG1LTFi.jpg",
    banner: "https://thecinemaholic.com/wp-content/uploads/2021/07/FireShot-Capture-703-Netflix-www.netflix.com_-e1626892423545.jpg",
    description:
      "A dramatization of the true story of the Chernobyl nuclear disaster and the sacrifices made to save Europe.",
    category: "Top Rated",
    year: 2019,
    rating: 9.4,
  },
  {
    id: 21,
    title: "Better Call Saul",
    image: "https://pad.mymovies.it/filmclub/2015/01/101/locandina.jpg",
    banner: "https://fortheloveofcinema.weebly.com/uploads/4/0/8/2/40820219/4190657_orig.jpg",
    description:
      "The trials and tribulations of criminal lawyer Jimmy McGill in the years leading up to his fateful run-in with Walter White.",
    category: "Top Rated",
    year: 2015,
    rating: 8.9,
  },
  {
    id: 22,
    title: "The Queen's Gambit",
    image: "https://image.tmdb.org/t/p/w500/zU0htwkhNvBQdVSIKB9s6hgVeFK.jpg",
    banner: "https://media.newyorker.com/photos/5fbed85ea6d08c764dcacdea/16:9/w_2559,h_1439,c_limit/Miller-QueensGambit.jpg",
    description:
      "An orphaned chess prodigy struggles with addiction while rising to the top of the chess world.",
    category: "Top Rated",
    year: 2020,
    rating: 8.6,
  },
  {
    id: 23,
    title: "Peaky Blinders",
    image: "https://m.media-amazon.com/images/M/MV5BOGM0NGY3ZmItOGE2ZC00OWIxLTk0N2EtZWY4Yzg3ZDlhNGI3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner: "https://images.bauerhosting.com/legacy/empire-images/features/5757ed56bf1bdcf50c7ff1d6/Peaky%20Blinders%20main.jpg?ar=16%3A9&fit=crop&crop=top&auto=format&w=undefined&q=80",
    description:
      "A notorious gang in 1919 Birmingham, England, is led by the fierce Tommy Shelby.",
    category: "Top Rated",
    year: 2013,
    rating: 8.8,
  },
  {
    id: 24,
    title: "Narcos",
    image: "https://image.tmdb.org/t/p/w500/rTmal9fDbwh5F0waol2hq35U4ah.jpg",
    banner: "https://images.sbs.com.au/drupal/guide/public/narcos-s01e02-5124a4052066d7c63705f3422feb7e1a-full.jpg",
    description:
      "The true story of Colombia's infamously violent and powerful drug cartels.",
    category: "Top Rated",
    year: 2015,
    rating: 8.8,
  },
  {
    id: 25,
    title: "Mindhunter",
    image: "https://images.squarespace-cdn.com/content/v1/5cdc39398d97405389c07510/1557943560396-GCDBTBQS1T8LTB3T3XTS/ChelseaLowe_Mindhunter_webVariant.jpg?format=1500w",
    banner: "https://static0.srcdn.com/wordpress/wp-content/uploads/2021/10/Mindhunter-Season-3-Fincher-Kapadia.jpg?w=1600&h=900&fit=crop",
    description:
      "Two FBI agents expand criminal science by delving into the psychology of murder and getting uneasily close to all-too-real monsters.",
    category: "Top Rated",
    year: 2017,
    rating: 8.6,
  },
  {
    id: 26,
    title: "Sherlock",
    image: "https://m.media-amazon.com/images/M/MV5BNTQzNGZjNDEtOTMwYi00MzFjLWE2ZTYtYzYxYzMwMjZkZDc5XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner: "https://www.hollywoodreporter.com/wp-content/uploads/2024/08/24Aendpg_scott-Sherlock-Main-2024.jpg?w=1296&h=730&crop=1",
    description:
      "A modern update finds the famous sleuth and his doctor partner solving crime in 21st-century London.",
    category: "Top Rated",
    year: 2010,
    rating: 9.1,
  },

  // More Action (to make 10)
  {
    id: 27,
    title: "Army of the Dead",
    image: "https://image.tmdb.org/t/p/w500/z8CExJekGrEThbpMXAmCFvvgoJR.jpg",
    banner: "https://thecinemacult.com/wp-content/uploads/sites/150/2021/05/Army-of-the-Dead-Review-1951x1024.jpg",
    description:
      "After a zombie outbreak in Las Vegas, a group of mercenaries takes the ultimate gamble.",
    category: "Action",
    year: 2021,
    rating: 5.8,
  },
  {
    id: 28,
    title: "Red Notice",
    image: "https://image.tmdb.org/t/p/w500/lAXONuqg41NwUMuzMiFvicDET9Y.jpg",
    banner: "https://images.summitmedia-digital.com/spotph/images/2021/11/05/red-notice-640-1636103787.jpg",
    description:
      "An FBI profiler pursues the world's most wanted art thief and gets caught in a daring heist.",
    category: "Action",
    year: 2021,
    rating: 6.3,
  },
  {
    id: 29,
    title: "The Old Guard",
    image: "https://image.tmdb.org/t/p/w500/cjr4NWURcVN3gW5FlHeabgBHLrY.jpg",
    banner: "https://static0.colliderimages.com/wordpress/wp-content/uploads/2020/07/the-old-guard-charlize-theron-kiki-layne-slice.jpg",
    description:
      "A covert team of immortal mercenaries is suddenly exposed and must fight to keep their identity a secret.",
    category: "Action",
    year: 2020,
    rating: 6.7,
  },
  {
    id: 30,
    title: "Triple Frontier",
    image: "https://image.tmdb.org/t/p/w500/aBw8zYuAljVM1FeK5bZKITPH8ZD.jpg",
    banner: "https://m.media-amazon.com/images/M/MV5BZGU4ZWNhMDktNGUxMS00ZWY2LWI1NDQtNGMzZTY5ZmQwOTU4XkEyXkFqcGc@._V1_.jpg",
    description:
      "Loyalties are tested when five former special forces reunite to steal a drug lord's fortune.",
    category: "Action",
    year: 2019,
    rating: 6.4,
  },
  {
    id: 31,
    title: "Project Power",
    image: "https://m.media-amazon.com/images/M/MV5BYTUxNThmNWQtN2FkMi00MWRlLTljZTQtMjQzMjcxZjM5YzNhXkEyXkFqcGc@._V1_.jpg",
    banner: "https://variety.com/wp-content/uploads/2020/08/project-power.jpg",
    description:
      "A pill that gives its users unpredictable superpowers for five minutes hits the streets of New Orleans.",
    category: "Action",
    year: 2020,
    rating: 6.0,
  },
  {
    id: 32,
    title: "The Gray Man",
    image: "https://image.tmdb.org/t/p/w500/8cXbitsS6dWQ5gfMTZdorpAAzEH.jpg",
    banner: "https://weliveentertainment.com/wp-content/uploads/2022/07/gray-man-3.jpg",
    description:
      "When a shadowy CIA agent uncovers agency secrets, a psychopathic operative puts a bounty on his head.",
    category: "Action",
    year: 2022,
    rating: 6.5,
  },
  {
    id: 33,
    title: "Kate",
    image: "https://i.namu.wiki/i/_SfbWDKdPIC9VtbW8nvzf336uexD4CqtcWIX2T7rB_RBke6_hIqgatXumyKddKbDrOUJMSOFc6UeofvDjo7ALw.webp",
    banner: "https://static01.nyt.com/images/2021/09/09/arts/09kate-art/09kate-art-superJumbo.jpg",
    description:
      "After she's poisoned, a ruthless criminal operative in Tokyo has less than 24 hours to find who ordered the hit.",
    category: "Action",
    year: 2021,
    rating: 6.3,
  },

  // More Comedy (to make 10)
  {
    id: 34,
    title: "Emily in Paris",
    image: "https://resizing.flixster.com/ymEMsOzyt6LxZCG_Bj-Gd8i4rO4=/fit-in/705x460/v2/https://resizing.flixster.com/HpqLOzzIPHmxM4gQUxerNVB0FjM=/ems.cHJkLWVtcy1hc3NldHMvdHZzZXJpZXMvNjliNmYwMTMtZGJjNS00Mzg1LWIyZjMtNzEwMWVjNzg1MzAwLmpwZw==",
    banner: "https://fredericmagazine.com/wp-content/uploads/2024/09/Screening-Room-Emily-in-Paris-Rome-outdoor-cafe_409_Unit_00395R.jpeg",
    description:
      "A young American marketing executive unexpectedly lands her dream job in Paris and struggles to succeed.",
    category: "Comedy",
    year: 2020,
    rating: 6.9,
  },
  {
    id: 35,
    title: "Never Have I Ever",
    image: "https://dnm.nflximg.net/api/v6/mAcAr9TxZIVbINe88xb3Teg5_OA/AAAABRAAXI_E5RLCyDqBDq6o0Jb_eiqGmKmHXzYLb7sr6DloLWatNyK_pOtkZmPmA_I0ZNqwkKFDPC4y2I3vVyQB03AousGe5J_VEHNz.jpg?r=1db",
    banner: "https://helios-i.mashable.com/imagery/articles/02QsQ9mpWolzk92KuUXa6d5/hero-image.fill.size_1248x702.v1660116711.jpg",
    description:
      "A first-generation Indian-American teenage girl balances high school, family, and romance.",
    category: "Comedy",
    year: 2020,
    rating: 7.8,
  },
  {
    id: 36,
    title: "Space Force",
    image: "https://m.media-amazon.com/images/M/MV5BYzFiODc5Y2YtMDZlMS00ZTk4LWIzYTEtYzAyMjU2NmQ2MjQ0XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    banner: "https://helios-i.mashable.com/imagery/articles/024sMEylAcwdX2eIWoDJEuy/hero-image.fill.size_1248x702.v1614274756.jpg",
    description:
      "A four-star general is tasked with establishing the U.S. military's sixth branch, the Space Force.",
    category: "Comedy",
    year: 2020,
    rating: 6.7,
  },
  {
    id: 37,
    title: "Dead to Me",
    image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p16748121_b_v8_ad.jpg",
    banner: "https://www.indiewire.com/wp-content/uploads/2022/11/Dead_to_Me__Season_2__You_Know_What_You_Did__1683252__00_24_59_05__1500728_RC.jpg",
    description:
      "A tightly wound widow and a free spirit with a shocking secret form a powerful friendship.",
    category: "Comedy",
    year: 2019,
    rating: 8.0,
  },
  {
    id: 38,
    title: "Russian Doll",
    image: "https://static.wikia.nocookie.net/netflix/images/3/37/Russian_Doll_S2.jpg/revision/latest?cb=20220422175553",
    banner: "https://variety.com/wp-content/uploads/2021/09/Russian-Doll.jpg?w=1000&h=563&crop=1",
    description:
      "A cynical woman keeps dying and reliving her 36th birthday party in a surreal time loop.",
    category: "Comedy",
    year: 2019,
    rating: 7.7,
  },
  {
    id: 39,
    title: "Grace and Frankie",
    image: "https://images.justwatch.com/poster/6407920/s718/grace-and-frankie.jpg",
    banner: "https://decider.com/wp-content/uploads/2016/05/grace-and-frankie-s2-5.jpg?quality=75&strip=all&w=978&h=652&crop=1",
    description:
      "Two women form an unlikely bond after their husbands reveal they are in love with each other.",
    category: "Comedy",
    year: 2015,
    rating: 8.2,
  },
  {
    id: 40,
    title: "On My Block",
    image: "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p15112753_b_v12_aa.jpg",
    banner: "https://static0.srcdn.com/wordpress/wp-content/uploads/2020/03/On-My-Block-Cesar-Spooky.jpg?q=50&fit=crop&w=825&dpr=1.5",
    description:
      "A coming-of-age comedy about four bright and street-savvy friends navigating high school in a rough inner-city Los Angeles neighborhood.",
    category: "Comedy",
    year: 2018,
    rating: 7.9,
  },
];

export default movies;