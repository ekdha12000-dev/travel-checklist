/**
 * 여행 준비물 체크 웹 페이지
 * 
 * 1. 질문 데이터
 * 질문 내용과 누락 안내 텍스트(item)는 아래 배열에서 직접 수정할 수 있습니다.
 */
const questions = [
  { id: 1, text: "가서 입을 옷 챙겼어?", item: "의류" },
  { id: 2, text: "양치할거나 싯을거 챙겼어?", item: "세면도구" },
  { id: 3, text: "테블릿이나 충전기 챙겼어?", item: "전자기기" },
  { id: 4, text: "지갑 챙겼어?", item: "지갑" },
  { id: 5, text: "가기전에 방 정리 했어?", item: "방 정리" },
  { id: 6, text: "양말은", item: "양말" },
  { id: 7, text: "가방은", item: "가방정리" },
  { id: 8, text: "더 챙길거 없어?", item: "잊은거" }
];

/* ==========================================================================
   상태 관리 (State Management)
   ========================================================================== */
const state = {
  currentIndex: 0,
  answers: [], // { id, item, answer: 'yes' | 'no' | 'skip' }
  autoRedirectTimer: null,
  countdownInterval: null
};

/* DOM Elements 캐싱 */
const screens = {
  start: document.getElementById('screen-start'),
  question: document.getElementById('screen-question'),
  case1: document.getElementById('screen-case1'),
  case2: document.getElementById('screen-case2'),
  case3: document.getElementById('screen-case3')
};

const elements = {
  // 질문 화면 요소
  qNumber: document.getElementById('q-number'),
  qText: document.getElementById('q-text'),
  progressText: document.getElementById('progress-text'),
  progressBar: document.getElementById('progress-bar'),
  btnOptYes: document.getElementById('btn-opt-yes'),
  btnOptNo: document.getElementById('btn-opt-no'),
  btnOptSkip: document.getElementById('btn-opt-skip'),

  // 버튼들
  btnStart: document.getElementById('btn-start'),
  btnCase1Restart: document.getElementById('btn-case1-restart'),
  btnCase2Restart: document.getElementById('btn-case2-restart'),
  btnCase3Restart: document.getElementById('btn-case3-restart'),

  // 케이스 2 요소
  missingItemsList: document.getElementById('missing-items-list'),
  countdownNumber: document.getElementById('countdown-number'),
  timerGauge: document.getElementById('timer-gauge'),

  // 케이스 3 캔버스
  confettiCanvas: document.getElementById('confetti-canvas')
};

/* ==========================================================================
   사운드 효과 (Web Audio API - 무의존성 내장 합성)
   ========================================================================== */
class SimpleAudio {
  constructor() {
    this.ctx = null;
  }

  init() {
    if (!this.ctx && (window.AudioContext || window.webkitAudioContext)) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      this.ctx = new AudioCtx();
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playPop() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'sine';
      osc.frequency.setValueAtTime(440, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(880, this.ctx.currentTime + 0.08);
      gain.gain.setValueAtTime(0.15, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.08);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.08);
    } catch (_) {}
  }

  playBonk() {
    try {
      this.init();
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();
      osc.connect(gain);
      gain.connect(this.ctx.destination);
      osc.type = 'sawtooth';
      osc.frequency.setValueAtTime(260, this.ctx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(70, this.ctx.currentTime + 0.22);
      gain.gain.setValueAtTime(0.25, this.ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.01, this.ctx.currentTime + 0.22);
      osc.start();
      osc.stop(this.ctx.currentTime + 0.22);
    } catch (_) {}
  }

  playFanfare() {
    try {
      this.init();
      if (!this.ctx) return;
      const notes = [523.25, 659.25, 783.99, 1046.50];
      notes.forEach((freq, idx) => {
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.type = 'triangle';
        osc.frequency.value = freq;
        const startTime = this.ctx.currentTime + idx * 0.1;
        gain.gain.setValueAtTime(0.18, startTime);
        gain.gain.exponentialRampToValueAtTime(0.001, startTime + 0.4);
        osc.start(startTime);
        osc.stop(startTime + 0.45);
      });
    } catch (_) {}
  }
}

const sfx = new SimpleAudio();

/* ==========================================================================
   화면 전환 및 상태 제어
   ========================================================================== */
