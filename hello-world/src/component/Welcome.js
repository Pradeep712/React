import React, {Component} from 'react';
//Statefull Props
class Welcome extends Component {
    render() {
        this.props.heroName = 'pradeep';
    return <h1>Welcome {this.props.name} # {this.props.heroName}</h1>;
    }
}
export default Welcome