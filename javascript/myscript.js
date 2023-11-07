function tambah() {
    var bil1 = document.getElementById("bil1");
    var bil2 = document.getElementById("bil2");
    var hasil = document.getElementById("hasil");

    hasil.innerHTML = parseInt(bil1.value) + parseInt(bil2.value); //pake parseint karna kalau ga di convert, si javascript bacanya String bukan Integer (khusus tambah)
}

function kali() {
    var bil1 = document.getElementById("bil1");
    var bil2 = document.getElementById("bil2");
    var hasil = document.getElementById("hasil");

    hasil.innerHTML = bil1.value * bil2.value;
}