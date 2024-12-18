import "./index.css";
import Header from "../src/components/Header";
import Content from "./components/Content";
import Footer from "../src/components/Footer";
import { TodoProvider } from "./contexts/TodoContext";

function App() {
  return (
    <TodoProvider>
      <section className="todoapp">
        <Header />
        <Content />
      </section>
      <Footer />
    </TodoProvider>
    
  );
}

export default App;
