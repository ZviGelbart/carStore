import React from 'react'
import Categoreis from '../categoreis'
import Cars from '../Cars'
import './layout.css'

export default function index() {
    return (
        <div className='layout'>
            <div id='categoreis'>categoreis
                <Categoreis />
            </div>
            <div id='items'>

               <div id='list'><h1>cartList</h1></div> 
              
                <Cars />
            </div>
        </div>
    )
}
