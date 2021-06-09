import { Component, OnInit } from '@angular/core';
import { SchwiftOtwService } from '../../../services/schwift-otw.service';
import { Observable } from 'rxjs';
import { SchwiftOtw } from '../../../model/SchwiftOtw';

@Component({
  selector: 'app-schwift-otw',
  templateUrl: './schwift-otw.component.html',
  styleUrls: ['./schwift-otw.component.scss']
})
export class SchwiftOtwComponent implements OnInit {

  currentSchwiftOtw!: SchwiftOtw;

  constructor(private schwiftOtwService: SchwiftOtwService ) {}

  ngOnInit(): void {
    this.schwiftOtwService.getCurrentSchwiftOtw().subscribe(sotw => this.currentSchwiftOtw = sotw)
  }

}
