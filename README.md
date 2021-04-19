### Summary

* simple use of ngrx in the config part of WarO
    - includes reducer-actions and effects
* note:
    - UI is terrible
    - tests do not run 
    - basic game play is OK 

### Setup

* in parent dir: `ng new sandbox`

```
ng generate component players
ng generate component player
ng serve
npm install --save bootstrap@3
    - edit angular.json and add `node_modules/bootstrap/dist/css/bootstrap.css`
```

### TODO

* APR 2021
    - fix tests ??? 
    - config state needs players and the ancillary computations
    - does game/table state make sense?
        - huge re-design
* enum for strategy type
* error handling
* review constants 
* audit service issue on game #2
* CRUD ops for players in config area
* proper tests
* CSS treatment
    - esp. test for small devices
* revisit architecture / code seams
* revisit loop idioms etc with functional style
* revisit RxJS
* more strategies
* remote api strategy 
* X - clear player stats on new game
