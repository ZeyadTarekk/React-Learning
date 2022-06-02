import Backdrop from "./components/Backdrop";
import Modal from "./components/Modal";
import Todo from "./components/Todo";
function App() {
  return (
    <div>
      <h1>My Todos</h1>
      <Todo text="Learn React.js" />
      <Todo text="Learn Next.js" />
      <Todo text="Learn Node.js" />
      <Modal />
      <Backdrop />
    </div>
  );
}

export default App;
