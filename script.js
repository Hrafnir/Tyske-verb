// --- DATA ---

// Hjelpeobjekter for bøying av haben og sein (brukes i Perfektum)
const habenPresens = { ich: 'habe', du: 'hast', 'er/sie/es': 'hat', wir: 'haben', ihr: 'habt', 'sie/Sie': 'haben' };
const seinPresens = { ich: 'bin', du: 'bist', 'er/sie/es': 'ist', wir: 'sind', ihr: 'seid', 'sie/Sie': 'sind' };
const habenPräteritum = { ich: 'hatte', du: 'hattest', 'er/sie/es': 'hatte', wir: 'hatten', ihr: 'hattet', 'sie/Sie': 'hatten' };
const seinPräteritum = { ich: 'war', du: 'warst', 'er/sie/es': 'war', wir: 'waren', ihr: 'wart', 'sie/Sie': 'waren' };

// Den store listen med verb
const verbs = [
    // --- SVAKE VERB ---
    {
        infinitive: 'lernen', type: 'svakt', rule: 'Regelmessig bøying.',
        presens: { ich: 'lerne', du: 'lernst', 'er/sie/es': 'lernt', wir: 'lernen', ihr: 'lernt', 'sie/Sie': 'lernen' },
        präteritum: { ich: 'lernte', du: 'lerntest', 'er/sie/es': 'lernte', wir: 'lernten', ihr: 'lerntet', 'sie/Sie': 'lernten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gelernt' }
    },
    {
        infinitive: 'machen', type: 'svakt', rule: 'Regelmessig bøying.',
        presens: { ich: 'mache', du: 'machst', 'er/sie/es': 'macht', wir: 'machen', ihr: 'macht', 'sie/Sie': 'machen' },
        präteritum: { ich: 'machte', du: 'machtest', 'er/sie/es': 'machte', wir: 'machten', ihr: 'machtet', 'sie/Sie': 'machten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gemacht' }
    },
    {
        infinitive: 'wohnen', type: 'svakt', rule: 'Regelmessig bøying.',
        presens: { ich: 'wohne', du: 'wohnst', 'er/sie/es': 'wohnt', wir: 'wohnen', ihr: 'wohnt', 'sie/Sie': 'wohnen' },
        präteritum: { ich: 'wohnte', du: 'wohntest', 'er/sie/es': 'wohnte', wir: 'wohnten', ihr: 'wohntet', 'sie/Sie': 'wohnten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gewohnt' }
    },
     {
        infinitive: 'spielen', type: 'svakt', rule: 'Regelmessig bøying.',
        presens: { ich: 'spiele', du: 'spielst', 'er/sie/es': 'spielt', wir: 'spielen', ihr: 'spielt', 'sie/Sie': 'spielen' },
        präteritum: { ich: 'spielte', du: 'spieltest', 'er/sie/es': 'spielte', wir: 'spielten', ihr: 'spieltet', 'sie/Sie': 'spielten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gespielt' }
    },
    {
        infinitive: 'arbeiten', type: 'svakt', rule: 'Ekstra "e" før endelse når stammen slutter på -t/-d.',
        presens: { ich: 'arbeite', du: 'arbeitest', 'er/sie/es': 'arbeitet', wir: 'arbeiten', ihr: 'arbeitet', 'sie/Sie': 'arbeiten' },
        präteritum: { ich: 'arbeitete', du: 'arbeitetest', 'er/sie/es': 'arbeitete', wir: 'arbeiteten', ihr: 'arbeitetet', 'sie/Sie': 'arbeiteten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gearbeitet' }
    },
     {
        infinitive: 'kaufen', type: 'svakt', rule: 'Regelmessig bøying.',
        presens: { ich: 'kaufe', du: 'kaufst', 'er/sie/es': 'kauft', wir: 'kaufen', ihr: 'kauft', 'sie/Sie': 'kaufen' },
        präteritum: { ich: 'kaufte', du: 'kauftest', 'er/sie/es': 'kaufte', wir: 'kauften', ihr: 'kauftet', 'sie/Sie': 'kauften' },
        perfektum: { hilfsverb: 'haben', partizip: 'gekauft' }
    },
    {
        infinitive: 'sagen', type: 'svakt', rule: 'Regelmessig bøying.',
        presens: { ich: 'sage', du: 'sagst', 'er/sie/es': 'sagt', wir: 'sagen', ihr: 'sagt', 'sie/Sie': 'sagen' },
        präteritum: { ich: 'sagte', du: 'sagtest', 'er/sie/es': 'sagte', wir: 'sagten', ihr: 'sagtet', 'sie/Sie': 'sagten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gesagt' }
    },
     {
        infinitive: 'fragen', type: 'svakt', rule: 'Regelmessig bøying.',
        presens: { ich: 'frage', du: 'fragst', 'er/sie/es': 'fragt', wir: 'fragen', ihr: 'fragt', 'sie/Sie': 'fragen' },
        präteritum: { ich: 'fragte', du: 'fragtest', 'er/sie/es': 'fragte', wir: 'fragten', ihr: 'fragtet', 'sie/Sie': 'fragten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gefragt' }
    },
    {
        infinitive: 'hören', type: 'svakt', rule: 'Regelmessig bøying.',
        presens: { ich: 'höre', du: 'hörst', 'er/sie/es': 'hört', wir: 'hören', ihr: 'hört', 'sie/Sie': 'hören' },
        präteritum: { ich: 'hörte', du: 'hörtest', 'er/sie/es': 'hörte', wir: 'hörten', ihr: 'hörtet', 'sie/Sie': 'hörten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gehört' }
    },
    {
        infinitive: 'leben', type: 'svakt', rule: 'Regelmessig bøying.',
        presens: { ich: 'lebe', du: 'lebst', 'er/sie/es': 'lebt', wir: 'leben', ihr: 'lebt', 'sie/Sie': 'leben' },
        präteritum: { ich: 'lebte', du: 'lebtest', 'er/sie/es': 'lebte', wir: 'lebten', ihr: 'lebtet', 'sie/Sie': 'lebten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gelebt' }
    },
     {
        infinitive: 'reisen', type: 'svakt', rule: 'Stamme slutter på -s, derfor kun -t i 2. pers. entall presens. Perfektum med "sein".',
        presens: { ich: 'reise', du: 'reist', 'er/sie/es': 'reist', wir: 'reisen', ihr: 'reist', 'sie/Sie': 'reisen' },
        präteritum: { ich: 'reiste', du: 'reistest', 'er/sie/es': 'reiste', wir: 'reisten', ihr: 'reistet', 'sie/Sie': 'reisten' },
        perfektum: { hilfsverb: 'sein', partizip: 'gereist' } // NB: sein!
    },
     {
        infinitive: 'tanzen', type: 'svakt', rule: 'Stamme slutter på -z, derfor kun -t i 2. pers. entall presens.',
        presens: { ich: 'tanze', du: 'tanzt', 'er/sie/es': 'tanzt', wir: 'tanzen', ihr: 'tanzt', 'sie/Sie': 'tanzen' },
        präteritum: { ich: 'tanzte', du: 'tanztest', 'er/sie/es': 'tanzte', wir: 'tanzten', ihr: 'tanztet', 'sie/Sie': 'tanzten' },
        perfektum: { hilfsverb: 'haben', partizip: 'getanzt' }
    },


    // --- STERKE VERB ---
    {
        infinitive: 'fahren', type: 'sterkt', rule: 'a -> ä i 2. og 3. pers entall presens.',
        presens: { ich: 'fahre', du: 'fährst', 'er/sie/es': 'fährt', wir: 'fahren', ihr: 'fahrt', 'sie/Sie': 'fahren' },
        präteritum: { ich: 'fuhr', du: 'fuhrst', 'er/sie/es': 'fuhr', wir: 'fuhren', ihr: 'fuhrt', 'sie/Sie': 'fuhren' },
        perfektum: { hilfsverb: 'sein', partizip: 'gefahren' } // NB: sein!
    },
    {
        infinitive: 'sprechen', type: 'sterkt', rule: 'e -> i i 2. og 3. pers entall presens.',
        presens: { ich: 'spreche', du: 'sprichst', 'er/sie/es': 'spricht', wir: 'sprechen', ihr: 'sprecht', 'sie/Sie': 'sprechen' },
        präteritum: { ich: 'sprach', du: 'sprachst', 'er/sie/es': 'sprach', wir: 'sprachen', ihr: 'spracht', 'sie/Sie': 'sprachen' },
        perfektum: { hilfsverb: 'haben', partizip: 'gesprochen' }
    },
    {
        infinitive: 'lesen', type: 'sterkt', rule: 'e -> ie i 2. og 3. pers entall presens.',
        presens: { ich: 'lese', du: 'liest', 'er/sie/es': 'liest', wir: 'lesen', ihr: 'lest', 'sie/Sie': 'lesen' },
        präteritum: { ich: 'las', du: 'lasest', 'er/sie/es': 'las', wir: 'lasen', ihr: 'last', 'sie/Sie': 'lasen' },
        perfektum: { hilfsverb: 'haben', partizip: 'gelesen' }
    },
    {
        infinitive: 'geben', type: 'sterkt', rule: 'e -> i i 2. og 3. pers entall presens.',
        presens: { ich: 'gebe', du: 'gibst', 'er/sie/es': 'gibt', wir: 'geben', ihr: 'gebt', 'sie/Sie': 'geben' },
        präteritum: { ich: 'gab', du: 'gabst', 'er/sie/es': 'gab', wir: 'gaben', ihr: 'gabt', 'sie/Sie': 'gaben' },
        perfektum: { hilfsverb: 'haben', partizip: 'gegeben' }
    },
    {
        infinitive: 'sehen', type: 'sterkt', rule: 'e -> ie i 2. og 3. pers entall presens.',
        presens: { ich: 'sehe', du: 'siehst', 'er/sie/es': 'sieht', wir: 'sehen', ihr: 'seht', 'sie/Sie': 'sehen' },
        präteritum: { ich: 'sah', du: 'sahst', 'er/sie/es': 'sah', wir: 'sahen', ihr: 'saht', 'sie/Sie': 'sahen' },
        perfektum: { hilfsverb: 'haben', partizip: 'gesehen' }
    },
    {
        infinitive: 'schlafen', type: 'sterkt', rule: 'a -> ä i 2. og 3. pers entall presens.',
        presens: { ich: 'schlafe', du: 'schläfst', 'er/sie/es': 'schläft', wir: 'schlafen', ihr: 'schlaft', 'sie/Sie': 'schlafen' },
        präteritum: { ich: 'schlief', du: 'schliefst', 'er/sie/es': 'schlief', wir: 'schliefen', ihr: 'schlieft', 'sie/Sie': 'schliefen' },
        perfektum: { hilfsverb: 'haben', partizip: 'geschlafen' }
    },
    {
        infinitive: 'nehmen', type: 'sterkt', rule: 'e -> i, dobler m (nimmst/nimmt) i 2./3. pers entall presens.',
        presens: { ich: 'nehme', du: 'nimmst', 'er/sie/es': 'nimmt', wir: 'nehmen', ihr: 'nehmt', 'sie/Sie': 'nehmen' },
        präteritum: { ich: 'nahm', du: 'nahmst', 'er/sie/es': 'nahm', wir: 'nahmen', ihr: 'nahmt', 'sie/Sie': 'nahmen' },
        perfektum: { hilfsverb: 'haben', partizip: 'genommen' }
    },
    {
        infinitive: 'essen', type: 'sterkt', rule: 'e -> i i 2. og 3. pers entall presens.',
        presens: { ich: 'esse', du: 'isst', 'er/sie/es': 'isst', wir: 'essen', ihr: 'esst', 'sie/Sie': 'essen' },
        präteritum: { ich: 'aß', du: 'aßest', 'er/sie/es': 'aß', wir: 'aßen', ihr: 'aßt', 'sie/Sie': 'aßen' },
        perfektum: { hilfsverb: 'haben', partizip: 'gegessen' }
    },
    {
        infinitive: 'trinken', type: 'sterkt', rule: 'Ingen vokalendring i presens.',
        presens: { ich: 'trinke', du: 'trinkst', 'er/sie/es': 'trinkt', wir: 'trinken', ihr: 'trinkt', 'sie/Sie': 'trinken' },
        präteritum: { ich: 'trank', du: 'trankst', 'er/sie/es': 'trank', wir: 'tranken', ihr: 'trankt', 'sie/Sie': 'tranken' },
        perfektum: { hilfsverb: 'haben', partizip: 'getrunken' }
    },
    {
        infinitive: 'finden', type: 'sterkt', rule: 'Ingen vokalendring i presens.',
        presens: { ich: 'finde', du: 'findest', 'er/sie/es': 'findet', wir: 'finden', ihr: 'findet', 'sie/Sie': 'finden' },
        präteritum: { ich: 'fand', du: 'fandst', 'er/sie/es': 'fand', wir: 'fanden', ihr: 'fandet', 'sie/Sie': 'fanden' },
        perfektum: { hilfsverb: 'haben', partizip: 'gefunden' }
    },
     {
        infinitive: 'gehen', type: 'sterkt', rule: 'Ingen vokalendring i presens.',
        presens: { ich: 'gehe', du: 'gehst', 'er/sie/es': 'geht', wir: 'gehen', ihr: 'geht', 'sie/Sie': 'gehen' },
        präteritum: { ich: 'ging', du: 'gingst', 'er/sie/es': 'ging', wir: 'gingen', ihr: 'gingt', 'sie/Sie': 'gingen' },
        perfektum: { hilfsverb: 'sein', partizip: 'gegangen' } // NB: sein!
    },
    {
        infinitive: 'kommen', type: 'sterkt', rule: 'Ingen vokalendring i presens.',
        presens: { ich: 'komme', du: 'kommst', 'er/sie/es': 'kommt', wir: 'kommen', ihr: 'kommt', 'sie/Sie': 'kommen' },
        präteritum: { ich: 'kam', du: 'kamst', 'er/sie/es': 'kam', wir: 'kamen', ihr: 'kamt', 'sie/Sie': 'kamen' },
        perfektum: { hilfsverb: 'sein', partizip: 'gekommen' } // NB: sein!
    },
     {
        infinitive: 'helfen', type: 'sterkt', rule: 'e -> i i 2. og 3. pers entall presens.',
        presens: { ich: 'helfe', du: 'hilfst', 'er/sie/es': 'hilft', wir: 'helfen', ihr: 'helft', 'sie/Sie': 'helfen' },
        präteritum: { ich: 'half', du: 'halfst', 'er/sie/es': 'half', wir: 'halfen', ihr: 'halft', 'sie/Sie': 'halfen' },
        perfektum: { hilfsverb: 'haben', partizip: 'geholfen' }
    },
     {
        infinitive: 'schwimmen', type: 'sterkt', rule: 'Ingen vokalendring i presens.',
        presens: { ich: 'schwimme', du: 'schwimmst', 'er/sie/es': 'schwimmt', wir: 'schwimmen', ihr: 'schwimmt', 'sie/Sie': 'schwimmen' },
        präteritum: { ich: 'schwamm', du: 'schwammst', 'er/sie/es': 'schwamm', wir: 'schwammen', ihr: 'schwammt', 'sie/Sie': 'schwammen' },
        perfektum: { hilfsverb: 'sein', partizip: 'geschwommen' } // NB: sein! (noen ganger haben ved fokus på distanse)
    },
    {
        infinitive: 'bleiben', type: 'sterkt', rule: 'Ingen vokalendring i presens.',
        presens: { ich: 'bleibe', du: 'bleibst', 'er/sie/es': 'bleibt', wir: 'bleiben', ihr: 'bleibt', 'sie/Sie': 'bleiben' },
        präteritum: { ich: 'blieb', du: 'bliebst', 'er/sie/es': 'blieb', wir: 'blieben', ihr: 'bliebt', 'sie/Sie': 'blieben' },
        perfektum: { hilfsverb: 'sein', partizip: 'geblieben' } // NB: sein!
    },
     {
        infinitive: 'schreiben', type: 'sterkt', rule: 'Ingen vokalendring i presens.',
        presens: { ich: 'schreibe', du: 'schreibst', 'er/sie/es': 'schreibt', wir: 'schreiben', ihr: 'schreibt', 'sie/Sie': 'schreiben' },
        präteritum: { ich: 'schrieb', du: 'schriebst', 'er/sie/es': 'schrieb', wir: 'schrieben', ihr: 'schriebt', 'sie/Sie': 'schrieben' },
        perfektum: { hilfsverb: 'haben', partizip: 'geschrieben' }
    },


    // --- UREGELMESSIGE VERB ---
    {
        infinitive: 'sein', type: 'uregelmessig', rule: 'Helt uregelmessig bøying!',
        presens: seinPresens, // Bruker hjelpeobjektet
        präteritum: seinPräteritum, // Bruker hjelpeobjektet
        perfektum: { hilfsverb: 'sein', partizip: 'gewesen' }
    },
    {
        infinitive: 'haben', type: 'uregelmessig', rule: 'Uregelmessig i 2. og 3. pers entall presens og hele präteritum.',
        presens: habenPresens, // Bruker hjelpeobjektet
        präteritum: habenPräteritum, // Bruker hjelpeobjektet
        perfektum: { hilfsverb: 'haben', partizip: 'gehabt' }
    },
    {
        infinitive: 'werden', type: 'uregelmessig', rule: 'Vokalendring + uregelmessig i 2./3. pers entall presens. Sterk i präteritum.',
        presens: { ich: 'werde', du: 'wirst', 'er/sie/es': 'wird', wir: 'werden', ihr: 'werdet', 'sie/Sie': 'werden' },
        präteritum: { ich: 'wurde', du: 'wurdest', 'er/sie/es': 'wurde', wir: 'wurden', ihr: 'wurdet', 'sie/Sie': 'wurden' },
        perfektum: { hilfsverb: 'sein', partizip: 'geworden' } // NB: sein!
    },
    {
        infinitive: 'wissen', type: 'uregelmessig', rule: 'Presens ligner modalverb (ich/er/sie/es like). Svakt präteritum.',
        presens: { ich: 'weiß', du: 'weißt', 'er/sie/es': 'weiß', wir: 'wissen', ihr: 'wisst', 'sie/Sie': 'wissen' },
        präteritum: { ich: 'wusste', du: 'wusstest', 'er/sie/es': 'wusste', wir: 'wussten', ihr: 'wusstet', 'sie/Sie': 'wussten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gewusst' }
    },
     {
        infinitive: 'bringen', type: 'uregelmessig', rule: 'Blandet bøying (svakt presens, uregelmessig/sterk-lignende präteritum/perfektum).',
        presens: { ich: 'bringe', du: 'bringst', 'er/sie/es': 'bringt', wir: 'bringen', ihr: 'bringt', 'sie/Sie': 'bringen' },
        präteritum: { ich: 'brachte', du: 'brachtest', 'er/sie/es': 'brachte', wir: 'brachten', ihr: 'brachtet', 'sie/Sie': 'brachten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gebracht' }
    },
     {
        infinitive: 'denken', type: 'uregelmessig', rule: 'Blandet bøying (svakt presens, uregelmessig/sterk-lignende präteritum/perfektum).',
        presens: { ich: 'denke', du: 'denkst', 'er/sie/es': 'denkt', wir: 'denken', ihr: 'denkt', 'sie/Sie': 'denken' },
        präteritum: { ich: 'dachte', du: 'dachtest', 'er/sie/es': 'dachte', wir: 'dachten', ihr: 'dachtet', 'sie/Sie': 'dachten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gedacht' }
    },
    // --- MODALVERB ---
     {
        infinitive: 'können', type: 'modalverb', rule: 'Modalverb: ich/er/sie/es like i presens, vokalendring.',
        presens: { ich: 'kann', du: 'kannst', 'er/sie/es': 'kann', wir: 'können', ihr: 'könnt', 'sie/Sie': 'können' },
        präteritum: { ich: 'konnte', du: 'konntest', 'er/sie/es': 'konnte', wir: 'konnten', ihr: 'konntet', 'sie/Sie': 'konnten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gekonnt' }
    },
     {
        infinitive: 'müssen', type: 'modalverb', rule: 'Modalverb: ich/er/sie/es like i presens, vokalendring.',
        presens: { ich: 'muss', du: 'musst', 'er/sie/es': 'muss', wir: 'müssen', ihr: 'müsst', 'sie/Sie': 'müssen' },
        präteritum: { ich: 'musste', du: 'musstest', 'er/sie/es': 'musste', wir: 'mussten', ihr: 'musstet', 'sie/Sie': 'mussten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gemusst' }
    },
     {
        infinitive: 'wollen', type: 'modalverb', rule: 'Modalverb: ich/er/sie/es like i presens, vokalendring.',
        presens: { ich: 'will', du: 'willst', 'er/sie/es': 'will', wir: 'wollen', ihr: 'wollt', 'sie/Sie': 'wollen' },
        präteritum: { ich: 'wollte', du: 'wolltest', 'er/sie/es': 'wollte', wir: 'wollten', ihr: 'wolltet', 'sie/Sie': 'wollten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gewollt' }
    },
     {
        infinitive: 'sollen', type: 'modalverb', rule: 'Modalverb: ich/er/sie/es like i presens, ingen vokalendring.',
        presens: { ich: 'soll', du: 'sollst', 'er/sie/es': 'soll', wir: 'sollen', ihr: 'sollt', 'sie/Sie': 'sollen' },
        präteritum: { ich: 'sollte', du: 'solltest', 'er/sie/es': 'sollte', wir: 'sollten', ihr: 'solltet', 'sie/Sie': 'sollten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gesollt' }
    },
    {
        infinitive: 'dürfen', type: 'modalverb', rule: 'Modalverb: ich/er/sie/es like i presens, vokalendring.',
        presens: { ich: 'darf', du: 'darfst', 'er/sie/es': 'darf', wir: 'dürfen', ihr: 'dürft', 'sie/Sie': 'dürfen' },
        präteritum: { ich: 'durfte', du: 'durftest', 'er/sie/es': 'durfte', wir: 'durften', ihr: 'durftet', 'sie/Sie': 'durften' },
        perfektum: { hilfsverb: 'haben', partizip: 'gedurft' }
    },
     {
        infinitive: 'mögen', type: 'modalverb', rule: 'Modalverb: ich/er/sie/es like i presens, vokalendring. Brukes ofte i konjunktiv II (möchte).',
        presens: { ich: 'mag', du: 'magst', 'er/sie/es': 'mag', wir: 'mögen', ihr: 'mögt', 'sie/Sie': 'mögen' },
        präteritum: { ich: 'mochte', du: 'mochtest', 'er/sie/es': 'mochte', wir: 'mochten', ihr: 'mochtet', 'sie/Sie': 'mochten' },
        perfektum: { hilfsverb: 'haben', partizip: 'gemocht' }
    },
]; // Slutten av verbs-arrayen

