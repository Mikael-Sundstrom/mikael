/*
  Docs
  https://console.firebase.google.com/project/pianoskolan-se/overview
  https://angularfirebase.com/lessons/google-user-auth-with-firestore-custom-data/
*/

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import * as firebase from 'firebase/app';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/switchMap'

interface User {
	uid: string;
	email: string;
	photoURL?: string;
	displayName?: string;
	favoriteColor?: string;
	favoriteSong?: String;
}

@Injectable()
export class AuthService {

	user: Observable<User>;

	constructor(private fireAuth: AngularFireAuth, private fireStore: AngularFirestore, private router: Router) {
		// Get auth data, then get firestore user document || null
		this.user = this.fireAuth.authState
			.switchMap(user => {
				if (user) {
					return this.fireStore.doc<User>(`users/${user.uid}`).valueChanges()
				} else {
					return Observable.of(null)
				}
			})
	}


	/* Google login */
	googleLogin() {
		const provider = new firebase.auth.GoogleAuthProvider()
		return this.oAuthLogin(provider);
	}


	private oAuthLogin(provider) {
		return this.fireAuth.auth.signInWithPopup(provider)
			.then((credential) => {
				this.updateUserData(credential.user)
			})
	}

	private updateUserData(user) {
		// Sets user data to firestore on login
		const userRef: AngularFirestoreDocument<User> = this.fireStore.doc(`users/${user.uid}`);

		const data: User = {
			uid: user.uid,
			email: user.email,
			displayName: user.displayName,
			photoURL: user.photoURL,
			favoriteColor: user.favoriteColor
		}

		return userRef.set(data)
	}

	signOut() {
		this.fireAuth.auth.signOut().then(() => {
			this.router.navigate(['/']);
		});
	}
}
