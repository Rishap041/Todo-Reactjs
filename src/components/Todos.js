import React from 'react'
import { useState, useEffect } from 'react'
import { db } from '../firebase'
import { useHistory } from 'react-router-dom'



export default function Todos({ user }) {
    const [text, setText] = useState("")
    const [mytodos, setTodos] = useState([])
    const history = useHistory()

    useEffect(() => {
        if (user) {
            const docRef = db.collection('todo').doc(user.uid)
          // var unsubscribe = 
            docRef.onSnapshot(docSnap => {
                if (docSnap.exists) {
                    console.log(docSnap.data().todos)
                    setTodos(docSnap.data().todos)
                }
                else
                    console.log("no data")
            })
        } else {
            history.push('/login')

        }
        // return () => {
        //     unsubscribe()
        // }


    },[])
    const addTodo = () => {
        db.collection('todo').doc(user.uid).set({
            todos: [...mytodos, text]
            
        })
        setText('')
    }
    const deleteTodo =(del)=>{
        const docRef = db.collection('todo').doc(user.uid)
        docRef.get().then(docSnap=>{
           const result = docSnap.data().todos.filter(todo=> todo!=del)
          docRef.update({
              todos:result
          })
        })
    }
    return (
        <div className="container center " style={{ maxWidth: "400px" }}>
            <h4 >Add ToDos</h4>
            <input placeholder="Add todos" value={text} type="text"
                onChange={(e) => setText(e.target.value)} />
            <button className="btn green" onClick={() => addTodo()}>Add</button><br/><br/>

            <ul className="collection " style={{ maxWidth: "400px" }}>
                {mytodos.map(todo=>{
                    return <li className="collection-item green white-text" key={todo}>
                        {todo}
                    <i className="material-icons right " onClick={()=>deleteTodo(todo)}>delete</i>
                    </li>
                })}
                
            </ul>

        </div>
    )
}
