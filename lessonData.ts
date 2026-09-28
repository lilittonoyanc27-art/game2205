export interface TranscriptLine {
  id: number;
  timeSec: number;
  timeLabel: string;
  speaker: 'Natalia' | 'Facundo' | 'Entrevistador';
  speakerLabelHy: string;
  textEs: string;
  textHy: string;
  hasNote?: boolean;
}

export interface QuizQuestion {
  id: number;
  questionEs: string;
  questionHy: string;
  optionsEs: string[];
  optionsHy: string[];
  correctIndex: number;
  explanationEs: string;
  explanationHy: string;
  quoteEs: string;
  quoteHy: string;
  timecode: string;
  timeSec: number;
}

export interface TrueFalseItem {
  id: number;
  statementEs: string;
  statementHy: string;
  isTrue: boolean;
  explanationEs: string;
  explanationHy: string;
  quoteEs: string;
  quoteHy: string;
  timecode: string;
  timeSec: number;
}

export interface SentenceCompletionItem {
  id: number;
  sentenceWithBlankEs: string;
  sentenceHy: string;
  missingWord: string;
  options: string[]; // 3 options
  correctOptionIndex: number;
  explanationEs: string;
  explanationHy: string;
  timecode: string;
  timeSec: number;
}

export interface ExpressionPair {
  id: number;
  expressionEs: string;
  translationHy: string;
  contextEs: string;
  contextHy: string;
}

export interface ConversationPrompt {
  id: number;
  category: 'interview' | 'personal';
  categoryLabelEs: string;
  categoryLabelHy: string;
  questionEs: string;
  questionHy: string;
  starterEs: string;
  starterHy: string;
  helperEs: string;
  helperHy: string;
}

export interface VocabularyItem {
  id: number;
  termEs: string;
  partOfSpeechEs: string;
  partOfSpeechHy: string;
  meaningHy: string;
  exampleEs: string;
  exampleHy: string;
  isKeyMandatory?: boolean;
}

export interface ArgentineFeature {
  id: string;
  term: string;
  titleHy: string;
  shortDefinitionHy: string;
  fullExplanationHy: string;
  exampleEs: string;
  exampleHy: string;
}

export const TRANSCRIPT_DATA: TranscriptLine[] = [
  {
    id: 1,
    timeSec: 1,
    timeLabel: '0:01',
    speaker: 'Entrevistador',
    speakerLabelHy: 'Հարցազրուցավար',
    textEs: 'Natalia, vos, corazón valiente.',
    textHy: 'Նատալիա, դու անվեհեր սիրտ ես։',
  },
  {
    id: 2,
    timeSec: 3,
    timeLabel: '0:03',
    speaker: 'Natalia',
    speakerLabelHy: 'Նատալիա',
    textEs: 'Yo corazón valiente, y más que lo importante de terminar el plan, lo importante era aterrizar.',
    textHy: 'Ես՝ անվեհեր սի՞րտ. և [ծրագիրն ավարտելուց առավել], ամենակարևորը վայրէջք կատարելն էր։',
    hasNote: true,
  },
  {
    id: 3,
    timeSec: 8,
    timeLabel: '0:08',
    speaker: 'Natalia',
    speakerLabelHy: 'Նատալիա',
    textEs: 'No, re contenta, fue una experiencia súper excitante, me encantó.',
    textHy: 'Չէ, չափազանց գոհ եմ, անչափ հուզիչ փորձառություն էր, ես հիացած եմ։',
  },
  {
    id: 4,
    timeSec: 11,
    timeLabel: '0:11',
    speaker: 'Entrevistador',
    speakerLabelHy: 'Հարցազրուցավար',
    textEs: '¿Tuviste miedo en algún momento?',
    textHy: 'Որևէ պահի վախ զգացի՞ր։',
  },
  {
    id: 5,
    timeSec: 12,
    timeLabel: '0:12',
    speaker: 'Natalia',
    speakerLabelHy: 'Նատալիա',
    textEs: 'No, miedo no, tuve mucha adrenalina.',
    textHy: 'Ո՛չ, վախ՝ ոչ, մեծ ադրենալին ունեի։',
  },
  {
    id: 6,
    timeSec: 14,
    timeLabel: '0:14',
    speaker: 'Entrevistador',
    speakerLabelHy: 'Հարցազրուցավար',
    textEs: '¿Confianza acá en el compañero de piloto?',
    textHy: 'Վստահությո՞ւն կա այստեղ գործընկեր օդաչուի նկատմամբ։',
  },
  {
    id: 7,
    timeSec: 16,
    timeLabel: '0:16',
    speaker: 'Natalia',
    speakerLabelHy: 'Նատալիա',
    textEs: '¿Y a vos qué te parece?',
    textHy: 'Իսկ քեզ ի՞նչ է թվում։',
  },
  {
    id: 8,
    timeSec: 17,
    timeLabel: '0:17',
    speaker: 'Entrevistador',
    speakerLabelHy: 'Հարցազրուցավար',
    textEs: 'Si no, de otra manera no hubieras subido.',
    textHy: 'Այլապես այլ կերպ վեր չէիր բարձրանա [ինքնաթիռ չէիր նստի]։',
  },
  {
    id: 9,
    timeSec: 19,
    timeLabel: '0:19',
    speaker: 'Natalia',
    speakerLabelHy: 'Նատալիա',
    textEs: 'O sea, si yo no me subía, se terminaba la novela acá.',
    textHy: 'Այսինքն, եթե ես չնստեի, սերիալն այստեղ կավարտվեր։',
  },
  {
    id: 10,
    timeSec: 22,
    timeLabel: '0:22',
    speaker: 'Natalia',
    speakerLabelHy: 'Նատալիա',
    textEs: 'Era como que no tenía otro remedio.',
    textHy: 'Այնպես էր, կարծես ուրիշ ճար չունեի։',
  },
  {
    id: 11,
    timeSec: 25,
    timeLabel: '0:25',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'Y si vos no aterrizabas, también.',
    textHy: 'Իսկ եթե դու վայրէջք չկատարեիր՝ նույնպես։',
  },
  {
    id: 12,
    timeSec: 27,
    timeLabel: '0:27',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'Se acababa la novela también, no, pero estaba...',
    textHy: 'Սերիալը նույնպես կավարտվեր, չէ՛, բայց...',
  },
  {
    id: 13,
    timeSec: 29,
    timeLabel: '0:29',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'Todo lo que hicimos hoy lo venimos preparando hace mucho tiempo.',
    textHy: 'Այն ամենը, ինչ այսօր արեցինք, մենք վաղուց էինք նախապատրաստում։',
  },
  {
    id: 14,
    timeSec: 35,
    timeLabel: '0:35',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'Tenemos acá gente muy profesional que está absolutamente capacitada, está todo muy coreografiado.',
    textHy: 'Մենք այստեղ ունենք շատ պրոֆեսիոնալ մարդիկ, որոնք լիովին որակավորված են, ամեն ինչ շատ մանրակրկիտ բեմադրված էր։',
  },
  {
    id: 15,
    timeSec: 39,
    timeLabel: '0:39',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'O sea, no fue que dijimos, che, vamos a volar y nos pusimos a dar vueltas en un avión, ¿entendés?',
    textHy: 'Այսինքն, այնպես չէր, որ ասացինք՝ «լսի՛ր, արի թռչենք» ու սկսեցինք պտույտներ գործել ինքնաթիռով, հասկանո՞ւմ ես։',
  },
  {
    id: 16,
    timeSec: 43,
    timeLabel: '0:43',
    speaker: 'Entrevistador',
    speakerLabelHy: 'Հարցազրուցավար',
    textEs: '¿Cómo están viviendo esto de que ser los número uno de la televisión argentina?',
    textHy: 'Ինչպե՞ս եք ընկալում այն, որ արգենտինական հեռուստատեսության թիվ մեկն եք։',
  },
  {
    id: 17,
    timeSec: 49,
    timeLabel: '0:49',
    speaker: 'Natalia',
    speakerLabelHy: 'Նատալիա',
    textEs: 'Impresionante.',
    textHy: 'Տպավորիչ է։',
  },
  {
    id: 18,
    timeSec: 49,
    timeLabel: '0:49',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'No, qué sé yo.',
    textHy: 'Չգիտեմ, ի՜նչ ասեմ։',
  },
  {
    id: 19,
    timeSec: 50,
    timeLabel: '0:50',
    speaker: 'Natalia',
    speakerLabelHy: 'Նատալիա',
    textEs: 'Felices.',
    textHy: 'Երջանիկ ենք։',
  },
  {
    id: 20,
    timeSec: 51,
    timeLabel: '0:51',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'Es una responsabilidad muy grande y mucho trabajo.',
    textHy: 'Դա շատ մեծ պատասխանատվություն է և մեծ աշխատանք։',
  },
  {
    id: 21,
    timeSec: 53,
    timeLabel: '0:53',
    speaker: 'Entrevistador',
    speakerLabelHy: 'Հարցազրուցավար',
    textEs: '¿Tomaron conciencia de eso?',
    textHy: 'Գիտակցե՞լ եք դա։',
  },
  {
    id: 22,
    timeSec: 54,
    timeLabel: '0:54',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'No se toma conciencia de eso, se sueña cuando todavía no empezaste.',
    textHy: 'Դա չես գիտակցում, դրա մասին երազում ես, երբ դեռ չես սկսել։',
  },
  {
    id: 23,
    timeSec: 59,
    timeLabel: '0:59',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'Y si pasa, es agradecer muchísimo, pero a todos los actores nos gustaría que a todos nos vaya muy bien.',
    textHy: 'Եվ եթե դա տեղի է ունենում, պետք է շատ շնորհակալ լինել, բայց բոլորս՝ դերասաններս, կցանկանայինք, որ բոլորիս գործերը շատ լավ ընթանան։',
  },
  {
    id: 24,
    timeSec: 66,
    timeLabel: '1:06',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: '¿Entendés? Entonces es un tema medio delicado ese, hablar de, uh, mirá, hiciste 30 puntos.',
    textHy: 'Հասկանո՞ւմ ես։ Այնպես որ դա մի քիչ նուրբ թեմա է՝ խոսել այն մասին, որ «վա՜ու, նայի՛ր, 30 միավոր [ռեյտինգ] եք հավաքել»։',
  },
  {
    id: 25,
    timeSec: 70,
    timeLabel: '1:10',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'No, todo pasa.',
    textHy: 'Ո՛չ, ամեն ինչ անցողիկ է։',
  },
  {
    id: 26,
    timeSec: 72,
    timeLabel: '1:12',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'Es lo que hablamos siempre. O sea, hoy nos va súper bien y mañana nos va más o menos.',
    textHy: 'Դա այն է, ինչ մենք միշտ ասում ենք։ Այսինքն, այսօր մեր գործերը հիանալի են ընթանում, իսկ վաղը՝ միջակ։',
  },
  {
    id: 27,
    timeSec: 75,
    timeLabel: '1:15',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'Y está bueno disfrutar el momento que estás pasando.',
    textHy: 'Եվ լավ է վայելել այն պահը, որի միջով անցնում ես։',
  },
  {
    id: 28,
    timeSec: 78,
    timeLabel: '1:18',
    speaker: 'Entrevistador',
    speakerLabelHy: 'Հարցազրուցավար',
    textEs: 'Pero hoy son la pareja del año y en el aire.',
    textHy: 'Բայց այսօր դուք տարվա զույգն եք և՛ օդում, և՛ եթերում։',
  },
  {
    id: 29,
    timeSec: 80,
    timeLabel: '1:20',
    speaker: 'Facundo',
    speakerLabelHy: 'Ֆակունդո',
    textEs: 'En el aire.',
    textHy: 'Եթերում [օդում]։',
  },
];

