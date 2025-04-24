// --- DATA ---
const verbs = [
    // Svake verb
    { infinitive: 'lernen', type: 'svakt', rule: 'Regelmessig bøying.', presens: { ich: 'lerne', du: 'lernst', 'er/sie/es': 'lernt', wir: 'lernen', ihr: 'lernt', 'sie/Sie': 'lernen' } },
    { infinitive: 'machen', type: 'svakt', rule: 'Regelmessig bøying.', presens: { ich: 'mache', du: 'machst', 'er/sie/es': 'macht', wir: 'machen', ihr: 'macht', 'sie/Sie': 'machen' } },
    { infinitive: 'wohnen', type: 'svakt', rule: 'Regelmessig bøying.', presens: { ich: 'wohne', du: 'wohnst', 'er/sie/es': 'wohnt', wir: 'wohnen', ihr: 'wohnt', 'sie/Sie': 'wohnen' } },
    { infinitive: 'spielen', type: 'svakt', rule: 'Regelmessig bøying.', presens: { ich: 'spiele', du: 'spielst', 'er/sie/es': 'spielt', wir: 'spielen', ihr: 'spielt', 'sie/Sie': 'spielen' } },
    { infinitive: 'arbeiten', type: 'svakt', rule: 'Ekstra "e" før -st og -t når stammen slutter på -t.', presens: { ich: 'arbeite', du: 'arbeitest', 'er/sie/es': 'arbeitet', wir: 'arbeiten', ihr: 'arbeitet', 'sie/Sie': 'arbeiten' } }, // Eksempel med stamme på -t

    // Sterke verb
    { infinitive: 'fahren', type: 'sterkt', rule: 'a -> ä i 2. og 3. pers entall.', presens: { ich: 'fahre', du: 'fährst', 'er/sie/es': 'fährt', wir: 'fahren', ihr: 'fahrt', 'sie/Sie': 'fahren' } },
    { infinitive: 'sprechen', type: 'sterkt', rule: 'e -> i i 2. og 3. pers entall.', presens: { ich: 'spreche', du: 'sprichst', 'er/sie/es': 'spricht', wir: 'sprechen', ihr: 'sprecht', 'sie/Sie': 'sprechen' } },
    { infinitive: 'lesen', type: 'sterkt', rule: 'e -> ie i 2. og 3. pers entall.', presens: { ich: 'lese', du: 'liest', 'er/sie/es': 'liest', wir: 'lesen', ihr: 'lest', 'sie/Sie': 'lesen' } },
    { infinitive: 'geben', type: 'sterkt', rule: 'e -> i i 2. og 3. pers entall.', presens: { ich: 'gebe', du: 'gibst', 'er/sie/es': 'gibt', wir: 'geben', ihr: 'gebt', 'sie/Sie': 'geben' } },
    { infinitive: 'sehen', type: 'sterkt', rule: 'e -> ie i 2. og 3. pers entall.', presens: { ich: 'sehe', du: 'siehst', 'er/sie/es': 'sieht', wir: 'sehen', ihr: 'seht', 'sie/Sie': 'sehen' } },
    { infinitive: 'schlafen', type: 'sterkt', rule: 'a -> ä i 2. og 3. pers entall.', presens: { ich: 'schlafe', du: 'schläfst', 'er/sie/es': 'schläft', wir: 'schlafen', ihr: 'schlaft', 'sie/Sie': 'schlafen' } },

    // Uregelmessige verb (teknisk sett sterke/blandet)
    { infinitive: 'sein', type: 'uregelmessig', rule: 'Helt uregelmessig bøying!', presens: { ich: 'bin', du: 'bist', 'er/sie/es': 'ist', wir: 'sind', ihr: 'seid', 'sie/Sie': 'sind' } },
    { infinitive: 'haben', type: 'uregelmessig', rule: 'Uregelmessig i 2. og 3. pers entall.', presens: { ich: 'habe', du: 'hast', 'er/sie/es': 'hat', wir: 'haben', ihr: 'habt', 'sie/Sie': 'haben' } },
    { infinitive: 'werden', type: 'uregelmessig', rule: 'Vokalendring + uregelmessig i 2. og 3. pers entall.', presens: { ich: 'werde', du: 'wirst', 'er/sie/es': 'wird', wir: 'werden', ihr: 'werdet', 'sie/Sie': 'werden' } },
];

