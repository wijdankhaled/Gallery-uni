import React from 'react';
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import SelectedBeast from './components/SelectedBeast'; 
import Data from './components/Data.json';
import './App.css';

class App extends React.Component{
  constructor (props){
    super(props);
    this.state={
     Data:Data,
     show:false,
     selectedCard:[]

     
    }
  }

  handeleClose=()=>{
    this.setState({show:false})
  }

popUpTheCard=(title)=>{
  let selectedCard= Data.find(card=>{
    if (card.title===title){
      return card ;
    }
  })
  this.setState({
    show:true,
    selectedCard:selectedCard
  })
}

  render(){
    return(
      <div>
        <Header/>
        <Main Data={this.state.Data} popUpTheCard={this.popUpTheCard}/>
        <Footer/>
        <SelectedBeast shown={this.state.show}handeleClose={this.handeleClose}selectedCard={this.state.selectedCard}/>
      </div>
    )
  }
}
export default App;