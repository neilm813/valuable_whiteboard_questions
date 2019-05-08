/* 
  Fill out the `yourAnswer` props with what you think will be the value of `question` 
  Open the index.html and check the console
*/

const questions = [

  {
    id: 0,
    question: undefined == false,
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `undefined == false`,
  },
  {
    id: 1,
    question: undefined == null,
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `undefined == null`,
  },
  {
    id: 2,
    question: typeof undefined == undefined,
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `typeof undefined == undefined`,
  },
  {
    id: 3,
    question: typeof [] === typeof {},
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `typeof [] === typeof {}`,
  },
  {
    id: 4,
    question: typeof undefined && typeof null,
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `typeof undefined && typeof null`,
  },
  {
    id: 5,
    question: Function > Object,
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `Function > Object`,
  },
  {
    id: 6,
    question: Object.prototype.toString.call(Object.prototype.toString.call(Object)),
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `Object.prototype.toString.call(Object.prototype.toString.call(Object))`,
  },
  {
    id: 7,
    question: '' || undefined,
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `'' || undefined`,
  },
  {
    id: 8,
    question: ~~.5 || '0' || 0,
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `~~.5 || '0' || 0`,
  },
  {
    id: 9,
    question: 0.1 + 0.2,
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `0.1 + 0.2`,
  },
  {
    id: 10,
    question: (_ => {

      msg = 'cool and good';
      var msg; 
      
      return msg;
    })(),
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `(_ => { msg = 'cool and good'; var msg; return msg; })()`,
  },
  {
    id: 11,
    question: (_ => {

      const o = {
        '1': '1',
        1: 1
      };

      return o['1'];
    })(),
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `(_ => { const o = { '1': '1', 1: 1 }; return o['1']; })()`,
  },
  {
    id: 12,
    question: (_ => {

      const o = {
        'a': 'A',
        undefined: 0
      };

      return o[
        [
          o['A'] + ''
        ]
      ];
    })(),
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `(_ => { const o = { 'a': 'A', undefined: 0 }; return o[[o["A"] + '']]; })()`,
  },
  {
    id: 13,
    question: Object.hasOwnProperty("hasOwnProperty"),
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `Object.hasOwnProperty("hasOwnProperty")`,
  },
  {
    id: 14,
    question: [] == ![],
    "yourAnswer": null,
    isCorrect: null,
    questionStr: `[] == ![]`,
  },
];

(function scoreTest() {

  const scores = {
    correct: 0,
    attempted: 0,
    correctPct: '',
    unanswered: 0,
  }

  for (let q of questions) {

    if (q.yourAnswer === null) scores.unanswered++;
    else {
      scores.attempted++;
      if (q.yourAnswer === q.question) { scores.correct++; q.isCorrect = true; }
      else q.isCorrect = false;
    }
  }

  if (scores.attempted) scores.correctPct = (scores.correct / scores.attempted).toFixed(2) * 100 + "%";

  console.table(scores);
  console.table(questions.filter(q => q.yourAnswer !== null));
})();

