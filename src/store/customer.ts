import { makeAutoObservable } from 'mobx';
import { ICustomer, IFilterCustomer } from '../types/customer';
import { v4 as uuidv4 } from 'uuid';


class CustomerStore {
  customers: ICustomer[] = [
    {
      id: "1",
      name: "Самара",
      surname: "Капарова",
      post: {
        id: 1,
        name: "Раскройщик"
      },
      brigade: {
        id: 'abe0c0f8-0c40-4115-97b9-4487ac169456',
        name: "Бригада 1"

      }
    },
    {
      id: "2",
      name: "Аделя",
      surname: "Нурбекова",
      post: {
        id: 1,
        name: "Раскройщик"
      },
      brigade: {
        id: 'abe0c0f8-0c40-4115-97b9-4487ac169456',
        name: "Бригада 1"
      }
    },
    {
      id: "1",
      name: "Элиза",
      surname: "Жумупбекова",
      post: {
        id: 2,
        name: "Технолог"
      },
      brigade: {
        id: '35c15ed9-3f4a-4273-88b7-88a49e63ee79',
        name: "Бригада 2"
      }
    },
    {
      id: "1",
      name: "Калида",
      surname: "Айбекова",
      post: {
        id: 3,
        name: "Швея"
      },
      brigade: {
        id: '35c15ed9-3f4a-4273-88b7-88a49e63ee79',
        name: "Бригада 2"
      }
    }
  ]; // The State

  constructor() {
    makeAutoObservable(this);
  }

  add(data: ICustomer) {
    data.id = uuidv4();
    if (data.post?.id !== 3) {
      data.brigade = null;
    }
    this.customers.push(data);
  }

  update(data: ICustomer) {
    this.customers = this.customers.map(item => {
      if (item.id == data.id) return data;
      return item;
    });
  }

  remove(id: string) {
    this.customers = this.customers.filter(item => item.id != id);
  }

  filterData(filter: IFilterCustomer): ICustomer[] | void {
    return this.customers.filter(elem => {
      return (elem.surname + elem.name + elem.patronimic)?.includes(filter.name!);
    })
  }

  getSortData(sort: "asc" | "desc" = "asc"): ICustomer[] {
    if (sort == "desc") return this.customers.slice().reverse();
    return this.customers;
  }

  getDataByBrigade(id: string): ICustomer[] {
    return this.customers.filter(c => {
      return c.brigade?.id == id;
    });
  }

}

export const customerStore = new CustomerStore();