const pronouns = ['ich', 'du', 'er/sie/es', 'wir', 'ihr', 'sie/Sie'];
const possibleTenses = ['presens', 'präteritum', 'perfektum']; // Liste over tider for randomisering


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
const infoPerfektumAuxEl = verbInfoEl.querySelector('.info-perfektum-aux');
const infoAuxVerbEl = verbInfoEl.querySelector('.info-aux-verb');
const scoreEl = document.getElementById('score');
const streakEl = document.getElementById('streak');
const tenseSelectEl = document.getElementById('tense-select');
const currentTenseDisplayEl = document.getElementById('current-tense-display');
const instructionEl = document.getElementById('instruction');
const verbListContainerEl = document.getElementById('verb-list');
const toggleLibraryButton = document.getElementById('toggle-library-button');
const learningSectionEl = document.getElementById('learning-section');

// --- App State ---
let currentVerb = null;
let currentPronoun = null;
let currentTense = 'presens'; // Default, men overskrives i loadNewVerb
let score = 0;
let streak = 0;

// --- Funksjoner ---

function getRandomElement(arr) {
    if (!arr || arr.length === 0) {
        console.error("Attempted to get random element from empty or invalid array:", arr);
        return undefined; // Sikkerhetstiltak
    }
    return arr[Math.floor(Math.random() * arr.length)];
}

