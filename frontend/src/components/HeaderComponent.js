import React,{Component} from "react";

class HeaderComponent extends Component{
    constructor(props){
        super(props)

        this.state={}
    }

    render(){
        return(
            <div className='container mt-5'>
                <header>
                    <nav className="navbar navbar-expand-md navbar-dark bg-dark">
                        <div><a href="./Karyawan" className="navbar-brand">Karyawan</a></div>
                        <div><a href="./Produk" className="navbar-brand">Produk</a></div>
                    </nav>
                </header>
            </div>
        )
    }
}

export default HeaderComponent