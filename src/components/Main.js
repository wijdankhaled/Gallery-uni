import React from 'react';

import HornedBeats from './HornedBeast'
import Data from './Data.json';
class Main extends React.Component{
    render(){
        return(
            
            
            <>
            {
                Data.map((item,index)=>{
                    return(
                    <HornedBeats title={item.title} pra={item.description}url={item.image_url} key={index}/>
                    )
                })
            }
            </>

            

               

        )
                }
            }
           
        
    

export default Main;