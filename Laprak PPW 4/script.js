// Variabel
let nama = "John Doe";
let umur = 25;
let sudahMenikah = false;

// Operator
let hasilTambah = umur + 5;
let hasilPerkalian = umur * 2;

// Tampilkan di Halaman
document.getElementById("demo").innerHTML = `Nama: ${nama}, Umur: ${umur}, Sudah Menikah: ${sudahMenikah}`;
console.log("Hasil Tambah: ", hasilTambah);
console.log("Hasil Perkalian: ", hasilPerkalian);

// Kondisional
if (umur >= 18) {
    console.log(`${nama} sudah dewasa.`);
} else {
    console.log(`${nama} belum dewasa.`);
}

// Loop
for (let i = 1; i <= 5; i++) {
    console.log(`Perulangan ke-${i}`);
}

// Fungsi
function hitungLuasPersegi(sisi) {
    return sisi * sisi;
}

let sisi = 4;
let luas = hitungLuasPersegi(sisi);
console.log(`Luas persegi dengan sisi ${sisi} adalah ${luas}`);

// Manipulasi DOM dan Event Handling
document.getElementById("myButton").addEventListener("click", function() {
    document.getElementById("message").innerHTML = "Tombol telah diklik!";
    document.body.style.backgroundColor = "#f0f8ff";
});