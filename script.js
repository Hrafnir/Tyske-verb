// --- DATA ---
// ... (All verb-data fra forrige versjon forblir den samme) ...
const habenPresens = { ich: 'habe', du: 'hast', 'er/sie/es': 'hat', wir: 'haben', ihr: 'habt', 'sie/Sie': 'haben' };
const seinPresens = { ich: 'bin', du: 'bist', 'er/sie/es': 'ist', wir: 'sind', ihr: 'seid', 'sie/Sie': 'sind' };
const habenPräteritum = { ich: 'hatte', du: 'hattest', 'er/sie/es': 'hatte', wir: 'hatten', ihr: 'hattet', 'sie/Sie': 'hatten' };
const seinPräteritum = { ich: 'war', du: 'warst', 'er/sie/es': 'war', wir: 'waren', ihr: 'wart', 'sie/Sie': 'waren' };
const verbs = [ /* ... MASSE VERB HER ... */ ]; // Lim inn hele verb-arrayen fra forrige svar
const pronouns = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
const possibleTenses = ['presens', 'präteritum', 'perfektum']; // Liste over tider for randomisering


// --- DOM Elementer ---
// ... (Alle element-referanser fra forrige versjon) ...
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
const infoPerfektumAuxEl = verbInfoEl.querySelector('.info-perfektum-aux');
const infoAuxVerbEl = verbInfoEl.querySelector('.info-aux-verb');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const tenseSelectEl = document.getElementById('tense-select');
const currentTenseDisplayEl = document.getElementById('current-tense-display');
const instructionEl = document.getElementById('instruction');
const verbListContainerEl = document.getElementById('verb-list');
// NYTT: Referanse til toggle-knapp og læringsseksjon
const toggleLibraryButton = document.getElementById('toggle-library-button');
const learningSectionEl = document.getElementById('learning-section');

// --- App State ---
let currentVerb = null;
let currentPronoun = null;
let currentTense = 'presens'; // Vil bli overskrevet i loadNewVerb
let score = 0;
let streak = 0;

// --- Funksjoner ---

function getRandomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

function getCorrectAuxVerb(verb, pronoun) {
    if (!verb.perfektum) return '';
    if (verb.perfektum.hilfsverb === 'haben') {
        return habenPresens[pronoun];
    } else if (verb.perfektum.hilfsverb === 'sein') {
        return seinPresens[pronoun];
    }
    return '';
}

function loadNewVerb() {
    currentVerb = getRandomElement(verbs);
    currentPronoun = getRandomElement(pronouns);
    const selectedTenseOption = tenseSelectEl.value; // Les av valgt *verdi* fra dropdown

    // --- NY LOGIKK FOR TIDSVALG ---
    if (selectedTenseOption === 'random') {
        // Velg en tilfeldig tid fra listen
        currentTense = getRandomElement(possibleTenses);
    } else {
        // Bruk den spesifikke tiden valgt av brukeren
        currentTense = selectedTenseOption;
    }
    // --- SLUTT NY LOGIKK ---

    // Oppdater UI
    pronomenEl.textContent = currentPronoun;
    infinitivEl.textContent = currentVerb.infinitive;
    answerInputEl.value = '';
    feedbackAreaEl.textContent = '';
    feedbackAreaEl.className = '';
    verbInfoEl.style.display = 'none';
    infoRuleEl.style.display = 'none';
    infoPerfektumAuxEl.style.display = 'none';

    // Oppdater instruksjonstekst basert på den *faktiske* tiden som ble valgt (enten random eller spesifikk)
    let tenseText = '';
    switch(currentTense) {
        case 'präteritum': tenseText = 'Präteritum'; break;
        case 'perfektum': tenseText = 'Perfektum'; break;
        default: tenseText = 'Presens';
    }
    currentTenseDisplayEl.textContent = tenseText;

    // Reset knapper
    submitButton.disabled = false;
    nextButton.style.display = 'none';
    answerInputEl.disabled = false;
    answerInputEl.focus();
}

