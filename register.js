// Harga per tiket
const hargaPerTiket = 75000;

// BUat ngambil data di form event
const namaInput = document.getElementById("nama");
const emailInput = document.getElementById("email");
const eventSelect = document.getElementById("event");
const jumlahInput = document.getElementById("jumlah");
const totalHargaInput = document.getElementById("totalHarga");
const submitBtn = document.getElementById("submitBtn");

// Ngitung harga otomatis
jumlahInput.addEventListener("input", updateTotal);
eventSelect.addEventListener("change", updateTotal);

function updateTotal() {
  const jumlah = parseInt(jumlahInput.value || 0);
  const total = jumlah * hargaPerTiket;
  totalHargaInput.value = `Rp ${total.toLocaleString("id-ID")}`;
}

// Buat validasi pendaftaran event
submitBtn.addEventListener("click", function (e) {
  e.preventDefault();

  // buat cek udah login atau blm
  const loggedInEmail = localStorage.getItem("currentUser");
  if (!loggedInEmail) {
    alert("Silakan buat akun terlebih dahulu sebelum mendaftar.");
    return;
  }

  // buat validasi input
  const nama = namaInput.value.trim();
  const email = emailInput.value.trim();
  const event = eventSelect.value.trim();
  const jumlah = jumlahInput.value.trim();

  if (!nama || !email || !event || !jumlah) {
    alert("Harap isi semua field!");
    return;
  }

  // buat validasi email user yang login
  if (email !== loggedInEmail) {
    alert("Email tidak cocok dengan akun yang login.");
    return;
  }

  // hasil akhir pendaftaran
  const jumlahTiket = parseInt(jumlah);
  const totalHarga = jumlahTiket * hargaPerTiket;
  const pendaftaran = {
    nama,
    email,
    event,
    jumlah: jumlahTiket,
    totalHarga,
    waktu: new Date().toLocaleString("id-ID")
  };

  // buat push ke localstorage tapi sesuai email
  const existing = JSON.parse(localStorage.getItem(`registrations_${email}`)) || [];
  existing.push(pendaftaran);
  localStorage.setItem(`registrations_${email}`, JSON.stringify(existing));

  alert("Pendaftaran berhasil!");
  window.location.href = "summary.html";
});
