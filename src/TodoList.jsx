import  { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeItem, updateItem } from './features/todoSlice';


const TodoList = () => {
  const todoList = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  const [editedText, setEditedText] = useState('');
  const [editItemId, setEditItemId] = useState(null);

  const handleDelete = (id) => {
    const result=window.confirm('Are you want to delete this item');
    if(result){
      dispatch(removeItem(id));
    }
    else{
      return;
    }
   
  };

  const handleEdit = (id) => {
    setEditItemId(id);
    const todoToEdit = todoList.find((todo) => todo.id === id);
    setEditedText(todoToEdit.text);
  };

  const handleSave = () => {
    if (editedText) {
      dispatch(updateItem({ id: editItemId, text: editedText }));
      setEditItemId(null);
      setEditedText('');
    }
  };

  return (
    <div className="todo-page">
      {todoList.map((todo) => (
        <div key={todo.id} className="todo-item">
          {editItemId === todo.id ? (
            <>
              <input
                type="text"
                value={editedText}
                onChange={(e) => setEditedText(e.target.value)}
                placeholder="Edit Todo"
                className="edit-input"
              />
              <button className="save-button" onClick={handleSave}>
                Save
              </button>
            </>
          ) : (
            <>
              <span>{todo.text}</span>
              <button className="edit-button" onClick={() => handleEdit(todo.id)}>
                Edit
              </button>
            </>
          )}
          <button className="delete-button" onClick={() => handleDelete(todo.id)}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default TodoList;
