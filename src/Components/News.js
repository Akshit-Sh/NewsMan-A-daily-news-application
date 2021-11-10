import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
    articles= [
        {
          "source": { "id": "financial-times", "name": "Financial Times" },
          "author": null,
          "title": "Humiliating cricket defeat exposes India’s Hindu-Muslim divide",
          "description": "Ruling party accused of fomenting religious enmity to deflect attention from sputtering economy",
          "url": "https://www.ft.com/content/0d342971-ccd6-4ab9-90cc-3618e36935d6",
          "urlToImage": "https://www.ft.com/__origami/service/image/v2/images/raw/https%3A%2F%2Fd1e00ek4ebabms.cloudfront.net%2Fproduction%2Fdf831e61-2816-4817-8b6d-b06ea89314b9.jpg?source=next-opengraph&fit=scale-down&width=900",
          "publishedAt": "2021-11-08T06:22:21.313234Z",
          "content": "After India were thrashed by arch-rival Pakistan in the T20 Cricket World Cup, fast bowler Mohammed Shami was vilified by furious Hindu fans who accused the team’s only Muslim player of deliberately … [+5411 chars]"
        },
        {
          "source": { "id": "news24", "name": "News24" },
          "author": null,
          "title": "Five things that went wrong for India at the T20 World Cup",
          "description": "Cricketing giants India exited the Twenty20 World Cup after New Zealand beat Afghanistan to book the second semi-final berth from Group 2 on Sunday.",
          "url": "https://www.news24.com/sport/Cricket/five-things-that-went-wrong-for-india-at-the-t20-world-cup-20211107",
          "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/10533/4c9149739a8c43be932292eb519cce6e.jpg",
          "publishedAt": "2021-11-07T20:26:07+00:00",
          "content": "Cricketing giants India exited the Twenty20 World Cup after New Zealand beat Afghanistan to book the second semi-final berth from Group 2 on Sunday.\r\nVirat Kohli's team came into the tournament as ho… [+3826 chars]"
        },
        {
          "source": { "id": "independent", "name": "Independent" },
          "author": "Shamim Chowdhury",
          "title": "I’ve been called a ‘p***’ all my life. Racial slurs are never just ‘banter’",
          "description": "Gary Ballance and Yorkshire cricket have not demonstrated any appreciation of the degree of trauma Azeem Rafiq has experienced, and is no doubt still going through",
          "url": "http://www.independent.co.uk/voices/gary-ballance-azeem-rafiq-racism-yorkshire-cricket-b1952841.html",
          "urlToImage": "https://static.independent.co.uk/2021/11/03/20/ae10394759db2170b7d9725944a8150eY29udGVudHNlYXJjaGFwaSwxNjM2MDU3NzA2-2-1.31073178?width=1200&auto=webp&quality=75",
          "publishedAt": "2021-11-07T11:25:24Z",
          "content": "I knew I was a p*** at the age of five. I was standing alone in the school playground, bewildered and anxious, my eyes flitting this way and that, searching for a friend. Whos that p***? a boy asked … [+4755 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
          "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
          "publishedAt": "2020-04-27T11:41:47Z",
          "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
          "source": { "id": "espn-cric-info", "name": "ESPN Cric Info" },
          "author": null,
          "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
          "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
          "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
          "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
          "publishedAt": "2020-03-30T15:26:05Z",
          "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
      ]
      constructor(){
        super();
        console.log("hello I'm a constructor")
        this.state = {
          articles: this.articles
        }
      }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsMan - top headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
         return   <div className="col-md-4" key ={element.url}>
                 <NewsItem  title = {element.title.slice(0,45)} description = {element.description.slice(0,88)} imageUrl ={element.urlToImage} newsUrl ={element.url}/>
                  </div>

                })}
                    
                   
                </div>
                
                
            </div>
        )
    }
}

export default News
