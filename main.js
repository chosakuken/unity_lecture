var intQuestion = /** @class */ (function () {
    function intQuestion(name, value) {
        this.name = name;
        this.value = value;
    }
    intQuestion.prototype.queText = function () {
        return insText(this.name, this.value);
    };
    intQuestion.prototype.ansText = function () {
        return "public int " + this.name + ";";
    };
    return intQuestion;
}());
var floatQuestion = /** @class */ (function () {
    function floatQuestion(name, value) {
        this.name = name;
        this.value = value;
    }
    floatQuestion.prototype.queText = function () {
        return insText(this.name, this.value);
    };
    floatQuestion.prototype.ansText = function () {
        return "public float " + this.name + ";";
    };
    return floatQuestion;
}());
var vecQuestion = /** @class */ (function () {
    function vecQuestion(name, x, y, z) {
        this.name = name;
        this.x = x;
        this.y = y;
        this.z = z;
    }
    vecQuestion.prototype.queText = function () {
        return this.name + this.x + this.y + this.z;
    };
    vecQuestion.prototype.ansText = function () {
        return "public Vector3 " + this.name + ";";
    };
    return vecQuestion;
}());
var objQuestion = /** @class */ (function () {
    function objQuestion(name, obj) {
        this.name = name;
        this.obj = obj;
    }
    objQuestion.prototype.queText = function () {
        return insText(this.name, this.obj);
    };
    objQuestion.prototype.ansText = function () {
        return "public GameObject " + this.name + ";";
    };
    return objQuestion;
}());
var rbQuestion = /** @class */ (function () {
    function rbQuestion(name, obj) {
        this.name = name;
        this.obj = obj;
    }
    rbQuestion.prototype.queText = function () {
        return this.name + this.obj;
    };
    rbQuestion.prototype.ansText = function () {
        return "public Rigidbody " + this.name + ";";
    };
    return rbQuestion;
}());
var scriptQuestion = /** @class */ (function () {
    function scriptQuestion(name, script) {
        this.name = name;
        this.script = script;
    }
    scriptQuestion.prototype.queText = function () {
        return this.name + this.script;
    };
    scriptQuestion.prototype.ansText = function () {
        return "public " + this.script + " " + this.name + ";";
    };
    return scriptQuestion;
}());
var inputField = document.getElementById('userInput');
var queField = document.getElementById('queText');
var hisField = document.getElementById('history');
var que;
var fadenum = 2000;
function insText(name, value) {
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return "<div class=\"field\"><div class=\"valname\">" + name + "</div><div class=\"valfield\">" + value + "</div></div>";
}
function createQue() {
    que = new intQuestion("count", Math.floor(10 * Math.random()));
    queField === null || queField === void 0 ? void 0 : queField.innerHTML = que.queText();
}
function checkCorrect(text) {
    if (text == que.ansText())
        return true;
    return false;
}
function pushHistory(text) {
    console.log("push");
    hisField === null || hisField === void 0 ? void 0 : hisField.innerHTML += "<h3>問題</h3>";
    hisField.innerHTML += que.queText();
    hisField === null || hisField === void 0 ? void 0 : hisField.innerHTML += "<h3>あなたの解答</h3>";
    hisField.innerHTML += "<p class=inHistory>" + text + "</p>";
    hisField === null || hisField === void 0 ? void 0 : hisField.innerHTML += "<h3>正答</h3>";
    hisField.innerHTML += "<p class=inHistory>" + que.ansText() + "</p>";
}
function showOverlay(isCorrect) {
    var overlay = document.getElementById("overlay");
    var resultText = document.getElementById("resultText");
    if (isCorrect) {
        resultText === null || resultText === void 0 ? void 0 : resultText.innerHTML = "<i class=\"fa-regular fa-circle fa-la\"></i> 正解！";
        resultText.style.color = "red";
    }
    else {
        resultText === null || resultText === void 0 ? void 0 : resultText.innerHTML = "<i class=\"fa-solid fa-xmark fa-la\"></i> 不正解...";
        resultText.style.color = "blue";
    }
    overlay.classList.add("show");
    setTimeout(function () {
        closeOverlay();
    }, fadenum);
}
function closeOverlay() {
    console.log("reach");
    var overlay = document.getElementById("overlay");
    overlay.classList.remove("show");
}
function checkAnswer() {
    pushHistory(inputField === null || inputField === void 0 ? void 0 : inputField.value);
    showOverlay(checkCorrect(inputField === null || inputField === void 0 ? void 0 : inputField.value));
    inputField === null || inputField === void 0 ? void 0 : inputField.value = "";
    createQue();
}
createQue();
