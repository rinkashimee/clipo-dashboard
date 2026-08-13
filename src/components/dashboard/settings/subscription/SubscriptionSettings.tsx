import BillingHistory from './BillingHistory';
import CurrentPlan from './CurrentPlan';
import IncludedFeatures from './IncludedFeatures';
import PaymentMethod from './PaymentMethod';
import Usage from './Usage';

export default function SubscriptionSettings() {
  return (
    <div className="space-y-2">
      <CurrentPlan />

      <div className="grid grid-cols-2 gap-2">
        <Usage />
        <BillingHistory />
      </div>

      <div className="grid grid-cols-[1fr_320px] gap-2">
        <IncludedFeatures />
        <PaymentMethod />
      </div>
    </div>
  );
}
