document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    let username = document.getElementById("username").value;
    let pass = document.getElementById("pass").value;
    let dob = document.getElementById("dob").value;
    let gender = document.querySelector('input[name="gt"]:checked').value;
    let loai = document.getElementById("loai").value;

    let result = "Chào mừng " + username + "\n";
    result += "Bạn là " + gender + "\n";
    result += "Mật khẩu của bạn có " + pass.length + " ký tự\n";
    if (dob) {
        let age = new Date().getFullYear() - new Date(dob).getFullYear();
        result += "Tuổi của bạn là " + age + "\n";
    }
    result += "Vấn đề quan tâm là " + loai + "\n";

    document.querySelector('textarea').value = result;
});
