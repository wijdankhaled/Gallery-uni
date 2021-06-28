import React from 'react';
import HornedBeast from './HornedBeast'
import Data from './Data.json'
class Main extends React.Component {
    render() {
        return (
            <div>
                {Data.map(item => {
                    return (
                        <HornedBeast title={item.title} pra={item.description} url={item.image_url} />
                    )
                    })}
                    </div>
        )
                }
            }
           
        
    

export default Main;