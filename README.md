# cookie
get ,set ,del ,cookie

## Example Usage ##

```js
import cookie from './cookie.js'
// Setting a cookie value
cookie.set('key', 'value');

// Setting cookies with additional options
cookie.set('key', 'value', { domain: 'www.example.com', secure: true });

cookie.set('key','value',{path:''}  //current path
 
// Setting cookies with expiration values
cookie.set('key', 'value', { expires: 6000 }); // Expires in 6000 milliseconds
cookie.set('key', 'value', { expires: 0 }); // session cookie
cookie.set('key', 'value', { expires: '0.5d' }); // Expires in 0.5 day
cookie.set('key', 'value', { expires: '2m' }); // Expires in 2 month
cookie.set('key', 'value', { expires: '1y' }); // Expires in 1 year

//get a cookie
cookie.get('key')
//if a key exsist
cookie.has('key')
```
## defalult options ##

cookie.set(key, value [, options])

Sets a cookie in the document. If the cookie does not already exist, it will be created. 

| Option    | Description                                                                                      | Default     |
| --------: | ------------------------------------------------------------------------------------------------ | ----------- |
|    *path* | A string value of the path of the cookie                                                         | `"/"`       |
|  *domain* | A string value of the domain of the cookie                                                       | `undefined` |
| *expires* | A number (of seconds), a date parsable string, or a `Date` object of when the cookie will expire | `undefined` |
|  *secure* | A boolean value of whether or not the cookie should only be available over SSL                   | `false`     |
|  *expires* | A string or number value of expires of the cookie. like 100,1d,1m,0.5y. 0 enable session cookie | `1m`        |    

## Browser Compatibility ##
ie6+
