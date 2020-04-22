import { PersonHealthData } from './../interfaces/PersonData';
import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';


@Injectable({
  providedIn: 'root'
})
export class PatientsListService {
  //currentComment = this.socket.fromEvent<PersonHealthData>('person');
  people = this.socket.fromEvent<any>('people');

  constructor(private socket: Socket) { }

  newPatient(patient){
    this.socket.emit('addPerson', patient);
  }

  editPatient(patient){
    this.socket.emit('editPerson', patient);
  }

  removePatient(patient){
    this.socket.emit('deletePerson', patient);
  }
}
