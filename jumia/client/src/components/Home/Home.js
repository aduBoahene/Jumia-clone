import React from 'react'
import Bread from '../Bread/Bread'
import HorizontalListOfProducts from '../HorizontalListOfProducts/HorizontalListOfProducts'
import Jumbo from '../Jumbotron/jumbotron'

export default function Home() {
    return (
        <div className="Home">
            
            <div className="jumb">
            <Jumbo/>
            </div>
            <div className="bread">
            <Bread/>
            </div>
            <div className="products">
            <HorizontalListOfProducts/>
            </div>
        </div>
    )
}