function getCorrectAuxVerb(verb, pronoun) {
    // Sikrer at vi har nødvendig data
    if (!verb || !verb.perfektum || !verb.perfektum.hilfsverb || !pronoun) {
        console.error("Missing data for getCorrectAuxVerb:", { verb, pronoun });
        return '';
    }
    if (verb.perfektum.hilfsverb === 'haben') {
        // Sjekk at habenPresens[pronoun] finnes
        return habenPresens[pronoun] || '';
    } else if (verb.perfektum.hilfsverb === 'sein') {
         // Sjekk at seinPresens[pronoun] finnes
        return seinPresens[pronoun] || '';
    }
    console.warn("Unknown hilfsverb:", verb.perfektum.hilfsverb);
    return ''; // Fallback
}


function loadNewVerb() {
    currentVerb = getRandomElement(verbs);
    currentPronoun = getRandomElement(pronouns);
    const selectedTenseOption = tenseSelectEl.value;

    // Sikrer at vi faktisk fikk et verb
    if (!currentVerb || !currentPronoun) {
        console.error("Failed to load new verb or pronoun", {currentVerb, currentPronoun});
        feedbackAreaEl.textContent = "Feil: Kunne ikke laste nytt verb. Prøv å laste siden på nytt.";
        feedbackAreaEl.className = 'incorrect';
        submitButton.disabled = true; // Forhindre videre feil
        return; // Avslutt funksjonen her
    }


    if (selectedTenseOption === 'random') {
        currentTense = getRandomElement(possibleTenses);
    } else {
        currentTense = selectedTenseOption;
    }

    // Oppdater UI
    pronomenEl.textContent = currentPronoun;
    infinitivEl.textContent = currentVerb.infinitive; // Denne linjen ga feil før hvis currentVerb var undefined
    answerInputEl.value = '';
    feedbackAreaEl.textContent = '';
    feedbackAreaEl.className = '';
    verbInfoEl.style.display = 'none';
    infoRuleEl.style.display = 'none';
    infoPerfektumAuxEl.style.display = 'none';

    let tenseText = '';
    switch(currentTense) {
        case 'präteritum': tenseText = 'Präteritum'; break;
        case 'perfektum': tenseText = 'Perfektum'; break;
        default: tenseText = 'Presens';
    }
    currentTenseDisplayEl.textContent = tenseText;

    submitButton.disabled = false;
    nextButton.style.display = 'none';
    answerInputEl.disabled = false;
    answerInputEl.focus();
}

