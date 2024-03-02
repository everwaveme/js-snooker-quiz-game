const welcome = document.querySelector('.welcome-box');
const goBtn = document.querySelector('.go-btn');

const imgWelcome = document.querySelector('.pic-img-welcome');
const imgQue = document.querySelector('.pic-img-que');
const imgTrue = document.querySelector('.pic-img-true');
const imgFalse = document.querySelector('.pic-img-false');

const inputBox = document.querySelector('.input-box');
const firstQue = document.querySelector('.que-1');
const secondQue = document.querySelector('.que-2');
const thirdQue = document.querySelector('.que-3');
const fourthQue = document.querySelector('.que-4');
const fifthQue = document.querySelector('.que-5');
const sixthQue = document.querySelector('.que-6');
const seventhQue = document.querySelector('.que-7');
const eighthQue = document.querySelector('.que-8');
const ninthQue = document.querySelector('.que-9');
const tenthQue = document.querySelector('.que-10');

goBtn.addEventListener('click', () => {
  welcome.classList.remove('active');
  imgWelcome.classList.remove('active');
  imgQue.classList.add('active');
  firstQue.classList.add('active');
  inputBox.classList.add('active');
});

let input = document.querySelector('.input-answer');
const inputBtn = document.querySelector('.input-btn');
const outputAnswer = document.querySelector('.output-answer');
const nextBtn = document.querySelector('.next-btn');
const outputResult = document.querySelector('.output-result');
const resultBtn = document.querySelector('.result-btn');
let count = 0;

