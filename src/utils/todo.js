import { db } from '../firebase'
import { collection, getDocs, addDoc, doc, setDoc, deleteDoc } from 'firebase/firestore/lite';

const getToDoList = async(setToDoList) => {
    const todolistCol = collection(db, 'todolist');
    const todolistSnapshot = await getDocs(todolistCol);
    const todoList = todolistSnapshot.docs.map(doc => ({...doc.data(), id:doc.id}));
    setToDoList(todoList);
}

const onCreateToDo = async(text, setCreateValue, setToDoList)=> {
    const collectionRef = collection(db, "todolist");
    const payload = {
      text: text,
      completed: false
    };
    addDoc(collectionRef, payload);
    getToDoList(setToDoList);
    setCreateValue('');
}

const onCompletedToDo = ({id, text, completed, setToDoList}) => {
    const docRef = doc(db, "todolist", id);
    const payload = {
      text: text,
      completed: !completed
    };
    setDoc(docRef, payload);
    getToDoList(setToDoList);
}

const onDeleteToDo = ({id, setToDoList}) => {
    const docRef = doc(db, "todolist", id);
    deleteDoc(docRef);
    getToDoList(setToDoList)
}

export { getToDoList, onCreateToDo, onCompletedToDo, onDeleteToDo }