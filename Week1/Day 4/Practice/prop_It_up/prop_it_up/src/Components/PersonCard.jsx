import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props){
        super(props)
    }
    render() {
        
        return (
                
            
                    <div>
                        <h2>{this.props.people.first_name},{this.props.people.last_name}</h2>
                        
                        <p>Age : {this.props.people.age}</p>
                        <p>Hair Color : {this.props.people.hair_color}</p>
                    </div>
                
          
        )
    }
}

export default PersonCard 