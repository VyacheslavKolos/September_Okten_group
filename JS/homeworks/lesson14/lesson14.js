//--CALLBACK----CALLBACK----CALLBACK----CALLBACK----CALLBACK----CALLBACK--
// // 1 зарядка
// function MorningExercises(callback) {
//     setTimeout(() => {
//         console.log("Exercises done!");
//         callback();
//     }, 2000)
// }
//
// // 2 почистити зуби
// function brushTheTeeth(callback) {
//     setTimeout(() => {
//         console.log("teeth brushed!");
//         callback();
//     }, 1000)
// }
//
// // 3 сніданок
// function breakfast(callback) {
//     setTimeout(() => {
//         console.log("Nyam-nyam!");
//         callback();
//     }, 1500)
// }
//
// // 4 попрацювати
// function study(callback) {
//     setTimeout(() => {
//         console.log("StudY!");
//         callback();
//     }, 2500)
// }
//
// // 5 пообідати
// function haveDinner(callback) {
//     setTimeout(() => {
//         console.log("delicious!");
//         callback();
//     }, 800)
// }
//
// // 6 попрацювати 2
// function doSomeTasks(callback) {
//     setTimeout(() => {
//         console.log("Tasks have done!");
//         callback();
//     }, 3000)
// }
//
// // 7 volleyball
// function volleyball() {
//     setTimeout(() => {
//         console.log("Good game!");
//     }, 2800)
// }
//
// MorningExercises(() => {
//     brushTheTeeth(() => {
//         breakfast(() => {
//             study(() => {
//                 haveDinner(() => {
//                     doSomeTasks(() => {
//                         volleyball();
//                     });
//                 })
//             });
//         });
//     });
// });


//--PROMISE----PROMISE----PROMISE----PROMISE----PROMISE--
// 1 зарядка
// function MorningExercises() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Exercises done!");
//             reject("Something went wrong... 1");
//         }, 2000)
//     })
// }
//
// // 2 почистити зуби
// function brushTheTeeth() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("teeth brushed!");
//             reject("Something went wrong... 2");
//         }, 1000)
//     })
// }
//
// // 3 сніданок
// function breakfast() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Nyam-nyam!");
//             reject("Something went wrong... 3");
//         }, 1500)
//     })
// }
//
// // 4 попрацювати
// function study() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("StudY!");
//             reject("Something went wrong... 4");
//         }, 2500)
//     })
// }
//
// // 5 пообідати
// function haveDinner() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("delicious!");
//             reject("Something went wrong... 5");
//         }, 800)
//     })
// }
//
// // 6 попрацювати 2
// function doSomeTasks() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Tasks have done!");
//             reject("Something went wrong... 6");
//         }, 3000)
//     })
// }
//
// // 7 volleyball
// function volleyball() {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve("Good game!");
//             reject("Something went wrong... 7");
//         }, 2800)
//     })
// }
//
// MorningExercises().then((res1) => {
//     console.log(res1);
//     return brushTheTeeth();
// }).then((res2) => {
//     console.log(res2);
//     return breakfast();
// }).then((res3) => {
//     console.log(res3);
//     return study();
// }).then((res4) => {
//     console.log(res4);
//     return haveDinner();
// }).then((res5) => {
//     console.log(res5);
//     return doSomeTasks();
// }).then((res6) => {
//     console.log(res6);
//     return volleyball();
// }).then((res6) => {
//     console.log(res6);
// })


//--ASYNC--AWAIT----ASYNC--AWAIT----ASYNC--AWAIT----ASYNC--AWAIT--
function MorningExercises() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Exercises done!");
            reject("Something went wrong... 1");
        }, 2000)
    })
}

// 2 почистити зуби
function brushTheTeeth() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("teeth brushed!");
            reject("Something went wrong... 2");
        }, 1000)
    })
}

// 3 сніданок
function breakfast() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Nyam-nyam!");
            reject("Something went wrong... 3");
        }, 1500)
    })
}

// 4 попрацювати
function study() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("StudY!");
            reject("Something went wrong... 4");
        }, 2500)
    })
}

// 5 пообідати
function haveDinner() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("delicious!");
            reject("Something went wrong... 5");
        }, 800)
    })
}

// 6 попрацювати 2
function doSomeTasks() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Tasks have done!");
            reject("Something went wrong... 6");
        }, 3000)
    })
}

// 7 volleyball
function volleyball() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Good game!");
            reject("Something went wrong... 7");
        }, 2800)
    })
}

async function dailyTasks(){
    const first=await MorningExercises();
    const second=await brushTheTeeth();
    const third=await breakfast();
    const fourth=await study();
    const fifth=await haveDinner();
    const sixth=await doSomeTasks();
    const seventh=await volleyball();
    console.log(first);
    console.log(second);
    console.log(third);
    console.log(fourth);
    console.log(fifth);
    console.log(sixth);
    console.log(seventh);
}
dailyTasks();
