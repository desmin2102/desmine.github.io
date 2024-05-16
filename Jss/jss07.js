
var originalS1 = '';

document.getElementById("input").addEventListener("change", function() {
originalS1 = this.value;
});

function khoiphuc() {
var input = document.getElementById("input");
input.value = originalS1;
}


    function chuyenhoa() {
        
        let input = document.getElementById("input");
        let str = input.value.trim();
        let words = str.split(' ');
for (let i = 0; i < words.length; i++) {
    words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1).toLowerCase();
}
str = words.join(' ');
        input.value = str;
    }
    
    function daochuoi() {
let input = document.getElementById("input");
let words = input.value.split(' ');
let j = 0;
let word = input.value.split(' ');
for (let i = words.length - 1; i >= 0; i--) {
    word[j] = words[i];
    j++;
}
input.value = word.join(' ');
}
function thays2s3() {
let s1 = document.getElementById("input").value;
let s2 = document.getElementById("s2").value;
let s3 = document.getElementById("s3").value;
let s4 = new RegExp(s2, "gi");
s1 = s1.replace(s4, s3);
document.getElementById("input").value = s1;
}
function chen2in1() {
        let s1 = document.getElementById("input").value;
        let s2 = document.getElementById("s2").value;
        let pos = parseInt(document.getElementById("position").value);
        if (pos >= 0 && pos <= s1.length) {
            s1 = s1.slice(0, pos) + s2 + s1.slice(pos);
            document.getElementById("input").value = s1;
        } else {
            alert("Vị trí chèn không hợp lệ!");
        }
    }
function xoa() {
        let s1 = document.getElementById("input").value;
        let s2 = document.getElementById("s2").value;
        let s3 = new RegExp(s2, "gi");
        s1 = s1.replace(s3, "");
        document.getElementById("input").value = s1;
    }