export const NOTE_003 = {
  es: 'Nota sobre el minuto 0:03: La expresión transcrita como «terminar el plan» puede contener un posible error de reconocimiento auditivo en la fuente. Se conserva en el texto original, pero se aconseja verificar la pronunciación exacta por el sonido. No se evalúa en las preguntas.',
  hy: 'Ծանոթագրություն 0:03 րոպեի վերաբերյալ. «terminar el plan» արտահայտությունը կարող է պարունակել ձայնային ճանաչման անճշտություն սկզբնաղբյուրում։ Այն պահպանված է նույնությամբ, սակայն խորհուրդ է տրվում ճշգրիտ ձևակերպումը լսել աուդիոյով։ Ոչ մի թեստային հարց կառուցված չէ այս արտահայտության վրա։',
};

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id: 1,
    questionEs: '¿Qué era lo más importante para Natalia durante el vuelo?',
    questionHy: 'Թռիչքի ընթացքում ի՞նչն էր Նատալիայի համար ամենակարևորը։',
    optionsEs: [
      'Volar más alto.',
      'Aterrizar.',
      'Sacar fotos.',
      'Hablar con el periodista.',
    ],
    optionsHy: [
      'Ավելի բարձր թռչելը։',
      'Վայրէջք կատարելը։',
      'Լուսանկարելը։',
      'Լրագրողի հետ խոսելը։',
    ],
    correctIndex: 1, // B: Aterrizar.
    explanationEs: 'Para Natalia, lo verdaderamente importante tras subir al avión era poder aterrizar con éxito.',
    explanationHy: 'Նատալիայի համար ինքնաթիռ բարձրանալուց հետո ամենակարևորը հաջող վայրէջք կատարելն էր։',
    quoteEs: '«...lo importante era aterrizar.»',
    quoteHy: '«...ամենակարևորը վայրէջք կատարելն էր։»',
    timecode: '0:03',
    timeSec: 3,
  },
  {
    id: 2,
    questionEs: '¿Cómo describe Natalia la experiencia?',
    questionHy: 'Նատալիան ինչպե՞ս է նկարագրում այդ փորձառությունը։',
    optionsEs: [
      'Aburrida.',
      'Desagradable.',
      'Muy emocionante.',
      'Tranquila y habitual.',
    ],
    optionsHy: [
      'Ձանձրալի։',
      'Տհաճ։',
      'Շատ հուզիչ ու ոգևորիչ։',
      'Հանգիստ ու սովորական։',
    ],
    correctIndex: 2, // C: Muy emocionante.
    explanationEs: 'Natalia afirma con entusiasmo: «No, re contenta, fue una experiencia súper excitante, me encantó».',
    explanationHy: 'Նատալիան խանդավառությամբ ասում է. «Չէ, չափազանց գոհ եմ, անչափ հուզիչ փորձառություն էր, ես հիացած եմ»։',
    quoteEs: '«No, re contenta, fue una experiencia súper excitante, me encantó.»',
    quoteHy: '«Չէ, չափազանց գոհ եմ, անչափ հուզիչ փորձառություն էր, ես հիացած եմ։»',
    timecode: '0:08',
    timeSec: 8,
  },
  {
    id: 3,
    questionEs: '¿Qué sintió Natalia?',
    questionHy: 'Ի՞նչ զգաց Նատալիան։',
    optionsEs: [
      'Mucha adrenalina, pero no miedo.',
      'Mucho miedo y arrepentimiento.',
      'Sueño y cansancio.',
      'Enojo con su compañero.',
    ],
    optionsHy: [
      'Շատ ադրենալին, բայց ոչ վախ։',
      'Մեծ վախ և զղջում։',
      'Քնկոտություն և հոգնածություն։',
      'Զայրույթ իր գործընկերոջ հանդեպ։',
    ],
    correctIndex: 0, // A: Mucha adrenalina, pero no miedo.
    explanationEs: 'Al preguntarle si tuvo miedo, ella responde claramente que no tuvo miedo, sino mucha adrenalina.',
    explanationHy: 'Վախի մասին հարցին Նատալիան հստակ պատասխանում է, որ վախ չի ունեցել, այլ շատ ադրենալին։',
    quoteEs: '«No, miedo no, tuve mucha adrenalina.»',
    quoteHy: '«Ո՛չ, վախ՝ ոչ, մեծ ադրենալին ունեի։»',
    timecode: '0:12',
    timeSec: 12,
  },
  {
    id: 4,
    questionEs: '¿Qué le pregunta el periodista sobre su compañero?',
    questionHy: 'Լրագրողն ի՞նչ է հարցնում նրա գործընկերոջ մասին։',
    optionsEs: [
      'Si trabajan juntos por primera vez.',
      'Si él tiene miedo.',
      'Si ella conoce a su familia.',
      'Si confía en él como piloto.',
    ],
    optionsHy: [
      'Արդյոք նրանք առաջին անգամ են միասին աշխատում։',
      'Արդյոք նա վախենում է։',
      'Արդյոք նա ճանաչում է գործընկերոջ ընտանիքին։',
      'Արդյոք նա վստահում է գործընկերոջը՝ որպես օդաչուի։',
    ],
    correctIndex: 3, // D: Si confía en él como piloto.
    explanationEs: 'El entrevistador le pregunta textualmente: «¿Confianza acá en el compañero de piloto?».',
    explanationHy: 'Լրագրողը բառացի հարցնում է. «Վստահությո՞ւն կա այստեղ գործընկեր օդաչուի նկատմամբ»։',
    quoteEs: '«¿Confianza acá en el compañero de piloto? — ¿Y a vos qué te parece?»',
    quoteHy: '«Վստահությո՞ւն կա այստեղ գործընկեր օդաչուի նկատմամբ։ — Իսկ քեզ ի՞նչ է թվում։»',
    timecode: '0:14',
    timeSec: 14,
  },
  {
    id: 5,
    questionEs: '¿Qué dice Natalia en broma sobre no subir al avión?',
    questionHy: 'Նատալիան ի՞նչ է կատակով ասում ինքնաթիռ չնստելու մասին։',
    optionsEs: [
      'Que el periodista tendría que subir.',
      'Que la novela se terminaría allí.',
      'Que viajarían en coche.',
      'Que buscarían otro avión.',
    ],
    optionsHy: [
      'Որ լրագրողը ստիպված կլիներ նստել ինքնաթիռ։',
      'Որ սերիալը հենց այնտեղ կավարտվեր։',
      'Որ նրանք մեքենայով կգնային։',
      'Որ ուրիշ ինքնաթիռ կփնտրեին։',
    ],
    correctIndex: 1, // B: Que la novela se terminaría allí.
    explanationEs: 'Natalia bromea diciendo: «O sea, si yo no me subía, se terminaba la novela acá».',
    explanationHy: 'Նատալիան կատակով ասում է. «Այսինքն, եթե ես չնստեի, սերիալն այստեղ կավարտվեր»։',
    quoteEs: '«O sea, si yo no me subía, se terminaba la novela acá.»',
    quoteHy: '«Այսինքն, եթե ես չնստեի, սերիալն այստեղ կավարտվեր։»',
    timecode: '0:19',
    timeSec: 19,
  },
  {
    id: 6,
    questionEs: '¿Qué significa «no tenía otro remedio» en este contexto?',
    questionHy: 'Այս համատեքստում ի՞նչ է նշանակում «no tenía otro remedio» արտահայտությունը։',
    optionsEs: [
      'No tenía medicamentos.',
      'No entendía la situación.',
      'No tenía otra opción.',
      'No quería hablar.',
    ],
    optionsHy: [
      'Դեղեր չուներ։',
      'Չէր հասկանում իրավիճակը։',
      'Այլ տարբերակ չուներ։',
      'Չէր ուզում խոսել։',
    ],
    correctIndex: 2, // C: No tenía otra opción.
    explanationEs: 'La expresión «no tener otro remedio» significa «no tener otra opción o alternativa viable».',
    explanationHy: '«No tener otro remedio» արտահայտությունը նշանակում է այլընտրանք, ելք կամ այլ տարբերակ չունենալ։',
    quoteEs: '«Era como que no tenía otro remedio.»',
    quoteHy: '«Այնպես էր, կարծես ուրիշ ճար չունեի։»',
    timecode: '0:22',
    timeSec: 22,
  },
  {
    id: 7,
    questionEs: '¿Desde cuándo preparaban lo que hicieron ese día?',
    questionHy: 'Որքա՞ն ժամանակ էր, որ պատրաստվում էին այդ օրվա նկարահանումներին։',
    optionsEs: [
      'Desde hacía mucho tiempo.',
      'Desde hacía unos minutos.',
      'Desde esa misma mañana.',
      'No lo habían preparado.',
    ],
    optionsHy: [
      'Արդեն երկար ժամանակ։',
      'Ընդամենը մի քանի րոպե։',
      'Հենց այդ առավոտվանից։',
      'Նախապես չէին պատրաստվել։',
    ],
    correctIndex: 0, // A: Desde hacía mucho tiempo.
    explanationEs: 'Facundo subraya: «Todo lo que hicimos hoy lo venimos preparando hace mucho tiempo».',
    explanationHy: 'Ֆակունդոն շեշտում է. «Այն ամենը, ինչ այսօր արեցինք, մենք վաղուց էինք նախապատրաստում»։',
    quoteEs: '«Todo lo que hicimos hoy lo venimos preparando hace mucho tiempo.»',
    quoteHy: '«Այն ամենը, ինչ այսօր արեցինք, մենք վաղուց էինք նախապատրաստում։»',
    timecode: '0:29',
    timeSec: 29,
  },
  {
    id: 8,
    questionEs: '¿Cómo describen al equipo que los acompaña?',
    questionHy: 'Ինչպե՞ս են նկարագրում իրենց հետ աշխատող թիմին։',
    optionsEs: [
      'Como un grupo de aficionados.',
      'Como personas sin experiencia.',
      'Como amigos que fueron a mirar.',
      'Como profesionales muy capacitados.',
    ],
    optionsHy: [
      'Որպես սիրողական խումբ։',
      'Որպես անփորձ մարդիկ։',
      'Որպես ընկերներ, որոնք եկել էին դիտելու։',
      'Որպես շատ լավ պատրաստված մասնագետներ։',
    ],
    correctIndex: 3, // D: Como profesionales muy capacitados.
    explanationEs: 'Facundo indica que contaban con profesionales del más alto nivel: «Tenemos acá gente muy profesional que está absolutamente capacitada».',
    explanationHy: 'Ֆակունդոն նշում է, որ իրենց հետ աշխատում էին շատ լավ պատրաստված ու որակավորված մասնագետներ։',
    quoteEs: '«Tenemos acá gente muy profesional que está absolutamente capacitada, está todo muy coreografiado.»',
    quoteHy: '«Մենք այստեղ ունենք շատ պրոֆեսիոնալ մարդիկ, որոնք լիովին որակավորված են...»',
    timecode: '0:35',
    timeSec: 35,
  },
  {
    id: 9,
    questionEs: '¿Qué quieren aclarar cuando dicen que no decidieron simplemente «vamos a volar»?',
    questionHy: 'Ի՞նչ են ուզում պարզաբանել՝ ասելով, որ պարզապես չեն որոշել՝ «գնանք թռչելու»։',
    optionsEs: [
      'Que no querían trabajar ese día.',
      'Que todo estaba preparado y organizado.',
      'Que prefieren viajar en tren.',
      'Que el vuelo no formaba parte del trabajo.',
    ],
    optionsHy: [
      'Որ այդ օրը չէին ուզում աշխատել։',
      'Որ ամեն ինչ նախապես պատրաստված ու կազմակերպված էր։',
      'Որ նախընտրում են գնացքով ճանապարհորդել։',
      'Որ թռիչքը աշխատանքի մաս չէր կազմում։',
    ],
    correctIndex: 1, // B: Que todo estaba preparado y organizado.
    explanationEs: 'Facundo explica que no fue una ocurrencia espontánea sin control, sino un trabajo coordinado y ensayado.',
    explanationHy: 'Ֆակունդոն պարզաբանում է, որ դա չմտածված որոշում չէր, այլ ամեն ինչ նախապես պատրաստված ու կազմակերպված էր։',
    quoteEs: '«O sea, no fue que dijimos, che, vamos a volar y nos pusimos a dar vueltas en un avión, ¿entendés?»',
    quoteHy: '«Այսինքն, այնպես չէր, որ ասացինք՝ «լսի՛ր, արի թռչենք» ու սկսեցինք պտույտներ գործել...»',
    timecode: '0:39',
    timeSec: 39,
  },
  {
    id: 10,
    questionEs: '¿Qué significa «novela» en esta entrevista?',
    questionHy: 'Այս հարցազրույցում ի՞նչ է նշանակում «novela» բառը։',
    optionsEs: [
      'Una noticia.',
      'Una novela escrita.',
      'Una serie de televisión.',
      'Una obra de teatro.',
    ],
    optionsHy: [
      'Լուր։',
      'Գրական վեպ։',
      'Հեռուստասերիալ։',
      'Թատերական ներկայացում։',
    ],
    correctIndex: 2, // C: Una serie de televisión.
    explanationEs: 'En Argentina y en la televisión hispana, «novela» es la forma habitual y coloquial de referirse a la telenovela diaria.',
    explanationHy: 'Այս համատեքստում «novela» բառը նշանակում է հեռուստասերիալ (տելենովելա)։',
    quoteEs: '«...se terminaba la novela acá.»',
    quoteHy: '«...սերիալն այստեղ կավարտվեր։»',
    timecode: '0:19',
    timeSec: 19,
  },
  {
    id: 11,
    questionEs: '¿Cómo se sienten al hablar de su éxito en la televisión?',
    questionHy: 'Ինչպե՞ս են իրենց զգում՝ խոսելով հեռուստատեսությունում իրենց հաջողության մասին։',
    optionsEs: [
      'Felices.',
      'Decepcionados.',
      'Indiferentes.',
      'Enfadados.',
    ],
    optionsHy: [
      'Երջանիկ։',
      'Հիասթափված։',
      'Անտարբեր։',
      'Զայրացած։',
    ],
    correctIndex: 0, // A: Felices.
    explanationEs: 'Natalia responde con espontaneidad y entusiasmo: «Felices».',
    explanationHy: 'Նատալիան անմիջապես և ուրախությամբ պատասխանում է՝ «Երջանիկ» (Felices)։',
    quoteEs: '«¿Cómo están viviendo esto de que ser los número uno...? — Impresionante... Felices.»',
    quoteHy: '«Ինչպե՞ս եք ընկալում թիվ մեկը լինելը... — Տպավորիչ է... Երջանիկ ենք։»',
    timecode: '0:50',
    timeSec: 50,
  },
  {
    id: 12,
    questionEs: '¿Con qué relacionan ese éxito?',
    questionHy: 'Ինչի՞ հետ են կապում այդ հաջողությունը։',
    optionsEs: [
      'Con tener mucho tiempo libre.',
      'Con dejar de esforzarse.',
      'Con trabajar menos.',
      'Con una gran responsabilidad y mucho trabajo.',
    ],
    optionsHy: [
      'Շատ ազատ ժամանակ ունենալու հետ։',
      'Այլևս ջանք չգործադրելու հետ։',
      'Ավելի քիչ աշխատելու հետ։',
      'Մեծ պատասխանատվության և շատ աշխատանքի հետ։',
    ],
    correctIndex: 3, // D: Con una gran responsabilidad y mucho trabajo.
    explanationEs: 'Facundo explica de inmediato que mantenerse en la cima exige rigor: «Es una responsabilidad muy grande y mucho trabajo».',
    explanationHy: 'Ֆակունդոն շեշտում է, որ առաջինը լինելը կապված է մեծ պատասխանատվության և շատ աշխատանքի հետ։',
    quoteEs: '«Es una responsabilidad muy grande y mucho trabajo.»',
    quoteHy: '«Դա շատ մեծ պատասխանատվություն է և մեծ աշխատանք։»',
    timecode: '0:51',
    timeSec: 51,
  },
  {
    id: 13,
    questionEs: '¿Qué desean para los demás actores?',
    questionHy: 'Ի՞նչ են ցանկանում մյուս դերասաններին։',
    optionsEs: [
      'Que cambien de profesión.',
      'Que también les vaya muy bien.',
      'Que dejen de competir.',
      'Que trabajen solamente con ellos.',
    ],
    optionsHy: [
      'Որ փոխեն իրենց մասնագիտությունը։',
      'Որ նրանց գործերն էլ շատ լավ ընթանան։',
      'Որ դադարեն մրցակցել։',
      'Որ աշխատեն միայն իրենց հետ։',
    ],
    correctIndex: 1, // B: Que también les vaya muy bien.
    explanationEs: 'Facundo muestra gran solidaridad con sus colegas de profesión: «A todos los actores nos gustaría que a todos nos vaya muy bien».',
    explanationHy: 'Ֆակունդոն մաղթում է, որ բոլոր դերասանների գործերն էլ շատ լավ ընթանան։',
    quoteEs: '«...a todos los actores nos gustaría que a todos nos vaya muy bien.»',
    quoteHy: '«...բոլորս՝ դերասաններս, կցանկանայինք, որ բոլորիս գործերը շատ լավ ընթանան։»',
    timecode: '0:59',
    timeSec: 59,
  },
  {
    id: 14,
    questionEs: '¿Qué idea expresa la frase «hoy nos va súper bien y mañana nos va más o menos»?',
    questionHy: 'Ի՞նչ միտք է արտահայտում «այսօր մեր գործերը շատ լավ են ընթանում, իսկ վաղը՝ միջին» արտահայտությունը։',
    optionsEs: [
      'El éxito siempre dura igual.',
      'El futuro no tiene importancia.',
      'El éxito puede cambiar.',
      'Mañana dejarán de trabajar.',
    ],
    optionsHy: [
      'Հաջողությունը միշտ նույնն է մնում։',
      'Ապագան կարևոր չէ։',
      'Հաջողությունը կարող է փոխվել։',
      'Վաղը նրանք կդադարեն աշխատել։',
    ],
    correctIndex: 2, // C: El éxito puede cambiar.
    explanationEs: 'La frase resume que en la televisión y en la vida las etapas son pasajeras: «todo pasa», el éxito es variable y puede cambiar.',
    explanationHy: 'Այս արտահայտությունը ցույց է տալիս, որ հաջողությունը կարող է փոխվել և անցողիկ է։',
    quoteEs: '«No, todo pasa... O sea, hoy nos va súper bien y mañana nos va más o menos.»',
    quoteHy: '«Ո՛չ, ամեն ինչ անցողիկ է... Այսօր մեր գործերը հիանալի են, վաղը՝ միջակ։»',
    timecode: '1:10',
    timeSec: 70,
  },
  {
    id: 15,
    questionEs: '¿Qué consideran importante al final de la entrevista?',
    questionHy: 'Հարցազրույցի վերջում ի՞նչն են կարևոր համարում։',
    optionsEs: [
      'Disfrutar del momento que están viviendo.',
      'Compararse constantemente con otros.',
      'Pensar solamente en los índices de audiencia.',
      'Hacer planes para dejar la televisión.',
    ],
    optionsHy: [
      'Վայելել այն պահը, որն ապրում են։',
      'Անընդհատ համեմատվել ուրիշների հետ։',
      'Մտածել միայն վարկանիշների մասին։',
      'Հեռուստատեսությունից հեռանալու ծրագրեր կազմել։',
    ],
    correctIndex: 0, // A: Disfrutar del momento que están viviendo.
    explanationEs: 'Facundo concluye con una lúcida reflexión: «Y está bueno disfrutar el momento que estás pasando».',
    explanationHy: 'Ֆակունդոն եզրափակում է հարցազրույցը՝ նշելով, որ կարևոր է վայելել այն պահը, որն ապրում ես։',
    quoteEs: '«Y está bueno disfrutar el momento que estás pasando.»',
    quoteHy: '«Եվ լավ է վայելել այն պահը, որի միջով անցնում ես։»',
    timecode: '1:15',
    timeSec: 75,
  },
];

