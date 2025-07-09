
"use client";
import { useState } from 'react';

function TodoList() {
  const [todos, setTodos] = useState<{ text: string; done: boolean }[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [editIndex, setEditIndex] = useState<number | null>(null);

  const handleAddTodo = () => {
    if (!inputValue.trim()) return;

    if (editIndex !== null) {
      // 編集モードの場合
      const newTodos = [...todos];
      newTodos[editIndex].text = inputValue;
      setTodos(newTodos);
      setEditIndex(null);
    } else {
      // 新規追加の場合
      setTodos([...todos, { text: inputValue, done: false }]);
    }

    setInputValue('');
  };

  const handleDeleteTodo = (index: number) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    // 編集中のものが削除された場合は編集モード解除
    if (editIndex === index) setEditIndex(null);
  };

  const handleEditTodo = (index: number) => {
    setInputValue(todos[index].text);
    setEditIndex(index);
  };

  const handleToggleDone = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].done = !newTodos[index].done;
    setTodos(newTodos);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h2>Todoリスト ({todos.length}件)</h2>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Todoを入力してください"
        style={{ width: '70%', padding: '8px' }}
      />
      <button onClick={handleAddTodo} style={{ padding: '8px', marginLeft: '8px' }}>
        {editIndex !== null ? '更新' : '追加'}
      </button>

      <ul style={{ listStyle: 'none', padding: 0, marginTop: '20px' }}>
        {todos.map((todo, index) => (
          <li
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '8px 0',
              borderBottom: '1px solid #ccc',
              opacity: todo.done ? 0.5 : 1,
              textDecoration: todo.done ? 'line-through' : 'none',
            }}
          >
            <span>{todo.text}</span>
            <div>
              <button onClick={() => handleEditTodo(index)} style={{ marginRight: '8px' }}>編集</button>
              <button onClick={() => handleDeleteTodo(index)} style={{ marginRight: '8px' }}>削除</button>
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => handleToggleDone(index)}
                title="完了/未完了"
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;