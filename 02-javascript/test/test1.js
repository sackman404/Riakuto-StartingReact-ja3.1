const obj = {
    test: function(){ return this },
    alert: function(msg){ console.log(msg)}
}

const test = obj.test
obj.test().alert('Hello')
test().alert('hello')