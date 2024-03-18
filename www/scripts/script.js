const headerContainer = document.querySelector('#header');
const listContainer = document.querySelector('#list');
const submitBtn = document.querySelector('#submit');

let score = 0;
let questionIndex = 0;

welcomePage();
submitBtn.onclick = startGame;

function welcomePage() {
  const welcomeTemplate = `
    <div class="pic rotate">%pic%</div>
    <h2 class="title">%title%</h2>
    <p class="subtitle">%subtitle%</p>
  `;
  const welcomePic = `<img src="images/ded-1.png">`;
  const welcomeTitle = 'Добро пожаловать в квиз о снукере!🤩';
  const welcomeSubtitle = 'Ответьте правильно на все 20 вопросов и сделайте Ронни О\'Салливана восьмикратным чемпионом мира!🏆';
  const welcomeMessage = welcomeTemplate.replace('%pic%', welcomePic)
                                        .replace('%title%', welcomeTitle)
                                        .replace('%subtitle%', welcomeSubtitle);

  headerContainer.innerHTML = welcomeMessage;
  submitBtn.innerText = 'Начать игру!';
}

function startGame() {
  clearPage(); //очистка html разметки
  showQuestion(); //запускаем вопросы
  submitBtn.innerText = 'Ответить';
  submitBtn.onclick = checkAnswer;
}

function clearPage() {
  headerContainer.innerHTML = '';
  listContainer.innerHTML = '';
}

//отображаем текущий вопрос
function showQuestion() {
  const headerTemplate = `<h2 class="title">%title%</h2>`;
  const title = headerTemplate.replace('%title%', questions[questionIndex]['question']);
  headerContainer.innerHTML = title;

  //выводим варианты ответа через цикл обхода
  let answerNumber = 1;
  for (answerText of questions[questionIndex]['answers']) {
    const questionTemplate =
      `<li>
        <label>
          <input type="radio" class="answer" name="answer" value="%number%">
          <span>%answer%</span>
        </label>
      </li>`;
    let answerHTML = questionTemplate.replace('%answer%', answerText)
                                     .replace('%number%', answerNumber);

    listContainer.innerHTML += answerHTML;
    answerNumber++;
  }
}

function checkAnswer() {
  //находим выбранную радио-кнопку
  const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');

  //если ответ не выбран, то функция прекращается
  if (!checkedRadio) {
    return;
  }

  //получаем номер ответа от пользователя
  const userAnswer = parseInt(checkedRadio.value);

  //если ответ верен - score++
  if (userAnswer === questions[questionIndex]['correct']) {
    score++;
  }

  //проверяем был ли вопрос последним
  if (questionIndex !== questions.length - 1) {
    questionIndex++;
    clearPage();
    showQuestion();
  } else {
    clearPage();
    showResults();
  }
}

function showResults() {
  const resultsTemplate = `
      <div class="pic scale">%pic%</div>
      <h2 class="title">%title%</h2>
      <h3 class="message">%message%</h3>
      <p class="result">%result%</p>
    `;
  let pic, title, message;

  //Варианты заголовков и текстов при разном score
  if (score === questions.length) {
    pic = `<img src="images/ded-2.png">`;
    title = 'Да вы настоящий знаток снукера!🤓';
    message = 'Благодаря вам Ронни стал восьмикратным чемпионом мира!';
  } else if ((score * 100) / questions.length >= 50) {
    pic = `<img src="images/ded-3.png">`;
    title = 'Вы хорошо разбираетесь в снукере!👌';
    message = 'Вы ответили правильно больше, чем наполовину вопросов!😍';
  } else {
    pic = `<img src="images/ded-4.png">`;
    title = 'Похоже, вы совсем недавно узнали о снукере🥺';
    message = 'Вы ответили правильно меньше, чем наполовину вопросов...';
  }

  //счетчик результата
  let result = `Правильных ответов: ${score} из ${questions.length}`;

  //подставляем данные в resultsTemplate
  const finalMessage = resultsTemplate.replace('%pic%', pic)
                        .replace('%title%', title)
                        .replace('%message%', message)
                        .replace('%result%', result);

  headerContainer.innerHTML = finalMessage;

  //меняем текст в кнопке
  submitBtn.innerText = 'Попробовать еще!';
  submitBtn.onclick = ()=>{history.go()};
}
