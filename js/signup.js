const signupForm = document.getElementById("signup-form");
if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();

        const pass = document.getElementById("password-signup").value;
        const confirm = document.getElementById("confirm-password").value;

        if (pass !== confirm) {
            alert("Mật khẩu không trùng khớp!");
        } else {
            alert("Đăng ký thành công!");
            window.location.href = "login.html";
        }
    });
}