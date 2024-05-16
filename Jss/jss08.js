function thongke() {
    let input = document.getElementById("input").value;
    let words = input.split(' ').length;
    let chars = input.length;
    let counts = {};
    for (let i = 0; i < input.length; i++) {
        let char = input[i].toUpperCase();
        if (char.match(/[a-zA-Z0-9]/)) {
            counts[char] = (counts[char] || 0) + 1;
        }
    }

    let result = "<p>Số từ: " + words + "</p>";
    result += "<p>Số ký tự (chữ và số): " + chars + "</p>";
    result += "<p>Số lần xuất hiện mỗi ký tự:</p>";
    for (let char in counts) {
        result += "Character" +" '" +char +"'" + ": " + counts[char] + "<br>";
    }

    document.getElementById("result").innerHTML = result;
}
function tang()
{
    let newb = document.getElementById("result").innerHTML;
}