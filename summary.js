const email = localStorage.getItem("currentUser");
        const container = document.getElementById("historyContainer");
      
        if (!email) {
          alert("Silakan login terlebih dahulu!");
          window.location.href = "login.html";
        } else {
          const dataUser = JSON.parse(localStorage.getItem(`registrations_${email}`)) || [];
      
          if (dataUser.length === 0) {
            container.innerHTML = "<p class='text-warning'>Belum ada riwayat pendaftaran.</p>";
          } else {
            let html = "<ul class='list-group'>";
            dataUser.forEach((d, i) => {
              html += `
                <li class="list-group-item bg-secondary text-white mb-2">
                  <strong>Event:</strong> ${d.event}<br>
                  <strong>Nama:</strong> ${d.nama}<br>
                  <strong>Email:</strong> ${d.email}<br>
                  <strong>Jumlah Tiket:</strong> ${d.jumlah}<br>
                  <strong>Total Harga:</strong> Rp ${d.totalHarga.toLocaleString("id-ID")}<br>
                  <strong>Tanggal Daftar:</strong> ${d.waktu}
                </li>`;
            });
            html += "</ul>";
            container.innerHTML = html;
          }
        }
      
        function hapusRiwayat() {
          if (confirm("Yakin ingin menghapus semua riwayat Anda?")) {
            localStorage.removeItem(`registrations_${email}`);
            location.reload();
          }
        }