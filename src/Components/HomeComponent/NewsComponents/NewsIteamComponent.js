import React, { Component } from 'react'

export class NewsIteamComponent extends Component {
    render() {


        let {title,description , imgUrl , newsUrl} = this.props;
 




        return (
            <> 
            
             
             <div className="card" style={{width: "18rem"}}>
                <img src={!imgUrl? "https://www.mca.gov.in/content/dam/mca/images/press_release_image.jpg":imgUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title"> {title}...</h5>
                    <p className="card-text"> {description}...</p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-primary bg-dark text-white">Read more...</a>
                </div>
                </div>
                
            </>
        )
    }
}

export default NewsIteamComponent
