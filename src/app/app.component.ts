import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'youtube';
  string1 = 'Rajat';
  array1 = [1, 2, 3, 4];
  object1 = { 'first_name': 'Rajat', 'last_name': 'Kumar' };

  click_fun(parm1) {
    alert(parm1);
  }

  mouseenter_fun(parm1) {
    alert(parm1);
  }

  on_key_press(event) {
    console.log(event.target.value)
  }

  on_submit(item) {
    alert(item.value);
  }

}
