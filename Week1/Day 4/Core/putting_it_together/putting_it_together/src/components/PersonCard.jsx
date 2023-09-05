import React, { Component } from 'react'

class PersonCard extends Component {
    constructor(props){
        super(props);
        this.state= {
            stateAge: this.props.people.age,
        };
    }
    addAge = () => {
        this.setState({stateAge : this.state.stateAge+1})
    }
    render() {

        return (


                    <div>
                        <h2>{this.props.people.first_name},{this.props.people.last_name}</h2>

                        <p>Age : {this.state.stateAge}</p>
                        <p>Hair Color : {this.props.people.hair_color}</p>
                       <button onClick={this.addAge}>Birthday Button for {this.props.people.first_name} {this.props.people.last_name} </button>
                
                    </div>


        )
    }
}

export default PersonCard 