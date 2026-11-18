const subjectsData = {
  chem: {
    name: 'كيمياء',
    gradient: 'var(--grad-chem)',
    icon: 'fa-flask-vial',
    teacher: {
      1: { name: 'مدرس 1', bio: 'مدرس مادة الكيمياء (بيانات تجريبية)' },
      2: { name: 'مدرس 1', bio: 'مدرس مادة الكيمياء (بيانات تجريبية)' },
      3: { name: 'مدرس 1', bio: 'مدرس مادة الكيمياء (بيانات تجريبية)' }
    },
    counts: { notes: 14, videos: 28, pdf: 12, reviews: 8, images: 25, exams: 20 }
  },
  eng: {
    name: 'لغة انجليزية',
    gradient: 'var(--grad-eng)',
    icon: 'fa-language',
    teacher: {
      1: { name: 'مدرس 2', bio: 'مدرس مادة اللغة الإنجليزية (بيانات تجريبية)' },
      2: { name: 'مدرس 2', bio: 'مدرس مادة اللغة الإنجليزية (بيانات تجريبية)' },
      3: { name: 'مدرس 2', bio: 'مدرس مادة اللغة الإنجليزية (بيانات تجريبية)' }
    },
    counts: { notes: 18, videos: 32, pdf: 16, reviews: 10, images: 15, exams: 24 }
  },
  arab: {
    name: 'عربي',
    gradient: 'var(--grad-arab)',
    icon: 'fa-feather-pointed',
    teacher: {
      1: { name: 'مدرس 3', bio: 'مدرس مادة اللغة العربية (بيانات تجريبية)' },
      2: { name: 'مدرس 3', bio: 'مدرس مادة اللغة العربية (بيانات تجريبية)' },
      3: { name: 'مدرس 3', bio: 'مدرس مادة اللغة العربية (بيانات تجريبية)' }
    },
    counts: { notes: 22, videos: 40, pdf: 18, reviews: 12, images: 20, exams: 30 }
  },
  hist: {
    name: 'تاريخ',
    gradient: 'var(--grad-hist)',
    icon: 'fa-landmark',
    teacher: {
      1: { name: 'مدرس 4', bio: 'مدرس مادة التاريخ (بيانات تجريبية)' },
      2: { name: 'مدرس 4', bio: 'مدرس مادة التاريخ (بيانات تجريبية)' },
      3: { name: 'مدرس 4', bio: 'مدرس مادة التاريخ (بيانات تجريبية)' }
    },
    counts: { notes: 12, videos: 24, pdf: 10, reviews: 6, images: 34, exams: 18 }
  },
  phil: {
    name: 'فلسفة',
    gradient: 'var(--grad-phil)',
    icon: 'fa-brain',
    teacher: {
      1: { name: 'مدرس 5', bio: 'مدرس مادة الفلسفة (بيانات تجريبية)' },
      2: { name: 'مدرس 5', bio: 'مدرس مادة الفلسفة (بيانات تجريبية)' },
      3: { name: 'مدرس 5', bio: 'مدرس مادة الفلسفة (بيانات تجريبية)' }
    },
    counts: { notes: 10, videos: 20, pdf: 9, reviews: 6, images: 14, exams: 16 }
  },
  bio: {
    name: 'أحياء',
    gradient: 'var(--grad-bio)',
    icon: 'fa-dna',
    teacher: {
      1: { name: 'مدرس 6', bio: 'مدرس مادة الأحياء (بيانات تجريبية)' },
      2: { name: 'مدرس 6', bio: 'مدرس مادة الأحياء (بيانات تجريبية)' },
      3: { name: 'مدرس 6', bio: 'مدرس مادة الأحياء (بيانات تجريبية)' }
    },
    counts: { notes: 16, videos: 30, pdf: 14, reviews: 9, images: 42, exams: 22 }
  }
};

let currentGrade = 1;
let currentSubjectKey = 'chem';
let currentTerm = 1;

function renderSubjectsList() {
  const listEl = document.getElementById('subjectsList');
  listEl.innerHTML = '';

  Object.keys(subjectsData).forEach((key) => {
    const sub = subjectsData[key];
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = `subject-card-btn ${key === currentSubjectKey ? 'active' : ''}`;
    btn.setAttribute('aria-pressed', key === currentSubjectKey ? 'true' : 'false');
    btn.style.background = sub.gradient;
    btn.onclick = () => {
      currentSubjectKey = key;
      renderSubjectsList();
      updateSubjectPreview();
    };

    btn.innerHTML = `
          <div class="subject-card-info">
            <div class="subject-icon-circle"><i class="fa-solid ${sub.icon}"></i></div>
            <h3>${sub.name}</h3>
          </div>
          <i class="fa-solid fa-chevron-left"></i>
        `;
    listEl.appendChild(btn);
  });
}

