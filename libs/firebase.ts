import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore, doc, getDoc, Timestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_APIKEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTHDOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECTID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGEBUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSENGERSENDERID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APPID,
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENTID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const db = getFirestore(app);

const getAttendeeDetails = async (collection: any, id: any) => {
  let docRef = doc(db, collection, id);

  let result = null;
  let error = null;

  try {
    result = (await getDoc(docRef)).data();
  } catch (e) {
    error = e;
  }

  return { result, error };
};

const getDaysLeftBeforeEvent = async () => {
  const eventDate = Timestamp.fromDate(new Date(2024, 4, 9));
  const currentDate = Timestamp.now();

  const diff = eventDate.toMillis() - currentDate.toMillis();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
};

export { getAttendeeDetails, getDaysLeftBeforeEvent };
