import { resolve } from "path";
import { dirname } from "path";

const __dirname = dirname(new URL(import.meta.url).pathname);

const questions = [
  {
    description: "Qual é o seu gênero?",
    answers: ["Masculino", "Femenino"],
  },
  {
    description: "Qual é a sua idade?",
    answers: ["18-29", "30-39", "40-49", "50+"],
  },
  {
    description: "Quantas pessoas existem na sua família?",
    answers: ["1", "2", "3+"],
  },
  {
    description: "Nos passados já comprou iPhone XS do Apple?",
    answers: ["Sim", "Não"],
  },
];

const comments = [
  {
    ava: "./src/img/1.gif",
    name: "Inês",
    text: "Eu ganhei nada",
    like: "./src/img/3.webp",
    likesNumber: "29",
    timeNumber: "4",
    timeUnit: "minutos",
  },
  {
    ava: "./src/img/4.webp",
    name: "FernandoPessoa",
    text: "Eu gostei essas promoções",
    like: "./src/img/like.webp",
    likesNumber: "9",
    timeNumber: "11",
    timeUnit: "minutos",
  },
  {
    ava: "./src/img/5.webp",
    name: "Maria",
    text: "Já recebi minha iPhone 11 Pro. Agradeço muito!",
    like: "./src/img/like.webp",
    likesNumber: "22",
    timeNumber: "15",
    timeUnit: "minutos",
  },
  {
    ava: "./src/img/6.webp",
    name: "Lucas",
    text: "Eu achava que era uma brincadeira, mas meu iPhone 11 Pro do Apple chegou hoje de manhã",
    like: "./src/img/like.webp",
    likesNumber: "36",
    timeNumber: "38",
    timeUnit: "minutos",
  },
  {
    ava: "./src/img/2.gif",
    name: "Mariana",
    text: "Eu participei, venci e ganhou o meu iPhone 11 Pro do Apple depois de 5 dias. Agradeço vocês!",
    like: "./src/img/like.webp",
    likesNumber: "31",
    timeNumber: "42",
    timeUnit: "minutos",
  },
  {
    ava: "./src/img/7.webp",
    name: "Rafael",
    text: "É possível pegar o meu iPhone 11 Pro do Apple hoje？ Obrigado",
    like: "./src/img/like.webp",
    likesNumber: "6",
    timeNumber: "1",
    timeUnit: "hora",
  },
  {
    ava: "./src/img/8.webp",
    name: "Francisco",
    text: "Eu achava que era uma brincadeira, mas hoje de manhã eu recebi meu iPhone 11 Pro através de DHL, eu quero participar outras pesquisas！",
    like: "./src/img/like.webp",
    likesNumber: "15",
    timeNumber: "2",
    timeUnit: "hora",
  },
  {
    ava: "./src/img/4.webp",
    name: "Fernando",
    text: "Existe algumas outras pesquisas ？",
    like: "./src/img/like.webp",
    likesNumber: "39",
    timeNumber: "2",
    timeUnit: "hora",
  },
  {
    ava: "./src/img/10.webp",
    name: "Heloísa",
    text: "Que bom! Eu nunca ganhei nada!",
    like: "./src/img/like.webp",
    likesNumber: "23",
    timeNumber: "3",
    timeUnit: "hora",
  },
  {
    ava: "./src/img/9.webp",
    name: "Gustavo",
    text: "No início eu achava que era uma brincadeira, mas em fim eu ganhei minha Galaxy S10. Já falei para os meus amigos, assim eles poderiam ganhar também. :)",
    like: "./src/img/like.webp",
    likesNumber: "30",
    timeNumber: "4",
    timeUnit: "hora",
  },
];

export default {
  partialDirectory: resolve(__dirname, "src/partials"),
  context: {
    questions: questions,
    comments: comments,
  },
};