function updateSubjectPreview() {
  const sub = subjectsData[currentSubjectKey];
  const teacher = sub.teacher[currentGrade];

  document.getElementById('teacherName').textContent = teacher.name;
  document.getElementById('teacherBio').textContent = teacher.bio;
  document.getElementById('subjectBadge').textContent = `${sub.name} - الصف ${currentGrade === 1 ? 'الأول' : currentGrade === 2 ? 'الثاني' : 'الثالث'}`;
  document.getElementById('teacherAvatar').style.background = sub.gradient;
  document.getElementById('teacherAvatar').innerHTML = `<i class="fa-solid ${sub.icon}"></i>`;

  const c = sub.counts;
  document.getElementById('resourcesGrid').innerHTML = `
        <div class="res-box res-notes">
          <i class="fa-solid fa-book-bookmark"></i>
          <h5>المذكرات</h5>
          <span>مذكرة جاهزة</span>
        </div>
        <div class="res-box res-videos">
          <i class="fa-solid fa-circle-play"></i>
          <h5>فيديوهات</h5>
          <span>فيديو شرح</span>
        </div>
        <div class="res-box res-pdf">
          <i class="fa-solid fa-file-pdf"></i>
          <h5>الامتحانات المصورة</h5>
          <span>امتحان PDF</span>
        </div>
        <div class="res-box res-reviews">
          <i class="fa-solid fa-bookmark"></i>
          <h5>المراجعات</h5>
          <span>مراجعة نهائية</span>
        </div>
        <div class="res-box res-images">
          <i class="fa-solid fa-image"></i>
          <h5>الصور التوضيحية</h5>
          <span>مخطط توضيحي</span>
        </div>
        <div class="res-box res-exams">
          <i class="fa-solid fa-laptop-file"></i>
          <h5>امتحانات اونلاين</h5>
          <span>اختبار إلكتروني</span>
        </div>
      `;
}

// Grade Tabs Handler
document.querySelectorAll('.grade-tab').forEach((tab) => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.grade-tab').forEach((t) => t.classList.remove('active'));
    tab.classList.add('active');
    currentGrade = parseInt(tab.dataset.grade, 10);
    updateSubjectPreview();
  });
});

function selectTerm(btn, term) {
  document.querySelectorAll('.term-pill').forEach((p) => p.classList.remove('active'));
  btn.classList.add('active');
  currentTerm = term;
  updateSubjectPreview();
}

function jumpToSubject(key) {
  currentSubjectKey = key;
  renderSubjectsList();
  updateSubjectPreview();
  document.getElementById('subjects').scrollIntoView({ behavior: 'smooth' });
}

const lessonSlides = [
  {
    step: 'الخطوة 1 من 3 : مفهوم الجينات المتكاملة',
    title: 'توارث لون الأزهار في نبات بسلة الزهور',
    body: 'يتحكم في ظهور صفة اللون القرمزي زوجان من الجينات السائدة (A, B). وجود جين سائد واحد على الأقل من كل زوج (A_B_) يكفي لإظهار اللون القرمزي!',
    progress: '33%',
    time: '04:15 / 12:30'
  },
  {
    step: 'الخطوة 2 من 3 : تزاوج سلالتين نقيتين بيضاء الأزهار',
    title: 'AAbb (أبيض) × aaBB (أبيض) ➔ 100% AaBb (قرمزي)',
    body: 'رغم أن كلا الأبوين أبيض الأزهار، إلا أن الجيل الأول يظهر بالكامل باللون القرمزي لتكامل الجينات السائدة A و B معًا في الفرد الهجين.',
    progress: '68%',
    time: '08:40 / 12:30'
  },
  {
    step: 'الخطوة 3 من 3 : نسبة الجيل الثاني (F2)',
    title: 'تتحور النسبة المندلية إلى 9 قرمزي : 7 أبيض',
    body: 'عند تزاوج أفراد الجيل الأول (AaBb × AaBb) ينتج 16 فردًا: 9 أفراد تحتوي على (A_B_) قرمزية، و 7 أفراد تفتقد أحد الجينين السائدين فتكون بيضاء.',
    progress: '100%',
    time: '12:30 / 12:30'
  }
];

