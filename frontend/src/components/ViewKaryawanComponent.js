import React, { Component } from "react";
import KaryawanService from "../sevices/KaryawanService";

class ViewKaryawanComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            nama: '',
            umur: '',
            alamat: '',
            jabatan: ''
        }
    }

    componentDidMount() {
        KaryawanService.getKaryawanById(this.state.id).then((res) => {
            let Karyawan = res.data.data;
            this.setState({
                nama: Karyawan[0].karyawan_nama,
                umur: Karyawan[0].karyawan_umur,
                alamat: Karyawan[0].karyawan_alamat,
                jabatan: Karyawan[0].karyawan_jabatan
            });
        });
    }



cancel(){
    this.props.history.push('/karyawan');
}

getTitle(){
        return <h3 className="text-center">View Karyawan</h3>
}

render(){
    return (
        <div>
            <br></br>
            <div className="container">
                <div className="row">
                    <div className="card col-md-6 offset-md-3 offset-md-3">
                        {this.getTitle()}
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label>Nama Karyawan : {this.state.nama}</label>
                            </div>
                            <div className="form-group">
                                <label>Umur Karyawan : {this.state.umur}</label>
                            </div>
                            <div className="form-group">
                                <label>Alamat Karyawan : {this.state.alamat}</label>
                            </div>
                            <div className="form-group">
                                <label>Jabatan Karyawan : {this.state.jabatan}</label>
                            </div>
                            <br></br>
                            <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Batal</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
}

export default ViewKaryawanComponent