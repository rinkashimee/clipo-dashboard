import AIPreferences from './AIPreferences';
import Appearance from './Appearance';
import Editing from './Editing';
import General from './General';
import UnitFormat from './UnitFormat';

export default function PreferenceSettings() {
  return (
    <div className="space-y-2">
      <div className="grid grid-cols-2 gap-2">
        <General />
        <Appearance />
      </div>

      <div className="grid grid-cols-2 gap-2">
        <Editing />
        <UnitFormat />
      </div>

      <AIPreferences />
    </div>
  );
}
