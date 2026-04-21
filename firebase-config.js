// ══════════════════════════════════════════════════
//  ECOWAY — Firebase Merkezi Yapılandırma
//  console.firebase.google.com → Realtime Database
//  Proje Ayarları → Web Uygulaması → aşağıya yapıştır
// ══════════════════════════════════════════════════
const FIREBASE_CONFIG = {
  apiKey:            "AIzaSyCN_Dz_QqRQ2hNf7BTVfYPlDwWLO9Az_Qc",
  authDomain:        "ecoway-a345f.firebaseapp.com",
  databaseURL:       "https://ecoway-a345f-default-rtdb.firebaseio.com",
  projectId:         "ecoway-a345f",
  storageBucket:     "ecoway-a345f.firebasestorage.app",
  messagingSenderId: "246208323746",
  appId:             "1:246208323746:web:15bf4a1db0fae082b4b7fb",
  measurementId:     "G-GE3DBVS2LK"
};

// Admin şifresi (admin.html için)
const ADMIN_PASS = 'ecoway2026admin';

// Firebase başlat
let _db = null;
(function initFirebase() {
  try {
    if (typeof firebase !== 'undefined' &&
        FIREBASE_CONFIG.databaseURL.indexOf('BURAYA') === -1) {
      // Daha önce başlatılmadıysa başlat
      if (!firebase.apps || firebase.apps.length === 0) {
        firebase.initializeApp(FIREBASE_CONFIG);
      }
      _db = firebase.database();
    }
  } catch (e) {
    console.warn('Firebase başlatılamadı, localStorage kullanılıyor.', e);
  }
})();

function fbDb() { return _db; }
function fbRef(path) { return _db ? _db.ref(path) : null; }
