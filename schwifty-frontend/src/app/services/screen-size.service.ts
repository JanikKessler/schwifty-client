import {HostListener, Injectable} from '@angular/core';
import {ReplaySubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ScreenSizeService {

  screenSize: ReplaySubject<number> = new ReplaySubject<number>(1)

  constructor() { }

  getScreenSize(): ReplaySubject<number>{
    return this.screenSize
  }

  @HostListener('window:resize', ['$event'])
  updateScreensize(){
    this.screenSize.next(innerWidth);
  }
}
