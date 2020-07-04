import React, {Component} from 'react';

import List from './List.js';

import '../css/Result.css'

class Result extends Component{
    render(){
        if(this.props.found){
            
            return(
                <div class="Result">
                    <List data={this.props.appdata} searchzip={this.props.searchzip} search={this.props.search}/>
                </div>
            ) 
        }
        else{
            return <p>No results found</p>
        }
    }
};

export default Result;