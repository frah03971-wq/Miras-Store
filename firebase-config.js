// 🔹 Firebase Config جاهز للعمل على الموبايل مباشرة
// يستخدم Admin Dashboard لرفع الصور بدون مشاكل

// إعدادات Firebase
const firebaseConfig = {
  apiKey: "AIzaSyBOcv6Feaq63nE3P1YH72-q--xZ1GF3xEA",
  authDomain: "vira-mall.firebaseapp.com",
  projectId: "vira-mall",
  storageBucket: "vira-mall.appspot.com",
  messagingSenderId: "504385201131",
  appId: "1:504385201131:web:af56a81e75630b76b12fae",
  measurementId: "G-71TTJFB4KN"
};

// تهيئة Firebase مباشرة
firebase.initializeApp(firebaseConfig);

// Storage جاهز للرفع
const storage = firebase.storage();

// 🔹 استخدام:
// في admin.html:
// storage.ref('products/'+file.name).put(file)
// storage.ref(...).getDownloadURL()
