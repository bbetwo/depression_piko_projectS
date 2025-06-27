import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Home } from "./pages/Home";
import { DndContext } from "@dnd-kit/core";

const routes = createBrowserRouter([
  {
    path: "/h",
    element: <Home />,
  },
]);

function App() {
  return (
    <DndContext>
      <div>
        <RouterProvider router={routes} />
      </div>
    </DndContext>
  );
}

export default App;
