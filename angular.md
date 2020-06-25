# Angular

Angular is an application design framework and development platform for creating efficient and sophisticated single-page apps.

M
V - HTML
C

## 1. Notes

* Most Angular code can be written with just the latest JavaScript, using types for dependency injection, and using decorators for metadata.
* The basic building blocks are NgModules, which provide a compilation context for components. NgModules collect related code into functional sets; an Angular app is defined by a set of NgModules. An app always has at least a root module that enables bootstrapping, and typically has many more feature modules.
* NgModules are containers for a cohesive block of code dedicated to an application domain, a workflow, or a closely related set of capabilities.

## 2. Commands

> Installation

```SH
npm install -g @angular/cli
```

> Create a new project

```SH
ng new my-app
```

> Running an existing project

```SH
ng serve --open --port 4201
```

> Create a new component

```SH
ng generate component users
```

> Create a new directive

```SH
ng g directive customStyle
```

> Create a new Service

```SH
ng g service user
```

> Create a new module

```SH
ng generate module users
```

## Bootstrap

> Installation

```SH
ng add @ng-bootstrap/ng-bootstrap
```

```SH
npm install --save @angular/material-moment-adapter moment
```

[ng-bootstrap](https://ng-bootstrap.github.io/#/getting-started)

## Material

> Installation

```SH
ng add @angular/material
```

### json-server

> RUN

```SH
json-server --watch db.json
```

## 3. Terminology (TypeScript)

### 1. Decorator

Decorator are typescript feature which allow you to enhance your classes.
Decorator always starts with **@** like @Component

### 2. Modal

* Modal is data structure of your application or service.
* MOdel are blueprint for object what we create.

## 4. Terminology (Angular)

### 1. Component

* Components are the most basic UI building block of an Angular app. An Angular app contains a tree of Angular components.
* Angular components are a subset of directives, always associated with a template. Unlike other directives, only one component can be instantiated per an element in a template.
* A component must belong to an NgModule in order for it to be available to another component or application. To make it a member of an NgModule, list it in the declarations field of the NgModule metadata.
* A Component decorator consists of below 3 fields:-
  * selector: 'app-add-resto' (HTML Tag), '[appDynamicField]' (HTML attribute), '[.appDynamicField]' (HTML class), HTML id not supported
  * templateUrl: ''
  * styleUrls: []

### 2. Directive

* Directives are instructions in the DOM.
* Directives are extended HTML attributes with the prefix n
* Types of directive:-
  * structural directive e.g. *ngIf
  * attribute directive e.g. ngModel

### 3. Services

* For data or logic that isn't associated with a specific view, and that you want to share across components, you create a service class. A service class definition is immediately preceded by the @Injectable() decorator. The decorator provides the metadata that allows other providers to be injected as dependencies into your class.
* Dependency injection (DI) lets you keep your component classes lean and efficient. They don't fetch data from the server, validate user input, or log directly to the console; they delegate such tasks to services.
* Service is a singleton classes that should be instantiated only once in a angular application.
* Services are not modal and component dependent.
* Service is used for
  * share common data
  * share common function
  * call API in services

### 4. Pipes

### 5. Module

A module is a mechanism to group components, directives, pipes and services that are related, in such a way that can be combined with other modules to create an application.

```TEXT
@ngModule
declarations -> Components , Directives
import -> Modules
provider ->
bootstrap -> component to render in index.html file
```

### 6. Routing

### 7. Data Binding

Communication between TypeScript Code (Business Logic) and HTML(Template) of component

> String Interpolation

Displaying dynamic data on HTML screen

```TEXT
{{data}}
```

> Property Binding

Property binding lets you interpolate values that are computed from your application data into the HTML.

```TEXT
[property]="data"
```

```TEXT
[disabled]="var1"
```

> Event Binding

Event binding lets your app respond to user input in the target environment by updating your application data.

```TEXT
(event)="expression"
```

```TEXT
(click)="callFunction()"
```

> Two way Data Binding

```TEXT
[(ngModel)="data"]
```

### 8. Life cycle

| Method name             | Description                                                                |
|-------------------------|----------------------------------------------------------------------------|
| ngOnChanges()           | Called after a bound input property change                                 |
| ngOnInit()              | Called once the component is initialized                                   |
| ngDoCheck()             | Called during every change detection run                                   |
| ngAfterContentInit()    | Called after content (ng-content) has been projected into view             |
| ngAfterContentChecked() | Called every time the projected content has been checked                   |
| ngAfterViewInit()       | Called every time the component view (and child view) has been initialized |
| ngAfterViewChecked()    | Called after the component view (and child view) have been checked         |
| ngOnDestroy()           | Called once the component is about to be destroyed                         |

### 9. Form

* Template driven form
* Reactive form

#### Template driven form

#### Reactive Form

* formGroup
* formControlName

### 10. Observables

## 6. TODO

* Pass data between siblings component
* Use two router-outlet in single HTML page.
* Pass Data in params of router -> why component gets render only first time not every time
* File upload in more detail

### Topics to study
