import Firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

import FirebaseConfig from '../../../firebaseConfig';

Firebase.initializeApp(FirebaseConfig);
