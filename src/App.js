import './App.css';
import {useState} from 'react'

function App() {

  let  date = new Date()
  let currentDate = date.getDate()
  const [toDos,setToDos] = useState([])
  const [toDo,setToDo] = useState('')
  const [CtoDo,setCtoDo] = useState([])
  return (
    <div className='main'>
       <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, it's {currentDate} 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>{setToDos([...toDos,{id:Date.now(), text:toDo, status: false}]);
        setToDo([''])}}className="fas fa-plus"></i>
      </div>
      <div className="todos">
      {
        toDos.map((obj)=>{
          if(obj.status === false){
         return(
           <div className="todo">
              <div className="left">
                <input onChange={(e)=>{
                  toDos.filter((obj2)=>{
                    if(obj2.id === obj.id){
                      obj2.status = e.target.checked
                    }
                    return obj2
                  });let temp = obj
                  setCtoDo([...CtoDo,temp]);
                }} value={obj.status} type="checkbox" name="" id="" />
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>{
                  setToDos(toDos.filter((obj2)=>obj2.id !== obj.id));
                }} className="fas fa-times"></i>
              </div>
            </div>
          ) 
           }
           return null
        })
      }  
      </div>
    </div>  
    <div className='Head'>
    <h1>Completed</h1>
    </div>
      <div className="todosCompleted">
      {
        
        CtoDo.map((obj)=>{
         return(
           <div className="todo">
              <div className="left">
                <p>{obj.text}</p>
              </div>
              <div className="right">
                <i onClick={()=>{setCtoDo(CtoDo.filter(value => value.id !== obj.id));
                setToDos(toDos.filter(obj3=>obj3.id !== obj.id));console.log(toDos)}
                } className="fas fa-times"></i>
              </div>
            </div>
          ) 
        })
      }  
      </div>
    
  </div>
  );
}

export default App;
