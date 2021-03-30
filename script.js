var startGame = document.getElementById('startGame');
startGame.onclick = function(){

  alert("Selamat datang di game Tebak Angka."); 

  //mulai game
  alert("Pada game ini kamu harus menebak angka yang akan dikocok komputer, setiap kombinasi memiliki kesempatan menebak yg berbeda-beda, Kombinasi terdiri dari 1 angka, 2 angka, 3 angka, dan 4 angka");

  //function rules
  function rules(kesempatan, jangkauan, nilai){
    alert(`Pada kombinasi ini kamu memiliki ${kesempatan} kesempatan menebak`);
    let com1 = Math.round (Math.random () * jangkauan);
      for(let i = kesempatan; i > 0; i--){
        let p1 = prompt(`masukan angka antara 0 - ${jangkauan - 1} \nKamu punya ${i} kesempatan`);
          if( p1 == com1 ){
            hasil = 'BENAR';
            alert(`Jawaban kamu ${hasil} \nAngka yang dicari komputer ${com1}`);
            alert(`Kamu mendapatkan skor ${i * nilai}`);
            break;
          }
          else if( p1 < com1 ){
            hasil = 'SALAH';
            alert(`Terlalu KECIL \nKesempatan kamu tinggal ${i - 1} kali`);
          }
          else if( p1 > com1 ){
            hasil = 'SALAH';
            alert(`Terlalu BESAR \nKesempatan kamu tinggal ${i - 1} kali`);
          }
          else{
            alert(`Kamu memasukan jawaban yang salah`);
          }
      }
      if( hasil === 'BENAR'){
        ulang = confirm('Lagi ?');
        return ulang;
      }
      else{
        alert(`kesempatan Kamu sudah HABIS \nAngka yang dicari komputer ${com1}`);
        alert(`Kamu mendapatkan skor 0`);
        ulang = confirm('Lagi ?');
        return ulang;
      }
  }
  
  let ulang = true;
  console.log(ulang);
  while(ulang){
    let kombinasi = prompt("Silahkan masukan jumlah kombinasi angka yang mau Kamu coba. \n(cukup masukan angkanya saja 1, 2, 3 atau 4)");
    if( kombinasi === "1" ){
      rules(3, 10, 33.3); //pemanggilan fungsi dengan beberapa argument
    }
    else if(kombinasi === '2'){
      rules(6, 100, 16.6); //pemanggilan fungsi dengan beberapa argument
    }
    else if(kombinasi === '3'){
      rules(9, 1000, 11.1); //pemanggilan fungsi dengan beberapa argument
    }
    else if(kombinasi === '4'){
      rules(12, 10000, 6.6); //pemanggilan fungsi dengan beberapa argument
    }
    else{
      alert("Kamu Memasukan jawaban yang salah");
    }
  }
  alert("Terima kasih Sudah Bermain");
}