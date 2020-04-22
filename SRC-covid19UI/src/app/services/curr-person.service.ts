import { PersonSettings, PersonHealthData, DEFAULT_PERSON_SETTINGS } from './../interfaces/PersonData';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrPersonService {
  private selectedPersonSubject = new BehaviorSubject(new PersonHealthData());
  sharedMessage = this.selectedPersonSubject.asObservable();

  constructor() { }

  nextMessage(selectedPerson: PersonHealthData) {
    this.selectedPersonSubject.next(selectedPerson);
  }
}
