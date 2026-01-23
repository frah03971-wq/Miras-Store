// Import Firebase functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

// 🔹 إعدادات Firebase الخاصة بتطبيقك
const firebaseConfig = {
  apiKey: "AIzaSyBOcv6Feaq63nE3P1YH72-q--xZ1GF3xEA",
  authDomain: "vira-mall.firebaseapp.com",
  projectId: "vira-mall",
  storageBucket: "vira-mall.appspot.com",
  messagingSenderId: "504385201131",
  appId: "1:504385201131:web:af56a81e75630b76b12fae",
  measurementId: "G-71TTJFB4KN"
};

// 🔹 تهيئة التطبيق
const app = initializeApp(firebaseConfig);

// 🔹 تفعيل التحليلات (اختياري)
const analytics = getAnalytics(app);

// 🔹 إعداد Storage لرفع الصور
const storage = getStorage(app);

// 🔹 تصدير المتغيرات لاستخدامها في الصفحات الأخرى
export { app, analytics, storage, ref, uploadBytes, getDownloadURL };
