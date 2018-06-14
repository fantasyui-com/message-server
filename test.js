class Bean {
    constructor(o) {
        Object.assign(this, o);
    }
}


const jumping = new Bean({
  messageId:'007',
  title:'Foo',
  text:'Boo'
});

//console.log(Bean.entries())
console.log(Object.entries( jumping ))

//
//
// Object.defineProperty(o, 'b', {
//   // Using shorthand method names (ES2015 feature).
//   // This is equivalent to:
//   // get: function() { return bValue; },
//   // set: function(newValue) { bValue = newValue; },
//   get() { return bValue; },
//   set(newValue) { bValue = newValue; },
//   enumerable: true,
//   configurable: true
// });
