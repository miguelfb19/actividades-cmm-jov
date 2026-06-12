const triviaQuestions = [
  // MUNDIALES (2014-2022)
  {
    category: "Mundial",
    question: "¿En qué país se jugó el Mundial 2014?",
    answer: "Brasil"
  },
  {
    category: "Mundial",
    question: "¿Qué selección ganó el Mundial 2014?",
    answer: "Alemania"
  },
  {
    category: "Mundial",
    question: "¿A qué selección venció Alemania en la final de 2014?",
    answer: "Argentina"
  },
  {
    category: "Mundial",
    question: "¿Quién metió el gol de la victoria en la final del Mundial 2014?",
    answer: "Mario Götze"
  },
  {
    category: "Mundial",
    question: "¿Quién fue el goleador del Mundial 2014?",
    answer: "James Rodríguez"
  },
  {
    category: "Mundial",
    question: "¿Contra qué selección metió Alemania 7 goles en semifinales de 2014?",
    answer: "Brasil"
  },
  {
    category: "Mundial",
    question: "¿Quién ganó el Balón de Oro del Mundial 2014?",
    answer: "Lionel Messi"
  },
  {
    category: "Mundial",
    question: "¿En qué país se jugó el Mundial 2018?",
    answer: "Rusia"
  },
  {
    category: "Mundial",
    question: "¿Qué selección ganó el Mundial 2018?",
    answer: "Francia"
  },
  {
    category: "Mundial",
    question: "¿A qué selección venció Francia en la final de 2018?",
    answer: "Croacia"
  },
  {
    category: "Mundial",
    question: "¿Quién fue el goleador del Mundial 2018?",
    answer: "Harry Kane"
  },
  {
    category: "Mundial",
    question: "¿Quién fue elegido el mejor jugador joven del Mundial 2018?",
    answer: "Kylian Mbappé"
  },
  {
    category: "Mundial",
    question: "¿Qué selección eliminó a Alemania en fase de grupos en 2018?",
    answer: "Corea del Sur"
  },
  {
    category: "Mundial",
    question: "¿En qué Mundial se usó por primera vez el VAR?",
    answer: "Rusia 2018"
  },
  {
    category: "Mundial",
    question: "¿En qué país se jugó el Mundial 2022?",
    answer: "Qatar"
  },
  {
    category: "Mundial",
    question: "¿Qué selección ganó el Mundial 2022?",
    answer: "Argentina"
  },
  {
    category: "Mundial",
    question: "¿A qué selección venció Argentina en la final de 2022?",
    answer: "Francia"
  },
  {
    category: "Mundial",
    question: "¿Quién ganó el Balón de Oro del Mundial 2022?",
    answer: "Lionel Messi"
  },
  {
    category: "Mundial",
    question: "¿Qué portero fue figura de Argentina en los penales del Mundial 2022?",
    answer: "Emiliano Martínez"
  },
  {
    category: "Mundial",
    question: "¿Qué selección africana llegó a semifinales en 2022?",
    answer: "Marruecos"
  },

  // BÍBLICAS - Amor al prójimo, compañerismo y hermandad
  {
    category: "Biblia",
    question: "¿Quién dijo: 'Ama a tu prójimo como a ti mismo'?",
    answer: "Jesús"
  },
  {
    category: "Biblia",
    question: "¿Quién ayudó al hombre herido en la parábola del Buen Samaritano?",
    answer: "El Buen Samaritano"
  },
  {
    category: "Biblia",
    question: "¿Quién fue un gran amigo del rey David?",
    answer: "Jonatán"
  },
  {
    category: "Biblia",
    question: "¿Qué personaje perdonó a sus hermanos que lo vendieron como esclavo?",
    answer: "José"
  },
  {
    category: "Biblia",
    question: "¿Qué mujer se quedó con su suegra Noemí por amor y lealtad?",
    answer: "Rut"
  },
  {
    category: "Biblia",
    question: "Según Jesús, ¿cuál es el mandamiento más importante?",
    answer: "Amar a Dios y al prójimo"
  },
  {
    category: "Biblia",
    question: "¿Cuántas veces dijo Jesús que debemos perdonar?",
    answer: "70 veces 7"
  },
  {
    category: "Biblia",
    question: "¿Quién negó a Jesús tres veces y luego fue perdonado?",
    answer: "Pedro"
  },
  {
    category: "Biblia",
    question: "¿Quién fue conocido como 'el discípulo amado', el más cercano a Jesús?",
    answer: "Juan"
  },
  {
    category: "Biblia",
    question: "Completa: 'En esto conocerán todos que sois mis discípulos, si tuviereis ____ los unos con los otros'.",
    answer: "Amor"
  },
  {
    category: "Biblia",
    question: "¿Quién acompañó a Pablo en sus viajes misioneros ayudándolo siempre?",
    answer: "Silas"
  },
  {
    category: "Biblia",
    question: "¿Qué discípulo ayudó a Saulo (Pablo) a ser aceptado por los demás apóstoles?",
    answer: "Bernabé"
  },
  {
    category: "Biblia",
    question: "¿En qué libro de la Biblia se habla de lo bueno que es vivir los hermanos juntos en armonía?",
    answer: "Salmos"
  },
  {
    category: "Biblia",
    question: "Completa: 'Sobrellevad los unos las cargas de los otros, y cumplid así la ley de ____'.",
    answer: "Cristo"
  },
  {
    category: "Biblia",
    question: "¿Quién era el hermano de Pedro que lo llevó a conocer a Jesús?",
    answer: "Andrés"
  },
  {
    category: "Biblia",
    question: "Jesús dijo: 'Un mandamiento nuevo os doy: que os ____ unos a otros'.",
    answer: "Améis"
  },
  {
    category: "Biblia",
    question: "¿Quién escribió que 'el que no ama a su hermano no puede amar a Dios'?",
    answer: "Juan"
  },
  {
    category: "Biblia",
    question: "Según la Biblia, ¿qué es más fuerte que la muerte?",
    answer: "El amor"
  },
  {
    category: "Biblia",
    question: "¿A quién le lavó los pies Jesús como ejemplo de humildad y servicio?",
    answer: "A sus discípulos"
  },
  {
    category: "Biblia",
    question: "¿Quién dijo: 'Donde estén dos o tres reunidos en mi nombre, allí estoy yo'?",
    answer: "Jesús"
  }
];

