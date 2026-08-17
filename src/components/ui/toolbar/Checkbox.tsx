import clsx from 'clsx';
import { Button } from '../Button';
import { ClipIcons } from '@/components/icons/ClipIcons';
import { colors } from '@/lib/colors/colors';

interface CheckboxProps {
  checked?: boolean;
  onChange: (checked: boolean) => void;
  disabled?: boolean;
}

export default function CheckBox(props: CheckboxProps) {
  const { checked, onChange, disabled = false } = props;

  return (
    <Button
      role="checkbox"
      type="button"
      variant="custom"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => onChange(!checked)}
      className={clsx(
        'flex h-4 w-4 items-center justify-center rounded border transition-colors hover:ring-1',
        checked
          ? 'cursor-pointer border-[var(--primary-500)] bg-[var(--primary-500)]'
          : 'cursor-pointer border-[var(--neutral-500)] bg-white',
        !disabled && 'cursor-default hover:border-[var(--primary-500)]'
      )}
    >
      {checked && (
        <ClipIcons
          icon="CheckIcon"
          size={12}
          color={colors.white}
          className="block leading-none"
          weight="bold"
        />
      )}
    </Button>
  );
}
