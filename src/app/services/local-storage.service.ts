import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService {

  constructor() { }

  saveData(key: string, data: any): void {
    const jsonData = JSON.stringify(data);
    localStorage.setItem(key, jsonData);
  }

  getData(key: string): any {
    const jsonData = localStorage.getItem(key);
    return jsonData ? JSON.parse(jsonData) : null;
  }

  clearData(key: string): void {
    localStorage.removeItem(key);
  }
}


/*
EXAMPLE USAGE:

const userSettings = {
  theme: 'dark',
  notificationsEnabled: true,
};

// Saving data to local storage
this.localStorageService.saveData('userSettings', userSettings);

// Retrieving data from local storage
const settings = this.localStorageService.getData('userSettings');
console.log(settings);

// Removing data from local storage
this.localStorageService.removeData('userSettings');

*/