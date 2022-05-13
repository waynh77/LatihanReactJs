import React, { Component } from "react";
import KaryawanService from '../sevices/KaryawanService';
// import {useNavigate} from 'react-dom';

// const history=useNavigate();

class ListKaryawanComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            Karyawans: [],
        }
        this.addKaryawan = this.addKaryawan.bind(this);
        this.editKaryawan = this.editKaryawan.bind(this);
        this.deleteKaryawan = this.deleteKaryawan.bind(this);
        this.viewKaryawan = this.viewKaryawan.bind(this);

    }

    componentDidMount() {
        KaryawanService.getKaryawan().then((res) => {
            this.setState({ Karyawans: res.data.data });
        })
    }

    addKaryawan() {
        // history('/add-Karyawan/_add');
        this.props.history.push('/add-Karyawan/_add');
    }

    editKaryawan(id) {
        this.props.history.push(`/add-Karyawan/${id}`);
    }

    deleteKaryawan(id) {
        let data = {
            id: id
        }
        KaryawanService.deleteKaryawan(data).then(res => {
            this.setState({ Karyawans: this.state.Karyawans.filter(Karyawan => Karyawan.karyawan_id !== id) });
        });
    }

    viewKaryawan(id) {
        this.props.history.push(`/view-Karyawan/${id}`);
    }

    render() {
        return (
            <div>
                <h2 className="text-center">Master Karyawan</h2>
                <button className="btn btn-primary" onClick={this.addKaryawan}>Add Karyawan</button>
                <br></br>
                <div className="row">
                    <table className="table table-striped table-bordered">
                        <thead>
                            <tr>
                                <th>Nama</th>
                                <th>Umur</th>
                                <th>Alamat</th>
                                <th>Jabatan</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.Karyawans.map(
                                    karyawan =>
                                        <tr key={karyawan.karyawan_id}>
                                            <td>{karyawan.karyawan_nama}</td>
                                            <td>{karyawan.karyawan_umur}</td>
                                            <td>{karyawan.karyawan_alamat}</td>
                                            <td>{karyawan.karyawan_jabatan}</td>
                                            <td>
                                                <button onClick={() => this.editKaryawan(karyawan.karyawan_id)}
                                                    className='btn btn-info'>Edit</button>
                                                <button style={{ marginleft: "10px" }}
                                                    onClick={() => this.deleteKaryawan(karyawan.karyawan_id)}
                                                    className='btn btn-danger'>Delete</button>
                                                <button style={{ marginleft: "10px" }} onClick={() =>
                                                    this.viewKaryawan(karyawan.karyawan_id)}
                                                    className='btn btn-secondary'>View</button>
                                            </td>
                                        </tr>
                                )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}

export default ListKaryawanComponent