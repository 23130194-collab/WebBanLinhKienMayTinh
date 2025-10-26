// Xử lý đăng nhập
document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.getElementById("login-form");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();

            const email = document.getElementById("email").value.trim();
            const password = document.getElementById("password").value.trim();

            if (email !== "" && password !== "") {
                alert("Đăng nhập thành công!");
                window.location.href = "index.html"; // Chuyển đến trang chính
            } else {
                alert("Vui lòng nhập đầy đủ thông tin.");
            }
        });
    }
});