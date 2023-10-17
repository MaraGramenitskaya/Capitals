function start() {
    with (document) {
        let l1 = String(getElementById("left1").value);
        let l2 = String(getElementById("left2").value);
        let l3 = String(getElementById("left3").value);
        let l4 = String(getElementById("left4").value);
        let l5 = String(getElementById("left5").value);
        let l6 = String(getElementById("left6").value);
        let r1 = String(getElementById("right1").value);
        let r2 = String(getElementById("right2").value);
        let r3 = String(getElementById("right3").value);
        let r4 = String(getElementById("right4").value);
        let r5 = String(getElementById("right5").value);
        let r6 = String(getElementById("right6").value);
        let result = 0;
        let quality;



        if (l1 == "Ереван") {
            result += 2
            document.getElementById("left1").style.color = "#769983"
        } else {
            document.getElementById("left1").style.color = "#4d1218"
        }

        if (l2 == "Ханой") {
            result += 2
            document.getElementById("left2").style.color = "#769983"
        } else {
            document.getElementById("left2").style.color = "#4d1218"
        }

        if (l3 == "Токио") {
            result += 2
            document.getElementById("left3").style.color = "#769983"
        } else {
            document.getElementById("left3").style.color = "#4d1218"
        }

        if (l4 == "Пекин") {
            result += 2
            document.getElementById("left4").style.color = "#769983"
        } else {
            document.getElementById("left4").style.color = "#4d1218"
        }

        if (l5 == "Сеул") {
            result += 2
            document.getElementById("left5").style.color = "#769983"
        } else {
            document.getElementById("left5").style.color = "#4d1218"
        }

        if (l6 == "Исламабад") {
            result += 2
            document.getElementById("left6").style.color = "#769983"
        } else {
            document.getElementById("left6").style.color = "#4d1218"
        }

        if (r1 == "Нью-Дели") {
            result += 2
            document.getElementById("right1").style.color = "#769983"
        } else {
            document.getElementById("right1").style.color = "#4d1218"
        }

        if (r2 == "Джакарта") {
            result += 2
            document.getElementById("right2").style.color = "#769983"
        } else {
            document.getElementById("right2").style.color = "#4d1218"
        }

        if (r3 == "Бангкок") {
            result += 2
            document.getElementById("right3").style.color = "#769983"
        } else {
            document.getElementById("right3").style.color = "#4d1218"
        }

        if (r4 == "Тхимпху") {
            result += 2
            document.getElementById("right4").style.color = "#769983"
        } else {
            document.getElementById("right4").style.color = "#4d1218"
        }

        if (r5 == "Пхеньян") {
            result += 2
            document.getElementById("right5").style.color = "#769983"
        } else {
            document.getElementById("right5").style.color = "#4d1218"
        }

        if (r6 == "Манила") {
            result += 2
            document.getElementById("right6").style.color = "#769983"
        } else {
            document.getElementById("right6").style.color = "#4d1218"
        }



        if (result <= 4) {
            quality = "Тролль"
            document.getElementById("score").style.color = "#4d1218"
            document.getElementById("answer").style.color = "#4d1218"
        } else if (result > 4 && result <= 8) {
            quality = "Отвратительно"
            document.getElementById("score").style.color = "#4d1218"
            document.getElementById("answer").style.color = "#4d1218"
        } else if (result > 8 && result <= 12) {
            quality = "Слабо"
            document.getElementById("score").style.color = "#4d1218"
            document.getElementById("answer").style.color = "#4d1218"
        } else if (result > 12 && result <= 16) {
            quality = "Удовлетворительно"
            document.getElementById("score").style.color = "#455b6b"
            document.getElementById("answer").style.color = "#455b6b"
        } else if (result > 16 && result <= 20) {
            quality = "Выше Ожидаемого"
            document.getElementById("score").style.color = "#455b6b"
            document.getElementById("answer").style.color = "#455b6b"
        } else if (result > 20 && result <= 24) {
            quality = "Превосходно"
            document.getElementById("score").style.color = "#455b6b"
            document.getElementById("answer").style.color = "#455b6b"
        }

        document.getElementById("score").innerHTML = result
        document.getElementById("answer").innerHTML = quality


    }

}