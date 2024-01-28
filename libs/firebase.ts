import { initializeApp } from "firebase/app";
import {
  getFirestore,
  doc,
  getDoc,
  Timestamp,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";

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

const getAttendeeDetails = async (collection: any, docId: string) => {
  let docRef = doc(db, collection, docId);

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

const updateRSVP = async (collection: string, docId: string, data: any) => {
  const docRef = doc(db, collection, docId);

  await updateDoc(docRef, { ...data, lastUpdated: serverTimestamp() });
};

export { getAttendeeDetails, getDaysLeftBeforeEvent, updateRSVP };
