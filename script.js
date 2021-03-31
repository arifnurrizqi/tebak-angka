var startGame = document.getElementById('startGame');
startGame.onclick = function(){

  alert("Selamat datang di game Tebak Angka."); 

  //mulai game
  alert("Pada game ini kamu harus menebak angka yang akan dikocok komputer, setiap kombinasi memiliki kesempatan menebak yg berbeda-beda, Kombinasi terdiri dari 1 angka, 2 angka, 3 angka, dan 4 angka");
  let ulang = true;
  while(ulang){
    let kombinasi = prompt("Silahkan masukan jumlah kombinasi angka yang mau Kamu coba. \n(cukup masukan angkanya saja 1, 2, 3 atau 4)");
    var hasil = '';
    if( kombinasi === "1" ){
      alert("Pada kombinasi ini kamu memiliki 3 kesempatan menebak");
      let com1 = Math.round (Math.random () * 10);
        for(let i = 3; i > 0; i--){
          let p1 = prompt(`masukan angka antara 0 - 10 \nKamu punya ${i} kesempatan`);
          
            if( p1 == com1 ){
              hasil = 'BENAR';
              alert(`Jawaban kamu ${hasil} \nAngka yang dicari komputer ${com1}`);
              alert(`Kamu mendapatkan skor ${i * 33.3}`);
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
        }
        else{
          alert(`kesempatan Kamu sudah HABIS \nAngka yang dicari komputer ${com1}`);
          alert(`Kamu mendapatkan skor 0`);
          ulang = confirm('Lagi ?');
        }
    }
    else if(kombinasi === '2'){
      alert("Pada kombinasi ini kamu memiliki 6 kesempatan menebak");
      let com1 = Math.round (Math.random () * 100);
        for(let i = 6; i > 0; i--){
          let p1 = prompt(`masukan angka antara 0 - 100 \nKamu punya ${i} kesempatan`);
          
            if( p1 == com1 ){
              hasil = 'BENAR';
              alert(`Jawaban kamu ${hasil} \nAngka yang dicari komputer ${com1}`);
              alert(`Kamu mendapatkan skor ${i * 16.6}`);
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
        }
        else{
          alert(`kesempatan Kamu sudah HABIS \nAngka yang dicari komputer ${com1}`);
          alert(`Kamu mendapatkan skor 0`);
          ulang = confirm('Lagi ?');
        }
    }
    else if(kombinasi === '3'){
    alert("Pada kombinasi ini kamu memiliki 9 kesempatan menebak");
      let com1 = Math.round (Math.random () * 1000);

        for(let i = 9; i > 0; i--){
          let p1 = prompt(`masukan angka antara 0 - 1000 \nKamu punya ${i} kesempatan`);
          
            if( p1 == com1 ){
              hasil = 'BENAR';
              alert(`Jawaban kamu ${hasil} \nAngka yang dicari komputer ${com1}`);
              alert(`Kamu mendapatkan skor ${i * 11.1}`);
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
        }
        else{
          alert(`kesempatan Kamu sudah HABIS \nAngka yang dicari komputer ${com1}`);
          alert(`Kamu mendapatkan skor 0`);
          ulang = confirm('Lagi ?');
        }
    }
    else if(kombinasi === '4'){
      alert("Pada kombinasi ini kamu memiliki 12 kesempatan menebak");
        let com1 = Math.round (Math.random () * 10000);
    
          for(let i = 12; i > 0; i--){
            let p1 = prompt(`masukan angka antara 0 - 9999 \nKamu punya ${i} kesempatan`);
            
              if( p1 == com1 ){
                hasil = 'BENAR';
                alert(`Jawaban kamu ${hasil} \nAngka yang dicari komputer ${com1}`);
                alert(`Kamu mendapatkan skor ${i * 8.3}`);
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
          }
          else{
            alert(`kesempatan Kamu sudah HABIS \nAngka yang dicari komputer ${com1}`);
            alert(`Kamu mendapatkan skor 0`);
            ulang = confirm('Lagi ?');
          }
      }
    else{
      alert("Kamu Memasukan jawaban yang salah");
    }
  }
  alert("Terima kasih Sudah Bermain");
}
