import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  onTransferClick() {
    console.log('Faire un virement clicked');
  }

  onTransactionsClick() {
    console.log('Afficher les dernières opérations clicked');
  }

  onSavingsClick() {
    console.log('Épargne clicked');
  }

  onCreditClick() {
    console.log('Crédit clicked');
  }

}
