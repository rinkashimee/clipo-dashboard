import PaymentMethod from '../subscription/PaymentMethod';
import BillingFrequency from './BillingFrequency';
import BillingHistory from './BillingHistory';
import CurrentPlan from './CurrentPlan';
import InvoiceActions from './IncoiceActions';
import Usage from './Usage';

export default function BillingSettings() {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_365px] gap-2">
      <div className="space-y-2">
        <CurrentPlan />
        <Usage />
        <BillingFrequency />
      </div>

      <div className="space-y-2">
        <PaymentMethod />
        <BillingHistory />
        <InvoiceActions />
      </div>
    </div>
  );
}