const charadasWords = [
  "Perdón",
  "Humildad",
  "Servicio",
  "Paciencia",
  "Amor al prójimo",
  "Unidad",
  "Generosidad"
];

// DOM elements
const menuScreen = document.getElementById('menuScreen');
const triviaHome = document.getElementById('triviaHome');
const gameScreen = document.getElementById('gameScreen');
const allCardsScreen = document.getElementById('allCardsScreen');
const charadasScreen = document.getElementById('charadasScreen');
const allCardsGrid = document.getElementById('allCardsGrid');
const generateBtn = document.getElementById('generateBtn');
const viewAllBtn = document.getElementById('viewAllBtn');
const backBtn = document.getElementById('backBtn');
const allBackBtn = document.getElementById('allBackBtn');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');
const counter = document.getElementById('counter');
const cardContainer = document.getElementById('cardContainer');
const goTriviaBtn = document.getElementById('goTriviaBtn');
const goCharadasBtn = document.getElementById('goCharadasBtn');
const triviaBackBtn = document.getElementById('triviaBackBtn');
const charadasBackBtn = document.getElementById('charadasBackBtn');
const spinBtn = document.getElementById('spinBtn');
const rouletteCanvas = document.getElementById('rouletteCanvas');
const rouletteResult = document.getElementById('rouletteResult');

// Trivia state
let currentQuestions = [];
let currentIndex = 0;
let currentFilter = 'todas';

// Roulette state
let rouletteAngle = 0;
let isSpinning = false;

