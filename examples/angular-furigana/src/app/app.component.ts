import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  text = '秋[あき]の 田[た]の　　かりほの 庵[いほ]の　　苫[とま]をあらみ';
  alt = 'わが 衣手[ころもで]は　　露[つゆ]にぬれつつ';

  changeText() {
    const temp = this.text
    this.text = this.alt
    this.alt = temp
  }
}
