import { Component, OnChanges, OnInit } from '@angular/core';
import { SchwiftOtwService } from '../../../services/schwift-otw.service';
import { SchwiftOtw } from '../../../model/SchwiftOtw';

declare var SC: any;

@Component({
  selector: 'app-schwift-otw',
  templateUrl: './schwift-otw.component.html',
  styleUrls: ['./schwift-otw.component.scss']
})
export class SchwiftOtwComponent implements OnInit, OnChanges {

  currentSchwiftOtw!: SchwiftOtw;
  widget: any;

  constructor(private schwiftOtwService: SchwiftOtwService ) {}

  ngOnChanges() {

  }

  ngOnInit(): void {
    this.schwiftOtwService.getCurrentSchwiftOtw().subscribe(sotw => {
      this.widget = SC.Widget('sc-otw-widget');
      this.currentSchwiftOtw = sotw

      console.log(sotw)

      this.widget.load(sotw.release?.soundcloudLink?.link, {
        auto_play: false,
        sharing: false,
        hide_related: true,
        show_comments: false,
        show_user: false,
        show_reposts: false,
        show_teaser: true,
        visual: true,
        download: false,
      });
    } )
  }

}
