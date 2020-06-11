# day 2 - react-redux 

## setting up react-redux

All the redux, e.g. store, reducers, etc. should go into a "data" folder not a "components" folder. 

## subscribing 

When creating the jsx component we can place in a folder './components/Value/index.js' but import as `import Value from './components/Value'. 

For the Player challenge you won't be able to use the index.js hack. 

e.g. 
        src
            - components 
                - Player
                    - Player.js
                    - Player1.js
                    - Player2.js


### ownprops 

You can also access ownprops. 

const mapStateToProps = ({ value, ownprops }) => { 
    return {
        value: value,
        step: ownprops
    }
}

# important refactoring 

## destructuring 

```js
const mapStateToProps = ({ state }) => { 
    return {
        value: state.value,
    }
}
```

## "auto key naming" 

```js
const mapStateToProps = ({ value, ownprops }) => { 
    return {
        value, // dont need to declare key name 
        step: ownprops
    }
}
```

## fat arrow single line 

```js
const mapStateToProps = ({ value, ownprops }) => ({ value }); // dont need to declare key name and using parenthesis means 
```

# day 4 - API actions 

## Redux-Thunk 

Alternative is Redux-Saga. 

Download `redux-thunk` NOT `redux-thunks`. 

## Planning 

You could transform components to hook or class based and then use componentdidmount or lifecycle method to load the data. 

Alternatively, you can use children props to leave the existing functionining components unaltered. 

Web sockets may enable you to use streaming *potentially* to show a value for progress bars. 