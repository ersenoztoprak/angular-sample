import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class QuickbooksService {

  constructor(private httpClient: HttpClient) {}

  showAlert() {
    // Spring Boot API'sine GET isteği yapın
    this.httpClient.get('http://localhost:8080/connectToQuickbooks').subscribe((response: any) => {
      const popupUrl = response.url; // API'den gelen URL'i alın

      // Popup penceresini açın
      const popupWindow = window.open(popupUrl, 'Popup', 'width=600,height=400');
    });
  }
}
