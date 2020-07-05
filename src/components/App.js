import React, {Component} from 'react';
import axios from 'axios';

import '../css/App.css'

import Result from './Result.js';


class App extends Component {
    constructor() {
        super();

        this.state = {
            search: "",
            found: false,
            appdata: [],
            searchzip: true,
            inputtext: "Enter a city name",
        };

        this.handleSearch = this.handleSearch.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.switchSearch=this.switchSearch.bind(this);
    }


    async handleSearch(){
        let url = "";
        if(this.state.searchzip)
        {
            url = "https://ctp-zip-api.herokuapp.com/zip/"+ this.state.search;
        }
        else{
            let search = this.state.search;
            search = search.toUpperCase()
            url = "https://ctp-zip-api.herokuapp.com/city/"+ search;
        }
        try{
            let result = await axios.get(url);
            this.setState({appdata: result.data});
            this.setState({found: true})
        }
        catch(error){
            console.log("error occured")
            this.setState({found: false})
        }
    }

    handleInput(event){
        this.setState({search: event.target.value})
    }

    switchSearch(){
       this.setState(
            {
               searchzip: !this.state.searchzip,
               found: false,
               search: "",
            }
        )
       
    }

    render() {
        return (      
           <div class ="App">
               <header>
                   <div id='head'>
                        {this.state.searchzip? "Search Zipcode" : "Search City"}
                   </div>
                   <button class='toggle' onClick={() => this.switchSearch()}>{this.state.searchzip ? "Change to City" : "Change to Zipcode"}</button>
               </header>
               
               <div class='search'>
                    <form>
                        <input 
                            type="text" 
                            placeholder={this.state.searchzip ? "Enter a zipcode" : "Enter a city name"}
                            id='zip' 
                            value={this.state.search} 
                            onChange={this.handleInput}
                        />
                        </form>
                    <button class='submit' onClick={this.handleSearch}>Search</button>
               </div>
               <Result id='result' appdata={this.state.appdata} found={this.state.found} searchzip={this.state.searchzip} search={this.state.search}/>
           </div>
               
        );
    }


}

export default App;
