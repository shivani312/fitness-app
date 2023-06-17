import { Navigate, Route, Routes } from "react-router-dom";

import "./assets/styles/app.scss";
import Layout from "./hoc/layout";
import Dashboard from "./features/dashboard/container/dashboard";
import Activity from "./features/activity/container/activity";

const App = () => {
    return (
        <Layout>
        <Routes>
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/activity" element={<Activity/>} />
            <Route path='*' element={<Navigate replace to='/dashboard' />} />
        </Routes>
        </Layout>
    );
};

export default App;