const pronouns = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];

// --- DOM Elementer ---
const pronomenEl = document.getElementById('pronomen');
const infinitivEl = document.getElementById('infinitiv');
const answerInputEl = document.getElementById('answer-input');
const submitButton = document.getElementById('submit-button');
const feedbackAreaEl = document.getElementById('feedback-area');
const nextButton = document.getElementById('next-button');
const verbInfoEl = document.getElementById('verb-info');
const infoInfinitivEl = verbInfoEl.querySelector('.info-infinitiv');
const infoTypeEl = verbInfoEl.querySelector('.info-type');
const infoRuleEl = verbInfoEl.querySelector('.info-rule');
const infoRuleTextEl = verbInfoEl.querySelector('.info-rule-text');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');


// --- App State ---
let currentVerb = null;
let currentPronoun = null;
let score = 0;
let streak = 0;

// --- Funksjoner ---

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function loadNewVerb() {
    currentVerb = getRandomElement(verbs);
    currentPronoun = getRandomElement(pronouns);

    // Oppdater UI
    pronomenEl.textContent = currentPronoun;
    infinitivEl.textContent = currentVerb.infinitive;
    answerInputEl.value = '';
    feedbackAreaEl.textContent = '';
    feedbackAreaEl.className = ''; // Fjern CSS-klasser (correct/incorrect)
    verbInfoEl.style.display = 'none'; // Skjul info-boks
    infoRuleEl.style.display = 'none'; // Skjul regel-linje

    // Reset knapper
    submitButton.disabled = false;
    nextButton.style.display = 'none';
    answerInputEl.disabled = false;
    answerInputEl.focus(); // Sett fokus på inputfeltet
}

function checkAnswer() {
    const userAnswer = answerInputEl.value.trim().toLowerCase();
    const correctAnswer = currentVerb.presens[currentPronoun].toLowerCase();

    // Deaktiver input og submit-knapp etter svar
    submitButton.disabled = true;
    answerInputEl.disabled = true;

    if (userAnswer === correctAnswer) {
        feedbackAreaEl.textContent = '🎉 Riktig!';
        feedbackAreaEl.className = 'correct'; // Legg til CSS-klasse for riktig
        score++;
        streak++;
    } else {
        feedbackAreaEl.textContent = `😢 Feil. Riktig svar er: ${currentVerb.presens[currentPronoun]}`;
        feedbackAreaEl.className = 'incorrect'; // Legg til CSS-klasse for feil
        streak = 0; // Nullstill streak ved feil
    }

    // Vis info om verbet
    infoInfinitivEl.textContent = currentVerb.infinitive;
    infoTypeEl.textContent = currentVerb.type;
    if (currentVerb.rule && currentVerb.type !== 'svakt') { // Vis bare regel for sterke/uregelmessige
        infoRuleTextEl.textContent = currentVerb.rule;
        infoRuleEl.style.display = 'block';
    } else {
         infoRuleEl.style.display = 'none';
    }
    verbInfoEl.style.display = 'block';

    // Oppdater poeng og vis neste knapp
    updateScoreDisplay();
    nextButton.style.display = 'inline-block'; // Vis neste-knapp
    nextButton.focus(); // Sett fokus på neste-knapp
}

function updateScoreDisplay() {
    scoreEl.textContent = score;
    streakEl.textContent = streak;
}


// --- Event Listeners ---

submitButton.addEventListener('click', checkAnswer);

// La Enter-tasten i inputfeltet også sjekke svaret
answerInputEl.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !submitButton.disabled) {
        checkAnswer();
    }
});

nextButton.addEventListener('click', loadNewVerb);


// --- Initialisering ---
loadNewVerb(); // Last det første verbet når siden lastes
updateScoreDisplay(); // Vis startpoengsum (0)
