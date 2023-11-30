/*   STEP 1   */
export const leagueID = "991175746007695360"; // your league ID
export const leagueName = "I Think You Should League"; // your league name
export const dues = 100; // (optional) used in template constitution page
export const dynasty = false; // true for dynasty leagues, false for redraft and keeper
export const enableBlog = true; // requires VITE_CONTENTFUL_ACCESS_TOKEN and VITE_CONTENTFUL_SPACE environment variables

/*   STEP 2   */
export const homepageText = `
  <p>Welcome to the new and improved home for the infamous "I Think You Should League" Fantasy Football league.</p>
  <p>Thanks to our move to Sleeper, things like this website are now possible. Unfortunately, league history has been reset, but worry not. Our ESPN league is still active if you want to review league history results, along with this handy dandy link https://espn.fantasy-franchise.com/nfl/397592/standings/ that goes into even more detail about our wonderful history.</p>
  <p>Going forward, this website will auto-populate using the Sleeper API and auto-calculate the power rankings below by looping through the remaining matchups and using your players’ predicted points to set an “optimal” lineup each week and then adding all the scores up. The team with the most points gets 100, everyone else gets a percentage of that max number </p>
  <p>Feel free to familiarize yourself with the new content and look out for my blog posts going forward, which you'll (hopefully) be able to directly comment on. Gone are the days of google sheets! </p>
`;

/*   STEP 3   */
/*
3 managers as an example. Uncomment (remove the //) before each line to make it live code
If you're having trouble, reference the Training Wheels' Manager Section
https://github.com/nmelhado/league-page/blob/master/TRAINING_WHEELS.md#ii-adding-managers-and-changing-the-homepage-text
*/

// To omit an optional field, set it's value to null

