document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();

    const phone = document.getElementById("phone").value;
    const message = document.getElementById("message").value;

    if (!phone || !message) {
        alert("Harap isi nomor telepon dan pesan terlebih dahulu.");
        return;
    }


    setTimeout(() => {
        const popup = document.createElement("div");
        popup.textContent = "Pesan berhasil dikirim!";
        popup.style.position = "fixed";
        popup.style.top = "20px";
        popup.style.right = "20px";
        popup.style.backgroundColor = "rgba(0, 255, 0, 0.7)";
        popup.style.color = "#fff";
        popup.style.padding = "15px 25px";
        popup.style.borderRadius = "8px";
        popup.style.fontWeight = "bold";
        popup.style.zIndex = 9999;
        document.body.appendChild(popup);

        
        setTimeout(() => popup.remove(), 3000);

        
        document.querySelector("form").reset();
    }, 500); 
});
