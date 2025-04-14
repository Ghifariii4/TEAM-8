document.getElementById("registerForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const username = document.getElementById("username").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value;

    if (localStorage.getItem("user_" + email)) {
        alert("Akun dengan email ini sudah terdaftar. Silakan login.");
        return;
    }

    const user = { username, email, password };
    localStorage.setItem("user_" + email, JSON.stringify(user));
    alert("Pendaftaran berhasil! Silakan login.");
    window.location.href = "login.html";
});
