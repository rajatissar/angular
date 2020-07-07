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
  var2 = 'Rajat';

  constructor() {
    console.log('>>LC.1<< constructor called');
  }

  ngOnChanges(changes) {
    console.log('>>LC.2<< ngOnChanges called');
    console.log('>>LC.2<< ngOnChanges -> changes', changes);
  }

  ngOnInit(): void {
    console.log('>>LC.3<< ngOnInit called');
    console.log('>>LC.3<< ngOnInit parent to child data ->>', this.var1);
  }

  // ngDoCheck() {
  //   console.log('>>LC<< ngDoCheck called');
  // }

  ngAfterContentInit() {
    console.log('>>LC.4<< ngAfterContentInit called');
  }

  ngAfterContentChecked() {
    console.log('>>LC.5<< ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('>>LC.6<< ngAfterViewInit called');
  }

  ngAfterViewChecked() {
    console.log('>>LC.7<< ngAfterViewChecked called');
  }

  ngOnDestroy() {
    console.log('>>LC.8<< ngOnDestroy called');
  }

}
