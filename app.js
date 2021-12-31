// Pegando o elemento que irá exibir os segundos
const secondsContainer = document.querySelector('#seconds');
// Pegando o elemento que irá exibir os minutos
const minutesContainer = document.querySelector('#minutes');
// Pegando o elemento que irá exibir as horas
const hoursContainer = document.querySelector('#hours');
// Pegando o elemento que irá exibir os dias
const daysContainer = document.querySelector('#days');
// Pegando o elemento que exibe na tela o texto com o próximo ano
const nextYearContainer = document.querySelector('#year');
// Pegando o elemento que exibe o spinner 
const spinnerLoading = document.querySelector('#loading');
// Pegando a div que contém todos os h2 que representam os cronômetros
const countDownContainer = document.querySelector('#countdown');

// Esta variável armazena o valor do próximo ano
const nextYear = new Date().getFullYear() + 1;
const newYearTime = new  Date(`January 01 ${nextYear} 00:00:00`);

// Atribuindo a interface o texto que indica o próximo ano
nextYearContainer.textContent = nextYear;

const getTimeUnit = unit => unit < 10 ? '0' + unit : unit;
// Adiciona o valor dos cronômetros na interface
const insertCountDown = ({seconds,minutes,hours,days}) => {
    secondsContainer.textContent = getTimeUnit(seconds);
    minutesContainer.textContent = getTimeUnit(minutes);
    hoursContainer.textContent = getTimeUnit(hours);
    daysContainer.textContent = getTimeUnit(days);
}
// Esta função irá calcular a diferença entre a data atual e a data do próximo ano
const updateCountdown = () => {
    const currentTime = new Date();
    const difference = newYearTime - currentTime;
    const days = Math.floor(difference / 1000 / 60 / 60 / 24);
    const hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    const minutes = Math.floor(difference / 1000 / 60) % 60;
    const seconds = Math.floor(difference / 1000) % 60;

    insertCountDown({seconds,minutes,hours,days});

}

// A função handleCountDownDisplay remove o spinner e seta o display da div #countDown
const handleCountDownDisplay = () => {
    spinnerLoading.remove();
    countDownContainer.style.display = "flex";
}
// A função executa handleCountDownDisplay após 1 segundo
setTimeout(handleCountDownDisplay, 1000);

// A função setInterval está executando a função updateCountdown a cada 1 segundo
setInterval(updateCountdown, 1000)