export const TRUE_FALSE_DATA: TrueFalseItem[] = [
  {
    id: 1,
    statementEs: 'Natalia sintió tanto pánico durante el vuelo que no pudo disfrutarlo.',
    statementHy: 'Նատալիան թռիչքի ժամանակ այնքան մեծ խուճապ զգաց, որ չկարողացավ վայելել այն։',
    isTrue: false,
    explanationEs: 'Falso. Natalia afirmó expresamente que no sintió miedo y que le encantó la experiencia («re contenta»).',
    explanationHy: 'Սխալ է։ Նատալիան հստակ նշեց, որ վախ չի զգացել և հիացած է եղել փորձառությամբ («re contenta»):',
    quoteEs: '«No, miedo no, tuve mucha adrenalina... fue una experiencia súper excitante, me encantó.»',
    quoteHy: '«Ո՛չ, վախ՝ ոչ, մեծ ադրենալին ունեի... անչափ հուզիչ փորձառություն էր, ես հիացած եմ։»',
    timecode: '0:08',
    timeSec: 8,
  },
  {
    id: 2,
    statementEs: 'Para Natalia, la adrenalina reemplazó al sentimiento de miedo.',
    statementHy: 'Նատալիայի համար ադրենալինը փոխարինեց վախի զգացողությանը։',
    isTrue: true,
    explanationEs: 'Verdadero. Al consultarle si tuvo miedo, contestó: «No, miedo no, tuve mucha adrenalina».',
    explanationHy: 'Ճիշտ է։ Երբ նրան հարցրին վախի մասին, նա պատասխանեց. «Ո՛չ, վախ՝ ոչ, մեծ ադրենալին ունեի»։',
    quoteEs: '«No, miedo no, tuve mucha adrenalina.»',
    quoteHy: '«Ո՛չ, վախ՝ ոչ, մեծ ադրենալին ունեի։»',
    timecode: '0:12',
    timeSec: 12,
  },
  {
    id: 3,
    statementEs: 'La escena aérea fue decidida de improviso ese mismo día sin preparación previa.',
    statementHy: 'Օդային տեսարանը որոշվել էր հանկարծակի՝ հենց այդ օրը, առանց նախնական պատրաստության։',
    isTrue: false,
    explanationEs: 'Falso. Facundo explicó que venían preparando todo desde hacía mucho tiempo.',
    explanationHy: 'Սխալ է։ Ֆակունդոն բացատրեց, որ նրանք ամեն ինչ նախապատրաստում էին վաղուց։',
    quoteEs: '«Todo lo que hicimos hoy lo venimos preparando hace mucho tiempo.»',
    quoteHy: '«Այն ամենը, ինչ այսօր արեցինք, մենք վաղուց էինք նախապատրաստում։»',
    timecode: '0:29',
    timeSec: 29,
  },
  {
    id: 4,
    statementEs: 'El equipo contaba con profesionales capacitados y las maniobras estaban coreografiadas.',
    statementHy: 'Անձնակազմն ուներ որակավորված մասնագետներ, իսկ հնարքները մանրակրկիտ բեմադրված էին։',
    isTrue: true,
    explanationEs: 'Verdadero. Facundo destaca que había gente absolutamente capacitada y todo estaba muy coreografiado.',
    explanationHy: 'Ճիշտ է։ Ֆակունդոն ընդգծում է, որ կային լիովին որակավորված մարդիկ, և ամեն ինչ բեմադրված էր։',
    quoteEs: '«Tenemos acá gente muy profesional que está absolutamente capacitada, está todo muy coreografiado.»',
    quoteHy: '«Մենք այստեղ ունենք շատ պրոֆեսիոնալ մարդիկ, որոնք լիովին որակավորված են...»',
    timecode: '0:35',
    timeSec: 35,
  },
  {
    id: 5,
    statementEs: 'Natalia bromeó con que si ella no subía o no aterrizaban, la telenovela se terminaba.',
    statementHy: 'Նատալիան կատակեց, որ եթե ինքը չբարձրանար կամ վայրէջք չկատարեին, հեռուստասերիալը կավարտվեր։',
    isTrue: true,
    explanationEs: 'Verdadero. Ambos bromearon con que la novela llegaría a su fin si algo salía mal o no subían.',
    explanationHy: 'Ճիշտ է։ Երկուսն էլ կատակեցին, որ սերիալն այնտեղ կավարտվեր, եթե նա չբարձրանար կամ չվայրէջքեին։',
    quoteEs: '«O sea, si yo no me subía, se terminaba la novela acá... Y si vos no aterrizabas, también.»',
    quoteHy: '«Այսինքն, եթե ես չնստեի, սերիալն այստեղ կավարտվեր... Իսկ եթե դու վայրէջք չկատարեիր՝ նույնպես։»',
    timecode: '0:19',
    timeSec: 19,
  },
  {
    id: 6,
    statementEs: 'Facundo afirma que cuando uno es el número uno, solo piensa en presumir los 30 puntos de audiencia.',
    statementHy: 'Ֆակունդոն պնդում է, որ թիվ մեկը լինելիս մարդ միայն մտածում է լսարանի 30 միավորով պարծենալու մասին։',
    isTrue: false,
    explanationEs: 'Falso. Para Facundo es un tema delicado y prefiere la humildad, deseándole éxito a todos los compañeros.',
    explanationHy: 'Սխալ է։ Ֆակունդոյի համար դա նուրբ թեմա է, և նա նախընտրում է համեստություն՝ հաջողություն մաղթելով բոլոր գործընկերներին։',
    quoteEs: '«Entonces es un tema medio delicado ese, hablar de, uh, mirá, hiciste 30 puntos... a todos los actores nos gustaría que a todos nos vaya muy bien.»',
    quoteHy: '«Այնպես որ դա մի քիչ նուրբ թեմա է՝ խոսել այն մասին, որ «հասար 30 միավորի»...»',
    timecode: '1:06',
    timeSec: 66,
  },
  {
    id: 7,
    statementEs: 'Según los actores, el éxito en la televisión es permanente y nunca disminuye.',
    statementHy: 'Ըստ դերասանների՝ հաջողությունը հեռուստատեսությունում մշտական է և երբեք չի նվազում։',
    isTrue: false,
    explanationEs: 'Falso. Facundo dice claramente que «todo pasa»: hoy te va súper bien y mañana más o menos.',
    explanationHy: 'Սխալ է։ Ֆակունդոն հստակ ասում է, որ «ամեն ինչ անցողիկ է» (todo pasa)՝ այսօր գործերդ հիանալի են, վաղը՝ միջակ։',
    quoteEs: '«No, todo pasa... O sea, hoy nos va súper bien y mañana nos va más o menos.»',
    quoteHy: '«Ո՛չ, ամեն ինչ անցողիկ է... Այսօր գործերդ հիանալի են, վաղը՝ միջակ։»',
    timecode: '1:10',
    timeSec: 70,
  },
  {
    id: 8,
    statementEs: 'La expresión «en el aire» funciona con doble sentido: en el cielo con el avión y en transmisión televisiva.',
    statementHy: '«En el aire» արտահայտությունն աշխատում է երկակի իմաստով՝ երկնքում (ինքնաթիռով) և հեռուստատեսային եթերում։',
    isTrue: true,
    explanationEs: 'Verdadero. El periodista juega con el juego de palabras: «la pareja del año y en el aire».',
    explanationHy: 'Ճիշտ է։ Լրագրողն օգտագործում է բառախաղը՝ «տարվա զույգը և՛ օդում, և՛ եթերում»։',
    quoteEs: '«Pero hoy son la pareja del año y en el aire. — En el aire.»',
    quoteHy: '«Բայց այսօր դուք տարվա զույգն եք և՛ օդում, և՛ եթերում։ — Եթերում։»',
    timecode: '1:18',
    timeSec: 78,
  },
];