export const managers = [
    {
      "managerID": "204818019367526400",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Eric Oliveira",
      "location": "Springfield, not the homer simpson kind", // (optional)
      "bio": "Through the league's first 10 years of history, Eric has amassed a league high 83 wins (combined between regular season and playoffs), 8 playoff visits, 4 championship appearances, and 2 championships (with both coming back to back). A true professional and student of the game, Eric is also a world renowned commissioner who is adored by his leaguemates for his witty humor and unending passion to improve the league experience. He is surely a treat to have in any league. Go Birds!",
      "photo": "/managers/EricOliveiraFFL.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "phi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Chris", // Can be anything (usually your rival's name)
        link: 2, // manager array number within this array, or null to link back to all managers page
        image: "/managers/ChrisFFLreal.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 6904, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Hard work beats talent when talent don't work hard. Luckily I have both.", // (optional)
      "tradingScale": 8, // 1 - 10 (optional)
      "preferredContact": "Carrier Pigeon",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "873269831670075392",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Chris Witwick",
      "location": "Philadelphia", // (optional)
      "bio": "Chris is a passionate football enthusiast residing in the vibrant city of Philadelphia. Born on a lovely day, his life revolves around the world of football. While he may not have a conventional job, his dedication shines through his involvement in a fantasy football league. Chris's relentless commitment to managing his below-average team in the league is nothing short of impressive. Despite the challenges since the accident, he perseveres, always striving to improve his roster. However, he's quick to acknowledge that the Erics, a set of formidable competitors, set a high bar that's hard to surpass. In the quiet hours of the night, when most people rest, you'll find Chris combing through the waiver wire, searching for hidden gems and sleeper players who could potentially elevate his team's performance. It's this unwavering determination and attention to detail that make Chris a formidable fantasy football manager. Outside of his fantasy football pursuits, Chris has a unique side hustle: he writes children's books. This creative endeavor allows him to share his imagination and storytelling skills with young readers, adding a touch of magic to their lives. In the heart of Philadelphia, a city known for its rich sports culture, Chris stands as a devoted football aficionado and a creative writer, crafting both victories on the virtual gridiron and captivating tales for young minds.",
      "photo": "/managers/ChrisFFLreal.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "The Eric's", // Can be anything (usually your rival's name)
        link: "null", // manager array number within this array, or null to link back to all managers page
        image: "/managers/EricAndre.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 142, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "My team is like the United States government. Spend all the money, build back better, but with FAAB.", // (optional)
      "tradingScale": 8, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "991180287608500224",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Jon Dinsmore",
      "location": "The Nether Region", // (optional)
      "bio": "A true visionary, Jon has dominated every facet of his life and fantasy has been no different. With 2 championships and many more to come, he has left the rest of the league chasing his tail since he entered. Contrary to popular belief, has a perfectly average sized penis.",
      "photo": "/managers/JonD.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyg", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Korey (enjoy those earrings a la mode)", // Can be anything (usually your rival's name)
        link: "4", // manager array number within this array, or null to link back to all managers page
        image: "/managers/KoreyF.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 910, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "RBs first, second, and third", // (optional)
      "tradingScale": 1, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "732784610907365376",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Korey Fedirko",
      "location": "South Philly, the real dirty part", // (optional)
      "bio": "Bottom feeder, clawing at the heels of the unsuspecting",
      "photo": "/managers/KoreyF.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Le Merge (he's not just a wirey SOB, but he's a goddamn magician)", // Can be anything (usually your rival's name)
        link: "3", // manager array number within this array, or null to link back to all managers page
        image: "/managers/JonD.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 972, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "I seethe to find a way to devastate my fellow competitors, eventually failing in anguish", // (optional)
      "tradingScale": 7.22, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "991188749172191232",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Kevin Richardson",
      "location": "Doowrag, NJ", // (optional)
      "bio": "Even though during every draft, he is told his team sucks, Kevin has amassed the second most wins in the league's history (prior to the start of the 2023 season) making the playoffs in all but two seasons, with a championship in 2017. Just remember his team sucks tho.",
      "photo": "/managers/KevinR.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "chi", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "The Haters", // Can be anything (usually your rival's name)
        link: "null", // manager array number within this array, or null to link back to all managers page
        image: "/managers/everyone.png", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 7591, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Grip it and rip it", // (optional)
      "tradingScale": 6.5, // 1 - 10 (optional)
      "preferredContact": "Carrier Pigeon",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "992483971810361344",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Paul Cassaro",
      "location": "Washington Heights, NYC", // (optional)
      "bio": "Paul joined the league in 2020, riding the prolific success of Dalvin Cook to a league best 12-3 record and falling just short of a championship in that season's playoff. Although it's been tough sledding since his rookie year, Paul's competitive edge has not wavered. You can usually find him making questionable waiver wire claims and head-scratching trades (that he swears will turn his season around). But give the man some credit - he'll do whatever it takes to win... and when he doesn't, at least the horrible transactions will make for a good laugh.",
      "photo": "/managers/PaulC.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2020, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "dal", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Kevin Richardson", // Can be anything (usually your rival's name)
        link: "5", // manager array number within this array, or null to link back to all managers page
        image: "/managers/KevinR.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 3294, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Trading is fun and better than pretending like you're some guru who might have picked a perfect team on draft night.", // (optional)
      "tradingScale": 10, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    },
    {
      "managerID": "990290994589425664",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
      "name": "Corey Smith",
      "location": "The 'DUH state", // (optional)
      "bio": "daddy doing daddy things beating my competition as hard as my kids",
      "photo": "/managers/CoreyS.jpg", // square ratio recommended (no larger than 500x500)
      "fantasyStart": 2013, // (optional) when did the manager start playing fantasy football
      "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
      "rival": {
        name: "Me since I only beat myself", // Can be anything (usually your rival's name)
        link: "7", // manager array number within this array, or null to link back to all managers page
        image: "/managers/CoreyS.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
      },
      "favoritePlayer": 1947, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
      "philosophy": "Now that I'm older, I realize this has been training me for being a dad you have no idea what's going to happen week after week or if the one you have is the 'good one' but you invest all your time into it and love it no matter what. Plus like kids, you can always just try again next year.", // (optional)
      "tradingScale": 5.5, // 1 - 10 (optional)
      "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    }
    ]
  
  
  /*   !!  !!  IMPORTANT  !!  !! */
  /*
  Below is the most up to-date version of a manager. Please leave this commented out
  and don't delete it. This will be updated if any fields are added, removed or changed
  and will allow updates without causing merge conflicts
  */
  
    // {
    //   "roster": 3,  // (DEPRECATED! Don't use this anymore) ID of the roster that the manager manages (look at the order of the power rankings graph)
    //   "managerID": "12345678",  // the user's manager ID, go to https://api.sleeper.app/v1/league/<your_league_id>/users to find user IDs (you can use older leagueIDs to find user IDs for managers that are no longer in the league)
    //   "name": "Your Name",
    //   "tookOver": 2020, // (DEPRECATED! You don't need to use this anymore) (optional) used if a manager took over a team, delete this line or change to null otherwise
    //   "location": "Brooklyn", // (optional)
    //   "bio": "Lorem ipsum...",
    //   "photo": "/managers/name.jpg", // square ratio recommended (no larger than 500x500)
    //   "fantasyStart": 2014, // (optional) when did the manager start playing fantasy football
    //   "favoriteTeam": "nyj", // (optional) favorite NFL team, (follows convention: nyj, sea, mia, etc.) MUST BE LOWERCASE
    //   "mode": "Win Now", // (optional) 'Win Now', 'Dynasty', or 'Rebuild' (anything else and you will need to add a new png to /static/ similar to the 'Rebuild.png' and 'Win Now.png' currently in there)
    //   "rival": {
    //     name: "Rival", // Can be anything (usually your rival's name)
    //     link: 6, // manager array number within this array, or null to link back to all managers page
    //     image: "/managers/rival.jpg", // either a specific manager photo or '/managers/everyone.png' or '/managers/question.png'
    //   },
    //   "favoritePlayer": 1426, // (optional) this corresponds to the Sleeper player ID (https://api.sleeper.app/v1/players/nfl)
    //   "valuePosition": "WR", // (optional) Favorite position (QB, WR, RB, TE, etc.)
    //   "rookieOrVets": "Rookies", // (optional) 'Rookies' or 'Vets' (anything else and you will need to add a new png to /static/ similar to the 'Rookies.png' and 'Vets.png' currently in there)
    //   "philosophy": "Your fantasy team's philosophy", // (optional)
    //   "tradingScale": 10, // 1 - 10 (optional)
    //   "preferredContact": "Text",  // (optional) 'Text', 'WhatsApp', 'Sleeper', 'Email', 'Phone', 'Discord', and 'Carrier Pigeon' are currently supplied in the template
    // },
    
