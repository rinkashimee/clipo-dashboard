import { colors } from '@/lib/colors/colors';
import type { TabItemTypes } from '@/types/ClipoCommonTypes';
import clsx from 'clsx';
import { Button } from '../Button';

interface TabsProps {
  items: TabItemTypes[];
  activeKey: string;
  onChange?: (key: string) => void;
  tabBarExtraContent?: React.ReactNode;
}

export default function Tabs(props: TabsProps) {
  const { items, activeKey, onChange, tabBarExtraContent } = props;

  const activeTab = items.find((item) => item.key === activeKey);

  return (
    <div className="space-y-2">
      <div className="tab-header-b-border flex items-center justify-between">
        <div className="flex items-center gap-1">
          {items.map((item) => (
            <Button
              key={item.key}
              variant="custom"
              disabled={item.disabled}
              onClick={() => onChange?.(item.key)}
              className={clsx(
                `body-sm cursor-pointer rounded-t-md px-4 py-3 text-[var(--neutral-500)] transition-colors`,
                activeKey === item.key
                  ? `border-b border-[var(--primary-500)] bg-[var(--primary-100)] text-[var(--primary-500)]`
                  : 'hover:bg-neutral-100',
                item.disabled && 'cursor-not-allowed opacity-50'
              )}
            >
              {item.label}
            </Button>
          ))}
        </div>

        {tabBarExtraContent && <div className="mb-1">{tabBarExtraContent}</div>}
      </div>

      <div>{activeTab?.children}</div>
    </div>
  );
}
