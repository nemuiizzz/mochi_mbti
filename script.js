const startScreen = document.getElementById('start-screen');
const questionScreen = document.getElementById('question-screen');
const resultScreen = document.getElementById('result-screen');

const startButton = document.getElementById('start-button');
const restartButton = document.getElementById('restart-button');

const questionText = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');

const shareButton = document.getElementById('share-button');

const resultTitle = document.getElementById('result-title');
const resultImage = document.getElementById('result-image');
const resultDescription = document.getElementById('result-description');

// 質問データ
const questions = [
    // 性格軸 E vs I
    { question: "休日は？", options: [{ text: "誰かと出かけたい", type: "E" }, { text: "ひとりでゆっくりしたい", type: "I" }] },
    { question: "初対面の人と話すのは？", options: [{ text: "けっこう得意", type: "E" }, { text: "ちょっと緊張する", type: "I" }] },
    { question: "エネルギーが回復するのは？", options: [{ text: "にぎやかな場所", type: "E" }, { text: "静かな場所", type: "I" }] },
    { question: "SNSは？", options: [{ text: "頻繁に投稿・反応する", type: "E" }, { text: "見る専、たまに投稿", type: "I" }] },
    { question: "寝る前の気分は？", options: [{ text: "今日もいっぱい人と話したな〜", type: "E" }, { text: "やっと1人時間きた〜", type: "I" }] },
    // 直感軸 S vs N
    { question: "会話では？", options: [{ text: "具体的な話が多い", type: "S" }, { text: "抽象的な話が好き", type: "N" }] },
    { question: "好きな本や話題は？", options: [{ text: "リアルな日常もの", type: "S" }, { text: "SFや空想系", type: "N" }] },
    { question: "癒されるのは？", options: [{ text: "触れるもの、食べものなど体感", type: "S" }, { text: "空想、言葉、世界観", type: "N" }] },
    { question: "新しい環境に入ったら？", options: [{ text: "すぐ目に見える情報を集める", type: "S" }, { text: "雰囲気や流れを感じ取る", type: "N" }] },
    { question: "自分のことを言うなら？", options: [{ text: "現実的・実務派", type: "S" }, { text: "ひらめき型・直感派", type: "N" }] },
    // 感情軸 T vs F
    { question: "トラブルに対して？", options: [{ text: "冷静に対処したい", type: "T" }, { text: "まず相手の気持ちを考える", type: "F" }] },
    { question: "正しいことと優しさ、選ぶなら？", options: [{ text: "正しさ", type: "T" }, { text: "やさしさ", type: "F" }] },
    { question: "癒しアイテムを選ぶなら？", options: [{ text: "機能性バツグンの加湿器", type: "T" }, { text: "ぬくもり重視の手編みブランケット", type: "F" }] },
    { question: "人にアドバイスするなら？", options: [{ text: "ズバッと現実的に言う", type: "T" }, { text: "相手の気持ちに寄り添って伝える", type: "F" }] },
    { question: "自分の長所は？", options: [{ text: "論理的に考えられる", type: "T" }, { text: "思いやりがある", type: "F" }] },
    // 行動軸 J vs P
    { question: "スケジュールは？", options: [{ text: "きっちり立てたい", type: "J" }, { text: "気分で動くほうが好き", type: "P" }] },
    { question: "寝る時間は？", options: [{ text: "決まった時間に寝たい", type: "J" }, { text: "その日の気分次第", type: "P" }] },
    { question: "旅行の計画は？", options: [{ text: "前もってがっちり計画", type: "J" }, { text: "現地でなんとかなる派", type: "P" }] },
    { question: "好きなもちの食べ方は？", options: [{ text: "きれいに切って順序よく食べる", type: "J" }, { text: "気づいたら全部食べてた", type: "P" }] },
    { question: "眠気が来たら？", options: [{ text: "もう少し我慢して片付けてから寝る", type: "J" }, { text: "即ベッドにダイブ！", type: "P" }] }
];

