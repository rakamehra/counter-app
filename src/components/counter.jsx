import React, { Component } from 'react';
class Counter extends Component {
    
    state={
        count : 1,
        imageUrl : 'https://picsum.photos/200',
        tags: ["tag1", "tag2", "tag3"]
     };

     styles = {
         fontSize:10,
         fontWeight: "bold"
     }

    //  constructor() {
    //      super();
    //      this.handleIncrement = this.handleIncrement.bind(this);
    //  }

     // arrow functions inherit 'this', non-arrow don't. We have to use bind for them.
     handleIncrement= () => {
         console.log('increment clicked ', this.state.count);
         this.setState({count: this.state.count + 1});  //needed to refresh components
      }

     renderTags() {
        if (this.state.tags.length === 0) return <p>No tags</p>;
          return <ul>{this.state.tags.map(xx =>
            <li key={xx}>{xx}</li>)} </ul>;
     }

    render() { 
    return (<div>
        {/* <img src={this.state.imageUrl} alt="" /> */}
        <span style={this.styles} className={this.getBadgeClasses()}>{this.formatCount()}</span>
        {/* <button  onClick={this.handleIncrement} style={{fontSize:15}} classname ="btn btn-secondary btn-sm">Increment</button> */}

        {/* passing values directly without helper method -------- */}
        <button  onClick= {() =>this.handleIncrement()} style={{fontSize:15}} classname ="btn btn-secondary btn-sm">Increment</button>

        {this.renderTags()}      
        </div> );
    }

    getBadgeClasses()  {
        let classes = "badge m-2 badge-";
        classes += this.state.count === 0 ? "warning" : "primary";
        return classes;

    }

    formatCount() {
        const { count } = this.state;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;