export const SENTENCE_COMPLETION_DATA: SentenceCompletionItem[] = [
  {
    id: 1,
    sentenceWithBlankEs: 'No, re contenta, fue una experiencia súper excitante, me ______.',
    sentenceHy: 'Չէ, չափազանց գոհ եմ, անչափ հուզիչ փորձառություն էր, ես հիացած եմ [ինձ շատ դուր եկավ]։',
    missingWord: 'encantó',
    options: ['asustó', 'encantó', 'aburrió'],
    correctOptionIndex: 1,
    explanationEs: 'Natalia utiliza «me encantó» para expresar lo mucho que disfrutó la experiencia.',
    explanationHy: 'Նատալիան օգտագործում է «me encantó» (շատ դուր եկավ, հիացրեց)՝ արտահայտելու իր մեծ բավականությունը։',
    timecode: '0:08',
    timeSec: 8,
  },
  {
    id: 2,
    sentenceWithBlankEs: 'No, miedo no, tuve mucha ______.',
    sentenceHy: 'Ո՛չ, վախ՝ ոչ, մեծ ադրենալին ունեի։',
    missingWord: 'adrenalina',
    options: ['adrenalina', 'tristeza', 'pereza'],
    correctOptionIndex: 0,
    explanationEs: 'En lugar de miedo, Natalia sintió «adrenalina» por la velocidad y la emoción.',
    explanationHy: 'Վախի փոխարեն Նատալիան զգաց «ադրենալին» արագությունից և հուզմունքից։',
    timecode: '0:12',
    timeSec: 12,
  },
  {
    id: 3,
    sentenceWithBlankEs: 'O sea, si yo no me subía, se terminaba la ______ acá.',
    sentenceHy: 'Այսինքն, եթե ես չնստեի, սերիալն [նովելը] այստեղ կավարտվեր։',
    missingWord: 'novela',
    options: ['película', 'novela', 'música'],
    correctOptionIndex: 1,
    explanationEs: 'Se refiere a la telenovela («novela») que estaban protagonizando juntos («Sos mi vida»).',
    explanationHy: 'Խոսքը վերաբերում է հեռուստասերիալին («novela»), որտեղ նրանք գլխավոր դերերում էին։',
    timecode: '0:19',
    timeSec: 19,
  },
  {
    id: 4,
    sentenceWithBlankEs: 'Todo lo que hicimos hoy lo venimos preparando hace ______ tiempo.',
    sentenceHy: 'Այն ամենը, ինչ այսօր արեցինք, մենք վաղուց [շատ ժամանակ առաջ] էինք նախապատրաստում։',
    missingWord: 'mucho',
    options: ['poco', 'mucho', 'ningún'],
    correctOptionIndex: 1,
    explanationEs: 'Facundo aclara que requirió semanas o meses de preparación anticipada («hace mucho tiempo»).',
    explanationHy: 'Ֆակունդոն պարզաբանում է, որ պահանջվել է տևական նախապատրաստություն («hace mucho tiempo»):',
    timecode: '0:29',
    timeSec: 29,
  },
  {
    id: 5,
    sentenceWithBlankEs: 'Tenemos acá gente muy profesional que está absolutamente ______.',
    sentenceHy: 'Մենք այստեղ ունենք շատ պրոֆեսիոնալ մարդիկ, որոնք լիովին որակավորված [պատրաստված] են։',
    missingWord: 'capacitada',
    options: ['cansada', 'asustada', 'capacitada'],
    correctOptionIndex: 2,
    explanationEs: '«Capacitada» significa que poseen las calificaciones y habilidades profesionales adecuadas.',
    explanationHy: '«Capacitada» նշանակում է համապատասխան որակավորում և մասնագիտական պատրաստվածություն ունեցող։',
    timecode: '0:35',
    timeSec: 35,
  },
  {
    id: 6,
    sentenceWithBlankEs: 'Es una ______ muy grande y mucho trabajo.',
    sentenceHy: 'Դա շատ մեծ պատասխանատվություն է և մեծ աշխատանք։',
    missingWord: 'responsabilidad',
    options: ['responsabilidad', 'diversión', 'sorpresa'],
    correctOptionIndex: 0,
    explanationEs: 'Facundo describe el liderazgo en la televisión argentina como una «responsabilidad muy grande».',
    explanationHy: 'Ֆակունդոն արգենտինական հեռուստատեսությունում առաջատար լինելը բնութագրում է որպես «մեծ պատասխանատվություն»։',
    timecode: '0:51',
    timeSec: 51,
  },
  {
    id: 7,
    sentenceWithBlankEs: 'No, todo ______; hoy nos va súper bien y mañana nos va más o menos.',
    sentenceHy: 'Ո՛չ, ամեն ինչ անցողիկ է [անցնում է]։ Այսօր մեր գործերը հիանալի են, վաղը՝ միջակ։',
    missingWord: 'pasa',
    options: ['cambia', 'pasa', 'queda'],
    correctOptionIndex: 1,
    explanationEs: '«Todo pasa» es la frase clave que usa Facundo para reflexionar sobre la temporalidad del éxito.',
    explanationHy: '«Todo pasa» (ամեն ինչ անցնում է) բանալի արտահայտությունն է, որով Ֆակունդոն խոսում է հաջողության անցողիկության մասին։',
    timecode: '1:10',
    timeSec: 70,
  },
  {
    id: 8,
    sentenceWithBlankEs: 'Y está bueno ______ el momento que estás pasando.',
    sentenceHy: 'Եվ լավ է վայելել այն պահը, որի միջով անցնում ես։',
    missingWord: 'disfrutar',
    options: ['olvidar', 'disfrutar', 'cambiar'],
    correctOptionIndex: 1,
    explanationEs: 'Facundo aconseja «disfrutar» el presente en vez de obsesionarse con la fama futura.',
    explanationHy: 'Ֆակունդոն խորհուրդ է տալիս «վայելել» (disfrutar) ներկա պահը՝ ապագա փառքով տարվելու փոխարեն։',
    timecode: '1:15',
    timeSec: 75,
  },
];

