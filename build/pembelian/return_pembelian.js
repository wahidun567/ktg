function runningFormatter(value, row, index) {
        return index+1;
}

function actiondetailreturn(value){
        return '<div class="btn-group" role="group" aria-label="..."><a href="#" onclick="detailnyareturn(\''+value+'\')" type="button" class="btn btn-primary"><span aria-hidden="true"></span>Return</a></div>';
}

function detailnyareturn(id){
        var $pembayaran_hutang_table = $('#pembayaran_hutang_table');
        $pembayaran_hutang_table.bootstrapTable('refresh', {
            url: 'Return_pembelian/get_pembayaran_hutang_tampiloke/'+id
        });
        $('#detail_transaksioke'+mdl).modal('show');
}

function actiondetail(value, row, index){
        if(row.max_return==0){
            return '<div class="btn-group" role="group" aria-label="..."><a href="#" onclick="detailnya(\''+row.nama+'\', \''+row.nama_barang+'\', \''+row.qty+'\', \''+row.satuan+'\', \''+row.harga_pembelian+'\', \''+row.no_faktur_pembelian+'\',  \''+row.id_detail_pembelian+'\')" type="button" class="btn btn-primary" disabled><span aria-hidden="true"></span>Return Penjualan</a></div>';
        }else{
            var str = row.nama;
            var res = str.replace('"', '|');
            res = res.replace('"', '|');
            res = res.replace("'", ']');
            // var strsa = row.nama_salesman;
            // var resa = strsa.replace('"', '|');
            // resa = resa.replace('"', '|');
            // resa = resa.replace("'", ']');
            var strsah = row.nama_barang;
            var resah = strsah.replace('"', '|');
            resah = resah.replace('"', '|');
            resah = resah.replace("'", ']');

            return '<div class="btn-group" role="group" aria-label="..."><a href="#" onclick="detailnya(\''+res+'\', \''+resah+'\', \''+row.qty+'\', \''+row.satuan+'\', \''+row.harga_pembelian+'\', \''+row.no_faktur_pembelian+'\',\''+row.id_detail_pembelian+'\')" type="button" class="btn btn-primary"><span aria-hidden="true"></span>Return Penjualan</a></div>';
        }
    	
}

function detailnya(nama_cus, nama_barang, jumlah_barang, satuan, harga_pembelian, no_faktur_pembelian,id_detail_pembelian){
 		//console.log("id_detail_penjualan"+id_detail_penjualan);
        var str = nama_cus;
        var res = str.replace('|', '"');
        res = res.replace('|', '"');
        res = res.replace("]", "'");
        // var strsa = nama_sal;
        // var resa = strsa.replace('|', '"');
        // resa = resa.replace('|', '"');
        // resa = resa.replace("]", "'");
        var strsah = nama_barang;
        var resah = strsah.replace('|', '"');
        resah = resah.replace('|', '"');
        resah = resah.replace("]", "'");

        document.getElementById('id_detail_pembelian').value = id_detail_pembelian;
    	document.getElementById('nama_supplier').value = res;
       // document.getElementById('nama_salesman').value = resa;
        document.getElementById('nama_barang').value = resah;
      //  var pakai = jumlah_barang-max;
        document.getElementById('jumlah_barang').value = jumlah_barang;
     //   $('#jumlah_barang').attr('max',jumlah_barang);
        document.getElementById('satuan_barang').value = satuan;
        document.getElementById('harga_pembelian').value = harga_pembelian;
        document.getElementById('no_faktur_pembelian').value = no_faktur_pembelian;
        document.getElementById('pengembalian').value = jumlah_barang*harga_pembelian;
        if (jumlah_barang==null) {
            var t = '';
        }else{
            var t = '<strong><font color="red">*</font></strong>Maksimal jumlah return : '+jumlah_barang;
        }
        document.getElementById('max_jml').innerHTML = t;
    	$('#detail_transaksi'+mdl).modal('show');
 }

 function harga_otomatis(){
        var jumlah_barang = document.getElementById("jumlah_barang").value;
        var harga_barang = document.getElementById("harga_pembelian").value;
        var simpan = parseInt(jumlah_barang)*parseInt(harga_barang);
        // document.getElementById('pengembalian').value = jumlah_barang*harga_barang;
        // $("#kembali").val(kembalian);
        console.log(simpan);
        document.getElementById('pengembalian').value = simpan;

} 