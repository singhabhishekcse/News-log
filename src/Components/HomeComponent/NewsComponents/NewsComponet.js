import React, { Component } from 'react'
import NewsIteamComponent from './NewsIteamComponent'

export class NewsComponet extends Component {
       
      
       constructor(){
        super();
        
        this.state={
          articles : this.articles,
          loading : false
        }
    }


    articles = []
    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&apiKey=bf3cb7efd13348ff92adb1f0aba89817"
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({articles : parseData.articles})
       
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
                                <NewsIteamComponent title ={element.title ? element.title:" "} description={element.description? element.description:" "} imgUrl ={element.urlToImage} newsUrl={element.url}/>
                          </div>
                       )
             })}
             </div>
                   
                <div className="d-flex justify-content-between ">
                    
                            
                                <button disabled={this.state.page<=1}  className="sr-only bg-dark text-white" onClick={this.handlePrevBtn} >&laquo; Previous</button>
                            
                      
                           
                      
                                   <button className="sr-only bg-dark text-white"  onClick={this.handleNextBtn}>Next &raquo;</button>
                                
                    
                </div>













            </div>
            </>
        )
    }
}

export default NewsComponet   