export const EXPRESSION_PAIRS: ExpressionPair[] = [
  {
    id: 1,
    expressionEs: 're contenta',
    translationHy: 'չափազանց գոհ / շատ ուրախ',
    contextEs: '«No, re contenta, fue una experiencia súper excitante...»',
    contextHy: 'Խոսակցական «re-» նախածանցով ուժեղացում',
  },
  {
    id: 2,
    expressionEs: 'no tener otro remedio',
    translationHy: 'ուրիշ ճար/ելք չունենալ',
    contextEs: '«Era como que no tenía otro remedio.»',
    contextHy: 'Այլընտրանքի բացակայություն արտահայտող դարձվածք',
  },
  {
    id: 3,
    expressionEs: 'estar capacitado',
    translationHy: 'որակավորված / պատրաստված լինել',
    contextEs: '«...gente muy profesional que está absolutamente capacitada.»',
    contextHy: 'Մասնագիտական պատրաստվածություն',
  },
  {
    id: 4,
    expressionEs: 'dar vueltas',
    translationHy: 'պտույտներ գործել / պտտվել',
    contextEs: '«...y nos pusimos a dar vueltas en un avión, ¿entendés?»',
    contextHy: 'Օդում կամ տեղում շրջանաձև շարժվել',
  },
  {
    id: 5,
    expressionEs: 'tomar conciencia',
    translationHy: 'գիտակցել / ըմբռնել իրավիճակը',
    contextEs: '«¿Tomaron conciencia de eso? — No se toma conciencia de eso...»',
    contextHy: 'Իրականության լրջությունը հասկանալ',
  },
  {
    id: 6,
    expressionEs: 'ir bien / ir más o menos',
    translationHy: 'գործերը լավ / միջակ ընթանալ',
    contextEs: '«...hoy nos va súper bien y mañana nos va más o menos.»',
    contextHy: 'Հաջողության կամ վիճակի ընթացքը բնութագրել',
  },
  {
    id: 7,
    expressionEs: 'todo pasa',
    translationHy: 'ամեն ինչ անցողիկ է',
    contextEs: '«No, todo pasa. Es lo que hablamos siempre.»',
    contextHy: 'Փիլիսոփայական հայացք կյանքի վերելքներին',
  },
  {
    id: 8,
    expressionEs: 'en el aire',
    translationHy: 'օդում / եթերում (բառախաղ)',
    contextEs: '«Pero hoy son la pareja del año y en el aire.»',
    contextHy: 'Երկակի իմաստ՝ երկնքում թռչել և հեռուստաեթերում լինել',
  },
];

