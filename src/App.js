import React from 'react';
import './App.css';
import Content from './Components/Content';
import SearchForm from './Components/SearchForm';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      searchData: null,
      isSearch: false
    }
  }

  updateSearchData = (data)=>{
    this.setState({
      searchData: data
    });
  }

  searching = (isSearch)=>{
    this.setState({
      isSearch: isSearch
    })
  }


  render(){
    return(
      <div className="App" >
        <h1>Some Jobs</h1>
        <SearchForm updateData={this.updateSearchData} searching={this.searching} />
        <Content data={this.state.searchData} isSearch={this.state.isSearch} />
      </div>
    );
  }
}

export default App;
