// problem 1
// const arr = {
//   0: 0,
//   1: 1,
//   2: 2,
//   3: 3,
//   4: 4,
//   5: 5,
//   6: 6,
//   7: 7,
//   8: 8,
//   9: 9,
//   A: 10,
//   B: 11,
//   C: 12,
//   D: 13,
//   E: 14,
//   F: 15
// }

// let n = "10011011"
// let a = 2
// function binnary(n, a) {
//   let num = 0
//   for(let l in n) {
//      num += arr[n[l]] * (a ** Math.abs(l - (n.length - 1)))
//   }
//   return num
// }

// console.log(binnary(n, a))


// problem 2

// let arr = [-2, 4, -8, -16, -32];
// let b = true;
// if(arr[0] < 0){
//   for(let i = 0; i < arr.length; i++){
//     if(i % 2 == 0 &&  arr[i]> 0){
//       b = i;
//       break;
//     } else if(i % 2 == 1 && arr[i] < 0) {
//       b = i;
//       break;
//     }
//   }
// } else {
//   for(let j = 0; j < arr.length; j++){
//     if(j % 2 == 0 && arr[j] < 0){
//       b = j;
//     } else if(j % 2 == 1 && arr[j] > 0) {
//       b = j;
//     }
//   }
// }

// console.log(b);


// problem 3
// const obj = {
//   arr: [15, 20, 12, 4, -13, 5],

//   at(index) {
//     if(index >= 0) {
//       for(let i = 0; i < this.arr.length; i++) {
//         if(index == i) {
//           console.log(this.arr[i])
//         }
//       }
//     }
//     else {
//       for(let j = 0; j < this.arr.length; j++) {
//         if(index == j) {
//           console.log("ishladi")
//           console.log(this.arr-[index])
//         }
//       }
//     }
//   }
// }

// obj.at(-1)


// problem 4


// problem 5



// problem 8

// let nestedarr = [
//   [1, 1, 1, 1],
//   [5, 2, 2, 100],
//   [9, 4, 2, 1]
// ]


// for(let i = 1; i < nestedarr[0].length; i++) {
//   nestedarr[0][i] += nestedarr[0][i-1]
// }

// for(let j = 1; j < nestedarr.length; j++) {
//   nestedarr[j][0] += nestedarr[j - 1][0];
// }

// for(let k = 1; k < nestedarr.length; k++) {
//   for(let m = 1; m < nestedarr[k].length; m++) {
//     let top = nestedarr[k - 1][m]
//     let left = nestedarr[m - 1][k]
//     nestedarr[k][m] += top > left ? left : top;
//   }
// }

// console.table(nestedarr)