function switchScreen(targetKey) {
  Object.keys(screens).forEach((key) => {
    if (key === targetKey) {
      screens[key].classList.add('active');
    } else {
      screens[key].classList.remove('active');
    }
  });
}

/**
 * 상태 완전 초기화
 */
function resetState() {
  // 진행 중인 타이머 해제
  if (state.autoRedirectTimer) {
    clearTimeout(state.autoRedirectTimer);
    state.autoRedirectTimer = null;
  }
  if (state.countdownInterval) {
    clearInterval(state.countdownInterval);
    state.countdownInterval = null;
  }

  // 상태값 비우기
  state.currentIndex = 0;
  state.answers = [];

  // 컨페티 정지
  stopConfetti();

  // 시작 화면으로 복귀
  switchScreen('start');
}

/**
 * 체크 시작
 */
function startChecklist() {
  sfx.init();
  sfx.playPop();
  state.currentIndex = 0;
  state.answers = [];
  renderCurrentQuestion();
  switchScreen('question');
}

/**
 * 현재 질문 렌더링
 */
function renderCurrentQuestion() {
  const currentQ = questions[state.currentIndex];
  const total = questions.length;
  const currentNum = state.currentIndex + 1;

  // 번호 및 텍스트 갱신
  elements.qNumber.textContent = `Q${currentNum}`;
  elements.qText.textContent = currentQ.text;
  elements.progressText.textContent = `${currentNum} / ${total}`;

  // 프로그레스 바 갱신 (1/8 ~ 8/8)
  const percent = (currentNum / total) * 100;
  elements.progressBar.style.width = `${percent}%`;
}

/**
 * 답변 처리 로직
 * @param {'yes' | 'no' | 'skip'} choice
 */
function handleAnswer(choice) {
  sfx.playPop();

  const currentQ = questions[state.currentIndex];
  state.answers.push({
    id: currentQ.id,
    item: currentQ.item,
    answer: choice
  });

  // 다음 질문으로 이동하거나, 마지막 질문이면 결과 판별
  if (state.currentIndex < questions.length - 1) {
    state.currentIndex++;
    renderCurrentQuestion();
  } else {
    // Q8 답변 직후 즉시 결과 화면으로 이동
    evaluateResults();
  }
}

/**
 * 결과 판별 로직 및 화면 분기
 * 
 * CASE 1: 8개 질문 모두 '없어도 괜찮습니다' 선택
 * CASE 2: 답변 중 '아니오'가 1개 이상 포함
 * CASE 3: '아니오'가 0개이면서, '없어도 괜찮습니다'가 8개 미만 ('예'와 '없어도 괜찮습니다'로만 통과)
 */
function evaluateResults() {
  const total = questions.length;
  const noAnswers = state.answers.filter((a) => a.answer === 'no');
  const skipCount = state.answers.filter((a) => a.answer === 'skip').length;

  if (skipCount === total) {
    // CASE 1: 히든 페이지 (없어도 괜찮습니다 올클리어)
    showCase1();
  } else if (noAnswers.length > 0) {
    // CASE 2: 준비 누락 및 초기화 페이지 (아니오 1개 이상)
    showCase2(noAnswers);
  } else {
    // CASE 3: 최종 완료 페이지 (아니오 0개 & skip < 8개)
    showCase3();
  }
}

/* ==========================================================================
   결과 화면별 상세 처리
   ========================================================================== */

/**
 * CASE 1: 히든 페이지
 */
function showCase1() {
  switchScreen('case1');
}

/**
 * CASE 2: 준비 누락 및 초기화 페이지
 * @param {Array} noAnswers '아니오'를 선택한 항목 배열
 */
