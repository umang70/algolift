import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth, type Auth } from "firebase/auth";
import { getFirestore, type Firestore } from "firebase/firestore";

const firebaseConfig = {
	apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
	authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
	projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
	storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
	messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
	appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

let app: any;
let auth: Auth;
let firestore: Firestore;

if (!firebaseConfig.apiKey) {
	// When Firebase env variables are not configured, avoid crashing at build time.
	// Auth/Firestore will not work until you provide valid NEXT_PUBLIC_FIREBASE_* keys.
	if (process.env.NODE_ENV === "development") {
		// eslint-disable-next-line no-console
		console.warn(
			"[firebase] Missing NEXT_PUBLIC_FIREBASE_* environment variables. Firebase features are disabled until they are set."
		);
	}

	// Use typed no-op placeholders to satisfy TypeScript without throwing during build.
	app = {} as any;
	auth = {} as unknown as Auth;
	firestore = {} as unknown as Firestore;
} else {
	// Initialize Firebase app once in both client and server environments.
	app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
	auth = getAuth(app);
	firestore = getFirestore(app);
}

export { auth, firestore, app };
