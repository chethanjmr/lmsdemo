// Please see this file for the latest firebase-js-sdk version:
// https://github.com/firebase/flutterfire/blob/master/packages/firebase_core/firebase_core_web/lib/src/firebase_sdk_version.dart
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.0/firebase-messaging-compat.js");

firebase.initializeApp({
  apiKey: "AIzaSyBsvDQfszrsmya3LdqmpoN_ISTQugUsaAg",
    authDomain: "jmr-lms.firebaseapp.com",
    projectId: "jmr-lms",
    storageBucket: "jmr-lms.appspot.com",
    messagingSenderId: "808234709328",
    appId: "1:808234709328:web:9200473f0e3353acf5fc55",
    measurementId: "G-EPF9NLJTKY"
});

const messaging = firebase.messaging();

// Optional:
/*messaging.onBackgroundMessage((message) => {
  console.log("onBackgroundMessage webbbb : ", message);
});*/

// Background message handler
messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icons/firebase_logo.png'
  };
  self.registration.showNotification(notificationTitle, notificationOptions);
});