# Set timeout as a promise

Create a function `wait`, that takes one paramer that is number of milliseconds and returns a promise.

I should be able to call it like this:

```js
    wait(2000)
        .then(() => {
            console.log('executed after 2 seconds');
        })
```