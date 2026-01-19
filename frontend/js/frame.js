// ================= GLOBAL STATE =================
const userData = {};

// ================= UTIL FRAME =================
function hideAllFrames() {
  [
    'frame1','frame2','frame3',
    'frame3A','frame3B','frame3C','frame3D',
    'frame4','frame5','frame1A'
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}

function showFrame(id){
  hideAllFrames();
  const el = document.getElementById(id);
  if(el) el.style.display = "block";
}

function goBack(targetFrame) {
  hideAllFrames();
  showFrame(targetFrame);
}

/* ===== FRAME CONTROLLER ===== */
function hideAllFrames() {
  document.querySelectorAll('.frame').forEach(f => {
    f.style.display = 'none';
  });
}

function showFrame(id) {
  hideAllFrames();
  const target = document.getElementById(id);
  if (target) target.style.display = 'flex';
}

/* ===== LOGIN FAKE ===== */
function login() {
  const u = document.getElementById('login-username').value.trim();
  const p = document.getElementById('login-password').value.trim();

  if (!u || !p) {
    alert('Please fill all fields');
    return;
  }

  // LOGIN BERHASIL
  showFrame('frame2'); // ganti tujuan kalau mau
}

/* ===== SIGN UP FAKE ===== */
function signup() {
  const u = document.getElementById('signup-username').value.trim();
  const p = document.getElementById('signup-password').value.trim();

  if (!u || !p) {
    alert('Please fill all fields');
    return;
  }

  alert('Account created successfully!');
  showFrame('frame1'); // balik ke login
}

/* ===== LOGOUT ===== */
function logout() {
  showFrame('frame1');
}


// ================= FRAME 2 =================
function startRecommendation() {
  hideAllFrames();
  showFrame("frame2");
}

function resetFrame2() {
  // balikin hero & konten frame 1
  document.querySelectorAll('#frame2 .container, #frame2 section, #frame2 .ad-section')
    .forEach(el => el.style.display = "");
}

// ================= FRAME 3 (JUMLAH AKSESORIS) =================
function startRecommendation() {
  showFrame("frame3");
}
function goToTypeSelect() {
  showFrame("frame3A"); // Digital Watch
}

function goToTypeSelect3B() {
  showFrame("frame3B"); // Analog / Classic Watch
}

function goToTypeSelect3C() {
  showFrame("frame3C"); // Smart Watch
}

function goToAHPDirect() {
  showFrame("frame3D"); // SPK FULL AHP
}



function openShop(type) {
  // SEMBUNYIKAN HERO
  document.getElementById('frame2').style.display = 'none';

  // SEMBUNYIKAN SEMUA SHOP FRAME
  const shops = ['frame1A', 'frame1B', 'frame1C'];
  shops.forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  // TAMPILKAN SESUAI PILIHAN
  if (type === 'watch') {
    document.getElementById('frame1A').style.display = 'block';
  }
  if (type === 'ring') {
    document.getElementById('frame1B').style.display = 'block';
  }
  if (type === 'bracelet') {
    document.getElementById('frame1C').style.display = 'block';
  }
}

function backToShop() {
  // SEMBUNYIKAN SEMUA SHOP FRAME
  ['frame1A', 'frame1B', 'frame1C'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });

  // TAMPILKAN HERO LAGI
  document.getElementById('frame2').style.display = 'block';
}


// ================= SET PREFERENSI =================
function setPref(key, value) {
  userData[key] = value;
  console.log("Update Preferensi:", userData);
}

// ================= LOADING → HASIL =================
function goToLoading() {
  hideAllFrames();
  showFrame("frame3");

  setTimeout(() => {
    hideAllFrames();
    showFrame("frame5");
    console.log("FINAL USER DATA:", userData);
  }, 2000);
}

// ================= BACK TO HOME =================

function confirmBackToHome() {
  const yakin = confirm(
    "Returning to Home will reset all your selections. Are you sure?"
  );

  if (yakin) {
    resetUserData();   // optional tapi bagus
    hideAllFrames();
    showFrame("frame2"); // home kamu sekarang frame2
  }
}

function resetUserData() {
  for (let key in userData) {
    delete userData[key];
  }
}

