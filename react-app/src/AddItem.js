import React, { Component } from 'react';

class AddItem extends Component { 
    constructor(props){
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(){
        const {onSubmit,name} = this.props
        onSubmit(name);
    }

    render() {
        const {name, price,onSubmit} = this.props;
      return (
        <div>
           <input placeholder='name'></input>
        </div>
      );
    }
  }

  export default AddItem;