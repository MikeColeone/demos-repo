import React, {Component} from "react";

class Count extends Component{
    constructor(props:any){
        super(props);
        this.state = {count: 0}
        this.onclickButton = this.onclickButton.bind(this);

    }
    onclickButton(){
        this.setState({count: this.state.count + 1})
    }


    render(): React.ReactNode {
        return (
            <div>
                <button onClick={this.onclickButton}>
                    onClickMe
                </button>
                Click count : {this.state.count}
            </div>
        )
    }

    
}
export default Count;