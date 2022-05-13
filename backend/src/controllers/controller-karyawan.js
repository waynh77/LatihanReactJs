const config=require('../configs/database');
const mysql =require('mysql');
const pool=mysql.createPool(config);

pool.on('error',(err)=>{
    console.log(err);
});

module.exports={
    getDataKaryawan(req,res){
        pool.getConnection(function(err,connection){
            if(err){
                throw err;
            }
            connection.query(
                'select * from tabel_karyawan'
            ,function(error,result){
                if(error)throw error;
                res.send({
                    success:true,
                    message:'Berhasil ambil data',
                    data:result
                });
            });
            connection.release();
        });
    },

    getDataKaryawanByID(req,res){
        let id=req.params.id;
        pool.getConnection(function(err,connection){
            if(err)throw err;
            connection.query(
                'select * from tabel_karyawan where karyawan_id=?;'
            ,[id],
            function(error,result){
                if(error)throw error;
                res.send({
                    success:true,
                    message:'Berhasil ambil data',
                    data:result
                });
            });
            connection.release();
        })
    },

    addDataKaryawan(req,res){
        let data={
            karyawan_nama:req.body.nama,
            karyawan_umur:req.body.umur,
            karyawan_alamat:req.body.alamat,
            karyawan_jabatan:req.body.jabatan,
        }
        pool.getConnection(function(err,connection){
            if(err)throw err;
            connection.query(
                'insert into tabel_karyawan set ?;'
                ,[data],
                function(error,result){
                    if(error)throw error;
                    res.send({
                        success:true,
                        message:'Berhasil tambah data',
                    });    
                });
            connection.release();
        })
    },

    editDataKaryawan(req,res){
        let id=req.body.id;
        let dataEdit={
            karyawan_nama:req.body.nama,
            karyawan_umur:req.body.umur,
            karyawan_alamat:req.body.alamat,
            karyawan_jabatan:req.body.jabatan,
        }
        pool.getConnection(function(err,connection){
            if(err)throw err;
            connection.query(
                'update tabel_karyawan set ? where karyawan_id=?;'
                ,[dataEdit,id],
                function(error,result){
                    if(error)throw error;
                    res.send({
                        success:true,
                        message:'Berhasil edit data',
                    });    
                });
            connection.release();
        })
    },

    deleteDataKaryawan(req,res){
        let id=req.body.id
        pool.getConnection(function(err,connection){
            if(err)throw err;
            connection.query(
                'delete from tabel_karyawan where karyawan_id=?;'
                ,[id],
                function(error,result){
                    if(error)throw error;
                    res.send({
                        success:true,
                        message:'Berhasil hapus data',
                    });    
                });
            connection.release();
        })
    }
}