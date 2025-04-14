document.getElementById("loginForm").addEventListener("submit", function(e) {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const storedUser = localStorage.getItem("user_" + email);
    if (storedUser) {
      const user = JSON.parse(storedUser);
      if (user.password === password) {
        localStorage.setItem("currentUser", email);
        alert("Login berhasil!");
        window.location.href = "events.html";
      } else {
        alert("Kata sandi salah.");
      }
    } else {
      alert("Akun tidak ditemukan.");
    }
  });