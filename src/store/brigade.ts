import { makeAutoObservable } from 'mobx';
import { IBrigade } from '../types';

class BrigadeStore {
  brigade: IBrigade[] = [
    {
      id: 'abe0c0f8-0c40-4115-97b9-4487ac169456',
      name: "Бригада 1"
    },
    {
      id: '35c15ed9-3f4a-4273-88b7-88a49e63ee79',
      name: "Бригада 2"
    },
    {
      id: '43ce4191-6a9a-4fb0-ac30-cc544f1662f9',
      name: "Бригада 3"
    },
    {
      id: '27d76d63-686c-4ac4-9aa3-36a2efed06c0',
      name: "Бригада 4"
    },
    {
      id: '5d125a95-8ade-4c96-9e52-495f459370d4',
      name: "Бригада 5"
    }
  ]; // The State

  constructor() {
    makeAutoObservable(this);
  }

  add(data: IBrigade) {
    this.brigade.push(data);
  }


}

export const brigadetore = new BrigadeStore();