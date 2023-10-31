import  { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './features/todoSlice';
const TodoForm = () => {
  const [item, setItem] = useState('');
  const dispatch=useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(item){
      dispatch(addItem(item));
      setItem('');
    }
    else{
      alert('Please write the name of item')
    }
   
    
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Enter your todo..."
        value={item}
        onChange={(e) => setItem(e.target.value)}
        className="todo-input"
      />
      <button type="submit" className="add-button">
        Add Item
      </button>
    </form>
  );
};

export default TodoForm;