function shuffle(arr) {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

function showScreen(screen) {
  menuScreen.classList.add('hidden');
  triviaHome.classList.add('hidden');
  gameScreen.classList.add('hidden');
  allCardsScreen.classList.add('hidden');
  charadasScreen.classList.add('hidden');

  if (screen === 'trivia') {
    triviaHome.classList.remove('hidden');
  } else if (screen === 'game') {
    gameScreen.classList.remove('hidden');
  } else if (screen === 'all') {
    allCardsScreen.classList.remove('hidden');
  } else if (screen === 'charadas') {
    charadasScreen.classList.remove('hidden');
  } else {
    menuScreen.classList.remove('hidden');
  }
}

// ===== TRIVIA LOGIC =====

function renderCard(item) {
  cardContainer.classList.remove('flipped');
  cardContainer.innerHTML = `
    <div class="card-inner">
      <div class="card-front">
        <span class="card-category">${item.category}</span>
        <p class="card-text">${item.question}</p>
        <span class="tap-hint">Toca para ver respuesta</span>
      </div>
      <div class="card-back">
        <span class="card-label">Respuesta</span>
        <p class="card-text">${item.answer}</p>
      </div>
    </div>
  `;
  counter.textContent = `${currentIndex + 1} / ${currentQuestions.length}`;
}

function showCurrent() {
  renderCard(currentQuestions[currentIndex]);
}

function startGame() {
  currentQuestions = shuffle(triviaQuestions).slice(0, 10);
  currentIndex = 0;
  showScreen('game');
  showCurrent();
}

function goPrev() {
  if (currentIndex > 0) {
    currentIndex--;
    showCurrent();
  }
}

function goNext() {
  if (currentIndex < currentQuestions.length - 1) {
    currentIndex++;
    showCurrent();
  }
}

function showAllCards(filter = 'todas') {
  currentFilter = filter;
  allCardsGrid.innerHTML = '';

  document.querySelectorAll('.tab-btn').forEach((btn) => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });

  const filtered = filter === 'todas'
    ? triviaQuestions
    : triviaQuestions.filter((q) => q.category === filter);

  filtered.forEach((item) => {
    const card = document.createElement('div');
    card.className = 'grid-card';
    card.innerHTML = `
      <div class="grid-card-inner">
        <div class="grid-card-front">
          <span class="grid-card-category">${item.category}</span>
          <p class="grid-card-text">${item.question}</p>
          <span class="grid-tap-hint">Toca para ver respuesta</span>
        </div>
        <div class="grid-card-back">
          <span class="grid-card-label">Respuesta</span>
          <p class="grid-card-text">${item.answer}</p>
        </div>
      </div>
    `;
    card.addEventListener('click', () => card.classList.toggle('flipped'));
    allCardsGrid.appendChild(card);
  });
}

// ===== ROULETTE LOGIC =====

function drawRoulette(rotationAngle) {
  const ctx = rouletteCanvas.getContext('2d');
  const w = rouletteCanvas.width;
  const h = rouletteCanvas.height;
  const cx = w / 2;
  const cy = h / 2;
  const r = 180;
  const count = charadasWords.length;
  const sliceAngle = (2 * Math.PI) / count;

  const colors = ['#e94560', '#0f3460', '#533483', '#16213e', '#e94560', '#0f3460', '#533483'];

  ctx.clearRect(0, 0, w, h);

  for (let i = 0; i < count; i++) {
    const start = rotationAngle + i * sliceAngle;
    const end = start + sliceAngle;

    // Slice
    ctx.beginPath();
    ctx.moveTo(cx, cy);
    ctx.arc(cx, cy, r, start, end);
    ctx.closePath();
    ctx.fillStyle = colors[i];
    ctx.fill();
    ctx.strokeStyle = '#1a1a2e';
    ctx.lineWidth = 2;
    ctx.stroke();

    // Text
    ctx.save();
    ctx.translate(cx, cy);
    ctx.rotate(start + sliceAngle / 2);
    ctx.textAlign = 'center';
    ctx.fillStyle = '#fff';
    ctx.font = 'bold 14px Segoe UI, sans-serif';
    ctx.fillText(charadasWords[i], r * 0.62, 6);
    ctx.restore();
  }

  // Center circle
  ctx.beginPath();
  ctx.arc(cx, cy, 28, 0, 2 * Math.PI);
  ctx.fillStyle = '#1a1a2e';
  ctx.fill();
  ctx.strokeStyle = '#e94560';
  ctx.lineWidth = 3;
  ctx.stroke();
}

