// function setTimeoutPromise(ms){
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=> resolve(), ms);
//     });
// }

// async function startAsync(age) {
//     if(age>20) return `${age} success`;
//     else throw new Error(`${age}is not over 20`);
// }
// //try -catch : 가능성있는 모든 것을 넣어준다음, 예외가 생기면 catch로 잡아줌
// async function startAsyncJobs() {
//     await setTimeoutPromise(1000); //비동기 처리를 위하여 사용. 주석처리하면 바로 값이 나옴
//     const promise1 = startAsync(25);
//     try {
//         const value = await promise1;
//         console.log(value);
//     } catch(e) {
//         console.log(e);
//     }
//     const promise2 = startAsync(15);
//     try {
//         const value = await promise2;
//         console.log(value);
//     } catch(e){
//         console.log(e);
//     }
// }
// startAsyncJobs();

//ex2. 
//합친 시간만큼 기다려야 값이 나옴. 6초
// async function foo() {
//     const a = await new Promise((resolve)=> setTimeout(()=> resolve(1),3000));
//     const b = await new Promise((resolve)=> setTimeout(()=> resolve(2),2000));
//     const c = await new Promise((resolve)=> setTimeout(()=> resolve(3),1000));

//     console.log([a,b,c])
// }
// foo();

//한번에 수행되게 하는것 Promise.all 3초
async function foo() {
    const res = await Promise.all([
    new Promise((resolve)=> setTimeout(()=> resolve(1),3000)),
    new Promise((resolve)=> setTimeout(()=> resolve(2),2000)),
    new Promise((resolve)=> setTimeout(()=> resolve(3),1000)),
])
    console.log(res);
}
foo();


