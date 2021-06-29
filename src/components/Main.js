import React from 'react';

import HornedBeats from './HornedBeast'

class Main extends React.Component{
    render(){
        return(
            
            
            <>
            {
               this.props.Data.map((item,index)=>{
                    return(
                    <HornedBeats title={item.title} pra={item.description}url={item.image_url} key={index} popUpTheCard={this.props.popUpTheCard}/>
                    )
                })
            }
            </>

            

               

        )

    }

}

export default Main;