import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counters : [
                {id:1, value:1}
                // {id:2, value:3},
                // {id:3, value:7},

            ]
          }
    }
    render() { 
        return ( <div>
          {this.state.counters.map(xyz => <Counter key={xyz.id} />)}
        </div> );
    }
}
 
export default Counters;