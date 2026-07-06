import { Button } from '../ui/Button';
import { colors } from '@/lib/colors/colors';

export default function NotificationButton() {
  return (
    <Button
      icon="BellIcon"
      variant="custom"
      color={colors.neutral700}
      className="relative flex h-11 w-11 items-center justify-center rounded-lg border border-default bg-white cursor-pointer transition-colors hover:bg-neutral-50"
    >
      <span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-[var(--primary-500)]" />
    </Button>
  );
}