export const CONVERSATION_PROMPTS: ConversationPrompt[] = [
  {
    id: 1,
    category: 'interview',
    categoryLabelEs: 'Sobre la entrevista',
    categoryLabelHy: 'Հարցազրույցի վերաբերյալ',
    questionEs: '¿Por qué Natalia afirma que no tuvo miedo sino adrenalina?',
    questionHy: 'Ինչո՞ւ է Նատալիան պնդում, որ ոչ թե վախ է ունեցել, այլ ադրենալին։',
    starterEs: 'Creo que Natalia sintió adrenalina porque...',
    starterHy: 'Կարծում եմ՝ Նատալիան ադրենալին զգաց, որովհետև...',
    helperEs: 'Puedes mencionar la confianza en su compañero piloto, la emoción del momento y la preparación del equipo.',
    helperHy: 'Կարող ես նշել գործընկեր օդաչուի հանդեպ վստահությունը, պահի հուզմունքը և անձնակազմի պատրաստվածությունը։',
  },
  {
    id: 2,
    category: 'interview',
    categoryLabelEs: 'Sobre la entrevista',
    categoryLabelHy: 'Հարցազրույցի վերաբերյալ',
    questionEs: '¿Qué papel jugó la preparación profesional en la seguridad del vuelo según Facundo?',
    questionHy: 'Ի՞նչ դեր խաղաց մասնագիտական պատրաստությունը թռիչքի անվտանգության մեջ՝ ըստ Ֆակունդոյի։',
    starterEs: 'Según Facundo, la preparación fue fundamental porque...',
    starterHy: 'Ըստ Ֆակունդոյի՝ պատրաստությունը վճռորոշ էր, որովհետև...',
    helperEs: 'Usa frases como «todo estaba coreografiado», «gente muy profesional» y «hace mucho tiempo».',
    helperHy: 'Օգտագործիր այնպիսի արտահայտություններ, ինչպիսիք են՝ «ամեն ինչ բեմադրված էր», «շատ պրոֆեսիոնալ մարդիկ» և «վաղուց»։',
  },
  {
    id: 3,
    category: 'interview',
    categoryLabelEs: 'Sobre la entrevista',
    categoryLabelHy: 'Հարցազրույցի վերաբերյալ',
    questionEs: '¿Por qué para Facundo el éxito es «una responsabilidad muy grande y mucho trabajo»?',
    questionHy: 'Ինչո՞ւ է Ֆակունդոյի համար հաջողությունը «շատ մեծ պատասխանատվություն և մեծ աշխատանք»։',
    starterEs: 'En mi opinión, Facundo ve el éxito como una responsabilidad porque...',
    starterHy: 'Իմ կարծիքով՝ Ֆակունդոն հաջողությունը տեսնում է որպես պատասխանատվություն, որովհետև...',
    helperEs: 'Reflexiona sobre las expectativas del público, mantener el nivel y la disciplina que exige una novela diaria.',
    helperHy: 'Մտածիր հանդիսատեսի սպասումների, բարձր մակարդակը պահելու և ամենօրյա սերիալի պահանջած կարգապահության մասին։',
  },
  {
    id: 4,
    category: 'interview',
    categoryLabelEs: 'Sobre la entrevista',
    categoryLabelHy: 'Հարցազրույցի վերաբերյալ',
    questionEs: '¿Qué actitud demuestra Facundo hacia sus colegas actores cuando habla de los 30 puntos de audiencia?',
    questionHy: 'Ի՞նչ վերաբերմունք է դրսևորում Ֆակունդոն դերասան գործընկերների հանդեպ, երբ խոսում է լսարանի 30 միավորի մասին։',
    starterEs: 'Facundo muestra una actitud muy humilde y solidaria porque...',
    starterHy: 'Ֆակունդոն շատ համեստ և համերաշխ վերաբերմունք է դրսևորում, որովհետև...',
    helperEs: 'Explica por qué desea que «a todos nos vaya muy bien» y no le gusta presumir del rating.',
    helperHy: 'Բացատրիր, թե ինչու է նա ցանկանում, որ «բոլորիս գործերը լավ ընթանան» և չի սիրում պարծենալ ռեյտինգով։',
  },
  {
    id: 5,
    category: 'interview',
    categoryLabelEs: 'Sobre la entrevista',
    categoryLabelHy: 'Հարցազրույցի վերաբերյալ',
    questionEs: '¿Qué significa la frase de Facundo «hoy nos va súper bien y mañana nos va más o menos»?',
    questionHy: 'Ի՞նչ է նշանակում Ֆակունդոյի «այսօր մեր գործերը հիանալի են, վաղը՝ միջակ» արտահայտությունը։',
    starterEs: 'Esta frase significa que la fama y los logros son...',
    starterHy: 'Այս արտահայտությունը նշանակում է, որ փառքն ու նվաճումները...',
    helperEs: 'Habla de los altibajos de la vida artística y la importancia de no perder la cabeza con la fama.',
    helperHy: 'Խոսիր արտիստական կյանքի վերելքների ու վայրէջքների և փառքից գլուխը չկորցնելու մասին։',
  },
  {
    id: 6,
    category: 'personal',
    categoryLabelEs: 'Tu propia experiencia',
    categoryLabelHy: 'Քո անձնական փորձառությունը',
    questionEs: '¿Te gustaría volar en una avioneta o hacer acrobacias aéreas? ¿Por qué?',
    questionHy: 'Կցանկանայի՞ր թռչել թեթև ինքնաթիռով կամ օդային հնարքներ կատարել։ Ինչո՞ւ։',
    starterEs: 'A mí personalmente (sí / no) me gustaría volar en una avioneta porque...',
    starterHy: 'Ինձ անձամբ (կցանկանայի / չէի ցանկանա) թռչել թեթև ինքնաթիռով, որովհետև...',
    helperEs: 'Puedes expresar sensaciones: «me daría miedo», «me encantaría la adrenalina», «confío en los pilotos».',
    helperHy: 'Կարող ես արտահայտել զգացողություններ՝ «վախենալու կլիներ», «ադրենալինը ինձ դուր կգար», «վստահում եմ օդաչուներին»։',
  },
  {
    id: 7,
    category: 'personal',
    categoryLabelEs: 'Tu propia experiencia',
    categoryLabelHy: 'Քո անձնական փորձառությունը',
    questionEs: '¿Has vivido alguna experiencia emocionante donde hayas sentido mucha adrenalina?',
    questionHy: 'Ապրե՞լ ես որևէ հուզիչ փորձառություն, որտեղ զգացել ես մեծ ադրենալին։',
    starterEs: 'Una vez viví una experiencia muy emocionante cuando...',
    starterHy: 'Մի անգամ ես ապրեցի շատ հուզիչ փորձառություն, երբ...',
    helperEs: 'Describe una situación: un viaje, un deporte extremo, hablar en público o un reto profesional.',
    helperHy: 'Նկարագրիր իրավիճակ՝ ճամփորդություն, էքստրեմալ սպորտ, հրապարակային ելույթ կամ մասնագիտական մարտահրավեր։',
  },
  {
    id: 8,
    category: 'personal',
    categoryLabelEs: 'Tu propia experiencia',
    categoryLabelHy: 'Քո անձնական փորձառությունը',
    questionEs: '¿Qué significa para ti tener éxito en la vida o en tu profesión?',
    questionHy: 'Ի՞նչ է նշանակում քեզ համար հաջողություն ունենալ կյանքում կամ քո մասնագիտության մեջ։',
    starterEs: 'Para mí, tener éxito significa...',
    starterHy: 'Ինձ համար հաջողություն ունենալ նշանակում է...',
    helperEs: 'Compara si el éxito es reconocimiento externo, tranquilidad interior, ayudar a otros o superar metas.',
    helperHy: 'Համեմատիր՝ արդյոք հաջողությունն արտաքին ճանաչումն է, ներքին հանգստությունը, ուրիշներին օգնելը, թե նպատակներ հաղթահարելը։',
  },
  {
    id: 9,
    category: 'personal',
    categoryLabelEs: 'Tu propia experiencia',
    categoryLabelHy: 'Քո անձնական փորձառությունը',
    questionEs: '¿Cómo disfrutas de los buenos momentos cuando las cosas te van muy bien?',
    questionHy: 'Ինչպե՞ս ես վայելում լավ պահերը, երբ գործերդ շատ լավ են ընթանում։',
    starterEs: 'Cuando las cosas me van bien, disfruto del momento...',
    starterHy: 'Երբ գործերս լավ են ընթանում, ես վայելում եմ պահը...',
    helperEs: 'Menciona compartir con seres queridos, agradecer, descansar o fijar nuevos sueños con calma.',
    helperHy: 'Նշիր մտերիմների հետ կիսվելը, շնորհակալ լինելը, հանգստանալը կամ հանգիստ նոր երազանքներ սահմանելը։',
  },
  {
    id: 10,
    category: 'personal',
    categoryLabelEs: 'Tu propia experiencia',
    categoryLabelHy: 'Քո անձնական փորձառությունը',
    questionEs: '¿Tienes alguna persona en quien confíes plenamente cuando debes tomar un riesgo?',
    questionHy: 'Ունե՞ս որևէ մեկը, ում լիովին վստահում ես, երբ պետք է ռիսկի դիմես։',
    starterEs: 'Sí, confío plenamente en mi... porque siempre...',
    starterHy: 'Այո, ես լիովին վստահում եմ իմ... քանի որ նա միշտ...',
    helperEs: 'Relaciona con la confianza mutua entre Natalia y Facundo en la cabina del avión.',
    helperHy: 'Կապիր ինքնաթիռի խցիկում Նատալիայի և Ֆակունդոյի փոխադարձ վստահության հետ։',
  },
];

