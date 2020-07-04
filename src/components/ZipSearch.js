import React, {Component} from 'react';

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