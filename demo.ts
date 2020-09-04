// 勾股定理
interface Point { x: number, y: number }
function demo (data: Point):number {
    let rst = Math.sqrt(data.x ** 2 + data.y ** 2);
    console.log('rst: ' + rst);
    return rst;
}

demo({ x:3, y:4 });