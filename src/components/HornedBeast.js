import React from 'react';
class HornedBeast extends React.Component{
    render(){
    
        return(
          <>
              <h2>
              {this.props.title}
              </h2>
              <img src={this.props.url} alt={" HornedBeast"}/>
              <p>
                  {this.props.pra}
              </p>
         </>
        )
    }
}

export default HornedBeast