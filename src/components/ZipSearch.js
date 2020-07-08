import React, {Component} from 'react';


//Component to hold zipcodes from a city search
class ZipSearch extends Component{
    render(){
        const zipcode = this.props.zipcode;
        return(
            <ul>
                <li>
                {zipcode}
                </li>
            </ul>
        )
    }
};

export default ZipSearch;