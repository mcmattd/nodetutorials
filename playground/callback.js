// setTimeout(() => {
//     console.log('two seconds are up')
// }, 2000)

// const geocode = (address, callback) => {
//     setTimeout(() => {
//         const data = {
//             long: 0,
//             lat: 0
//         }

//         callback(data)
//     }, 2000)

// }

// geocode('Philadelphia', (data) => {
//     console.log(data)
// })

const add = (num1, num2, callback) => {
    setTimeout(() => {
        const sum = num2+num1
        callback(sum)
    }, 2000)
}

add(1,4, (sum) => {
    console.log(sum)
} )