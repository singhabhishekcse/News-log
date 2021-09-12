import React, { Component } from 'react'
// import Loader from '../loderComponents/Loader.js'

import NewsComponet from './NewsComponents/NewsComponet.js'

export class HomeComponent extends Component {
    render() {
        return (
            <>
                 <NewsComponet  pageSize={9} country="in"/>
                {/* <Loader /> */}
                
            </>
        )
    }
}

export default HomeComponent
