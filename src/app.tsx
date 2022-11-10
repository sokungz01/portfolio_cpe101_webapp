import { Homepage } from './Pages/Homepage';
import { ActivitiesPage } from './Pages/ActivitiesPage';
import { CompetitionsPage } from './Pages/CompetitionsPage';
import { InformationPages } from './Pages/InformationPage';
import { WorksPage } from './Pages/WorksPage';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
export function App() {
  return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Homepage/>} />
      <Route path="/information" element={<InformationPages />} />
      <Route path="/competitions" element={<CompetitionsPage />} />
      <Route path="/activities" element={<ActivitiesPage />} />
      <Route path="/works" element={<WorksPage />} />
      <Route path="*" element={<Navigate to="/" />} />        
    </Routes>
  </BrowserRouter>
    
  );
}