function checkAnswer() {
    // ... (checkAnswer-funksjonen er uendret fra forrige versjon) ...
    const userAnswer = answerInputEl.value.trim().toLowerCase();
    let correctAnswer = '';
    let correctAnswerDisplay = '';

    switch(currentTense) {
        case 'präteritum':
            if (currentVerb.präteritum && currentVerb.präteritum[currentPronoun]) {
                 correctAnswer = currentVerb.präteritum[currentPronoun].toLowerCase();
                 correctAnswerDisplay = currentVerb.präteritum[currentPronoun];
            } else {
                 correctAnswer = 'ikke definert';
                 correctAnswerDisplay = 'Ikke definert';
            }
            break;
        case 'perfektum':
             if (currentVerb.perfektum && currentVerb.perfektum.partizip) {
                const aux = getCorrectAuxVerb(currentVerb, currentPronoun);
                correctAnswer = `${aux} ${currentVerb.perfektum.partizip}`.toLowerCase();
                correctAnswerDisplay = `${aux} ${currentVerb.perfektum.partizip}`;
            } else {
                 correctAnswer = 'ikke definert';
                 correctAnswerDisplay = 'Ikke definert';
            }
            break;
        case 'presens':
        default:
            if (currentVerb.presens && currentVerb.presens[currentPronoun]) {
                correctAnswer = currentVerb.presens[currentPronoun].toLowerCase();
                correctAnswerDisplay = currentVerb.presens[currentPronoun];
            } else {
                 correctAnswer = 'ikke definert';
                 correctAnswerDisplay = 'Ikke definert';
            }
            break;
    }

    submitButton.disabled = true;
    answerInputEl.disabled = true;

    if (userAnswer === correctAnswer && correctAnswer !== 'ikke definert') {
        feedbackAreaEl.textContent = '🎉 Riktig!';
        feedbackAreaEl.className = 'correct';
        score++;
        streak++;
    } else {
        feedbackAreaEl.textContent = `😢 Feil. Riktig svar er: ${correctAnswerDisplay || 'Ukjent'}`;
        feedbackAreaEl.className = 'incorrect';
        streak = 0;
    }

    infoInfinitivEl.textContent = currentVerb.infinitive;
    infoTypeEl.textContent = currentVerb.type;
    if (currentVerb.rule && currentVerb.rule !== 'Regelmessig bøying.') {
        infoRuleTextEl.textContent = currentVerb.rule;
        infoRuleEl.style.display = 'block';
    } else {
         infoRuleEl.style.display = 'none';
    }
    if (currentVerb.perfektum) {
        infoAuxVerbEl.textContent = currentVerb.perfektum.hilfsverb;
        infoPerfektumAuxEl.style.display = 'block';
    } else {
        infoPerfektumAuxEl.style.display = 'none';
    }
    verbInfoEl.style.display = 'block';

    updateScoreDisplay();
    nextButton.style.display = 'inline-block';
    nextButton.focus();
}

function updateScoreDisplay() {
    scoreEl.textContent = score;
    streakEl.textContent = streak;
}

// --- Læringsseksjon Funksjon ---
function populateLearningSection() {
    // ... (populateLearningSection-funksjonen er uendret fra forrige versjon) ...
     verbListContainerEl.innerHTML = '';
    const sortedVerbs = [...verbs].sort((a, b) => a.infinitive.localeCompare(b.infinitive));

    sortedVerbs.forEach(verb => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('verb-entry');

        const title = document.createElement('h3');
        title.textContent = verb.infinitive;
        const badge = document.createElement('span');
        badge.classList.add('verb-type-badge', verb.type);
        badge.textContent = verb.type;
        title.appendChild(badge);
        entryDiv.appendChild(title);

        if (verb.rule && verb.rule !== 'Regelmessig bøying.') {
            const ruleP = document.createElement('p');
            ruleP.classList.add('verb-rule');
            ruleP.textContent = `Regel: ${verb.rule}`;
            entryDiv.appendChild(ruleP);
        }
         if (verb.perfektum) {
             const auxP = document.createElement('p');
             auxP.style.fontSize = '0.9em';
             auxP.innerHTML = `Perfektum bøyes med: <strong>${verb.perfektum.hilfsverb}</strong>`;
             entryDiv.appendChild(auxP);
         }

        const table = document.createElement('table');
        table.classList.add('conjugation-table');
        const thead = table.createTHead();
        const headerRow = thead.insertRow();
        const headers = ['Pronomen', 'Presens', 'Präteritum', 'Perfektum'];
        headers.forEach(text => {
            const th = document.createElement('th');
            th.textContent = text;
            headerRow.appendChild(th);
        });

        const tbody = table.createTBody();
        pronouns.forEach(pronoun => {
            const row = tbody.insertRow();
            const pronounCell = row.insertCell();
            pronounCell.textContent = pronoun;
            const presensCell = row.insertCell();
            presensCell.textContent = verb.presens && verb.presens[pronoun] ? verb.presens[pronoun] : '-';
            const präteritumCell = row.insertCell();
            präteritumCell.textContent = verb.präteritum && verb.präteritum[pronoun] ? verb.präteritum[pronoun] : '-';
            const perfektumCell = row.insertCell();
            if (verb.perfektum && verb.perfektum.partizip) {
                const aux = getCorrectAuxVerb(verb, pronoun);
                perfektumCell.textContent = `${aux} ${verb.perfektum.partizip}`;
            } else {
                perfektumCell.textContent = '-';
            }
        });
        entryDiv.appendChild(table);
        verbListContainerEl.appendChild(entryDiv);
    });
}

// NYTT: Funksjon for å toggle bibliotekets synlighet
function toggleLibraryVisibility() {
    if (learningSectionEl.style.display === 'none' || learningSectionEl.style.display === '') {
        learningSectionEl.style.display = 'block';
        toggleLibraryButton.textContent = 'Skjul Verb-Bibliotek'; // Endre knappetekst
    } else {
        learningSectionEl.style.display = 'none';
        toggleLibraryButton.textContent = 'Vis Verb-Bibliotek'; // Endre knappetekst tilbake
    }
}


// --- Event Listeners ---
submitButton.addEventListener('click', checkAnswer);
answerInputEl.addEventListener('keypress', function(event) {
    if (event.key === 'Enter' && !submitButton.disabled) {
        checkAnswer();
    }
});
nextButton.addEventListener('click', loadNewVerb);
tenseSelectEl.addEventListener('change', loadNewVerb); // Laster nytt verb når tid endres

// NYTT: Listener for toggle-knappen
toggleLibraryButton.addEventListener('click', toggleLibraryVisibility);

// --- Initialisering ---
populateLearningSection(); // Fyll biblioteket (selv om det er skjult)
loadNewVerb(); // Last det første verbet (vil nå potensielt velge random tid)
updateScoreDisplay();
