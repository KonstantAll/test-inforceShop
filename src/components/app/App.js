import ItemsList from '../ItemsList/ItemsList';
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {lazy, Suspense} from "react";
import Spinner from "../spinner/Spinner";
import './app.scss';

const Page404 = lazy(() => import("../pages/404"));

const App = () => {

    return (
        <Router>
            <main className="app">

                <div className="content">
                    <Suspense fallback ={<Spinner/>}>
                        <Routes>
                            <Route path={'/'}
                                   element={<ItemsList/>}
                            />
                            <Route path={'/items/:id'}
                                   // element={<SinglePage Component = {SingleComic} dataType='comic'/>}
                            />
                            <Route path={'*'}
                                   element={<Page404/>}
                            />
                        </Routes>
                    </Suspense>
                </div>
            </main>
        </Router>
    )


}

export default App;