function checkAnswer() {
    // Ekstra sjekk for å unngå feil hvis noe gikk galt under lasting
     if (!currentVerb || !currentPronoun || !currentTense) {
        console.error("checkAnswer called with invalid state:", {currentVerb, currentPronoun, currentTense});
        feedbackAreaEl.textContent = "Feil: Kan ikke sjekke svar. Prøv neste verb.";
        feedbackAreaEl.className = 'incorrect';
        submitButton.disabled = true;
        nextButton.style.display = 'inline-block'; // Tillat brukeren å gå videre
        return;
    }

    const userAnswer = answerInputEl.value.trim().toLowerCase();
    let correctAnswer = '';
    let correctAnswerDisplay = '';

    try { // Bruker try...catch for ekstra robusthet ved oppslag
        switch(currentTense) {
            case 'präteritum':
                correctAnswer = currentVerb.präteritum?.[currentPronoun]?.toLowerCase() || 'ikke definert'; // Bruker optional chaining
                correctAnswerDisplay = currentVerb.präteritum?.[currentPronoun] || 'Ikke definert';
                break;
            case 'perfektum':
                if (currentVerb.perfektum?.partizip) {
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
                correctAnswer = currentVerb.presens?.[currentPronoun]?.toLowerCase() || 'ikke definert'; // Bruker optional chaining
                correctAnswerDisplay = currentVerb.presens?.[currentPronoun] || 'Ikke definert';
                break;
        }
    } catch (error) {
        console.error("Error getting correct answer:", error, {currentVerb, currentPronoun, currentTense});
        correctAnswer = 'feil ved oppslag';
        correctAnswerDisplay = 'Intern feil';
    }


    submitButton.disabled = true;
    answerInputEl.disabled = true;

    if (userAnswer === correctAnswer && correctAnswer !== 'ikke definert' && correctAnswer !== 'feil ved oppslag') {
        feedbackAreaEl.textContent = '🎉 Riktig!';
        feedbackAreaEl.className = 'correct';
        score++;
        streak++;
    } else {
        feedbackAreaEl.textContent = `😢 Feil. Riktig svar er: ${correctAnswerDisplay}`;
        feedbackAreaEl.className = 'incorrect';
        streak = 0;
    }

    // Vis info om verbet (med sjekk)
    infoInfinitivEl.textContent = currentVerb.infinitive || 'Ukjent';
    infoTypeEl.textContent = currentVerb.type || 'Ukjent';
    if (currentVerb.rule && currentVerb.rule !== 'Regelmessig bøying.') {
        infoRuleTextEl.textContent = currentVerb.rule;
        infoRuleEl.style.display = 'block';
    } else {
         infoRuleEl.style.display = 'none';
    }
    if (currentVerb.perfektum?.hilfsverb) {
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
     verbListContainerEl.innerHTML = '';
    // Sikrer at verbs-arrayen finnes og ikke er tom før vi sorterer/itererer
    if (!verbs || verbs.length === 0) {
        console.error("Verbs array is missing or empty. Cannot populate learning section.");
         verbListContainerEl.innerHTML = '<p style="color: red;">Feil: Kunne ikke laste verb-biblioteket.</p>';
        return;
    }

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
         if (verb.perfektum?.hilfsverb) {
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
            // Bruker optional chaining for sikrere oppslag
            presensCell.textContent = verb.presens?.[pronoun] || '-';

            const präteritumCell = row.insertCell();
            präteritumCell.textContent = verb.präteritum?.[pronoun] || '-';

            const perfektumCell = row.insertCell();
            if (verb.perfektum?.partizip) {
                const aux = getCorrectAuxVerb(verb, pronoun);
                perfektumCell.textContent = aux ? `${aux} ${verb.perfektum.partizip}` : '-'; // Vis '-' hvis aux mangler
            } else {
                perfektumCell.textContent = '-';
            }
        });
        entryDiv.appendChild(table);
        verbListContainerEl.appendChild(entryDiv);
    });
}

