import React, { Component } from 'react'
import NewsIteamComponent from './NewsIteamComponent'
import Loader from './loderComponents/Loader'
import PropTypes from 'prop-types';

export class NewsComponet extends Component {
       
       static defaultProps = {
        //    country : 'in',
        //    pageSize : 9,
        //    category:'general'
       }
       static propTypes ={
        country : PropTypes.string,
        pageSize : PropTypes.number,
        category : PropTypes.string,
       }



       constructor(){
        super();
        
        this.state={
          articles : this.articles,
          loading : false,
          page:1,
        //   totalResults:this.totalResults,
        }
    }
   

    articles = []
    async componentDidMount() {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bf3cb7efd13348ff92adb1f0aba89817&page=1&pageSize=${this.props.pageSize}`
        this.setState({loading:true})
        // https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=87c9f5f672b042de8b858f96bcbd93ac&page=${this.state.page-1}&pageSize=${this.props.pageSize}
       
        let data = await fetch(url)
        let parseData = await data.json()
        this.setState({
            articles : parseData.articles,
            totalResults : parseData.totalResults,
            loading:false,

        })
       
        
    //    console.log(parseData)
    } 



     handlePrevBtn = async()=>{
        
       
       
                        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bf3cb7efd13348ff92adb1f0aba89817&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
                        this.setState({loading:true})
                        let data = await fetch(url)
                        let parseData = await data.json()
                        this.setState({
                            articles : parseData.articles,
                            page:this.state.page - 1,
                            loading:false,
                        })
                    
    }
    
   



     handleNextBtn = async()=>{
        


        /////this is not working in future i have to work here //////////



        // if(!( this.state.page + 1 >   Math.ceil(this.parseData.totalResults/20))){
            
      
                    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=bf3cb7efd13348ff92adb1f0aba89817&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
                    this.setState({loading:true})
                    let data = await fetch(url)
                    let parseData = await data.json()
                   
                    this.setState({
                        articles : parseData.articles,
                        page:this.state.page + 1,
                        loading:false,
                    })
                // }
    }







    render() {
        return (
            <> 
            <div className="container my-4">
            <h1 className="text-centre">NewsLog - Top Headling</h1>
                 
                 {this.state.loading && <Loader />}
         
             <div className="row my-4">
             {!this.state.loading && this.state.articles.map((element)=>{
                  
                return  (
                           <div className="col-md-4" key={element.url}>
                                <NewsIteamComponent title ={element.title ? element.title:" "} description={element.description? element.description:" "} imgUrl ={element.urlToImage} newsUrl={element.url}/>
                          </div>
                       )
             })}
             </div>
                   
                <div className="d-flex justify-content-between ">
                    
                            
                                <button disabled={this.state.page <= 1} type="button"  className=" btn btn-sm bg-dark text-white" onClick={this.handlePrevBtn} >&laquo; Previous</button>
                            
                      
                           
                      
                                <button className="btn btn-sm bg-dark text-white" type="button"  onClick={this.handleNextBtn}>Next &raquo;</button>
                                
                    
                </div>

            



            </div>
            
            </>
        )
    }
    
}

export default NewsComponet   
