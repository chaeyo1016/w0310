
import TodoApp from "./components/TodoHeader";
import TodoApp from "./components/TodoApp";

function App() {
  const [tasks, setTasks] = useState([]);
  const [input, setInput] = useState('');

  const addTask = () => {
    //input태그에 입력한 문자열의 양끝 공백을 제거한 결과가''와 같으면 return
    if (input.trim() === '') return;
    setTasks([...tasks, input.trim()]);
    //TodoApp컴포넌트의 li에 task가 모두 출력되면 입력상자의 텍스트를 비운다
    setInput('');
  };

  //키보드 Enter키로 입력하기
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTask();
    }
  };

  return (
    <div className="todo-container container">
      <TodoHeader/>
      <div className="row  g-2 mb-4">
      <div className="col-sm-9 col-12">

    <input type="text" placeholder="할 일을 입력하세요" className="form-control equal-height"
    onChange={(e) => setInput(e.target.value)}
    value={input}
    onKeyDown={handleKeyDown}
   />
      </div>   
    <div className="col-sm-3 col-12 ">
      <button className=" equal-height equal-width">추가</button>
          <button className=" equal-height equal-width"
            onClick={addTask}
          >추가 </button>
       </div>
      </div>
      <TodoApp/>
    </div>
  );
}

export default App;
