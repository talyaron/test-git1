export function addToCounter(count: number, setCount: Function): void {
  setCount(count + 5);
}

export function getRandomNumber(count: number, setCount: Function):void{
<<<<<<< HEAD
  setCount(Math.floor( Math.random()*9000))
=======
  setCount(Math.floor( Math.random()*6000))
>>>>>>> main
}

