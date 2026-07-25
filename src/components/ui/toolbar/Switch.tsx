import clsx from 'clsx';
import { Button } from '../Button';

interface SwitchProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
  className?: string;
}

export default function Switch(props: SwitchProps) {
  const { checked = false, disabled = false, onChange, className } = props;

  return (
    <Button
      type="button"
      role="switch"
      variant="custom"
      aria-checked={checked}
      disabled={disabled}
      onClick={() => !disabled && onChange?.(!checked)}
      className={clsx(
        'relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full transition-colors duration-200',
        checked ? 'bg-[var(--primary-500)]' : 'bg-[var(--neutral-100)]',
        disabled && 'cursor-not-allowed opacity-50',
        className
      )}
    >
      <span
        className={clsx(
          'absolute top-0.5 left-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform duration-200',
          checked && 'translate-x-5'
        )}
      />
    </Button>
  );
}
