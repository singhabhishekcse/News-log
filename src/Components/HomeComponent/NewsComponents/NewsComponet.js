import React, { Component } from 'react'
import NewsIteamComponent from './NewsIteamComponent'

export class NewsComponet extends Component {
   
       articles = [
        {
        "source": {
        "id": null,
        "name": "CBS Sports"
        },
        "author": "",
        "title": "Cowboys kicker misses two field goals and an extra point in dramatic 31-29 loss to Buccaneers - CBS Sports",
        "description": "It was an ugly first half for Greg Zuerlein, but he ended up redeeming himself",
        "url": "https://www.cbssports.com/nfl/news/cowboys-kicker-melts-down-during-first-half-of-nfl-thursday-opener-against-buccaneers/",
        "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/08/11/3e8430e8-a284-4f56-b8bd-fd92a6680456/thumbnail/1200x675/ff7162e8fcbc2442790e277319c1f36b/template.jpg",
        "publishedAt": "2021-09-10T04:13:00Z",
        "content": "If the Dallas Cowboys had one big problem during the first half of their opener in Tampa on Thursday night, it was definitely their kicking game. Cowboys kicker Greg Zuerlein missed two field goals a… [+3132 chars]"
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": null,
        "title": "KACEY MUSGRAVES - simple times (official music video) - KaceyMusgravesVEVO",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9YUZEYTBRdjl3WEHSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2021-09-10T04:00:11Z",
        "content": null
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Tumaini Carayol",
        "title": "Emma Raducanu roars past Sakkari to set up US Open final against Fernandez - The Guardian",
        "description": "Emma Raducanu’s fairytale run at the US Open continues after the British teenager beat Maria Sakkari under the lights of Arthur Ashe Stadium",
        "url": "https://amp.theguardian.com/sport/2021/sep/09/emma-raducanu-maria-sakkari-leylah-annie-fernandez-us-open-tennis-semi-final",
        "urlToImage": null,
        "publishedAt": "2021-09-10T03:43:00Z",
        "content": "Emma RaducanuFri 10 Sep 2021 04.43 BST\r\nWhen Emma Raducanu arrived at Flushing Meadows this year, she did not have the faintest idea of where to go. So unfamiliar was she with her surroundings, she n… [+5218 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Kylie Atwood, CNN",
        "title": "Biden speaks with Chinese President Xi Jinping amid tensions in recent months - CNN",
        "description": "President Joe Biden spoke with China's President Xi Jinping on Thursday evening as relations between the two countries have remained tense in recent months, particularly in cyberspace, with the US having accused China of widespread malfeasance, including a ma…",
        "url": "https://www.cnn.com/2021/09/09/politics/biden-xi-jinping-china-call/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210909224238-joe-biden-xi-jinping-split-super-tease.jpg",
        "publishedAt": "2021-09-10T03:26:00Z",
        "content": "(CNN)President Joe Biden spoke with China's President Xi Jinping on Thursday evening as relations between the two countries have remained tense in recent months, particularly in cyberspace, with the … [+5003 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Www.https"
        },
        "author": "New York Post",
        "title": "Shailene Woodley sends fans into frenzy with Instagram photo of baby feet: 'That a random baby?' - Fox News",
        "description": "The actress sent fans into a tizzy on Wednesday when she posted a captionless black-and-white photo of baby feet on her Instagram Story.",
        "url": "https://www.https://pagesix.com/2021/09/09/shailene-woodley-confuses-fans-with-instagram-pic-of-baby-feet/",
        "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2020/04/Shailene-Woodley.jpg",
        "publishedAt": "2021-09-10T02:17:47Z",
        "content": "Is Shailene Woodley hinting at something?\r\nThe \"Big Little Lies\" actress who is engaged to NFL star Aaron Rodgers  sent fans into a tizzy on Wednesday when she posted a captionless black-and-white ph… [+2681 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "WLWT Cincinnati"
        },
        "author": "WLWT Digital Staff",
        "title": "Reports of active shooter cause Wright Patterson Air Force Base to go on lockdown - WLWT Cincinnati",
        "description": "Wright Patterson Air Force Base has been placed on lockdown Thursday evening.",
        "url": "https://www.wlwt.com/article/reports-of-active-shooter-cause-wright-patterson-air-force-base-to-go-on-lockdown/37536169",
        "urlToImage": "https://kubrick.htvapps.com/htv-prod/ibmig/cms/image/wlwt/28359322-28359322.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*",
        "publishedAt": "2021-09-10T02:11:00Z",
        "content": "WRIGHT-PATTERSON AIR FORCE BASE, Ohio —Wright Patterson Air Force Base has been placed on lockdown Thursday evening.\r\nThe bases command center operator confirmed that the base was placed on lockdown … [+1509 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "New York Times"
        },
        "author": null,
        "title": "Biden’s Speech on Vaccine Mandates and the Delta Variant: Full Transcript - The New York Times",
        "description": "“My message to unvaccinated Americans is this: What more is there to wait for?” President Biden said on Thursday. “We’ve been patient, but our patience is wearing thin.”",
        "url": "https://www.nytimes.com/2021/09/09/us/politics/biden-vaccine-mandates-transcript.html",
        "urlToImage": "https://static01.nyt.com/images/2021/09/09/us/politics/09dc-BIDEN-TRANSCRIPT/09dc-BIDEN-TRANSCRIPT-facebookJumbo.jpg",
        "publishedAt": "2021-09-10T01:49:22Z",
        "content": "The fifth piece of my plan is protecting our economic recovery. Because of our vaccination program, and the American Rescue Plan, which we passed early in my administration, weve had record job creat… [+3313 chars]"
        },
        {
        "source": {
        "id": "ars-technica",
        "name": "Ars Technica"
        },
        "author": "Steve Haske",
        "title": "Gran Turismo 7, Spider-Man 2, KOTOR remake lead PlayStation 5 showcase - Ars Technica",
        "description": "Big reveals: Insomniac's Wolverine, Uncharted remasters, God of War Ragnarok gameplay.",
        "url": "https://arstechnica.com/gaming/2021/09/gran-turismo-7-spider-man-2-kotor-remake-lead-playstation-5-showcase/",
        "urlToImage": "https://cdn.arstechnica.net/wp-content/uploads/2021/09/Screenshot-8412-760x380.png",
        "publishedAt": "2021-09-10T01:28:46Z",
        "content": "17 with 16 posters participating\r\n<ul><li>\r\n \"Will one of you finally give me what I desire?\" \r\n</li><li>\r\n A long-rumored remake, now confirmed. \r\n</li><li>\r\n A familiar voice: \"Peace is a lie. That… [+7710 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "wtvr.com"
        },
        "author": "The Associated Press, Cameron Thompson",
        "title": "Search for time capsule under Lee statue called off - wtvr.com",
        "description": "After 12 hours of work, state officials called off search efforts to locate a time capsule believed to be buried in 1887 under the monument to Confederate General Robert E. Lee.",
        "url": "https://www.wtvr.com/news/local-news/lee-statue-time-capsule-update",
        "urlToImage": "https://ewscripps.brightspotcdn.com/dims4/default/d066e7a/2147483647/strip/true/crop/4943x2595+0+349/resize/1200x630!/quality/90/?url=http%3A%2F%2Fewscripps-brightspot.s3.amazonaws.com%2F67%2Fbf%2Fb267b77341efafd5f67f44c0c1a4%2Fap21252576351761.jpg",
        "publishedAt": "2021-09-10T01:07:30Z",
        "content": "RICHMOND, Va. (AP) - After roughly 12 hours of work, efforts to find the time capsule believed to be buried in the monument to Confederate General Robert E. Lee in Richmond were called off Thursday e… [+4790 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "NPR"
        },
        "author": null,
        "title": "Smoke Alarms Sound On The International Space Station - NPR",
        "description": "Alarms sounded on the Russian segment of the Space Station early Thursday. The crew reportedly activated air filters and returned to their \"night rest\" once the air quality was back to normal.",
        "url": "https://www.npr.org/2021/09/09/1035758962/smoke-alarm-international-space-station",
        "urlToImage": "https://media.npr.org/assets/img/2021/09/09/ap21252480710119_wide-dbb608c5143587ff4e27b715eb13f91d93d18efe.jpg?s=1400",
        "publishedAt": "2021-09-10T00:53:09Z",
        "content": "In this photo taken by Russian cosmonaut Oleg Novitsky and provided by Roscosmos Space Agency Press Service, the International Space Station is seen from the Nauka module on Wednesday, Aug. 11, 2021.… [+1234 chars]"
        },
        {
        "source": {
        "id": "cbs-news",
        "name": "CBS News"
        },
        "author": "Alexandra Alexandra",
        "title": "Scientists discover giant \"swimming head\" creature that lived 500 million years ago - CBS News",
        "description": "The ancestor of the horseshoe crab measured more than half a meter in length and had a large head shell.",
        "url": "https://www.cbsnews.com/news/prehistoric-giant-swimming-head-creature/",
        "urlToImage": "https://cbsnews2.cbsistatic.com/hub/i/r/2021/09/09/2f7c1537-ac4b-4ed1-91c5-9f2f6516511b/thumbnail/1200x630/a91433714bfa7a5b1d737b53533f21bf/screen-shot-2021-09-09-at-7-32-01-pm.png",
        "publishedAt": "2021-09-10T00:45:00Z",
        "content": "Scientists have discovered a gigantic prehistoric relative of the horseshoe crab in the 500-million-year-old Burgess Shale in Canada, according to a study published in Royal Society Open Science on W… [+2459 chars]"
        },
        {
        "source": {
        "id": "cnn",
        "name": "CNN"
        },
        "author": "Paul LeBlanc, CNN",
        "title": "Stephen Breyer calls Supreme Court decision on Texas abortion law 'very, very, very wrong' - CNN",
        "description": "US Supreme Court Justice Stephen Breyer called the high court's recent refusal to block a controversial Texas law that bars abortions at six weeks \"very, very, very wrong.\"",
        "url": "https://www.cnn.com/2021/09/09/politics/stephen-breyer-texas-abortion/index.html",
        "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/210412173105-stephen-breyer-file-super-tease.jpg",
        "publishedAt": "2021-09-10T00:34:00Z",
        "content": "Washington (CNN)US Supreme Court Justice Stephen Breyer called the high court's recent refusal to block a controversial Texas law that bars abortions at six weeks \"very, very, very wrong.\"\r\n\"I'll add… [+2269 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "The Guardian"
        },
        "author": "Guardian staff reporter",
        "title": "Musician Phil Collins puts band ‘to bed’ as health deteriorates - The Guardian",
        "description": "The 70-year-old singer and drummer is frustrated by his physical challenges as he prepares for his upcoming Genesis tour",
        "url": "https://amp.theguardian.com/music/2021/sep/10/musician-phil-collins-can-barely-hold-a-drumstick",
        "urlToImage": null,
        "publishedAt": "2021-09-10T00:31:00Z",
        "content": "MusicThe 70-year-old singer and drummer is frustrated by his physical challenges as he prepares for his upcoming Genesis tour\r\nFri 10 Sep 2021 00.39 BST\r\nBritish musician Phil Collins says he can bar… [+1613 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "Jalopnik"
        },
        "author": "Erik Shilling",
        "title": "The 2022 Chevy Silverado ZR2 Wants To Be The Most Truck - Jalopnik",
        "description": "Chevy says it'll be the brand's flagship off-road truck.",
        "url": "https://jalopnik.com/the-2022-chevy-silverado-zr2-wants-to-be-the-most-truck-1847647549",
        "urlToImage": "https://i.kinja-img.com/gawker-media/image/upload/c_fill,f_auto,fl_progressive,g_center,h_675,pg_1,q_80,w_1200/09dc9c3524ade8a88e4ea11f99b050d8.jpg",
        "publishedAt": "2021-09-10T00:30:00Z",
        "content": "The Chevy Silverado is in the middle of its fourth generation, a truck that strives in vain every year to take down the mighty Ford F-150, but a truck that nonetheless prints a lot of money for G.M. … [+3194 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "ESPN"
        },
        "author": "Jamison Hensley",
        "title": "Baltimore Ravens lose Marcus Peters, Gus Edwards to season-ending ACL injuries, sources say - ESPN",
        "description": "Ravens cornerback Marcus Peters and running back Gus Edwards both suffered season-ending torn ACLs at Thursday's practice, sources told ESPN.",
        "url": "https://www.espn.com/nfl/story/_/id/32178123/baltimore-ravens-lose-marcus-peters-gus-edwards-season-ending-acl-injuries",
        "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F0901%2Fr903373_1296x729_16%2D9.jpg",
        "publishedAt": "2021-09-10T00:29:43Z",
        "content": "OWINGS MILLS, Md. -- The Baltimore Ravens' horrid run of injuries continued Thursday when cornerback Marcus Peters and running back Gus Edwards both suffered season-ending torn ACLs in practice, sour… [+3926 chars]"
        },
        {
        "source": {
        "id": "google-news",
        "name": "Google News"
        },
        "author": null,
        "title": "The Matrix: Resurrections Trailer Breakdown & Easter Eggs (Nerdist News w/ Dan Casey) - Nerdist",
        "description": null,
        "url": "https://news.google.com/__i/rss/rd/articles/CBMiK2h0dHBzOi8vd3d3LnlvdXR1YmUuY29tL3dhdGNoP3Y9UzkyMkI0SlFEM3PSAQA?oc=5",
        "urlToImage": null,
        "publishedAt": "2021-09-10T00:15:42Z",
        "content": null
        },
        {
        "source": {
        "id": "axios",
        "name": "Axios"
        },
        "author": "Dave Lawler",
        "title": "Brazil's Bolsonaro backs down from Supreme Court showdown, for now - Axios",
        "description": "He had threatened to ignore the court's rulings while rallying supporters.",
        "url": "https://www.axios.com/bolsonaro-supreme-court-threat-e4d086ea-969d-46e2-89ec-a237c3db6ea6.html",
        "urlToImage": "https://images.axios.com/XqDNFgZ0peIN2jciCu19j7vX6VY=/0x136:3500x2105/1366x768/2021/09/09/1631230672046.jpg",
        "publishedAt": "2021-09-09T23:45:40Z",
        "content": "Brazilian President Jair Bolsonaro seemed to take a step back from the ledge on Thursday night, releasing a conciliatory statement two days after pledging to ignore Supreme Court rulings and declarin… [+3132 chars]"
        },
        {
        "source": {
        "id": "the-verge",
        "name": "The Verge"
        },
        "author": "Jay Peters",
        "title": "Epic tests Apple with new request: let us relaunch Fortnite in Korea - The Verge",
        "description": "Epic Games has asked Apple to reinstate its Fortnite developer account so it can release the game in South Korea, following the passage of a bill that will force Apple and Google to let apps use alternative payment systems.",
        "url": "https://www.theverge.com/2021/9/9/22665826/epic-games-apple-reinstate-fortnite-ios-korea-app-store-payment",
        "urlToImage": "https://cdn.vox-cdn.com/thumbor/pqej1Q2-xXs_LkrnYMSqfNdRlHE=/0x146:2040x1214/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/21783862/acastro_20200818_1777_epicApple_0003.0.jpg",
        "publishedAt": "2021-09-09T23:39:37Z",
        "content": "Following the passing of a bill allowing alternative payment systems on the App Store\r\nIllustration by Alex Castro / The Verge\r\nEpic Games has asked Apple to reinstate its Fortnite developer account … [+1317 chars]"
        },
        {
        "source": {
        "id": "abc-news",
        "name": "ABC News"
        },
        "author": "Libby Cathey",
        "title": "Afghan girls in climbing group wait and hope, desperate to escape Taliban rule - ABC News",
        "description": "",
        "url": "https://abcnews.go.com/Politics/afghan-girls-climbing-group-wait-hope-desperate-escape/story?id=79897076",
        "urlToImage": "https://s.abcnews.com/images/International/afghanistan-ascend-female-mountaineers-01-ht-llr-210909_1631207829046_hpMain_16x9_992.jpg",
        "publishedAt": "2021-09-09T23:14:03Z",
        "content": "For girls and young women accustomed to mountain climbing and physical fitness training six times a week, being confined in a crowded wedding hall near an airport in northern Afghanistan is a differe… [+7189 chars]"
        },
        {
        "source": {
        "id": null,
        "name": "KTLA Los Angeles"
        },
        "author": "Associated Press",
        "title": "Biden to campaign with Newsom in Long Beach ahead of Tuesday’s California recall election - KTLA Los Angeles",
        "description": "California Gov. Gavin Newsom will get a boost in the final days of a campaign that is trying to kick him out of office from the nation’s most prominent Democrat: President Joe Biden. Biden will join the first-term Democratic governor in the Southern Californi…",
        "url": "https://ktla.com/news/california/biden-to-campaign-with-newsom-in-long-beach-ahead-of-tuesdays-california-recall-election/",
        "urlToImage": "https://ktla.com/wp-content/uploads/sites/4/2021/09/AP21251816842850.jpg?w=1280",
        "publishedAt": "2021-09-09T23:08:13Z",
        "content": "California Gov. Gavin Newsom will get a boost in the final days of a campaign that is trying to kick him out of office from the nation’s most prominent Democrat: President Joe Biden.\r\nBiden will join… [+3177 chars]"
        }
        ]
      constructor(){
          super();
          
          this.state={
            articles : this.articles,
            loading : false
          }
      }







    render() {
        return (
            <> 
            <div className="container my-4">
             <h1>NewsLog - Top Headling </h1>
             <div className="row my-4">
             {this.state.articles.map((element)=>{
                  
                return  (
                           <div className="col-md-4" key={element.url}>
                                <NewsIteamComponent title ={element.title} description={element.description} imgUrl ={element.urlToImage} newsUrl={element.url}/>
                          </div>
                       )
             })}
             </div>
            </div>
            </>
        )
    }
}

export default NewsComponet   
