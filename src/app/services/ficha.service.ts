import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { map } from 'rxjs/operators';
import { Ficha } from '../model/ficha';


@Injectable({
  providedIn: 'root'
})
export class FichaService {

  constructor( public db: AngularFireDatabase ) { }


save(ficha: Ficha) {
  return this.db.list<Ficha>("ficha").push(ficha);
  }

  getAll() {
    return this.db.list("ficha").snapshotChanges()
      .pipe(
        map(noCopyIsDocs =>
          noCopyIsDocs.map(c => ({ key: c.payload.key, ...c.payload.val() })))
      )
  }

  get(key: string) {
    return this.db.object<Ficha>("ficha/" + key).valueChanges()
  }

  update(ficha: Ficha, key: string) {
    return this.db.object("ficha/" + key).update(ficha);
  }
  remove(key: string) {
    return this.db.object("ficha/" + key).remove()
  }
}