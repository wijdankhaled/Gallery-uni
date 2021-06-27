import React from 'react';
class HornedBeast extends React.Component{
    render(){
        return(
          <div>
              <h2>
              {this.props.title}
              </h2>
              <image src={this.props.url}/>
              <p>
                  {this.props.pra}
              </p>
          </div>
        )
    }
}
export default HornedBeast;