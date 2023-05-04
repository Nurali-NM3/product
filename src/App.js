import Header from "./Component/Header";
import HomePage from "./Pages/HomePage";
import {BrowserRouter,Routes,Route} from "react-router-dom";
import ProductPage from "./Pages/ProductPage";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {getProduct} from "./redux/action/productAction";
import ProductContainPage from "./Pages/ProductContainPage";
function App() {
    const dispatch = useDispatch()
    const products= useSelector(state => state.product)
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
            <Route path={'/'} element={<HomePage products={products} />}/>
            <Route path={'/productContainPage'} element={<ProductContainPage products={products} />}/>
          <Route path={'/productPage'} element={<ProductPage products={products} />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