function hideAllFrames() {
  [
    'frame1',
    'frame2',
    'frame3',
    'frame3A',
    'frame3B',
    'frame3C',
    'frame3D',
    'frame4',
    'frame5',
    'frame1A',
    'frame1B',
    'frame1C',
    'frame1E',
  ].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.style.display = 'none';
  });
}

//Navbar functions
function goToHome() {
  hideAllFrames();
  showFrame("frame2");
}

function showMatch() {
  hideAllFrames();
  showFrame("frame3");
}

function showShop() {
  hideAllFrames();
  showFrame("frame1A");
}

function showAuthor() {
  hideAllFrames();
  showFrame("frameAbout");
}

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }
}


// ================= AHP Weights =================

const CRITERIA_WEIGHT = {
  C1: 0.2447,
  C2: 0.3381,
  C3: 0.0399,
  C4: 0.1026,
  C5: 0.1306,
  C6: 0.1441
};

//================== ALTERNATIVE DEFINITIONS =================  
const ALTERNATIVE_SCORE = {
  classic: 0.3798,
  smart: 0.2181,
  digital: 0.0329
};

const ALTERNATIVE_NAME = {
  classic: 'Classic Watch',
  smart: 'Smart Watch',
  digital: 'Digital Watch'
};

const ALTERNATIVES = {
  digital: [
    { id: 'D1', name: 'Casio G-Shock DW-5600' },        // Man, 100rb–2jt, Round
    { id: 'D2', name: 'Casio G-Shock GA-2100' },        // Man, 100rb–2jt, Square
    { id: 'D3', name: 'G-Shock GMW' },                  // Man, 2,1–5jt, Round
    { id: 'D4', name: 'G-Shock Mudman GW-9500' },      // Man, 2,1–5jt, Square
    { id: 'D5', name: 'Baby-G BGA-250' },               // Woman, 2,1–5jt, Round
    { id: 'D6', name: 'Baby-G G-MS MSG-S200' },        // Woman, 2,1–5jt, Square
    { id: 'D7', name: 'Casio LA680 Series' },          // Woman, 100rb–2jt, Round
    { id: 'D8', name: 'Casio Vintage A168' }           // Woman, 100rb–2jt, Square
  ],
    classic: [
    { id: 'C1', name: 'Seiko Presage Cocktail Time' }, // Man, 100rb–2jt, Round
    { id: 'C2', name: 'Casio MTP Square Series' },     // Man, 100rb–2jt, Square
    { id: 'C3', name: 'Tissot Le Locle' },             // Man, 2,1–5jt, Round
    { id: 'C4', name: 'Hamilton Boulton' },            // Man, 2,1–5jt, Square
    { id: 'C5', name: 'Daniel Wellington Petite' },   // Woman, 2,1–5jt, Round
    { id: 'C6', name: 'Cartier Tank Must' },           // Woman, 2,1–5jt, Square
    { id: 'C7', name: 'Olivia Burton Classic' },      // Woman, 100rb–2jt, Round
    { id: 'C8', name: 'Casio LTP Square Series' }      // Woman, 100rb–2jt, Square
  ],
    smart: [
    { id: 'S1', name: 'Samsung Galaxy Watch 4' },      // Man, 100rb–2jt, Round
    { id: 'S2', name: 'Xiaomi Redmi Watch 3' },        // Man, 100rb–2jt, Square
    { id: 'S3', name: 'Garmin Venu Sq' },               // Man, 2,1–5jt, Round
    { id: 'S4', name: 'Apple Watch SE' },               // Man, 2,1–5jt, Square
    { id: 'S5', name: 'Apple Watch Series 9' },         // Woman, 2,1–5jt, Round
    { id: 'S6', name: 'Samsung Galaxy Watch Active' }, // Woman, 2,1–5jt, Square
    { id: 'S7', name: 'Amazfit GTS Mini' },             // Woman, 100rb–2jt, Round
    { id: 'S8', name: 'Huawei Band 8' }                 // Woman, 100rb–2jt, Square
  ]
};