const results = {
    'ISTJ': {
        title: "しっかりもち",
        image: "image/istj.png",
        description: "着実系もち。規則正しく、もちスケジュール帳を手放さない。布団も毎日整えてる、完璧な寝支度が命のもち。"
    },
    'ISFJ': {
        title: "まもりもち",
        image: "image/isfj.png",
        description: "お世話もち。他のもちの布団をそっとかけ直してあげる優しさの塊。みんなの快眠を守る守護もち。"
    },
    'INFJ': {
        title: "よるもち",
        image: "image/infj.png",
        description: "哲学もち。夜、星空を見ながら深く考えるタイプ。現実と妄想のはざまで、もちもちしている不思議な存在。"
    },
    'INTJ': {
        title: "プランもち",
        image: "image/intj.png",
        description: "静かな戦略もち。布団の位置から寝る時間、夢の中の予定まで全部計画済み。冷静なもち界の頭脳派。"
    },
    'ISTP': {
        title: "つくるもち",
        image: "image/istp.png",
        description: "職人もち。もち家具を無言で組み立てるのが得意。自分で作ったベッドじゃないと落ち着かない不器用もち。"
    },
    'ISFP': {
        title: "まったりもち",
        image: "image/isfp.png",
        description: "感性派もち。ふわふわのラグと観葉植物に囲まれて、自然と一体化して寝てる自由人。ゆるっともち。"
    },
    'INFP': {
        title: "ゆめもち",
        image: "image/infp.png",
        description: "夢見がちもち。星を抱きながら空想の世界へトリップする、ふわふわ感性のロマンもち。"
    },
    'INTP': {
        title: "ぼんやりもち",
        image: "image/intp.png",
        description: "思索系もち。頭の中でぐるぐる考えすぎて寝落ちしちゃうタイプ。ノートとペンの近くで寝てること多め。"
    },
    'ESTP': {
        title: "はしゃぎもち",
        image: "image/estp.png",
        description: "ノリノリもち。テンションMAXで枕投げしてるから、なかなか寝ない！でも一度寝たらぐっすり派。"
    },
    'ESFP': {
        title: "きらきらもち",
        image: "image/esfp.png",
        description: "パーティーもち。イルミネーションやおしゃれな照明が大好き。寝るときもカラフルじゃないと無理！な派手かわもち。"
    },
    'ENFP': {
        title: "うかれもち",
        image: "image/enfp.png",
        description: "好奇心もち。あれもこれも気になる！寝る前に踊り出したり話し出したりして、気づいたら朝…な陽キャもち。"
    },
    'ENTP': {
        title: "あそびもち",
        image: "image/entp.png",
        description: "発明もち。癒しアイテムを改造したがるもち博士。ベッドの下に秘密道具を隠してる。もち界のひらめき担当。"
    },
    'ESTJ': {
        title: "かちっともち",
        image: "image/estj.png",
        description: "リーダーもち。寝る時間は22:30ジャスト。もち時間割ともち指示書を大切にする、もち界の司令塔。"
    },
    'ESFJ': {
        title: "おせっかいもち",
        image: "image/esfj.png",
        description: "愛情たっぷりもち。「ちゃんと寝た？」「お水飲んだ？」って周囲に気を配りまくる、やさしさ全開もち。"
    },
    'ENFJ': {
        title: "はげましもち",
        image: "image/enfj.png",
        description: "応援もち。「あなたは大丈夫！」って毎晩励ましてくれる。言葉の毛布でみんなを包むリーダーもち。"
    },
    'ENTJ': {
        title: "ボスもち",
        image: "image/entj.png",
        description: "指揮官もち。もち王国の玉座にふんぞり返って、寝ながら未来を設計してる。自信満々なカリスマもち。"
    },
    'default': {
        title: "みたらし団子",
        image: "", // デフォルト画像はなし
        description: "あなたは、マイペースなみたらし団子タイプ。柔軟な発想ができますが、計画を立てるのは苦手かも。"
    }
};

let currentQuestionIndex = 0;
let scores = {
    E: 0, I: 0,
    S: 0, N: 0,
    T: 0, F: 0,
    J: 0, P: 0
};

startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', restartGame);
shareButton.addEventListener('click', shareResult);

function startGame() {
    startScreen.classList.add('hidden');
    questionScreen.classList.remove('hidden');
    currentQuestionIndex = 0;
    scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestionIndex];
    questionText.innerText = question.question;
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const button = document.createElement('button');
        button.innerText = option.text;
        button.addEventListener('click', () => selectOption(option.type));
        optionsContainer.appendChild(button);
    });
}

function selectOption(type) {
    scores[type]++;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

function showResult() {
    questionScreen.classList.add('hidden');
    resultScreen.classList.remove('hidden');

    const resultType = 
        (scores.E >= scores.I ? 'E' : 'I') +
        (scores.S >= scores.N ? 'S' : 'N') +
        (scores.T >= scores.F ? 'T' : 'F') +
        (scores.J >= scores.P ? 'J' : 'P');

    // 仮実装：特定のタイプがない場合はデフォルトを表示
    const result = results[resultType] || results['default'];

    resultTitle.innerText = result.title;
    resultImage.src = result.image;
    resultDescription.innerText = result.description;
}

function restartGame() {
    resultScreen.classList.add('hidden');
    startScreen.classList.remove('hidden');
}

function shareResult() {
    const resultTitleText = resultTitle.innerText;
    const pageUrl = window.location.href;
    const shareText = `私の診断結果は「${resultTitleText}」でした！あなたも診断してみよう！ #あなたはなにもち #もち診断`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
    window.open(shareUrl, '_blank');
}