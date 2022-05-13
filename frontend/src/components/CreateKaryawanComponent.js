import React, { Component } from "react";
import KaryawanService from "../sevices/KaryawanService";

class CreateKaryawanComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: this.props.match.params.id,
            nama: '',
            umur: '',
            alamat: '',
            jabatan: ''
        }
        this.changeNamaHandler = this.changeNamaHandler.bind(this);
        this.changeUmurHandler = this.changeUmurHandler.bind(this);
        this.changeAlamatHandler = this.changeAlamatHandler.bind(this);
        this.changeJabatanHandler = this.changeJabatanHandler.bind(this);
    }

    componentDidMount() {
        if (this.state.id === '_add') {
            return
        } else {
            KaryawanService.getKaryawanById(this.state.id).then((res) => {
                let Karyawan = res.data.data;
                console.log(JSON.stringify(Karyawan));
                this.setState({
                    nama: Karyawan[0].karyawan_nama,
                    umur: Karyawan[0].karyawan_umur,
                    alamat: Karyawan[0].karyawan_alamat,
                    jabatan: Karyawan[0].karyawan_jabatan
                });
            });
        }
    }

    saveOrUpdateKaryawan = (e) => {
        e.preventDefault();
        let Karyawan = {
            nama: this.state.nama,
            umur: this.state.umur,
            alamat: this.state.alamat,
            jabatan: this.state.jabatan
        }
        console.log('Karyawan => ' + JSON.stringify(Karyawan));

        if (this.state.id === '_add') {
            KaryawanService.createKaryawan(Karyawan).then(res=>{
                this.props.history.push('/karyawan');
                console.log(res);
            });
        } else {
            KaryawanService.updateKaryawan(Karyawan, this.state.id).then(res=>{
                this.props.history.push('/karyawan');
            });

        }
    }

    changeNamaHandler = (event) => {
        this.setState({ nama: event.target.value });
    }

    changeUmurHandler = (event) => {
        this.setState({ umur: event.target.value });
    }

    changeAlamatHandler = (event) => {
        this.setState({ alamat: event.target.value });
    }

    changeJabatanHandler = (event) => {
        this.setState({ jabatan: event.target.value });
    }

    cancel() {
        this.props.history.push('/karyawan');
    }

    getTitle() {
        if (this.state.id === "_add") {
            return <h3 className="text-center">Add Karyawan</h3>
        } else {
            return <h3 className="text-center">Update Karyawan</h3>
        }
    }

    render() {
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
                                    <label>Nama Karyawan</label>
                                    <input placeholder="Nama Karyawan" name="nama" className="form-control"
                                        value={this.state.nama} onChange={this.changeNamaHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Umur Karyawan</label>
                                    <input placeholder="Umur Karyawan" name="umur" className="form-control"
                                        value={this.state.umur} onChange={this.changeUmurHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Alamat Karyawan</label>
                                    <input placeholder="Alamat Karyawan" name="alamat" className="form-control"
                                        value={this.state.alamat} onChange={this.changeAlamatHandler} />
                                </div>
                                <div className="form-group">
                                    <label>Jabatan Karyawan</label>
                                    <input placeholder="Jabatan Karyawan" name="jabatan" className="form-control"
                                        value={this.state.jabatan} onChange={this.changeJabatanHandler} />
                                </div>
                                <br></br>
                                <button className="btn btn-success" onClick={this.saveOrUpdateKaryawan} >Simpan</button>
                                <button className="btn btn-danger" onClick={this.cancel.bind(this)}>Batal</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateKaryawanComponent