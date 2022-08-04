

let vektor1 = document.getElementById("lampu-1")
let vektor2 = document.getElementById("lampu-2")
let vektor3 = document.getElementById("lampu-3")
let vektor4 = document.getElementById("lampu-4")
let vektor5 = document.getElementById("lampu-5")

let button = 5;

const data = {
    btn1: false,
    btn2: false,
    btn3: false,
    btn4: false,
    btn5: false,
}

for (let i = 1; i < button + 1; i++) {
    let btn = document.getElementById("btn-" + i);
    btn.addEventListener("click", (e) => {
        switch(i) {
            case 1:
                if (data.btn1 == false) {
                    vektor1.attributes.src.nodeValue = "./src/lampu_vektor_kuning.png"
                    btn.classList.toggle('btn-s', true)
                    data.btn1 = true;
                } else {
                    vektor1.attributes.src.nodeValue = "./src/lampu_vektor_hitam.png"
                    btn.classList.toggle('btn-s', false)
                    data.btn1 = false;
                }
                break;
            case 2:
                if (data.btn2 == false) {
                    vektor2.attributes.src.nodeValue = "./src/lampu_vektor_kuning.png"
                    btn.classList.toggle('btn-s', true)
                    data.btn2 = true;
                } else {
                    vektor2.attributes.src.nodeValue = "./src/lampu_vektor_hitam.png"
                    btn.classList.toggle('btn-s', false)
                    data.btn2 = false;
                }
                break;
            case 3:
                if (data.btn3 == false) {
                    vektor3.attributes.src.nodeValue = "./src/lampu_vektor_kuning.png"
                    btn.classList.toggle('btn-s', true)
                    data.btn3 = true;
                } else {
                    vektor3.attributes.src.nodeValue = "./src/lampu_vektor_hitam.png"
                    btn.classList.toggle('btn-s', false)
                    data.btn3 = false;
                }
                break;
            case 4:
                if (data.btn4 == false) {
                    vektor4.attributes.src.nodeValue = "./src/lampu_vektor_kuning.png"
                    btn.classList.toggle('btn-s', true)
                    data.btn4 = true;
                } else {
                    vektor4.attributes.src.nodeValue = "./src/lampu_vektor_hitam.png"
                    btn.classList.toggle('btn-s', false)
                    data.btn4 = false;
                }
                break;
            case 5:
                if (data.btn5 == false) {
                    vektor5.attributes.src.nodeValue = "./src/lampu_vektor_kuning.png"
                    btn.classList.toggle('btn-s', true)
                    data.btn5 = true;
                } else {
                    vektor5.attributes.src.nodeValue = "./src/lampu_vektor_hitam.png"
                    btn.classList.toggle('btn-s', false)
                    data.btn5 = false;
                }
                break;
        }
    })
}