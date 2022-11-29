import EventEmitter from 'eventemitter3';

export const em = new EventEmitter();

const Emmiter = () => {
  return (
    <button onClick={()=>{em.emit('test',Math.random())}}>EMIT</button>
  )
}

export default Emmiter