// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDh4l-Pjo5ZDdwPPlhNnYc2TIo_adYJ_q8",
    authDomain: "pushnotifications-6cf7b.firebaseapp.com",
    projectId: "pushnotifications-6cf7b",
    storageBucket: "pushnotifications-6cf7b.firebasestorage.app",
    messagingSenderId: "642101998249",
    appId: "1:642101998249:web:6aa4144c2d8bf161bb2fb8",
    measurementId: "G-6VHVGX10G2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const messaging = getMessaging(app);

export const generateToken = async () => {
    const permission = await Notification.requestPermission();
    console.log(permission);

    if (permission === "granted") {
        const token = await getToken(messaging, {
            vapidKey: "BCEaR2hurams8DD4mGgL4mHVHMwvp2s4MJIC0b9HWQh9QzPAXa_VXaIAtl93uJx3EKtvh9nzr1Py7D9bS7iTnDU"
        });

        console.log(token);
    }

}