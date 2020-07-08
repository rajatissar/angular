import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css']
})

export class DataBindingComponent implements OnInit {
  string1 = 'Rajat';
  array1 = [1, 2, 3, 4];
  object1 = {
    first_name: 'Rajat', last_name: 'Kumar'
  };
  title: 'Angular Tutorial';
  disabled = false;
  color = 'green';
  username = 'Rajat';
  dataFromParentToChild = ['hulk', 'thor', 'superman', 'batman'];
  dataFromChildToParent = ['the dark knight'];
  dataFromChild1ToChild2 = ['prestige'];

  constructor() { }

  ngOnInit(): void {
  }

  changeColor() {
    if (this.color === 'green') {
      this.color = 'yellow';
    } else {
      this.color = 'green';
    }
  }

  clickEventBinding(param1: string) {
    console.log('clickEventBinding ->>', param1);
  }

  mouseenterEventBinding(param1: string) {
    console.log('mouseenterEventBinding ->>', param1);
  }

  keyupEventBinding(event) {
    console.log('keyupEventBinding ->>', event.target.value);
  }

  getTextBoxValue(item) {
    console.log('getTextBoxValue ->>', item.value);
  }

  passDataFromParentToChild() {
    this.dataFromParentToChild = [...this.dataFromParentToChild, 'new Hero'];
  }

  passDataFromChildToParent(result) {
    console.log('data from child to parent ->>', result);
    this.dataFromChildToParent = [...this.dataFromChildToParent, result.data];
  }

  passDataFromChild1ToChild2(result) {
    console.log('data from child1 to child2 ->>', result);
    this.dataFromChild1ToChild2 = [...this.dataFromChild1ToChild2, result.data];
  }

}
