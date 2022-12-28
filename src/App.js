import "./App.css";
import ContextProvider from "./components/common/context/context";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MogPost from "./pages/mogPost";
import MogMain from "./pages/mogMain";
import MogPublish from "./pages/mogPublish";

function App() {
    return (
        <>
            <ContextProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/main" element={<MogMain />} />
                        <Route path="/post" element={<MogPost />} />
                        <Route path="/publish" element={<MogPublish />} />
                    </Routes>
                </BrowserRouter>
            </ContextProvider>
        </>
    );
}

export default App;
