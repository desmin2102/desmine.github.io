let arr = [];
function taomang() {
    let n = parseInt(document.getElementById("n").value);
    for (let i = 0; i < n; i++) {
        arr.push(Math.floor(Math.random() * 50));
    }

    let result = "<p>Mảng được tạo: ";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]+ " " ;
    }
    document.getElementById("result").innerHTML = result;
}
function sapxepTang() {
    arr.sort(function(a, b) { return a - b; });

    let result = "<p>Mảng được sắp xếp theo thứ tự tăng dần: ";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]+ " " ;
    }
    document.getElementById("result2").innerHTML = result;
}

function sapxepGiam() {
    arr.reverse();

    let result = "<p>Mảng được sắp xếp theo thứ tự giảm dần: ";
    for (let i = 0; i < arr.length; i++) {
        result += arr[i]+ " " ;
    }
    document.getElementById("result3").innerHTML = result;
}
