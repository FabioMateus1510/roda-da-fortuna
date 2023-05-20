const wheel = document.querySelector('.wheel');
const spinBtn = document.querySelector('.spinBtn');
let value = Math.ceil(Math.random() * 3600);
const clearbutton = document.querySelector('.clear-button');
const inputs = document.querySelectorAll('.input');
const segments = document.querySelectorAll('.number');
const segmentsValue = document.querySelectorAll('.segment-value');
const select = document.querySelector('.select');
const title = document.querySelector('.title');

const comidas = [
  'Coxinha de Brigadeiro',
  'Feijoada de Marshmallow',
  'Acarajé de Sorvete',
  'Pão de Queijo de Chocolate',
  'Churrasco de Jujuba',
  'Escondidinho de Pipoca',
  'Algodão Doce Salgado',
  'Cuscuz de Hambúrguer',
  'Vatapá de Chiclete',
  'Sopa de Batata Frita',
  'Pamonha de Balas de Goma',
  'Canjica de Goiabada',
];

const bebidas = [
  'Caipirinha de Guaraná',
  'Refrigerante de picles',
  'vitamina de mexerica',
  'Suco de banana',
  'Pinga Colada',
  'Batida de Açaí com café',
  'Cerveja com açai',
  'caldo de lasanha',
  'Quentão de Suco de Uva',
  'Bebida de Pé de Moleque',
  'Chá de Paçoca',
  'drink de cenoura',
];

const bomDiaeCia = [
  'PLAYSTATION',
  'BANCO IMOBILIÁRIO',
  'MAX STEEL',
  'PATINS',
  'MP4',
  'SKATE',
  'COMPUTADOR',
  'CARRO DE CONTROLE REMOTO',
  'JOGO DA VIDA',
  'CELULAR',
  'HOT WHEELS',
  'BICICLETA',
];

const tarefas = [
  'Contar formigas dançantes',
  'Adivinhar o sentido da vida',
  'Ensinar um peixe a andar de bicicleta',
  'Fazer malabarismos com almôndegas',
  'Ordenar as nuvens por tamanho',
  'Dar aula de dança para pinguins',
  'Fazer tricô com espaguete',
  'Catar piolhos de estátuas',
  'Escovar os dentes de um jacaré',
  'Contar pelos de gato',
  'Procurar o fim do arco-íris',
  'Fazer uma serenata para um girassol',
];

const signos = [
  'Peixe corredor',
  'Pato Melancólico',
  'Galinha Astronauta',
  'Girafa Invisível',
  'Cachorro Bipolar',
  'Gato Extraterrestre',
  'Cobra Malabarista',
  'Macaco Comportado',
  'Tubarão Peludo',
  'Jacaré Poético',
  'Tartaruga Elétrica',
  'Aranha Crossfiteira',
];

const presets = [
  { name: 'Comidas', values: comidas },
  { name: 'Bebidas', values: bebidas },
  { name: 'Bom Dia e Cia', values: bomDiaeCia },
  { name: 'Tarefas', values: tarefas },
  { name: 'Signos', values: signos },
];

spinBtn.onclick = function () {
  wheel.style.transform = 'rotate(' + value + 'deg)';
  value += Math.ceil(Math.random() * 3600);
};

const batata = (position) => {
  segmentsValue[position].textContent = inputs[position].value;
};

const clearInput = () => {
  inputs.forEach((input) => {
    input.value = '';
  });
};

const setPreset = () => {
  const selectedPreset = select.value;

  let presetArray = [];

  const presetObject = presets.find((preset) => preset.name === selectedPreset);
  presetArray = presetObject.values;

  title.textContent = presetObject.name;

  segmentsValue.forEach((segment, index) => {
    segment.textContent = presetArray[index];
  });
};

inputs.forEach((input, index) => {
  input.addEventListener('keyup', () => batata(index));
});

clearbutton.addEventListener('click', clearInput);
select.addEventListener('click', setPreset);
