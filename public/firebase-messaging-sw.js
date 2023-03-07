importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js');

// Initialize the Firebase app in the service worker by passing in
// your app's Firebase config object.
// https://firebase.google.com/docs/web/setup#config-object
firebase.initializeApp({
    apiKey: "AIzaSyD8xi8pi9ut0fFPJeeLEE91WYrk3GV4x9Y",
    authDomain: "historicas-rooty.firebaseapp.com",
    projectId: "historicas-rooty",
    storageBucket: "historicas-rooty.appspot.com",
    messagingSenderId: "444512053565",
    appId: "1:444512053565:web:a937e1bbd22a8bfd00fd54"
});

// Retrieve an instance of Firebase Messaging so that it can handle background
// messages.
const messaging = firebase.messaging();
messaging.onBackgroundMessage((payload) => {
    console.log('[firebase-messaging-sw.js] Received background message ', payload);
});
