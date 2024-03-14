const questions = [
  {
    question: "Сколько раз Стив Дэвис выигрывал Чемпионат мира по снукеру?",
		answers: [
      "4",
      "5",
      "6",
      "7",
    ],
		correct: 3,
  },
  {
    question: "Кто из игроков имеет прозвище \"Пистолет\"?",
		answers: [
      "Бен Вулластон",
      "Марк Аллен",
      "Люка Бресель",
      "Джек Лисовски",
    ],
		correct: 2,
  },
  {
    question: "Кому впервые покорилась отметка в 1000 сотенных серий в карьере?",
		answers: [
      "Джадд Трамп",
      "Джон Хиггинс",
      "Андерс Петров",
      "Ронни О'Салливан",
    ],
		correct: 4,
  },
  {
    question: "Какой крупный снукерный турнир проходит в легендарном Alexandra Palace?",
		answers: [
      "Чемпионат Британии",
      "Чемпионат мира",
      "Masters",
      "German Masters",
    ],
		correct: 3,
  },
  {
    question: "В какой стране зародился снукер?",
		answers: [
      "Индия",
      "Египет",
      "Англия",
      "Беларусь",
    ],
		correct: 1,
  },
  {
    question: "На каком турнире был сделан первый максимум?",
		answers: [
      "Чемпионат мира",
      "Премьер Лига",
      "Lada Classic",
      "Strachan Open",
    ],
		correct: 3,
  },
  {
    question: "За какой футбольный клуб болеет Нил Робертсон?",
		answers: [
      "Манчестер Сити",
      "Челси",
      "Спартак",
      "Арсенал",
    ],
		correct: 2,
  },
  {
    question: "Какое прозвище носит рефери Ян Верхаас?",
		answers: [
      "Летучий голландец",
      "Мистер Бин",
      "Всемогущий",
      "Джеймс Бонд",
    ],
		correct: 4,
  },
  {
    question: "Русский голос снукера?",
		answers: [
      "Володимир Сорокин",
      "Владислав Синичкин",
      "Борис Скворцов",
      "Владимир Синицын",
    ],
		correct: 4,
  },
  {
    question: "Игрок, доминировавший в снукере в 90-х годах?",
		answers: [
      "Стив Дэвис",
      "Джон Пэррот",
      "Стивен Хендри",
      "Ронни О'Салливан",
    ],
		correct: 3,
  },
  {
    question: "В 1979 году Терри Гриффитс стал первым чемпионом мира, который попал на тот чемпионат через квалификацию. Кто спустя много лет повторил это достижение?",
		answers: [
      "Марк Селби",
      "Грэм Дотт",
      "Шон Мерфи",
      "Стюарт Бинхэм",
    ],
		correct: 3,
  },
  {
    question: "Первый игрок, который смог сделать максимум на Чемпионате мира?",
		answers: [
      "Рэй Риардон",
      "Клифф Торбурн",
      "Стив Дэвис",
      "Алекс Хиггинс",
    ],
		correct: 2,
  },
  {
    question: "Кто из знаменитых игроков выступил в Крусибле в 1987 году последний раз в карьере?",
		answers: [
      "Рэй Риардон",
      "Дуг Маунтджой",
      "Вилли Торн",
      "Фред Дэвис",
    ],
		correct: 1,
  },
  {
    question: "Сколько лет было Стивену Хендри, когда он стал самым молодым чемпионом мира среди профессионалов в 1990 году?",
		answers: [
      "19",
      "20",
      "21",
      "22",
    ],
		correct: 3,
  },
  {
    question: "Из какой страны бывший профессиональный игрок в снукер Тони Драго?",
		answers: [
      "Италия",
      "Ирландия",
      "Туркменистан",
      "Мальта",
    ],
		correct: 4,
  },
  {
    question: "Какой игрок был первым в мировом рейтинге с мая 1975 по апрель 1981 года?",
		answers: [
      "Стив Дэвис",
      "Рэй Риардон",
      "Алекс Хиггинс",
      "Фред Дэвис",
    ],
		correct: 2,
  },
  {
    question: "В каком году впервые прошел Чемпионат мира по снукеру в театре \"Крусибл\"?",
		answers: [
      "1976",
      "1977",
      "1978",
      "1979",
    ],
		correct: 2,
  },
  {
    question: "Сколько раз финал Чемпионата мира заканчивался в решающем фрейме с тех пор, как его стали проводить в Крусибле?",
		answers: [
      "3",
      "6",
      "12",
      "5",
    ],
		correct: 1,
  },
  {
    question: "Кто из чемпионов мира по снукеру также выигрывал Чемпионат мира по пулу-восьмерке?",
		answers: [
      "Люка Бресель",
      "Стивен Хендри",
      "Марк Селби",
      "Нил Робертсон",
    ],
		correct: 3,
  },
  {
    question: "Кто из современных профессиональных игроков подрабатывал таксистом в свободное от снукера время?",
		answers: [
      "Стивен Магуайр",
      "Янь Бинтао",
      "Дэвид Гилберт",
      "Гэри Уилсон",
    ],
		correct: 4,
  },
];

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
