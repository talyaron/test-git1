export function addToCounter(count: number, setCount: Function): void {
  setCount(count + 5);
}

export function getRandomNumber(count: number, setCount: Function):void{
  setCount(Math.floor( Math.random()*1000))
}

