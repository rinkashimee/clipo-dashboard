import AccountSettings from '@/components/dashboard/settings/accounts/AccountSettings';
import ExportSettings from '@/components/dashboard/settings/export-settings/ExportSettings';
import PreferenceSettings from '@/components/dashboard/settings/Preferences/PreferenceSettings';
import SubscriptionSettings from '@/components/dashboard/settings/subscription/SubscriptionSettings';
import DashboardLayout from '@/layouts/DashboardLayout';
import Analytics from '@/pages/dashboard/Analytics';
import ClipResults from '@/pages/dashboard/ClipResults';
import ExportHistory from '@/pages/dashboard/ExportHistory';
import Overview from '@/pages/dashboard/Overview';
import Projects from '@/pages/dashboard/Projects';
import Settings from '@/pages/dashboard/Setting';
import Templates from '@/pages/dashboard/Templates';
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
        <Route path="/templates" element={<Templates />} />
        <Route path="/export-history" element={<ExportHistory />} />
        <Route path="/settings" element={<Settings />}>
          <Route index element={<Navigate to="account" replace />} />

          <Route path="account" element={<AccountSettings />} />
          <Route path="subscription" element={<SubscriptionSettings />} />
          <Route path="preferences" element={<PreferenceSettings />} />
          <Route path="export" element={<ExportSettings />} />
          <Route path="storage" element={<AccountSettings />} />
          <Route path="notifications" element={<AccountSettings />} />
          <Route path="security" element={<AccountSettings />} />
          <Route path="billing" element={<AccountSettings />} />
        </Route>
      </Route>
    </Routes>
  );
}