let currentSlideIdx = 0;
let isPlaying = false;
let playInterval = null;

function renderSlide() {
  const s = lessonSlides[currentSlideIdx];
  document.getElementById('slideStepLabel').textContent = s.step;
  document.getElementById('slideTitle').textContent = s.title;
  document.getElementById('slideBody').textContent = s.body;
  document.getElementById('lessonProgress').style.width = s.progress;
  document.getElementById('lessonTimer').textContent = s.time;
  document.querySelector('.progress-bar-wrap').setAttribute('aria-valuenow', currentSlideIdx + 1);
}

function nextSlideStep() {
  currentSlideIdx = (currentSlideIdx + 1) % lessonSlides.length;
  renderSlide();
}

function seekLesson(e) {
  const r = e.currentTarget.getBoundingClientRect();
  currentSlideIdx = Math.max(0, Math.min(2, Math.floor(((r.right - e.clientX) / r.width) * 3)));
  renderSlide();
}
function seekKey(e) {
  if (e.key === 'ArrowLeft') currentSlideIdx = Math.min(2, currentSlideIdx + 1);
  else if (e.key === 'ArrowRight') currentSlideIdx = Math.max(0, currentSlideIdx - 1);
  else return;
  e.preventDefault(); renderSlide();
}
function togglePlayLesson() {
  const btn = document.getElementById('playPauseBtn');
  isPlaying = !isPlaying;
  if (isPlaying) {
    clearInterval(playInterval);
    btn.innerHTML = '<i class="fa-solid fa-pause"></i>';
    playInterval = setInterval(nextSlideStep, 3200);
  } else {
    btn.innerHTML = '<i class="fa-solid fa-play"></i>';
    clearInterval(playInterval);
  }
}

function switchStageTab(tabName, btnEl) {
  if (tabName !== 'video' && isPlaying) togglePlayLesson();
  document.querySelectorAll('.stage-tab-btn').forEach((b) => b.classList.remove('active'));
  btnEl.classList.add('active');

  document.getElementById('stageVideo').style.display = tabName === 'video' ? 'flex' : 'none';
  document.getElementById('stageNote').classList.toggle('active', tabName === 'note');
  document.getElementById('stageDiagram').classList.toggle('active', tabName === 'diagram');
}

function buildPunnettSquare() {
  const gametes = ['AB', 'Ab', 'aB', 'ab'];
  const table = document.getElementById('punnettTable');
  let html = '<tr><th>الأمشاج</th>' + gametes.map((g) => `<th>${g}</th>`).join('') + '</tr>';

  gametes.forEach((g1) => {
    html += `<tr><th>${g1}</th>`;
    gametes.forEach((g2) => {
      const aPart = [g1[0], g2[0]].sort().join('');
      const bPart = [g1[1], g2[1]].sort().join('');
      const genotype = aPart + bPart;
      const isPurple = genotype.includes('A') && genotype.includes('B');
      const cls = isPurple ? 'cell-purple' : 'cell-white';
      const label = isPurple ? 'قرمزي' : 'أبيض';

      html += `<td class="${cls}" onclick="showPunnettDetail('${genotype}', ${isPurple})">${genotype}<br><small>${label}</small></td>`;
    });
    html += '</tr>';
  });
  table.innerHTML = html;
}

function showPunnettDetail(genotype, isPurple) {
  const info = document.getElementById('punnettHoverInfo');
  if (isPurple) {
    info.style.color = '#7E22CE';
    info.textContent = `التركيب (${genotype}): قرمزي لوجود جين سائد A وجين سائد B معًا.`;
  } else {
    info.style.color = '#DC2626';
    info.textContent = `التركيب (${genotype}): أبيض لغياب أحد زوجي الجينات السائدة.`;
  }
}