function showCase2(noAnswers) {
  sfx.playBonk();

  // 누락된 아이템 리스트 생성
  elements.missingItemsList.innerHTML = '';
  noAnswers.forEach((ans) => {
    const li = document.createElement('li');
    li.className = 'missing-item-badge';
    li.innerHTML = `<span class="missing-item-dot"></span><span>${ans.item}</span>`;
    elements.missingItemsList.appendChild(li);
  });

  // 3초 카운트다운 타이머 시작
  let timeLeft = 3.0;
  elements.countdownNumber.textContent = '3';
  elements.timerGauge.style.width = '100%';

  if (state.autoRedirectTimer) clearTimeout(state.autoRedirectTimer);
  if (state.countdownInterval) clearInterval(state.countdownInterval);

  const startTime = Date.now();
  const totalDuration = 3000;

  state.countdownInterval = setInterval(() => {
    const elapsed = Date.now() - startTime;
    const remaining = Math.max(0, totalDuration - elapsed);
    const secondsRounded = Math.ceil(remaining / 1000);
    elements.countdownNumber.textContent = secondsRounded > 0 ? secondsRounded : 0;
    
    // 게이지 비율 감소
    const gaugePercent = (remaining / totalDuration) * 100;
    elements.timerGauge.style.width = `${gaugePercent}%`;

    if (remaining <= 0) {
      clearInterval(state.countdownInterval);
      state.countdownInterval = null;
    }
  }, 50);

  // 3초 뒤 자동 시작 화면 이동
  state.autoRedirectTimer = setTimeout(() => {
    resetState();
  }, totalDuration);

  switchScreen('case2');
}

/**
 * CASE 3: 최종 완료 페이지
 */
function showCase3() {
  sfx.playFanfare();
  startConfetti();
  switchScreen('case3');
}

/* ==========================================================================
   컨페티 (폭죽) 애니메이션 (외부 라이브러리 無)
   ========================================================================== */
let confettiAnimationId = null;
function startConfetti() {
  const canvas = elements.confettiCanvas;
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  // 캔버스 크기 맞추기
  const rect = canvas.getBoundingClientRect();
  canvas.width = rect.width || 430;
  canvas.height = rect.height || 540;

  const particles = [];
  const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ec4899', '#8b5cf6', '#06b6d4'];

  for (let i = 0; i < 60; i++) {
    particles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 80,
      y: canvas.height * 0.45,
      w: Math.random() * 8 + 4,
      h: Math.random() * 6 + 4,
      color: colors[Math.floor(Math.random() * colors.length)],
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 1) * 8 - 3,
      rotation: Math.random() * 360,
      vr: (Math.random() - 0.5) * 12,
      opacity: 1
    });
  }

  function render() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    let aliveCount = 0;

    particles.forEach((p) => {
      p.x += p.vx;
      p.y += p.vy;
      p.vy += 0.22; // gravity
      p.rotation += p.vr;
      p.opacity -= 0.007;

      if (p.opacity > 0 && p.y < canvas.height + 20) {
        aliveCount++;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate((p.rotation * Math.PI) / 180);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = Math.max(0, p.opacity);
        ctx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
        ctx.restore();
      }
    });

    if (aliveCount > 0) {
      confettiAnimationId = requestAnimationFrame(render);
    }
  }

  if (confettiAnimationId) cancelAnimationFrame(confettiAnimationId);
  render();
}

function stopConfetti() {
  if (confettiAnimationId) {
    cancelAnimationFrame(confettiAnimationId);
    confettiAnimationId = null;
  }
  const canvas = elements.confettiCanvas;
  if (canvas) {
    const ctx = canvas.getContext('2d');
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

/* ==========================================================================
   이벤트 리스너 바인딩
   ========================================================================== */
function initEvents() {
  // 시작 버튼
  elements.btnStart.addEventListener('click', startChecklist);

  // 3개 선택지 버튼
  elements.btnOptYes.addEventListener('click', () => handleAnswer('yes'));
  elements.btnOptNo.addEventListener('click', () => handleAnswer('no'));
  elements.btnOptSkip.addEventListener('click', () => handleAnswer('skip'));

  // 케이스별 다시하기/처음으로 버튼
  elements.btnCase1Restart.addEventListener('click', resetState);
  elements.btnCase2Restart.addEventListener('click', resetState);
  elements.btnCase3Restart.addEventListener('click', resetState);

  // 키보드 단축키 지원 (선택사항: 1번, 2번, 3번 키로 답변)
  window.addEventListener('keydown', (e) => {
    if (screens.question.classList.contains('active')) {
      if (e.key === '1' || e.key === 'y' || e.key === 'Y') {
        handleAnswer('yes');
      } else if (e.key === '2' || e.key === 'n' || e.key === 'N') {
        handleAnswer('no');
      } else if (e.key === '3' || e.key === 's' || e.key === 'S') {
        handleAnswer('skip');
      }
    }
  });
}

// 애플리케이션 초기화
document.addEventListener('DOMContentLoaded', () => {
  initEvents();
  resetState();
});
