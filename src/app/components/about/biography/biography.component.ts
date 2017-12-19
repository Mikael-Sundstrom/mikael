import { Component, OnInit, HostBinding } from '@angular/core';
import { routerTransition } from '../../../core/router.animation';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
/* import { AngularFireDatabase } from 'angularfire2/database'; */
/* import { AuthService } from './../../../core/auth.service'; */

interface About {
    title: String;
    avatar: String;
    content: String;
}
@Component({
    selector: 'app-biography',
    templateUrl: './biography.component.html',
    styles: [],
    animations: [routerTransition()]
})
export class BiographyComponent implements OnInit {
    @HostBinding('@routerTransition') routerTransition;
    title = 'Biografi';

    private aboutCollection: AngularFirestoreCollection<About>;
    about: Observable<About[]>;

    constructor(private fireStore: AngularFirestore) {
        this.aboutCollection = fireStore.collection<About>('About');
        this.about = this.aboutCollection.valueChanges();
    }
    ngOnInit() { }
}