inputBtn.addEventListener('click', () => {
  const firstAnswer = input.value;

  if (firstAnswer === "6") {
    imgQue.classList.remove('active');
    firstQue.classList.remove('active');
    inputBox.classList.remove('active');

    imgTrue.classList.add('active');
    outputAnswer.classList.add('active');
    outputAnswer.innerHTML = "Верно!";
    nextBtn.classList.add('active');

    count++;
  } else {
    imgQue.classList.remove('active');
    firstQue.classList.remove('active');
    inputBox.classList.remove('active');

    imgFalse.classList.add('active');
    outputAnswer.classList.add('active');
    outputAnswer.innerHTML = "Не верно... Правильный ответ: 6";
    nextBtn.classList.add('active');
  }

  nextBtn.addEventListener('click', () => {
    nextBtn.classList.remove('active');
    outputAnswer.classList.remove('active');
    imgTrue.classList.remove('active');
    imgFalse.classList.remove('active');

    imgQue.classList.add('active');
    secondQue.classList.add('active');
    inputBox.classList.add('active');

    input.value = '';

    inputBtn.addEventListener('click', () => {
      const secondAnswer = input.value;

      if (secondAnswer === "Марк Селби" || secondAnswer === "Селби") {
        imgQue.classList.remove('active');
        secondQue.classList.remove('active');
        inputBox.classList.remove('active');
        imgFalse.classList.remove('active');

        imgTrue.classList.add('active');
        outputAnswer.classList.add('active');
        outputAnswer.innerHTML = "Верно!";
        nextBtn.classList.add('active');

        count++;
      } else {
        imgQue.classList.remove('active');
        secondQue.classList.remove('active');
        inputBox.classList.remove('active');

        imgFalse.classList.add('active');
        outputAnswer.classList.add('active');
        outputAnswer.innerHTML = "Не верно... Правильный ответ: Марк Селби";
        nextBtn.classList.add('active');
      }

      nextBtn.addEventListener('click', () => {
        nextBtn.classList.remove('active');
        outputAnswer.classList.remove('active');
        imgTrue.classList.remove('active');
        imgFalse.classList.remove('active');
        secondQue.classList.remove('active');

        imgQue.classList.add('active');
        thirdQue.classList.add('active');
        inputBox.classList.add('active');

        input.value = '';

        inputBtn.addEventListener('click', () => {
          const thirdAnswer = input.value;

          if (thirdAnswer === "Ронни О'Салливан" || thirdAnswer === "Ронни" || thirdAnswer === "Дед") {
            imgQue.classList.remove('active');
            thirdQue.classList.remove('active');
            inputBox.classList.remove('active');
            imgFalse.classList.remove('active');

            imgTrue.classList.add('active');
            outputAnswer.classList.add('active');
            outputAnswer.innerHTML = "Верно!";
            nextBtn.classList.add('active');

            count++;
          } else {
            imgQue.classList.remove('active');
            thirdQue.classList.remove('active');
            inputBox.classList.remove('active');

            imgFalse.classList.add('active');
            outputAnswer.classList.add('active');
            outputAnswer.innerHTML = "Не верно... Правильный ответ: Ронни О'Салливан";
            nextBtn.classList.add('active');
          }

          nextBtn.addEventListener('click', () => {
            nextBtn.classList.remove('active');
            outputAnswer.classList.remove('active');
            imgTrue.classList.remove('active');
            imgFalse.classList.remove('active');
            thirdQue.classList.remove('active');

            imgQue.classList.add('active');
            fourthQue.classList.add('active');
            inputBox.classList.add('active');

            input.value = '';

            inputBtn.addEventListener('click', () => {
              const fourthAnswer = input.value;

              if (fourthAnswer === "Мастерс" || fourthAnswer === "Masters") {
                imgQue.classList.remove('active');
                fourthQue.classList.remove('active');
                inputBox.classList.remove('active');
                imgFalse.classList.remove('active');

                imgTrue.classList.add('active');
                outputAnswer.classList.add('active');
                outputAnswer.innerHTML = "Верно!";
                nextBtn.classList.add('active');

                count++;
              } else {
                imgQue.classList.remove('active');
                fourthQue.classList.remove('active');
                inputBox.classList.remove('active');

                imgFalse.classList.add('active');
                outputAnswer.classList.add('active');
                outputAnswer.innerHTML = "Не верно... Правильный ответ: Мастерс";
                nextBtn.classList.add('active');
              }

              nextBtn.addEventListener('click', () => {
                nextBtn.classList.remove('active');
                outputAnswer.classList.remove('active');
                imgTrue.classList.remove('active');
                imgFalse.classList.remove('active');
                fourthQue.classList.remove('active');

                imgQue.classList.add('active');
                fifthQue.classList.add('active');
                inputBox.classList.add('active');

                input.value = '';

                inputBtn.addEventListener('click', () => {
                  const fifthAnswer = input.value;

                  if (fifthAnswer === "Индия" || fifthAnswer === "В Индии") {
                    imgQue.classList.remove('active');
                    fifthQue.classList.remove('active');
                    inputBox.classList.remove('active');
                    imgFalse.classList.remove('active');

                    imgTrue.classList.add('active');
                    outputAnswer.classList.add('active');
                    outputAnswer.innerHTML = "Верно!";
                    nextBtn.classList.add('active');

                    count++;
                  } else {
                    imgQue.classList.remove('active');
                    fifthQue.classList.remove('active');
                    inputBox.classList.remove('active');

                    imgFalse.classList.add('active');
                    outputAnswer.classList.add('active');
                    outputAnswer.innerHTML = "Не верно... Правильный ответ: Индия";
                    nextBtn.classList.add('active');
                  }

                  nextBtn.addEventListener('click', () => {
                    nextBtn.classList.remove('active');
                    outputAnswer.classList.remove('active');
                    imgTrue.classList.remove('active');
                    imgFalse.classList.remove('active');
                    fifthQue.classList.remove('active');

                    imgQue.classList.add('active');
                    sixthQue.classList.add('active');
                    inputBox.classList.add('active');

                    input.value = '';

                    inputBtn.addEventListener('click', () => {
                      const sixthAnswer = input.value;

                      if (sixthAnswer === "147") {
                        imgQue.classList.remove('active');
                        sixthQue.classList.remove('active');
                        inputBox.classList.remove('active');
                        imgFalse.classList.remove('active');

                        imgTrue.classList.add('active');
                        outputAnswer.classList.add('active');
                        outputAnswer.innerHTML = "Верно!";
                        nextBtn.classList.add('active');

                        count++;
                      } else {
                        imgQue.classList.remove('active');
                        sixthQue.classList.remove('active');
                        inputBox.classList.remove('active');

                        imgFalse.classList.add('active');
                        outputAnswer.classList.add('active');
                        outputAnswer.innerHTML = "Не верно... Правильный ответ: 147";
                        nextBtn.classList.add('active');
                      }

                      nextBtn.addEventListener('click', () => {
                        nextBtn.classList.remove('active');
                        outputAnswer.classList.remove('active');
                        imgTrue.classList.remove('active');
                        imgFalse.classList.remove('active');
                        sixthQue.classList.remove('active');

                        imgQue.classList.add('active');
                        seventhQue.classList.add('active');
                        inputBox.classList.add('active');

                        input.value = '';

                        inputBtn.addEventListener('click', () => {
                          const seventhAnswer = input.value;

                          if (seventhAnswer === "Джимми Уайт" || seventhAnswer === "Джимми") {
                            imgQue.classList.remove('active');
                            seventhQue.classList.remove('active');
                            inputBox.classList.remove('active');
                            imgFalse.classList.remove('active');

                            imgTrue.classList.add('active');
                            outputAnswer.classList.add('active');
                            outputAnswer.innerHTML = "Верно!";
                            nextBtn.classList.add('active');

                            count++;
                          } else {
                            imgQue.classList.remove('active');
                            seventhQue.classList.remove('active');
                            inputBox.classList.remove('active');

                            imgFalse.classList.add('active');
                            outputAnswer.classList.add('active');
                            outputAnswer.innerHTML = "Не верно... Правильный ответ: Джимми Уайт";
                            nextBtn.classList.add('active');
                          }

                          nextBtn.addEventListener('click', () => {
                            nextBtn.classList.remove('active');
                            outputAnswer.classList.remove('active');
                            imgTrue.classList.remove('active');
                            imgFalse.classList.remove('active');
                            seventhQue.classList.remove('active');

                            imgQue.classList.add('active');
                            eighthQue.classList.add('active');
                            inputBox.classList.add('active');

                            input.value = '';

                            inputBtn.addEventListener('click', () => {
                              const eighthAnswer = input.value;

                              if (eighthAnswer === "Дин" || eighthAnswer === "Дин Джуньху" || eighthAnswer === "Дин Цзюньхуэй") {
                                imgQue.classList.remove('active');
                                eighthQue.classList.remove('active');
                                inputBox.classList.remove('active');
                                imgFalse.classList.remove('active');

                                imgTrue.classList.add('active');
                                outputAnswer.classList.add('active');
                                outputAnswer.innerHTML = "Верно!";
                                nextBtn.classList.add('active');

                                count++;
                              } else {
                                imgQue.classList.remove('active');
                                eighthQue.classList.remove('active');
                                inputBox.classList.remove('active');

                                imgFalse.classList.add('active');
                                outputAnswer.classList.add('active');
                                outputAnswer.innerHTML = "Не верно... Правильный ответ: Дин Цзюньхуэй";
                                nextBtn.classList.add('active');
                              }

                              nextBtn.addEventListener('click', () => {
                                nextBtn.classList.remove('active');
                                outputAnswer.classList.remove('active');
                                imgTrue.classList.remove('active');
                                imgFalse.classList.remove('active');
                                eighthQue.classList.remove('active');

                                imgQue.classList.add('active');
                                ninthQue.classList.add('active');
                                inputBox.classList.add('active');

                                input.value = '';

                                inputBtn.addEventListener('click', () => {
                                  const ninthAnswer = input.value;

                                  if (ninthAnswer === "Владимир Синицын" || ninthAnswer === "Синицын" || ninthAnswer === "Борисыч") {
                                    imgQue.classList.remove('active');
                                    ninthQue.classList.remove('active');
                                    inputBox.classList.remove('active');
                                    imgFalse.classList.remove('active');

                                    imgTrue.classList.add('active');
                                    outputAnswer.classList.add('active');
                                    outputAnswer.innerHTML = "Верно!";
                                    nextBtn.classList.add('active');

                                    count++;
                                  } else {
                                    imgQue.classList.remove('active');
                                    ninthQue.classList.remove('active');
                                    inputBox.classList.remove('active');

                                    imgFalse.classList.add('active');
                                    outputAnswer.classList.add('active');
                                    outputAnswer.innerHTML = "Не верно... Правильный ответ: Владимир Синицын";
                                    nextBtn.classList.add('active');
                                  }

                                  nextBtn.addEventListener('click', () => {
                                    nextBtn.classList.remove('active');
                                    outputAnswer.classList.remove('active');
                                    imgTrue.classList.remove('active');
                                    imgFalse.classList.remove('active');
                                    ninthQue.classList.remove('active');

                                    imgQue.classList.add('active');
                                    tenthQue.classList.add('active');
                                    inputBox.classList.add('active');

                                    input.value = '';

                                    inputBtn.addEventListener('click', () => {
                                      const tenthAnswer = input.value;

                                      if (tenthAnswer === "Стивен Хендри" || tenthAnswer === "Хендри") {
                                        imgQue.classList.remove('active');
                                        tenthQue.classList.remove('active');
                                        inputBox.classList.remove('active');
                                        imgFalse.classList.remove('active');
                                        nextBtn.classList.remove('active');

                                        imgTrue.classList.add('active');
                                        outputAnswer.classList.add('active');
                                        outputAnswer.innerHTML = "Верно!";
                                        resultBtn.classList.add('active');

                                        count++;
                                      } else {
                                        imgQue.classList.remove('active');
                                        tenthQue.classList.remove('active');
                                        inputBox.classList.remove('active');
                                        nextBtn.classList.remove('active');

                                        imgFalse.classList.add('active');
                                        outputAnswer.classList.add('active');
                                        outputAnswer.innerHTML = "Не верно... Правильный ответ: Стивен Хендри";
                                        resultBtn.classList.add('active');
                                      }

                                      resultBtn.addEventListener('click', () => {
                                        nextBtn.classList.remove('active');
                                        outputAnswer.classList.remove('active');
                                        imgTrue.classList.remove('active');
                                        imgFalse.classList.remove('active');
                                        tenthQue.classList.remove('active');
                                        imgQue.classList.remove('active');
                                        inputBox.classList.remove('active');

                                        imgWelcome.classList.add('active');

                                        let finalResult = count;

                                        if (finalResult <= 3) {
                                          resultBtn.classList.remove('active');
                                          imgWelcome.classList.add('active');
                                          outputAnswer.classList.add('active');
                                          outputAnswer.innerHTML = "Похоже, вы совсем недавно узнали об этой игре...";
                                          outputResult.classList.add('active');
                                          outputResult.innerHTML = "Ваш результат: " + finalResult + " из 10";

                                        } else if (finalResult > 3 && finalResult <= 7) {
                                          resultBtn.classList.remove('active');
                                          imgWelcome.classList.add('active');
                                          outputAnswer.classList.add('active');
                                          outputAnswer.innerHTML = "Вы хорошо разбираетесь в снукере!";
                                          outputResult.classList.add('active');
                                          outputResult.innerHTML = "Ваш результат: " + finalResult + " из 10";

                                        } else if (finalResult > 7) {
                                          resultBtn.classList.remove('active');
                                          imgWelcome.classList.add('active');
                                          outputAnswer.classList.add('active');
                                          outputAnswer.innerHTML = "Да вы настоящий знаток снукера!";
                                          outputResult.classList.add('active');
                                          outputResult.innerHTML = "Ваш результат: " + finalResult + " из 10";
                                        }
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
