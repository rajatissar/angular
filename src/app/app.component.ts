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
  disabled = false;
  show_hidden_text = true;
  color = "green";
  persons = [
    { name: 'Rajat', email: 'rajat.kumar@daffodilsw.com' },
    { name: 'Sherlock', email: 'sherlock@daffodilsw.com' }
  ];
  heros = ['hulk', 'thor', 'superman', 'batman'];

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

  on_form_submit(form_data) {
    console.log('form_data', form_data);
  }

  on_change_color() {
    if (this.color == 'green') {
      this.color = 'yellow';
    } else {
      this.color = 'green';
    }
  }
}
