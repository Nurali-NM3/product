import Header from "./Component/Header";
import HomePage from "./Pages/HomePage";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={'/'} element={<HomePage />}/>
          <Route path={'/productPage'} element={<ProductPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
