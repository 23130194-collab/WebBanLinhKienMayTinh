const forgotForm = document.getElementById("forgot-password-form");
if (forgotForm) {
    forgotForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const email = document.getElementById("forgot-email").value;
        alert(`Hướng dẫn đặt lại mật khẩu đã được gửi đến ${email}`);
    });
}
