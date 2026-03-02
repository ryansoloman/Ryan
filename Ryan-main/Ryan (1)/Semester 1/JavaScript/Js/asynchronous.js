// console.log('A');
// setTimeout(() => {
// console.log('B');
// }, 2000);
// console.log('C');

let firstname = "Aptech";
let lastname = " ";

const getFullName = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve = "Pakistan";
    }, 2000);
});

const displayFullName = async () => {
    lastname = await getFullName;
    console.log(`${firstname} ${lastname}`);
}

displayFullName();