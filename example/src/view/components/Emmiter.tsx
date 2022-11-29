import EventEmitter from 'eventemitter3';

export const em = new EventEmitter();

const Emmiter = () => {
  return (
    <button onClick={()=>{em.emit('test',Math.floor(Math.random()*100))}}>EMIT</button>
  )
}

export default Emmiter