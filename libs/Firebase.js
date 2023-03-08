import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

export const Firebase = () => {

    try {
        function requestPermission() {
            console.log('Requesting permission...');
            Notification.requestPermission().then((permission) => {
                if (permission === 'granted') {
                    console.log('Notification permission granted.');
                }
            })
        }
    
        requestPermission();
    
        const firebaseConfig = {
            apiKey: process.env.NEXT_PUBLIC_apiKey,
            authDomain: process.env.NEXT_PUBLIC_authDomain,
            projectId: process.env.NEXT_PUBLIC_projectId,
            storageBucket: process.env.NEXT_PUBLIC_storageBucket,
            messagingSenderId: process.env.NEXT_PUBLIC_messagingSenderId,
            appId: process.env.NEXT_PUBLIC_appId
        };
    
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        // Initialize Firebase Cloud Messaging and get a reference to the service
        const messaging = getMessaging(app);
        // Add the public key generated from the console here.
        getToken(messaging, { vapidKey: process.env.NEXT_PUBLIC_vapidKey })
            .then((currentToken) => {
                if (currentToken) {
                    // Send the token to your server and update the UI if necessary
                    console.log("Suscrito a las notificaciones de Firebase");
                    // ...
                } else {
                    // Show permission request UI
                    console.log('No registration token available. Request permission to generate one.');
                    // ...
                }
            })

            return "Firebase ha funcionado correctamente";
            
    } catch (error) {
        return error;
    }


}