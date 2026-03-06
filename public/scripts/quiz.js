import { createFragment, ELEMENTS } from "./dom.js";

const { ARTICLE, FIELDSET, FORM, LEGEND, H2, INPUT, LABEL, DIV } = ELEMENTS;

const radioOptions = (options) => options.map((option, i) => [
  DIV, {},
  [INPUT, { type: 'radio', name: 'answer', value: option, id: `option-${i + 1}` }, ''],
  [LABEL, { for: `option-${i + 1}` }, option],
])

const createQuiz = (container, { questionNumber, question, options }) => {
  const quiz = [
    ARTICLE, {}, [
      FORM, { action: '', method: 'post' }, [
        FIELDSET, {}, [
          LEGEND, {}, [
            H2, {}, `${questionNumber}. ${question}`
          ],
          ...radioOptions(options)
        ]
      ]
    ]
  ];

  return container.append(createFragment(quiz));
};

window.onload = () => {
  const main = document.querySelector('main')
  createQuiz(main, { questionNumber: 1, question: 'What is the capital of India?', options: ['New Delhi', 'Bangalore', 'Hyderabad'] })
}