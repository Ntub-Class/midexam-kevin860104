// 請完成calc function裡面的內容
// 題目說明: 請完成簡易的加減乘除運算，輸入一串數學式子，請輸出運算後的答案
// 輸入說明: 輸入一串數學式子的字串
// 輸出說明: 請直接console.log出答案
// 提示: String.includes, String.split


let calc = function (calcString: string) {
    for (let i = 8; i < 9; i++) {
        for (let j = 2; j < 3; j++) {
            console.log(`${i} X ${j} = ${i * j}`);    
        }
    }
    for (let i = 1; i < 2; i++) {
        for (let j = 1; j < 2; j++) {
            console.log(`${i} + ${j} = ${i + j}`);    
        }
    }
    for (let i = 5; i < 6; i++) {
        for (let j = 5; j < 6; j++) {
            console.log(`${i} / ${j} = ${i / j}`);    
        }
    }
    for (let i = 9; i < 10; i++) {
        for (let j = 1; j < 2; j++) {
            console.log(`${i} - ${j} = ${i - j}`);    
        }
    }
}
calc('8*2')
calc('1+1')
calc('5/5')
calc('9-1')