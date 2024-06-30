/* 
Promise API's
Video Link -> https://youtu.be/DlTVt1rZjIo?si=m5hSgp7_4u3o5TuS
Below promise api's take array of promised as an input and returns some value.

1. Promise.all([p1,p2,p3]) -> waits for all of promises(p1,p2,p3) to resolve then returns the array of values.
                              If any one of them fails it immediately return with the failed err.

2. Promise.allSettled([p1,p2,p3]) -> same as Promise.all() i.e, waits for all of promises(p1,p2,p3) to resolve then returns the array of values.
                                     But if any one of them fails, It doesn't returns immediately, it waits for all of the promises
                                     to get settled and then returns.

3. Promise.race([p1,p2,p3]) -> waits for 1st promise to settle(resolve or reject), and returns its value.

4. Promise.any([p1,p2,p3]) -> waits for 1st promise to success(fulfill/resolve), and returns its value.
                              If all of promises(p1,p2,p3) fails(rejected) then it returns aggregated error([err1,err2,err3])

*/
