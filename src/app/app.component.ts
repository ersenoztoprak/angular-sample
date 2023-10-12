import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { QuickbooksService } from 'src/quickbooks.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-sample';

  constructor(private quickbookService: QuickbooksService) {}

  openPopup() {
    this.quickbookService.showAlert();
  }

  
}
