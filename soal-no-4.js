function purchaseDiscount(price) {
  let discount = 0;
  let totalPayment = 0;

  //   cek validasi angka atau bukan
  if (typeof price !== "number") {
    console.log("Data yang anda masukkan bukan angka");
  } else {
    // cek validasi angka dibawah nol(0) atau diatas nol (0)
    if (price < 0) {
      console.log("Angka yang anda masukkan kurang dari 0");
    } else {
      // jika input user benar maka jalankan kode dibawah ini
      if (price < 500000) {
        discount = price * 0;
        totalPayment = price - discount;
        console.log(
          `Jumlah pembelian sebesar = Rp ${price}\nDiscount = Rp ${discount} (Tidak mendapatkan diskon)\nJumlah yang harus dibayar = Rp ${totalPayment}`
        );
      } else if (price >= 500000 && price <= 1000000) {
        discount = price * 0.05;
        totalPayment = price - discount;
        console.log(
          `Jumlah pembelian sebesar = Rp ${price}\nDiscount = Rp ${discount} (Mendapatkan diskon 5%)\nJumlah yang harus dibayar = Rp ${totalPayment}`
        );
      } else {
        discount = price * 0.1;
        totalPayment = price - discount;
        console.log(
          `Jumlah pembelian sebesar = Rp ${price}\nDiscount = Rp ${discount} (Mendapatkan diskon 10%)\nJumlah yang harus dibayar = Rp ${totalPayment}`
        );
      }
    }
  }
}

purchaseDiscount(600000);
