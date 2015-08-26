# Universe Collection Links
This package can help you with binding routes with collection and its document.
It works for FlowRouter ( but It can works with Iron Router too. - Not tested for Iron Router yet)

## Creating routes
```js
Books = new UniCollection('books');

Books.setCollectionRoute('/books', {
    // default name for collection route is 'listing'
    name: 'listing',
    action () {
        // ...
    }
});

Books.setCollectionRoute('/book/:_id', {
    // default name for document route is 'fullview'
    name: 'fullview',
    action (params) {
        // ...
    }
});

Books.setCollectionRoute('/short_page/:_id', {
    // custom name of route
    name: 'shortview',
    action (params) {
        // ...
    }
});
```
## Getting path

`.getLink('routeName', params, queryParams)` returns link for route

```js
var doc = Books.findOne();
//default route for document is fullview (parameter(s) of route must be the same as key(s) of document)
doc.getLink(); //output: '/book/ac9b43533dd'

doc.getLink('shortview'); //output: '/short_page/ac9b43533dd'

Books.getLink(); //output: '/books'

Books.getLink('listing'); //output: '/books'

FlowRouter.path('booksListing'); //output: '/books'
// You can use IronRouter instead FlowRouter as well but for now it is not tested.

//From collection to get link for route with params) you must pass them.
Books.getLink('fullview', {_id: 'ac9b43533dd'}); //output: '/book/ac9b43533dd'
```

## Navigate to path

Use `.goToLink()` instead `.getLink()` to change current route.
