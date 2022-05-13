import React,{Component} from "react";

class FooterComponent extends Component{
    constructor(props){
        super(props)

        this.state={}
    }

    render(){
        return(
            <div className='container mt-5'>
                <footer className="footer">
                    <span className="text-muted">BootCamp - ReactJs</span>
                </footer>
            </div>
        )
    }
}

export default FooterComponent