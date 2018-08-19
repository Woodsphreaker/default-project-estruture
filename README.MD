# Default project estruture with espress

### Installing

NPM Modules

```
just run the npm install
```

## Running

```
just run the npm start
```

## Example

```javascript
helpers
|___ loadMiddlewares.js
|___ loadModules.js
middlewares
|___ index.js
|___ middleware1.js
|___ middleware2.js
|___ middleware3.js
|___ middlewareN.js
modules
|___ books
|    |___ config
|    |    |___ config.js
|    |___ helpers
|    |    |___ h1.js
|    |    |___ h2.js
|    |___ actions
|    |    |___ create.js
|    |    |___ update.js
|    |    |___ delete.js
|    |    |___ list.js
|    |    |___ index.js // manages the actions
|    |___ index.js // receives the routes
|___ products
|    |___ config
|    |    |___ config.js
|    |___ helpers
|    |    |___ h1.js
|    |    |___ h2.js
|    |___ actions
|    |    |___ create.js
|    |    |___ update.js
|    |    |___ delete.js
|    |    |___ list.js
|    |    |___ index.js // manages the actions
|    |___ index.js // receives the routes
|___ users 
|    |___ config
|    |    |___ config.js
|    |___ helpers
|    |    |___ h1.js
|    |    |___ h2.js
|    |___ actions
|    |    |___ create.js
|    |    |___ update.js
|    |    |___ delete.js
|    |    |___ list.js
|    |    |___ index.js // manages the actions
|    |___ index.js // receives the routes
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/Woodsphreaker/videoinfo/blob/master/LICENSE) file for details