let understoodCount = 0, totalVotes = 0, myVote = null;
function handleComprehension(understood) {
  const fb = document.getElementById('compFeedback');
  fb.style.display = 'block';
  if (myVote === null) totalVotes++; else if (myVote) understoodCount--;
  if (understood) understoodCount++;
  myVote = understood;
  document.getElementById('compCountText').textContent = totalVotes;
  document.getElementById('compRateText').textContent = Math.round((understoodCount / totalVotes) * 100) + '%';
  if (understood) {
    fb.style.background = '#DCFCE7'; fb.style.color = '#166534';
    fb.innerHTML = '<strong><i class="fa-solid fa-circle-check"></i> أحسنت! تم تسجيل استيعابك للدرس.</strong> جرب الآن حل "اختبار الفهم السريع" لتثبيت المعلومة.';
  } else {
    fb.style.background = '#FEE2E2'; fb.style.color = '#991B1B';
    fb.innerHTML = '<strong><i class="fa-solid fa-circle-question"></i> لا تقلق! اكتب سؤالك للمعلم:</strong><p style="margin-top:6px;color:#334155;">تلميح: الصفة القرمزية تشترط حرفًا كبيرًا من <code>A</code> وحرفًا كبيرًا من <code>B</code> معًا.</p>';
    document.getElementById('studentCommentInput').focus();
  }
}

const quizData = [
  {
    q: 'ما نسبة ظهور الأزهار البيضاء عند تهجين نباتين تركيبهما الجيني (AaBb × AaBb)؟',
    options: ['9 / 16', '7 / 16', '3 / 16', '1 / 16'],
    answer: 1,
    explain: 'إجابة صحيحة! تتحور النسبة في الجينات المتكاملة إلى 9 قرمزي : 7 أبيض.'
  },
  {
    q: 'أي من التراكيب الجينية التالية يعطي أزهارًا قرمزية في بسلة الزهور؟',
    options: ['AAbb', 'aaBB', 'AaBb', 'aabb'],
    answer: 2,
    explain: 'ممتاز! التركيب (AaBb) يجمع بين جين سائد A وجين سائد B فيظهر اللون القرمزي.'
  }
];

let currentQuizIdx = 0;
let selectedOptionIdx = null;

function renderQuiz() {
  const item = quizData[currentQuizIdx];
  selectedOptionIdx = null;
  document.getElementById('quizCounter').textContent = `سؤال ${currentQuizIdx + 1} / ${quizData.length}`;
  document.getElementById('quizQuestionText').textContent = item.q;
  document.getElementById('quizFeedbackMsg').textContent = '';

  const container = document.getElementById('quizOptionsContainer');
  container.innerHTML = '';
  item.options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'quiz-option';
    btn.textContent = opt;
    btn.onclick = () => {
      document.querySelectorAll('.quiz-option').forEach((b) => b.classList.remove('selected'));
      btn.classList.add('selected');
      selectedOptionIdx = idx;
    };
    container.appendChild(btn);
  });
}

function checkQuizAnswer() {
  const msg = document.getElementById('quizFeedbackMsg');
  if (selectedOptionIdx === null) {
    msg.style.color = 'var(--danger)';
    msg.textContent = 'من فضلك اختر إجابة أولًا!';
    return;
  }
  const item = quizData[currentQuizIdx];
  const buttons = document.querySelectorAll('.quiz-option');
  buttons.forEach((b, idx) => {
    b.classList.remove('selected');
    if (idx === item.answer) b.classList.add('correct');
    else if (idx === selectedOptionIdx) b.classList.add('wrong');
  });

  if (selectedOptionIdx === item.answer) {
    msg.style.color = 'var(--success-dark)';
    msg.textContent = item.explain;
  } else {
    msg.style.color = 'var(--danger-dark)';
    msg.textContent = 'حاول مرة أخرى! الإجابة الصحيحة موضحة باللون الأخضر.';
  }
}

function nextQuizQuestion() {
  currentQuizIdx = (currentQuizIdx + 1) % quizData.length;
  renderQuiz();
}

function addStudentComment(e) {
  e.preventDefault();
  const input = document.getElementById('studentCommentInput');
  const text = input.value.trim();
  if (!text) return;

  const list = document.getElementById('commentsList');
  const bubble = document.createElement('div');
  bubble.className = 'comment-bubble';
  bubble.innerHTML = `
        <div class="comment-header">
          <span class="comment-author">أنت (طالب)</span>
          <span class="comment-time">الآن</span>
        </div>
        <div class="comment-text">${escapeHTML(text)}</div>
      `;
  list.appendChild(bubble);
  list.scrollTop = list.scrollHeight;
  input.value = '';

  setTimeout(() => {
    const reply = document.createElement('div');
    reply.className = 'comment-bubble system-reply';
    reply.innerHTML = `
          <div class="comment-header"><span class="comment-author">نظام العرض التجريبي</span><span class="comment-time">الآن</span></div>
          <div class="comment-text">محاكاة: تم استلام سؤالك. في النسخة الفعلية سيُرسل السؤال إلى المعلم، وسيصلك إشعار عند وصول رده.</div>`;
    list.appendChild(reply);
    list.scrollTop = list.scrollHeight;
  }, 600);
}

