import { makeAutoObservable } from 'mobx';
import { ICustomer } from '../types/customer';
import { IPost } from '../types';

class PostsStore {
  posts: IPost[] = [
    {
        id: 1,
        name: "Раскройщик"
    },
    {
        id: 2,
        name: "Технолог"
    },
    {
        id: 3,
        name: "Швея"
    }
  ]; // The State

  constructor() {
    makeAutoObservable(this);
  }
}

export const postStore = new PostsStore();