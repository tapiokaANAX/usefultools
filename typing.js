const textList = [
    'ソクラティスパパスタソプーロス',
    'ボリボリンゴリ＝ンボンボ',
    'ステファノオカカチュカ',
    '田中マルクストゥーリオリュージムルザニ',
    'ほしい気持ちが成長しすぎて愛することを忘れて万能のキミの幻を僕の中につくってた',
    '白木優子'
];

const answerList = [
    'そくらてぃすぱぱすたそぷーろす',
    'ぼりぼりんごり＝んぼんぼ',
    'すてふぁのおかかちゅか',
    'たなかまるくすとぅーりおりゅーじむるざに',
    'ほしいきもちがせいちょうしすぎてあいすることをわすれてばんのうのきみのまぼろしをぼくのなかにつくってた',
    'しらきゆうこ'
];

let state = true;

const subject = document.getElementById('subject');



function init() {
    const rnd = Math.floor(Math.random() * textList.length);

    const pp = rnd;
    subject.textContent = textList[pp];
    subject.answer = answerList[pp];
    form.input.value = '';
    form.input.focus();
}

const form = document.forms.typing;
let count = 0;
form.btn.addEventListener('click', function (e)){
    if(!state) return;

    if (form.input.value === subject.answer) {
        count++;
        subject.textContent = '正解!!';
        setTimeout(function () { init() }, 1000);
    }
    else {
        subject.textContent = '間違い!!';
        setTimeout(function () { init() }, 1000);
    }
}

const timer = document.getElementById('timer');
let TIME = 30;

const countdown = setInterval(function(){
    timer.textContent = '制限時間:'+ --TIME + '秒';
    if(TIME <=0) finish();
}, 1000);

function finish(){
    clearInterval(countdown);
    subject.textContent = '正解数は'+ count + '個でした!!';
    state = false;
}