import {
  Component,
  Input,
  OnInit,
  OnChanges,
  // DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements
  OnInit,
  OnChanges,
  // DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {

  @Input() var1;

  constructor() {
    console.log('>>LC<< constructor called');
  }

  ngOnChanges(changes) {
    console.log('>>LC<< ngOnChanges called');
    console.log('>>LC<< ngOnChanges -> changes', changes);
  }

  ngOnInit(): void {
    console.log('>>LC<< ngOnInit called');
    console.log('parent to child data ->>', this.var1);
  }

  // ngDoCheck() {
  //   console.log('>>LC<< ngDoCheck called');
  // }

  ngAfterContentInit() {
    console.log('>>LC<< ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('>>LC<< ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('>>LC<< ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('>>LC<< ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('>>LC<< ngOnDestroy called');
  }

}
