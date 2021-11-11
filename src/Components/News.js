import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {
      constructor(){
        super();
        this.state = {
          articles: []
        }
      }

      async componentDidMount(){
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=6475ed9e488f4260b7bc6826a0bdc106";
        let data = await fetch(url);
        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles})
      }
    render() {
        return (
            <div className="container my-3">
                <h2>NewsMan - top headlines</h2>
                <div className="row">
                {this.state.articles.map((element)=>{
         return   <div className="col-md-4" key ={element.url}>
                 <NewsItem  title = {element.title?element.title:""} description = {element.description?element.description:""} imageUrl ={element.urlToImage} newsUrl ={element.url}/>
                  </div>

                })}
                    
                   
                </div>
                
                
            </div>
        )
    }
}

export default News