export const VOCABULARY_LIST: VocabularyItem[] = [
  {
    id: 1,
    termEs: 'aterrizar',
    partOfSpeechEs: 'verbo intransitivo',
    partOfSpeechHy: 'չեզոք բայ',
    meaningHy: 'վայրէջք կատարել (ինքնաթիռով)',
    exampleEs: 'Lo más importante del vuelo era aterrizar sanos y salvos.',
    exampleHy: 'Թռիչքի ամենակարևոր բանը ողջ-առողջ վայրէջք կատարելն էր։',
    isKeyMandatory: true,
  },
  {
    id: 2,
    termEs: 'tener miedo',
    partOfSpeechEs: 'locución verbal',
    partOfSpeechHy: 'բայական դարձվածք',
    meaningHy: 'վախենալ, վախ ունենալ',
    exampleEs: '¿Tuviste miedo cuando el avión subió tan alto?',
    exampleHy: 'Վախեցա՞ր, երբ ինքնաթիռն այդքան բարձրացավ։',
    isKeyMandatory: true,
  },
  {
    id: 3,
    termEs: 'adrenalina',
    partOfSpeechEs: 'sustantivo femenino',
    partOfSpeechHy: 'իգական գոյական',
    meaningHy: 'ադրենալին (հորմոն, բարձր հուզմունքի և վտանգի պահին)',
    exampleEs: 'No tuve miedo, pero sentí una adrenalina increíble.',
    exampleHy: 'Վախ չունեցա, բայց անհավանական ադրենալին զգացի։',
    isKeyMandatory: true,
  },
  {
    id: 4,
    termEs: 'no tener otro remedio',
    partOfSpeechEs: 'expresión fija',
    partOfSpeechHy: 'կայուն արտահայտություն',
    meaningHy: 'ուրիշ ճար չունենալ, այլ ելք չունենալ',
    exampleEs: 'Era como que no tenía otro remedio que subirme.',
    exampleHy: 'Կարծես ուրիշ ճար չունեի, քան բարձրանալը։',
    isKeyMandatory: true,
  },
  {
    id: 5,
    termEs: 'preparar',
    partOfSpeechEs: 'verbo transitivo',
    partOfSpeechHy: 'ներգործական բայ',
    meaningHy: 'պատրաստել, նախապատրաստել',
    exampleEs: 'Venimos preparando esta escena aérea hace mucho tiempo.',
    exampleHy: 'Այս օդային տեսարանը մենք նախապատրաստում ենք վաղուց։',
    isKeyMandatory: true,
  },
  {
    id: 6,
    termEs: 'estar capacitado / capacitada',
    partOfSpeechEs: 'adjetivo / locución',
    partOfSpeechHy: 'ածական / դարձվածք',
    meaningHy: 'որակավորված, մասնագիտորեն պատրաստված լինել',
    exampleEs: 'Los pilotos y técnicos están absolutamente capacitados.',
    exampleHy: 'Օդաչուներն ու տեխնիկները լիովին որակավորված են։',
    isKeyMandatory: true,
  },
  {
    id: 7,
    termEs: 'dar vueltas',
    partOfSpeechEs: 'locución verbal',
    partOfSpeechHy: 'բայական դարձվածք',
    meaningHy: 'պտույտներ գործել, պտտվել (նաև՝ աննպատակ շրջել)',
    exampleEs: 'No fue simplemente subir y ponernos a dar vueltas.',
    exampleHy: 'Ուղղակի բարձրանալ ու պտույտներ գործել չէր։',
    isKeyMandatory: true,
  },
  {
    id: 8,
    termEs: 'responsabilidad',
    partOfSpeechEs: 'sustantivo femenino',
    partOfSpeechHy: 'իգական գոյական',
    meaningHy: 'պատասխանատվություն',
    exampleEs: 'Liderar el programa es una responsabilidad muy grande.',
    exampleHy: 'Հաղորդումն առաջնորդելը շատ մեծ պատասխանատվություն է։',
    isKeyMandatory: true,
  },
  {
    id: 9,
    termEs: 'tomar conciencia',
    partOfSpeechEs: 'locución verbal',
    partOfSpeechHy: 'բայական դարձվածք',
    meaningHy: 'գիտակցել, իմաստավորել, ըմբռնել',
    exampleEs: 'Uno a veces no toma conciencia de su propio éxito.',
    exampleHy: 'Մարդ երբեմն չի գիտակցում իր սեփական հաջողությունը։',
    isKeyMandatory: true,
  },
  {
    id: 10,
    termEs: 'agradecer',
    partOfSpeechEs: 'verbo transitivo',
    partOfSpeechHy: 'ներգործական բայ',
    meaningHy: 'շնորհակալ լինել, երախտապարտ լինել',
    exampleEs: 'Cuando las cosas salen bien, hay que agradecer muchísimo.',
    exampleHy: 'Երբ գործերը լավ են ստացվում, պետք է շատ շնորհակալ լինել։',
    isKeyMandatory: true,
  },
  {
    id: 11,
    termEs: 'ir bien / ir más o menos',
    partOfSpeechEs: 'locución verbal',
    partOfSpeechHy: 'բայական դարձվածք',
    meaningHy: 'գործերը լավ / միջակ ընթանալ',
    exampleEs: 'Hoy nos va súper bien y mañana nos va más o menos.',
    exampleHy: 'Այսօր մեր գործերը հիանալի են ընթանում, իսկ վաղը՝ միջակ։',
    isKeyMandatory: true,
  },
  {
    id: 12,
    termEs: 'disfrutar el momento',
    partOfSpeechEs: 'locución verbal',
    partOfSpeechHy: 'բայական դարձվածք',
    meaningHy: 'վայելել պահը, ապրել ներկայով',
    exampleEs: 'Está bueno disfrutar el momento que estás pasando.',
    exampleHy: 'Լավ է վայելել այն պահը, որի միջով անցնում ես։',
    isKeyMandatory: true,
  },
  {
    id: 13,
    termEs: 'corazón valiente',
    partOfSpeechEs: 'metáfora / locución',
    partOfSpeechHy: 'փոխաբերություն / դարձվածք',
    meaningHy: 'անվեհեր սիրտ, քաջասիրտ անձնավորություն',
    exampleEs: 'Natalia demostró tener un corazón valiente durante las acrobacias.',
    exampleHy: 'Նատալիան ապացուցեց, որ քաջասիրտ է հնարքների ժամանակ։',
    isKeyMandatory: false,
  },
  {
    id: 14,
    termEs: 'coreografiado / coreografiada',
    partOfSpeechEs: 'participio / adjetivo',
    partOfSpeechHy: 'դերբայ / ածական',
    meaningHy: 'բեմադրված, քայլ առ քայլ նախագծված',
    exampleEs: 'Cada maniobra en el aire estaba perfectamente coreografiada.',
    exampleHy: 'Օդում ամեն մի հնարք կատարելապես բեմադրված էր։',
    isKeyMandatory: false,
  },
  {
    id: 15,
    termEs: 'súper excitante',
    partOfSpeechEs: 'locución adjetival',
    partOfSpeechHy: 'ածականական դարձվածք',
    meaningHy: 'անչափ հուզիչ, չափազանց ոգևորիչ',
    exampleEs: 'Fue una experiencia súper excitante volar juntos.',
    exampleHy: 'Միասին թռչելը չափազանց հուզիչ փորձառություն էր։',
    isKeyMandatory: false,
  },
];

