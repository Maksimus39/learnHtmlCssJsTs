// Note: The chapter is missing a space in the `console.log` line that's corrected below
function jumpOut() {
    var a = [1, 2, 3];
    for (var i = 0; i < a.length; ++i) {
        var value = a[i];
        console.log("value", value);
    }
    console.log("Outside loop var " + value); // Why can we use 'value' here?
}

jumpOut();


function jumpOutTwo() {
    let a = [1, 2, 3]
    for (let i = 0; i < a.length; i++) {
        let valueTwo = a[i]
        console.log("valueTwo", valueTwo)
    }
    console.log("Outside loop let" + valueTwo);  // я могу взять значение если это будет var, но let
    // это блочная область видимости и я не увижу результат
}

jumpOutTwo()