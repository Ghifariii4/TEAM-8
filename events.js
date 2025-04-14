// Data event
const events = [
    {
      title: "Flush & Flash 2025",
      image: "image/Etive_studio.jpg",
      description:
        "Bersiaplah buat pengalaman photobooth yang paling absurd, lucu, dan viral tahun ini! Etive menghadirkan Flush & Flash 2025, event photobooth bertema toilet dengan nuansa high-concept dan full aesthetic.",
      kategori: "Photobooth"
    },
    {
      title: "Tap to Snap",
      image: "image/atm.png",
      description:
        "Kembalilah ke era ATM, tapi kali ini kamu bukan tarik tunai — kamu tarik perhatian! Di Tap to Snap, booth eksklusif bergaya mesin ATM ini akan mengabadikan pose terbaikmu secepat kamu menekan PIN.",
      kategori: "Photobooth"
    },
    {
      title: "Photomatics Going Up: Snap Edition",
      image: "image/elev.jpg",
      description:
        "Photomatics mengajak kamu masuk ke lift gaya. Di Going Up: Snap Edition, setiap detik seolah kamu naik ke lantai ekspresi yang berbeda.",
      kategori: "Eksperimental"
    },
    {
      title: "High Pose",
      image: "image/high.jpg",
      description:
        "Selamat datang di dimensi selfie dari atas. High Pose adalah event yang mengangkat pandangan dan gayamu lebih tinggi. Booth high-angle dari Selfie Time ini memadukan lighting dreamy.",
      kategori: "Selfie"
    },
    {
      title: "Hokkie Hour 2025",
      image: "image/Fotohokkie.jpg",
      description:
        "Horbox legendaris dari Fotohokkie kembali dengan event spesial: Hokkie Hour 2025!",
      kategori: "Cosplay"
    },
  ];
  

  const eventList = document.getElementById("event-list");
  const modalTitle = document.getElementById("modalEventTitle");
  const modalImage = document.getElementById("modalEventImage");
  const modalDesc = document.getElementById("modalEventDesc");
  const filterSelect = document.getElementById("filterKategori");
  
  // ini buat render filter event
  function renderEvents(filter = "all") {
    eventList.innerHTML = "";
  
    // ini Filter event jika filter tidak "all"
    const filteredEvents = filter === "all" ? events : events.filter(event => event.kategori === filter);
  
    // Jika tidak ada event (kosong)
    if (filteredEvents.length === 0) {
      eventList.innerHTML = "<p class='text-white'>Tidak ada event untuk kategori ini.</p>";
      return;
    }
  
    // Buat card untuk setiap event
    filteredEvents.forEach((event, index) => {
      const card = document.createElement("div");
      card.className = "col-md-4 mb-4";
      card.innerHTML = `
        <div class="event-card">
          <div class="badge">Baru</div>
          <img src="${event.image}" alt="${event.title}">
          <div class="content">
            <div class="title">${event.title}</div>
            <div class="desc">${event.description.substring(0, 80)}...</div>
            <div class="actions">
              <button class="btn btn-details" onclick="showDetail(${index})" data-bs-toggle="modal" data-bs-target="#eventModal">
                Lihat Detail
              </button>
            </div>
          </div>
        </div>
      `;
      eventList.appendChild(card);
    });
  }
  
  // Event listener untuk filter kategori
  filterSelect.addEventListener("change", (e) => {
    renderEvents(e.target.value);
  });
  
  function showDetail(index) {
   
    const currentFilter = filterSelect.value;
    const currentEvents = currentFilter === "all" ? events : events.filter(event => event.kategori === currentFilter);
    const selectedEvent = currentEvents[index];
  
    modalTitle.textContent = selectedEvent.title;
    modalImage.src = selectedEvent.image;
    modalDesc.textContent = selectedEvent.description;
  }
  
  renderEvents();
  