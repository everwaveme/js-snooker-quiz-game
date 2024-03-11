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
    question: "Кто из игроков имеет прозвище \"Шутник из Лестера\"?",
		answers: [
      "Бен Вулластон",
      "Марк Селби",
      "Лян Веньбо",
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
    question: "Сколько очков должен набрать игрок, чтобы получился максимальный брейк?",
		answers: [
      "125",
      "146",
      "147",
      "150",
    ],
		correct: 3,
  },
  {
    question: "Какой игрок 6 раз играл в финалах Чемпионата мира, но так и ни разу не выиграл его?",
		answers: [
      "Рэй Риардон",
      "Джимми Уайт",
      "Али Картер",
      "Стивен Ли",
    ],
		correct: 2,
  },
  {
    question: "Кто стал первым профессиональным игроком из Китая?",
		answers: [
      "Лян Веньбо",
      "Янь Бинтао",
      "Чжао Синьтун",
      "Динь Цзуньхуэй",
    ],
		correct: 4,
  },
  {
    question: "Русский голос снукера?",
		answers: [
      "Владимир Синицын",
      "Алексей Попов",
      "Константин Генич",
      "Егор Никифорович",
    ],
		correct: 1,
  },
  {
    question: "Игрок, доминировавший в снукере в 90-х годах?",
		answers: [
      "Стив Дэвис",
      "Джон Пэррот",
      "Стивен Хендри",
      "Ронни О'Салливан",
    ],
		correct: 4,
  },
  {
    question: "Кто является единственным снукеристом, который выиграл Чемпионат мира, пробившись из квалификационных раундов?",
		answers: [
      "Марк Селби",
      "Грэм Дотт",
      "Шон Мерфи",
      "Стюарт Бинхэм",
    ],
		correct: 3,
  },
  {
    question: "Первый игрок, кто смог сделать максимум на Чемпионате мира?",
		answers: [
      "Рэй Риардон",
      "Клифф Торбурн",
      "Стив Дэвис",
      "Алекс Хиггинс",
    ],
		correct: 2,
  },
  {
    question: "В 1984 году этот игрок сделал максимум и часто появлялся на турнирах в белом костюме. Кто он?",
		answers: [
      "Кирк Стивенс",
      "Алекс Хиггинс",
      "Вилли Торн",
      "Джимми Уайт",
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
      "1967",
      "1977",
      "1987",
      "1997",
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

clearPage(); //очистка html разметки
showQuestion(); //запускаем вопросы
submitBtn.onclick = checkAnswer;

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
    let answerHTML = questionTemplate.replace('%answer%', answerText);
    answerHTML = answerHTML.replace('%number%', answerNumber);

    listContainer.innerHTML += answerHTML;
    answerNumber++;
  }
}

function checkAnswer() {
  //находим выбранную радио-кнопку
  const checkedRadio = listContainer.querySelector('input[type="radio"]:checked');
  console.log(checkedRadio);

  //если ответ не выбран, то функция прекращается
  if (!checkedRadio) {
    submitBtn.blur();
    return
  }

  //получаем номер ответа от пользователя
  const userAnswer = parseInt(checkedRadio.value);

  //если ответ верен - score++
  if (userAnswer === questions[questionIndex]['correct']) {

  }
}