const ALTERNATIVE_SCORES = {
  // ================= DIGITAL (SCENARIO BASED) =================
  D1: [4, 5, 5, 5, 1, 5], // Man, 100rb–2jt, Round
  D2: [4, 5, 5, 4, 1, 5], // Man, 100rb–2jt, Square
  D3: [4, 5, 5, 5, 2, 5], // Man, 2,1–5jt, Round
  D4: [4, 5, 5, 4, 2, 5], // Man, 2,1–5jt, Square

  D5: [4, 5, 5, 5, 2, 4], // Woman, 2,1–5jt, Round
  D6: [4, 5, 5, 4, 2, 4], // Woman, 2,1–5jt, Square
  D7: [4, 5, 5, 5, 1, 4], // Woman, 100rb–2jt, Round
  D8: [4, 5, 5, 4, 1, 4], // Woman, 100rb–2jt, Square

  // ================= CLASSIC (SCENARIO BASED) =================
  C1: [5, 5, 3, 5, 1, 5], // Man, 100rb–2jt, Round
  C2: [5, 5, 3, 4, 1, 5], // Man, 100rb–2jt, Square
  C3: [5, 5, 3, 5, 2, 5], // Man, 2,1–5jt, Round
  C4: [5, 5, 3, 4, 2, 5], // Man, 2,1–5jt, Square

  C5: [5, 5, 3, 5, 2, 4], // Woman, 2,1–5jt, Round
  C6: [5, 5, 3, 4, 2, 4], // Woman, 2,1–5jt, Square
  C7: [5, 5, 3, 5, 1, 4], // Woman, 100rb–2jt, Round
  C8: [5, 5, 3, 4, 1, 4],  // Woman, 100rb–2jt, Square

  // ================= SMART (SCENARIO BASED) =================
  S1: [3, 4, 5, 4, 1, 5], // Man, 100rb–2jt, Round
  S2: [3, 4, 5, 3, 1, 5], // Man, 100rb–2jt, Square
  S3: [3, 4, 5, 4, 2, 5], // Man, 2,1–5jt, Round
  S4: [3, 4, 5, 3, 2, 5], // Man, 2,1–5jt, Square

  S5: [3, 4, 5, 4, 2, 4], // Woman, 2,1–5jt, Round
  S6: [3, 4, 5, 3, 2, 4], // Woman, 2,1–5jt, Square
  S7: [3, 4, 5, 4, 1, 4], // Woman, 100rb–2jt, Round
  S8: [3, 4, 5, 3, 1, 4]  // Woman, 100rb–2jt, Square
  };



// ================== SUBMIT HANDLER ==================
function goToResult(event) {
  event.preventDefault();

  const form = event.target;
  const category = form.dataset.alternative;


  // ambil nilai user
  const userCriteria = [
    parseInt(form.C1.value),
    parseInt(form.C2.value),
    parseInt(form.C3.value),
    parseInt(form.C4.value),
    parseInt(form.C5.value),
    parseInt(form.C6.value)
  ];

  const candidates = ALTERNATIVES[category];

  let results = [];

candidates.forEach(item => {
  const score = calculateAHPScore(
    userCriteria,
    ALTERNATIVE_SCORES[item.id]
  );

  results.push({
  id: item.id,
  name: item.name,
  category: category, // 🔥 FIX PENTING
  score: score
});
});
  // SORTING TOP 3
  results.sort((a, b) => b.score - a.score);
  const top3 = results.slice(0, 3);


  let bestResult = null;
  let bestScore = -Infinity;

  candidates.forEach(item => {
    const score = calculateAHPScore(
      userCriteria,
      ALTERNATIVE_SCORES[item.id]
    );

    if (score > bestScore) {
      bestScore = score;
      bestResult = {
        id: item.id,
        name: item.name,
        score: score
      };
    }
  });

  console.log('HASIL AHP:', bestResult);

    showTop3Result(top3);
}

// ================= AUTO MODE =================
function goToAutoResult(event) {
  event.preventDefault();

  const form = event.target;

  const userCriteria = [
    parseInt(form.C1.value),
    parseInt(form.C2.value),
    parseInt(form.C3.value),
    parseInt(form.C4.value),
    parseInt(form.C5.value),
    parseInt(form.C6.value)
  ];

  let allresults = [];

  // LOOP SEMUA KATEGORI & SEMUA JAM
  Object.keys(ALTERNATIVES).forEach(category => {
    ALTERNATIVES[category].forEach(item => {
      const score = calculateAHPScore(
        userCriteria,
        ALTERNATIVE_SCORES[item.id]
      );

      allresults.push({
        id: item.id,
        name: item.name,
        category: category,
        score: score
      });
    });
  });

  // SORT & AMBIL TOP 3
  allresults.sort((a, b) => b.score - a.score);
  const top3 = allresults.slice(0, 3);

  console.log('AUTO TOP 3:', top3);

  showTop3Result(top3);
}


