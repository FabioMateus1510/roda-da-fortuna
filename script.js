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
  {
    name: 'Comidas',
    values: comidas,
    background: './comidasBackground.jpg',
    colors: [
      'rgb(107, 63, 50)', // Coxinha de Brigadeiro (Marrom escuro)
      'rgb(85, 107, 141)', // Feijoada de Marshmallow (Azul acinzentado)
      'rgb(241, 176, 102)', // Acarajé de Sorvete (Laranja claro)
      'rgb(143, 108, 85)', // Pão de Queijo de Chocolate (Marrom médio)
      'rgb(204, 51, 102)', // Churrasco de Jujuba (Rosa intenso)
      'rgb(250, 230, 128)', // Escondidinho de Pipoca (Amarelo claro)
      'rgb(195, 206, 227)', // Algodão Doce Salgado (Azul pastel)
      'rgb(192, 152, 65)', // Cuscuz de Hambúrguer (Amarelo esverdeado)
      'rgb(207, 182, 214)', // Vatapá de Chiclete (Lilás claro)
      'rgb(215, 191, 135)', // Sopa de Batata Frita (Marrom claro)
      'rgb(255, 195, 231)', // Pamonha de Balas de Goma (Rosa claro)
      'rgb(173, 92, 71)', // Canjica de Goiabada (Vermelho escuro)
    ],
  },
  {
    name: 'Bebidas',
    values: bebidas,
    background: './bebidasBackground.jpg',
    colors: [
      'rgb(118, 184, 82)', // Caipirinha de Guaraná (Verde claro)
      'rgb(145, 214, 125)', // Refrigerante de picles (Verde claro brilhante)
      'rgb(255, 204, 102)', // Vitamina de mexerica (Laranja claro)
      'rgb(255, 234, 97)', // Suco de banana (Amarelo claro)
      'rgb(251, 253, 164)', // Pinga Colada (Amarelo claro pastel)
      'rgb(81, 64, 59)', // Batida de Açaí com café (Marrom escuro)
      'rgb(132, 107, 99)', // Cerveja com açai (Marrom médio)
      'rgb(199, 169, 103)', // Caldo de lasanha (Marrom claro)
      'rgb(112, 57, 80)', // Quentão de Suco de Uva (Roxo escuro)
      'rgb(157, 118, 77)', // Bebida de Pé de Moleque (Marrom médio)
      'rgb(219, 169, 101)', // Chá de Paçoca (Marrom claro)
      'rgb(244, 152, 66)', // Drink de cenoura (Laranja escuro)
    ],
  },
  {
    name: 'Bom Dia e Cia',
    values: bomDiaeCia,
    background: './bomdiaBackground.png',
    colors: [
      '#F6CD23',
      '#5776A6',
      '#F6CD23',
      '#5776A6',
      '#F6CD23',
      '#5776A6',
      '#F6CD23',
      '#5776A6',
      '#F6CD23',
      '#5776A6',
      '#F6CD23',
      '#5776A6',
    ],
  },
  { name: 'Tarefas', values: tarefas },
  {
    name: 'Signos',
    values: signos,
    background: './signosBackground.jpg',
    colors: [
      'rgb(62, 111, 184)', // Azul escuro com uma aura mística (Peixe corredor)
      'rgb(132, 94, 131)', // Roxo suave com uma aura etérea (Pato Melancólico)
      'rgb(245, 213, 60)', // Amarelo dourado com uma aura cósmica (Galinha Astronauta)
      'rgb(163, 141, 100)', // Marrom amarelado com uma aura misteriosa (Girafa Invisível)
      'rgb(91, 117, 137)', // Azul acinzentado com uma aura vibrante (Cachorro Bipolar)
      'rgb(123, 168, 137)', // Verde suave com uma aura alienígena (Gato Extraterrestre)
      'rgb(147, 106, 170)', // Roxo intenso com uma aura hipnótica (Cobra Malabarista)
      'rgb(188, 146, 109)', // Marrom claro com uma aura serena (Macaco Comportado)
      'rgb(45, 61, 85)', // Azul escuro profundo com uma aura brilhante (Tubarão Peludo)
      'rgb(77, 157, 118)', // Verde esmeralda com uma aura poética (Jacaré Poético)
      'rgb(185, 222, 78)', // Verde limão brilhante com uma aura eletrizante (Tartaruga Elétrica)
      'rgb(77, 77, 77)', // Preto com uma aura enigmática (Aranha Crossfiteira)
    ],
  },
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
  document.body.style.backgroundImage = `url(${presetObject.background})`;
  segments.forEach((segment, index) => {
    segment.style.background = presetObject.colors[index];
  });
  inputs.forEach((input, index) => {
    input.style.background = presetObject.colors[index];
  });
  segmentsValue.forEach((segment, index) => {
    segment.textContent = presetArray[index];
  });
};

inputs.forEach((input, index) => {
  input.addEventListener('keyup', () => batata(index));
});

clearbutton.addEventListener('click', clearInput);
select.addEventListener('click', setPreset);
