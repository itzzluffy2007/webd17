function division(a, b) {
    console.log("Dividing", a, "by", b, "....");
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            if(b === 0){
                reject("division by zero is not allowed");
            } else {
                resolve(a / b);
            }
        }, 3000);
    });
}

division(10, 2)
.then((result) => {
    console.log("result is", result);
})
.catch((err) => {
    console.log("error occurred", err);
})
.finally(() => {
    console.log("operation completed");
})

division(20, 0)
.then((result) => {
    console.log("result is", result);
})
.catch((err) => {
    console.log("error occurred", err);
})
.finally(() => {
    console.log("operation completed");
})

division(30, 60)
.then((result) => {
    console.log("result is", result);
})
.catch((err) => {
    console.log("error occurred", err);
})
.finally(() => {
    console.log("operation completed");
})

division(22, 7)
.then((result) => {
    console.log("result is", result);
})
.catch((err) => {
    console.log("error occurred", err);
})
.finally(() => {
    console.log("operation completed");
})

division(100, 8)
.then((result) => {
    console.log("result is", result);
})
.catch((err) => {
    console.log("error occurred", err);
})
.finally(() => {
    console.log("operation completed");
});