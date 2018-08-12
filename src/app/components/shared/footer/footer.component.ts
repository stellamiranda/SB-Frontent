import { Component, OnInit } from '@angular/core';

// Services
import { LoadingService } from '../../../services/service.index';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  year: any;

  constructor(
    private loadingService: LoadingService
  ) { }

  ngOnInit() {
    const date = new Date();
    this.year = date.getFullYear();
  }

}
