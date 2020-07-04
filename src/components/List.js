import React, {Component} from 'react'; 

import CityRow from './CityRow.js';
import ZipSearch from './ZipSearch.js';

import '../css/List.css'

class List extends Component{
    
    render(){
        const rows = [];
        if(this.props.searchzip){
            
            this.props.data.map((city, index) => {
            rows.push(
                <CityRow class="EachCity" key={index} city={city}/>
            )
        });
        }
        else{
            this.props.data.map((zipcode, index) =>
            {
                
                rows.push(
                    <ZipSearch key={index} zipcode={zipcode}/>
                )
            }
            )
        }
        
        return(
            
            <div id="CityList">
                <h2>All {this.props.searchzip ? "Cities" : "Zipcodes"} Associated With {this.props.search} </h2>
                {rows}
            </div>
        )
    }
};

export default List;