import React, {Component} from 'react';

import '../css/CityRow.css'

class CityRow extends Component{
    render(){
        const State = this.props.city.State;
        const Lat= this.props.city.Lat;
        const Long = this.props.city.Long;
        const Pop = this.props.city.EstimatedPopulation;
        const Wages = this.props.city.TotalWages; 
        const City = this.props.city.City;
        return(
            <table>
                <div class="head">
                    <thead>
                        <tr>
                            <td>
                                {City}, {State} 
                            </td>
                        </tr>
                    </thead>
                </div>
                <tbody>
                    <tr>
                        <td>
                            <ul>
                                <li>
                                    State: {State}
                                </li>
                                <li>
                                    Location: ({Lat}, {Long})
                                </li>
                                <li>
                                    Population (estimated): {Pop}
                                </li>
                                <li>
                                    Total Wages: {Wages}
                                </li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </table>
        )
    }
};

export default CityRow;