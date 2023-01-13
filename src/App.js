import Index from "./components/Header/Index";
import { TodoProvider } from "./context/TodoContext";



function App() {
  return (
    <>
    <TodoProvider>
 
    <Index/>
    </TodoProvider>
    </>
  );
}

export default App;