export const ARGENTINE_FEATURES: ArgentineFeature[] = [
  {
    id: 'vos',
    term: 'vos',
    titleHy: 'vos — արգենտինյան «դու» ձևը (Voseo)',
    shortDefinitionHy: 'Արգենտինայում և Ռիո դե լա Պլատայի տարածաշրջանում «tú»-ի փոխարեն օգտագործվում է «vos»-ը։',
    fullExplanationHy: 'Արգենտինական իսպաներենի (español rioplatense) ամենաբնորոշ գիծն է։ Այն ունի իր սեփական խոնարհման ձևերը ներկա ժամանակում (օրինակ՝ tú tienes → vos tenés, tú entiendes → vos entendés, tú puedes → vos podés) և հրամայականում (ven → vení, mira → mirá)։ Տեսանյութում լրագրողն ասում է. «Natalia, vos, corazón valiente», իսկ Նատալիան՝ «¿Y a vos qué te parece?»։',
    exampleEs: '«¿Y a vos qué te parece?» / «Y si vos no aterrizabas...»',
    exampleHy: '«Իսկ քեզ ի՞նչ է թվում։» / «Իսկ եթե դու վայրէջք չկատարեիր...»',
  },
  {
    id: 're-contenta',
    term: 're contenta',
    titleHy: 're- — խոսակցական ուժեղացում («շատ», «չափազանց»)',
    shortDefinitionHy: '«muy»-ի փոխարեն արգենտինացիները շատ հաճախ ածականների առաջ ավելացնում են «re-» նախածանցը։',
    fullExplanationHy: '«Re-» նախածանցը խոսակցական իսպաներենում նշանակում է «շատ», «ծայրահեղ», «անչափ»։ «Re contenta» = «muy contenta» (շատ գոհ / ուրախ)։ Կարելի է հանդիպել նաև «re lindo» (շատ գեղեցիկ), «re difícil» (չափազանց բարդ) և անգամ կրկնակի «recontra» ձևով։',
    exampleEs: '«No, re contenta, fue una experiencia súper excitante...»',
    exampleHy: '«Չէ, չափազանց գոհ եմ, անչափ հուզիչ փորձառություն էր...»',
  },
  {
    id: 'che',
    term: 'che',
    titleHy: 'che — ուշադրություն գրավելու խոսակցական կոչական',
    shortDefinitionHy: 'Արգենտինայի խորհրդանիշ հանդիսացող միջարկություն՝ «լսի՛ր», «հե՜յ», «ընկե՛ր»։',
    fullExplanationHy: '«Che»-ն արգենտինացիների ամենօրյա բառն է՝ դիմացինի ուշադրությունը հրավիրելու կամ ոչ պաշտոնական զրույց սկսելու համար։ Ֆակունդոն ասում է. «No fue que dijimos, che, vamos a volar...» («Այնպես չէր, որ ասացինք՝ լսի՛ր, արի թռչենք...»)։',
    exampleEs: '«No fue que dijimos: che, vamos a volar...»',
    exampleHy: '«Այնպես չէր, որ ասացինք՝ «լսի՛ր, արի թռչենք»...»',
  },
  {
    id: 'entendes',
    term: '¿entendés?',
    titleHy: '¿entendés? — «հասկանո՞ւմ ես»',
    shortDefinitionHy: '«entender» բայի voseo ձևը հարցականով, որը հաճախ ծառայում է որպես կապող բառախումբ։',
    fullExplanationHy: 'Իսպանիայի իսպաներենում կլիներ «¿entiendes?», բայց արգենտինականում շեշտը վերջին վանկի վրա է՝ «¿entendés?»: Զրույցի ընթացքում արգենտինացիներն այն շատ հաճախ են օգտագործում՝ ստուգելու համար, թե արդյոք զրուցակիցը հետևում է մտքին։',
    exampleEs: '«...y nos pusimos a dar vueltas en un avión, ¿entendés?»',
    exampleHy: '«...ու սկսեցինք պտույտներ գործել ինքնաթիռով, հասկանո՞ւմ ես։»',
  },
  {
    id: 'novela',
    term: 'novela',
    titleHy: 'novela — հեռուստասերիալ / հեռուստանովել',
    shortDefinitionHy: 'Այս համատեքստում «novela»-ն ոչ թե գրական վեպ է, այլ հեռուստասերիալ (telenovela)։',
    fullExplanationHy: 'Լատինական Ամերիկայում և Արգենտինայում հեռուստասերիալներին շատ հաճախ պարզապես ասում են «la novela»: Տվյալ դեպքում խոսքը 2006 թվականի հայտնի արգենտինական «Sos mi vida» («Դու իմ կյանքն ես») հեռուստասերիալի մասին է, որտեղ Նատալիա Օրեյրոն և Ֆակունդո Արանան մարմնավորում էին գլխավոր հերոսներին։',
    exampleEs: '«Si yo no me subía, se terminaba la novela acá.»',
    exampleHy: '«Եթե ես չբարձրանայի [չնստեի], սերիալն այստեղ կավարտվեր։»',
  },
  {
    id: 'puntos',
    term: '30 puntos',
    titleHy: '30 puntos — հեռուստառեյտինգի միավորներ',
    shortDefinitionHy: 'Խոսքը 30 հեռուստադիտողի մասին չէ, այլ վարկանիշի (ռեյտինգի) 30 տոկոսային միավորների։',
    fullExplanationHy: 'Հեռուստատեսային չափումներում (Ibope) 1 ռեյտինգային միավորը համապատասխանում է տասնյակ հազարավոր ընտանիքների։ «Hacer 30 puntos» նշանակում է ունենալ հսկայական, ֆենոմենալ հաջողություն՝ երկրի ամենաշատ դիտվող հաղորդումը լինելով (միլիոնավոր հեռուստադիտողներ միաժամանակ)։',
    exampleEs: '«Entonces es un tema medio delicado ese, hablar de, uh, mirá, hiciste 30 puntos.»',
    exampleHy: '«Այնպես որ դա մի քիչ նուրբ թեմա է՝ խոսել այն մասին, որ «վա՜ու, նայի՛ր, 30 միավոր [ռեյտինգ] եք հավաքել»։»',
  },
  {
    id: 'en-el-aire',
    term: 'en el aire',
    titleHy: 'en el aire — բառախաղ՝ «օդում» և «եթերում»',
    shortDefinitionHy: 'Երկակի իմաստ ունեցող արտահայտություն՝ ֆիզիկապես օդ բարձրանալ և լինել հեռուստաեթերում։',
    fullExplanationHy: 'Իսպաներենում «estar en el aire» նշանակում է ինչպես ֆիզիկապես գտնվել երկնքում/օդում (ինքնաթիռով թռչելիս), այնպես էլ «լինել եթերում» (հեռարձակվել հեռուստատեսությամբ, ռադիոյով)։ Լրագրողը դասի վերնագրում և վերջում օգտագործում է հենց այս գեղեցիկ բառախաղը՝ «la pareja del año y en el aire»։',
    exampleEs: '«Pero hoy son la pareja del año y en el aire. — En el aire.»',
    exampleHy: '«Բայց այսօր դուք տարվա զույգն եք և՛ օդում, և՛ եթերում։ — Եթերում։»',
  },
];