// Funksjon for å toggle bibliotekets synlighet
function toggleLibraryVisibility() {
    if (learningSectionEl.style.display === 'none' || learningSectionEl.style.display === '') {
        learningSectionEl.style.display = 'block';
        toggleLibraryButton.textContent = 'Skjul Verb-Bibliotek';
    } else {
        learningSectionEl.style.display = 'none';
        toggleLibraryButton.textContent = 'Vis Verb-Bibliotek';
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
tenseSelectEl.addEventListener('change', loadNewVerb);
toggleLibraryButton.addEventListener('click', toggleLibraryVisibility);

// --- Initialisering ---
// Kjør funksjonene etter at DOM er fullstendig lastet for å unngå race conditions
document.addEventListener('DOMContentLoaded', (event) => {
    // Sjekk om nødvendige elementer finnes før vi kjører koden
    if (verbListContainerEl && tenseSelectEl && scoreEl && streakEl) {
        populateLearningSection();
        loadNewVerb();
        updateScoreDisplay();
    } else {
        console.error("Essential DOM elements not found!");
        // Vis en feilmelding til brukeren i appen?
         const errorDiv = document.createElement('div');
         errorDiv.style.color = 'red';
         errorDiv.style.fontWeight = 'bold';
         errorDiv.style.padding = '20px';
         errorDiv.textContent = 'KRITISK FEIL: Kunne ikke starte appen. Nødvendige HTML-elementer mangler. Sjekk console (F12) for detaljer.';
         document.body.prepend(errorDiv); // Legg feilmelding øverst
    }
});
