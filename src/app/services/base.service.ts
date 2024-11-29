import { Injectable } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "@angular/fire/compat/database";


@Injectable({
  providedIn: 'root'
})
export class BaseService {

  peopleRef: AngularFireList<any>

  constructor(private db: AngularFireDatabase) {
    this.peopleRef = db.list("people")
  }

  getPeoples() {
    return this.peopleRef
  }
}