function spinRoulette() {
  if (isSpinning) return;
  isSpinning = true;
  spinBtn.disabled = true;
  rouletteResult.classList.add('hidden');

  const count = charadasWords.length;
  const sliceDeg = 360 / count;
  const randomIndex = Math.floor(Math.random() * count);

  // Segment i center is at i*sliceDeg + sliceDeg/2 from 3 o'clock
  // The pointer is at the TOP = 270° from 3 o'clock
  // We need: rotationAngle + i*sliceDeg + sliceDeg/2 = 270
  // => rotationAngle = 270 - i*sliceDeg - sliceDeg/2
  const targetDeg = 270 - randomIndex * sliceDeg - sliceDeg / 2;

  // Ensure target is ahead of current angle
  let finalDeg = targetDeg;
  while (finalDeg <= rouletteAngle) finalDeg += 360;
  finalDeg += 5 * 360; // 5 full visual spins

  const startAngle = rouletteAngle;
  const totalRotation = finalDeg - startAngle;
  const duration = 4000;
  const startTime = performance.now();

  function animate(now) {
    const elapsed = now - startTime;
    const progress = Math.min(elapsed / duration, 1);
    const eased = 1 - Math.pow(1 - progress, 3);
    rouletteAngle = startAngle + totalRotation * eased;

    drawRoulette((rouletteAngle * Math.PI) / 180);

    if (progress < 1) {
      requestAnimationFrame(animate);
    } else {
      rouletteAngle = ((rouletteAngle % 360) + 360) % 360;
      isSpinning = false;
      spinBtn.disabled = false;
      rouletteResult.textContent = charadasWords[randomIndex];
      rouletteResult.classList.remove('hidden');
    }
  }

  requestAnimationFrame(animate);
}

// ===== EVENT LISTENERS =====

// Navigation
goTriviaBtn.addEventListener('click', () => showScreen('trivia'));
goCharadasBtn.addEventListener('click', () => {
  showScreen('charadas');
  drawRoulette(0);
});

triviaBackBtn.addEventListener('click', () => showScreen('menu'));
charadasBackBtn.addEventListener('click', () => showScreen('menu'));

// Trivia
generateBtn.addEventListener('click', startGame);
viewAllBtn.addEventListener('click', () => {
  showAllCards();
  showScreen('all');
});
backBtn.addEventListener('click', () => showScreen('trivia'));
allBackBtn.addEventListener('click', () => showScreen('trivia'));
prevBtn.addEventListener('click', goPrev);
nextBtn.addEventListener('click', goNext);

// Tabs
document.querySelectorAll('.tab-btn').forEach((btn) => {
  btn.addEventListener('click', () => showAllCards(btn.dataset.filter));
});

// Fullscreen
fullscreenBtn.addEventListener('click', () => {
  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen();
    fullscreenBtn.innerHTML = '&#10530;';
  } else {
    document.exitFullscreen();
    fullscreenBtn.innerHTML = '&#10529;';
  }
});

document.addEventListener('fullscreenchange', () => {
  fullscreenBtn.innerHTML = document.fullscreenElement ? '&#10530;' : '&#10529;';
});

// Card flip
cardContainer.addEventListener('click', () => cardContainer.classList.toggle('flipped'));

// Roulette spin
spinBtn.addEventListener('click', spinRoulette);

// Keyboard
document.addEventListener('keydown', (e) => {
  if (gameScreen.classList.contains('hidden')) return;
  if (e.key === 'ArrowLeft') goPrev();
  if (e.key === 'ArrowRight') goNext();
  if (e.key === ' ' || e.key === 'Spacebar') {
    e.preventDefault();
    cardContainer.classList.toggle('flipped');
  }
});
