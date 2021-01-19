# General Learning Items (source angular.io)

## Angular Concepts
-   zone & change detection
-   aot vs jit
-   component lifecycle
    -   ngOnInit, ngOnDestroy, etc
    -   @Input setter/getter vs ngOnChanges
        - https://medium.com/javascript-in-plain-english/dumb-angular-input-setter-getter-vs-ngonchanges-f30e61937926
-   View encapsulation and generated css attributes/classes
    - :host and other piercers: https://angular.io/guide/component-styles
-   providers: https://angular.io/guide/providers
-   - lazy loading and route
    - component level (Component.providers)
    - module level (NgModule.providers)
    - viewproviders (Component.viewProviders + <ng-content>)
        - source: https://codecraft.tv/courses/angular/dependency-injection-and-providers/ngmodule-providers-vs-component-providers-vs-component-viewproviders/
        - source: https://angular.io/guide/singleton-services
-   @decorators and associated metadata
-   Directives: changes behavior of DOM element both layout and appearance
    - https://angular.io/guide/built-in-directives
    - Components: Directives with a template
    - attribute (custom and built in): NgModel, NgClass, NgStyle
    - structural (NgFor(of), NgSwitch/(Case), NgIf, etc)
        - the * p[refix (eg *ngIf) genrates an <ng-template>]
    - microsyntax: let-hero, let-i, 
        - https://angular.io/guide/structural-directives
        - https://angular.io/guide/structural-directives#microsyntax 
        ```html
        <div *ngFor="let hero of heroes; let i=index; let odd=odd; trackBy: trackById" [class.odd]="odd">
            ({{i}}) {{hero.name}}
        </div>

        <ng-template ngFor let-hero [ngForOf]="heroes" let-i="index" let-odd="odd" [ngForTrackBy]        ="trackById">
            <div [class.odd]="odd">({{i}}) {{hero.name}}</div>
        </ng-template>
        ```
-   templates & bindings
    - interpolations
        - text interpolation: <img src ="{{ value}}">
    - template reference or input variables
        <input #box (keyup)="0">
        <p>{{box.value}}</p>
        OR
        <input #box>{{box.value}}
    - two types of bindings: event and data bindings
    - attribute, class, style, event, two way bindings
    - inputs and outputs (eventemitters)
-   forms & validation ()
    - reactive vs temnplate driven
    - form value loop: valueChanges --> patchValue(value, false)
-   HTTPClient
    - asyncpipe (auto unsubscribe)
    - typed response
    - error handling
    - Interceptors, Guards, etc
        - the 'next' object
        - logging, global error handling, caching, etc
    - debouncing keystrokes to host: distinctUntilChanged() + switchMap()
-   pipes:
    - pure and not pure:
-   dependency injection
-   routing & navigation
-   directive types: 
    - built-in
    - attribute
    - structural
-   @ContentChild vs @ViewChild, etc
    - https://blog.mgechev.com/2016/01/23/angular2-viewchildren-contentchildren-difference-viewproviders/
-   <template> vs <container> vs <ng-content>
-   angular-cli.io and schematics and builder
-   CDK/Material (component dev kit)
-   best ways to unsubscribe: https://medium.com/angular-in-depth/the-best-way-to-unsubscribe-rxjs-observable-in-the-angular-applications-d8f9aa42f6a0

## RxJs concepts
    - let operators
    - hot vs cold
    - take, takeUntil, takeWhile automatically unsubscribe
    - various Subjects
    - switchMap(): orginal inflight request is cancelled and replaced by latest one
    - withLatestFrom()
    - mergeX()


## NgRx Concepts



