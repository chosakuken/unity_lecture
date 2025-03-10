//Abstarct Factory を使用
// 質問のクラス
interface Question {
    queText() : string;
    ansText() : string;
}

class intQuestion implements Question {
    constructor(
        protected name : string,
        protected value : number
    ) {
        
    }
    queText() : string {
        return insText(this.name, this.value as string);
    }
    ansText() : string {
        return "public int " + this.name + ";"
    }
}

class floatQuestion implements Question {
    constructor(
        protected name : string,
        protected value : number
    ) {
        
    }
    queText() : string {
        return insText(this.name, this.value as string);
    }
    ansText() : string {
        return "public float " + this.name + ";"
    }
}

class vecQuestion implements Question {
    constructor(
        protected name : string,
        protected x : number,
        protected y : number,
        protected z : number
    ) {
        
    }
    queText() : string {
        return this.name + this.x + this.y + this.z;
    }
    ansText() : string {
        return "public Vector3 " + this.name + ";"
    }
}

class objQuestion implements Question {
    constructor(
        protected name : string,
        protected obj : string
    ) {
        
    }
    queText() : string {
        return insText(this.name, this.obj);
    }
    ansText() : string {
        return "public GameObject " + this.name + ";"
    }
}

class rbQuestion implements Question {
    constructor(
        protected name : string,
        protected obj : string
    ) {
        
    }
    queText() : string {
        return this.name + this.obj;
    }
    ansText() : string {
        return "public Rigidbody " + this.name + ";"
    }
}

class scriptQuestion implements Question {
    constructor(
        protected name : string,
        protected script : string
    ) {
        
    }
    queText() : string {
        return this.name + this.script;
    }
    ansText() : string {
        return "public " + this.script + " " + this.name + ";"
    }
}

let inputField = document.getElementById('userInput');
let queField = document.getElementById('queText');
let hisField = document.getElementById('history');
let que : Question;
let fadenum : number = 2000;

function insText(name: string, value: string) :string 
{
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return "<div class=\"field\"><div class=\"valname\">"+ name + "</div><div class=\"valfield\">" + value + "</div></div>";
}

function createQue() : void
{
    que = new intQuestion("count", Math.floor(10 * Math.random()));
    queField?.innerHTML = que.queText();
}

function checkCorrect(text :string) : boolean
{
    if(text == que.ansText()) return true;
    return false;
}

function pushHistory(text : string) : void
{
    hisField?.innerHTML += "<h3>問題</h3>"
    hisField.innerHTML += que.queText();
    hisField?.innerHTML += "<h3>あなたの解答</h3>"
    hisField.innerHTML += "<p class=inHistory>" + text + "</p>";
    hisField?.innerHTML += "<h3>正答</h3>"
    hisField.innerHTML += "<p class=inHistory>" + que.ansText() + "</p>";
}

function showOverlay(isCorrect : boolean) : void
{
    let overlay = document.getElementById("overlay");
    let resultText = document.getElementById("resultText");

    if (isCorrect) {
        resultText?.innerHTML = "<i class=\"fa-regular fa-circle fa-la\"></i> 正解！";
        resultText.style.color = "red";
    } else {
        resultText?.innerHTML = "<i class=\"fa-solid fa-xmark fa-la\"></i> 不正解...";
        resultText.style.color = "blue";
    }

    overlay.classList.add("show");
    setTimeout(function() {
        closeOverlay();
    }, fadenum);
}

function closeOverlay() :void
{
    let overlay = document.getElementById("overlay");
    overlay.classList.remove("show");
}

function checkAnswer() : void
{
    pushHistory(inputField?.value);
    showOverlay(checkCorrect(inputField?.value));
    inputField?.value = "";
    createQue();
}

createQue();