import React from 'react'

const withCounter = (WrappedComponent,incrementValue) => {//Receives OriginalComponent as param and returns updated NewComponent
    class WithCounter extends React.Component {//New Component
        constructor(props) {
            super(props)
            this.state = {
                count : 0
            }
        }
        incrementCount=()=>{
            this.setState(prevState=>{
               return {
                   count: prevState.count+ incrementValue
                }
            })
        }
        render(){
            console.log(this.props.name)
            // Updates Original component
            return (
                // Components name must start with Caps only
                <WrappedComponent count={this.state.count} 
                    incrementCount={this.incrementCount} 
                    {...this.props} 
                />
            )
        }   
    }
    return WithCounter
}
export default withCounter