function escapeHTML(str) {
  return str.replace(/[&<>"']/g, (m) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[m]));
}

let lastFocusedElement = null;
function openDownloadModal() {
  lastFocusedElement = document.activeElement;
  const modal = document.getElementById('downloadModal');
  modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false');
  document.body.classList.add('modal-open');
  modal.querySelector('.modal-box').focus();
}

function closeDownloadModal() {
  const modal = document.getElementById('downloadModal');
  modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true');
  document.body.classList.remove('modal-open');
  if (lastFocusedElement) lastFocusedElement.focus();
}

const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const mobileDrawer = document.getElementById('mobileDrawer');
mobileMenuBtn.addEventListener('click', () => {
  const open = mobileDrawer.classList.toggle('open');
  mobileMenuBtn.setAttribute('aria-expanded', String(open));
  mobileMenuBtn.setAttribute('aria-label', open ? 'إغلاق قائمة التنقل' : 'فتح قائمة التنقل');
});
mobileDrawer.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  mobileDrawer.classList.remove('open'); mobileMenuBtn.setAttribute('aria-expanded', 'false');
}));
document.getElementById('downloadModal').addEventListener('click', (e) => { if (e.target.id === 'downloadModal') closeDownloadModal(); });
document.addEventListener('keydown', (e) => {
  const m = document.getElementById('downloadModal');
  if (e.key === 'Escape') closeDownloadModal();
  if (e.key === 'Tab' && m.classList.contains('open')) {
    const f = [...m.querySelectorAll('button')]; const a = document.activeElement;
    if (!m.contains(a) || a === m.querySelector('.modal-box')) { e.preventDefault(); f[0].focus(); }
    else if (e.shiftKey && a === f[0]) { e.preventDefault(); f[f.length - 1].focus(); }
    else if (!e.shiftKey && a === f[f.length - 1]) { e.preventDefault(); f[0].focus(); }
  }
  if ((e.key === 'Enter' || e.key === ' ') && e.target.matches('.phone-pill,.punnett-table td')) { e.preventDefault(); e.target.click(); }
});

window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 20);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.12 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

renderSubjectsList();
updateSubjectPreview();
renderSlide();
buildPunnettSquare();
renderQuiz();
document.querySelectorAll('.phone-pill,.punnett-table td').forEach((el) => { el.setAttribute('role', 'button'); el.tabIndex = 0; });
const syncPressed = () => document.querySelectorAll('.grade-tab,.term-pill,.stage-tab-btn').forEach((b) => { b.setAttribute('role', 'tab'); b.setAttribute('aria-selected', b.classList.contains('active')); b.tabIndex = b.classList.contains('active') ? 0 : -1; });
document.querySelectorAll('[role=tablist]').forEach((l) => l.addEventListener('keydown', (e) => {
  const t = [...l.querySelectorAll('[role=tab]')], i = t.indexOf(document.activeElement);
  if (i < 0 || !['ArrowLeft', 'ArrowRight'].includes(e.key)) return;
  e.preventDefault(); const n = t[(i + (e.key === 'ArrowLeft' ? 1 : -1) + t.length) % t.length]; n.click(); setTimeout(() => n.focus(), 0);
}));
const gal = document.getElementById('gal'), figs = [...gal.children];
const goGal = (d) => { const i = Math.max(0, Math.min(figs.length - 1, Math.round(Math.abs(gal.scrollLeft) / figs[0].offsetWidth) + d)); figs[i].scrollIntoView({ behavior: 'smooth', inline: 'center', block: 'nearest' }); };
document.getElementById('galPrev').onclick = () => goGal(-1); document.getElementById('galNext').onclick = () => goGal(1);
gal.addEventListener('scroll', () => { document.getElementById('galCount').textContent = (Math.round(Math.abs(gal.scrollLeft) / (figs[0].offsetWidth + 20)) + 1) + ' / ' + figs.length; });
gal.addEventListener('keydown', (e) => { if (e.key === 'ArrowLeft') goGal(1); if (e.key === 'ArrowRight') goGal(-1); });
document.querySelectorAll('.enr-save').forEach((b) => b.addEventListener('click', () => b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true')));
document.addEventListener('click', () => setTimeout(syncPressed, 0)); syncPressed();
document.getElementById('yr').textContent = new Date().getFullYear();