// ================== AHP CALC ==================
function calculateAHPScore(userCriteria, alternativeScores) {
  let totalScore = 0;

  Object.keys(CRITERIA_WEIGHT).forEach((criteria, index) => {
    const userValue = userCriteria[index];
    const altValue = alternativeScores[index];
    const weight = CRITERIA_WEIGHT[criteria];

    // hitung kedekatan (bukan perkalian mentah)
    const diff = Math.abs(userValue - altValue);
    let similarity = 5 - diff;

    // bonus & penalti
    if (diff === 0) similarity += 1;      // cocok banget
    if (diff >= 3) similarity -= 1;       // beda jauh

    similarity = Math.max(similarity, 0);

    totalScore += similarity * weight;
  });

  return totalScore;
}

//back frame 3a-3d
// ================= GENERAL BACK =================
function goBack(frameId) {
  showFrame(frameId);
}

function goToTypeSelect() {
  selectedCategory = 'digital';   // ⬅️ SIMPAN PILIHAN
  console.log('User pilih:', selectedCategory);
  showFrame('frame3A');
}

function goToTypeSelect3B() {
  selectedCategory = 'classic';   // ⬅️ SIMPAN PILIHAN
  console.log('User pilih:', selectedCategory);
  showFrame('frame3B');
}

function goToTypeSelect3C() {
  selectedCategory = 'smart';     // ⬅️ SIMPAN PILIHAN
  console.log('User pilih:', selectedCategory);
  showFrame('frame3C');
}

function goToAHPDirect() {
  selectedCategory = 'auto';      // ⬅️ SIMPAN PILIHAN
  console.log('User pilih:', selectedCategory);
  showFrame('frame3D');
}

// ================== RESULT VIEW (FINAL CLEAN) ==================
function showTop3Result(results) {
  if (!results || results.length === 0) return;

  showFrame('frame4');

  const grid = document.getElementById('resultGrid');
  grid.innerHTML = '';

  const maxScore = results[0].score;

  results.slice(0, 3).forEach((item, index) => {

    const accuracy =
      index === 0 ? '100' : ((item.score / maxScore) * 100).toFixed(1);

    let explanation = '';
    if (index === 0) explanation = 'Best match based on all your preferences.';
    else if (index === 1) explanation = 'Second best alternative with small score difference.';
    else explanation = 'Still relevant, but some criteria are less optimal.';

    // ✅ IMAGE PATH BASED ON CATEGORY
    let imgPath = '';
    if (item.category === 'digital') imgPath = `assets/Digital Watch/${item.id}.png`;
    if (item.category === 'classic') imgPath = `assets/Classic/${item.id}.png`;
    if (item.category === 'smart')   imgPath = `assets/Smart/${item.id}.png`;

    grid.innerHTML += `
      <div class="product-card ${index === 0 ? 'best' : ''}"
           onclick="openDetail('${item.id}')">

        <span class="badge ${item.category}">
          ${item.category.toUpperCase()}
        </span>

        <img src="${imgPath}" alt="${item.name}">

        <h4>#${index + 1} ${item.name}</h4>

        <p class="score">
          ${index === 0 ? 'Confidence' : 'Accuracy'}: ${accuracy}%
        </p>

        <p class="desc">${explanation}</p>

        <button class="cta-btn">View in Shop</button>
      </div>
    `;
  });
}



// ================== DETAIL VIEW ==================
function getProductById(id) {
  for (const category in ALTERNATIVES) {
    const found = ALTERNATIVES[category].find(p => p.id === id);
    if (found) return { ...found, category };
  }
  return null;
}

let selectedProduct = null;


function openDetail(productId) {
  const product = getProductById(productId);
  if (!product) return;

  let frameId = '';

  if (product.category === 'digital') frameId = 'frame1A';
  if (product.category === 'classic') frameId = 'frame1B';
  if (product.category === 'smart') frameId = 'frame1C';

  showFrame(frameId);

  setTimeout(() => {
    const el = document.getElementById(productId);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }, 200);
}




