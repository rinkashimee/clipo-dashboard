import DashboardLayout from '@/layouts/DashboardLayout';
import Analytics from '@/pages/dashboard/Analytics';
import ClipResults from '@/pages/dashboard/ClipResults';
import Overview from '@/pages/dashboard/Overview';
import Projects from '@/pages/dashboard/Projects';
import { Navigate, Route, Routes } from 'react-router-dom';

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/overview" replace />} />

      <Route element={<DashboardLayout />}>
        <Route path="/overview" element={<Overview />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/clips-results" element={<ClipResults />} />
        <Route path="/analytics" element={<Analytics />} />
        <Route path="/templates" element={<Overview />} />
        <Route path="/export-history" element={<Overview />} />
        <Route path="/settings" element={<Overview />} />
      </Route>
    </Routes>
  );
}
