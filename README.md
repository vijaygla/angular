# angular
# Angular – Complete Theory & Concepts Notes

## 1. What is Angular

Angular is a **TypeScript-based open-source front-end framework** developed by **Google** used to build **single-page applications (SPA)**.

It helps developers create **dynamic, fast, and scalable web applications**.

### Key Characteristics

* Component-based architecture
* Two-way data binding
* Dependency Injection
* Modular development
* TypeScript support
* Reactive programming with RxJS

---

# 2. Angular vs AngularJS

| Feature              | AngularJS  | Angular         |
| -------------------- | ---------- | --------------- |
| Language             | JavaScript | TypeScript      |
| Architecture         | MVC        | Component Based |
| Performance          | Slower     | Faster          |
| Mobile Support       | Limited    | Strong          |
| Dependency Injection | Basic      | Advanced        |

---

# 3. Angular Architecture Overview

Angular applications are built using these main building blocks:

1. Modules
2. Components
3. Templates
4. Directives
5. Services
6. Dependency Injection
7. Routing
8. Pipes

---

# 4. Angular Modules

Modules organize an application into **cohesive blocks of functionality**.

Every Angular app has **at least one module** called **Root Module**.

Example:

```ts
import { NgModule } from '@angular/core';

@NgModule({
  declarations: [],
  imports: [],
  providers: [],
  bootstrap: []
})
export class AppModule {}
```

### Types of Modules

* Root Module
* Feature Module
* Shared Module
* Core Module

---

# 5. Components

Components are the **building blocks of Angular applications**.

Each component consists of:

* Template (HTML)
* Class (TypeScript)
* Metadata (Decorator)

Example:

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'My Angular App';
}
```

---

# 6. Templates

Templates define the **HTML view** of the application.

Example:

```html
<h1>{{title}}</h1>
```

Angular templates support:

* Data binding
* Directives
* Pipes
* Event handling

---

# 7. Data Binding

Data binding connects **component data with the template**.

### Types of Data Binding

#### 1. Interpolation

```html
{{title}}
```

Used to display component data.

---

#### 2. Property Binding

```html
<img [src]="imageUrl">
```

Binds DOM property with component value.

---

#### 3. Event Binding

```html
<button (click)="save()">Save</button>
```

Handles user events.

---

#### 4. Two-way Binding

```html
<input [(ngModel)]="name">
```

Synchronizes data between **view and component**.

---

# 8. Directives

Directives modify the behavior or appearance of DOM elements.

### Types of Directives

#### 1. Component Directive

Controls template with associated class.

#### 2. Structural Directives

Modify DOM layout.

Examples:

```html
*ngIf
*ngFor
*ngSwitch
```

Example:

```html
<div *ngIf="isLoggedIn">Welcome</div>
```

---

#### 3. Attribute Directives

Change appearance or behavior.

Examples:

```html
ngClass
ngStyle
```

Example:

```html
<div [ngClass]="{'active': isActive}"></div>
```

---

# 9. Pipes

Pipes transform data before displaying it.

Example:

```html
{{ name | uppercase }}
```

### Built-in Pipes

| Pipe      | Description               |
| --------- | ------------------------- |
| uppercase | Convert text to uppercase |
| lowercase | Convert text to lowercase |
| date      | Format dates              |
| currency  | Currency formatting       |
| percent   | Percentage formatting     |

Example:

```html
{{ price | currency }}
```

---

# 10. Services

Services contain **business logic or reusable functionality**.

They help maintain **separation of concerns**.

Example:

```ts
@Injectable()
export class UserService {
  getUsers() {
    return ["John", "Mark"];
  }
}
```

---

# 11. Dependency Injection

Dependency Injection (DI) is a design pattern used to supply dependencies to components.

Angular has a **built-in DI system**.

Example:

```ts
constructor(private userService: UserService) {}
```

Advantages:

* Loose coupling
* Better testability
* Code reusability

---

# 12. Routing

Routing enables navigation between views.

Example:

```ts
const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent }
];
```

Router configuration:

```ts
RouterModule.forRoot(routes)
```

Template navigation:

```html
<a routerLink="/home">Home</a>
```

---

# 13. Angular Forms

Angular provides two approaches:

### 1. Template Driven Forms

Simple forms using directives.

Example:

```html
<input [(ngModel)]="username">
```

---

### 2. Reactive Forms

More scalable and powerful.

Example:

```ts
form = new FormGroup({
  name: new FormControl('')
});
```

---

# 14. Lifecycle Hooks

Angular components have lifecycle events.

| Hook            | Description                           |
| --------------- | ------------------------------------- |
| ngOnInit        | Called after component initialization |
| ngOnChanges     | Called when input properties change   |
| ngDoCheck       | Custom change detection               |
| ngAfterViewInit | After view initialization             |
| ngOnDestroy     | Cleanup before destruction            |

Example:

```ts
ngOnInit(){
 console.log("Component initialized");
}
```

---

# 15. Observables & RxJS

Angular uses **RxJS for asynchronous programming**.

Observable represents a **stream of data over time**.

Example:

```ts
this.http.get('/api/users').subscribe(data => {
  console.log(data);
});
```

---

# 16. HTTP Client

Used for API communication.

Example:

```ts
constructor(private http: HttpClient) {}

getUsers(){
 return this.http.get('/api/users');
}
```

---

# 17. Angular CLI

Angular CLI helps create and manage projects.

### Important Commands

Create project:

```bash
ng new projectName
```

Run project:

```bash
ng serve
```

Generate component:

```bash
ng generate component componentName
```

Generate service:

```bash
ng generate service serviceName
```

Build project:

```bash
ng build
```

---

# 18. Lazy Loading

Loads modules only when required.

Advantages:

* Faster initial load
* Better performance

Example:

```ts
{
 path: 'admin',
 loadChildren: () => import('./admin/admin.module')
 .then(m => m.AdminModule)
}
```

---

# 19. Angular Security

Angular protects against common vulnerabilities.

### Built-in Protections

* XSS Protection
* Sanitization
* Content Security Policy
* HTTP Interceptors

---

# 20. Best Practices

1. Use feature modules
2. Follow single responsibility principle
3. Use lazy loading
4. Use services for business logic
5. Use reactive forms for large applications
6. Maintain proper folder structure

---

# 21. Angular Folder Structure

Typical structure:

```
src/
 ├── app/
 │   ├── components/
 │   ├── services/
 │   ├── models/
 │   ├── app.module.ts
 │   ├── app.component.ts
 ├── assets/
 ├── environments/
 └── index.html
```

---

# 22. Advantages of Angular

* Large ecosystem
* Strong community support
* TypeScript support
* High scalability
* Modular architecture

---

# 23. Limitations

* Steeper learning curve
* Larger bundle size
* Frequent updates

---

# 24. Angular vs React vs Vue

| Feature        | Angular    | React      | Vue        |
| -------------- | ---------- | ---------- | ---------- |
| Type           | Framework  | Library    | Framework  |
| Language       | TypeScript | JavaScript | JavaScript |
| Architecture   | MVC        | Component  | MVVM       |
| Learning Curve | Hard       | Medium     | Easy       |

---
Notes
1. if we declare any variable inside any component we can not excess it outside this component.
2. 