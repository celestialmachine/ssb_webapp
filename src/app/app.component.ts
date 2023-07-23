import { Component, OnInit } from '@angular/core';
import { SsbApiService } from './ssb-api.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ssb_webapp';
  constructor(private api: SsbApiService) { }

  ngOnInit(): void {
  }

}
