import Header from "./components/Header/Index";
import { TodoProvider } from "./context/TodoContext";
import Content from "./components/Content/Index"


function App() {
  return (
    <>
    <TodoProvider>
 
    <Header/>
    <Content/>
    </TodoProvider>
    </>
  );
}

export default App;
