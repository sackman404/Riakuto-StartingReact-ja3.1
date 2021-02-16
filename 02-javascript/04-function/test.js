const foo = {
    baz: function(){
        console.log('I am `baz` method' );
    },
}

// foo.baz()

const fiz = {
    bar: 'fiz',
    baz(){
        console.log('I am `bar` method')
    }
}

fiz.baz()
fiz.bar