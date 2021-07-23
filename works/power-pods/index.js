const QuizInit = (form, start) => {
  // UTM метки
  let utm = window.location.href.split('?')[1] || '';

  const questions = form.querySelectorAll('[data-component="question"]')
  const finalBlock = form.querySelector('[data-component="finalBlock"]')
  const progressBar = form.querySelector('[data-component="progressBar"]')

  const quizLength = [...questions].filter((question) => !question.dataset.to).length

  // Function Variables
  let current = 0;

  // Functions //
  const setCurrentQuestion = (index) => {
    current = index
    questions[index].classList.remove('hidden');
  }

  const updateProgressBar = (length, index) => {
    const procent = 100 - (100 / length * (length - index));
    progressBar.querySelector('.progress-value').innerHTML = `${procent}% complete`
    progressBar.querySelector('.progress-bar-body div').style.width = procent + '%'

    progressBar.classList.remove('hidden')
  }

  const nextQuestion = (index) => {

    if (index >= questions.length) {
      questions[current].classList.add('hidden');
      progressBar.classList.add('hidden');
      current = null;
      finalBlock.querySelector('a.button').href += '?' + utm
      finalBlock.classList.remove('hidden');
      return false;
    }
    if (index >= start) {
      updateProgressBar(quizLength, index)
    }
    questions[current].classList.add('hidden');
    current = index
    questions[current].classList.remove('hidden');
  }

  // Hidden All Questions
  questions.forEach(question => {
    question.classList.add('hidden')
  })
  finalBlock.classList.add('hidden')
  progressBar.classList.add('hidden')

  // Set Start Value

  setCurrentQuestion(current)

  form.addEventListener('change', ({target}) => {
    // Functional for Branching!
    if (target.dataset.to) {
      setTimeout(() => nextQuestion(Number(target.dataset.to)), 100)
    } else {
      setTimeout(() => nextQuestion(current + 1), 100)
    }
  })
}

const quiz = QuizInit(document.getElementById('form'), 2)