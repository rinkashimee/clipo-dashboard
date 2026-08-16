import { ClipIcons } from '@/components/icons/ClipIcons';
import { colors } from '@/lib/colors/colors';
import type { ColorPickerOption } from '@/types/ClipoCommonTypes';
import clsx from 'clsx';
import { Button } from '../Button';

interface ColorPickerProps {
  options: ColorPickerOption[];
  value?: string;
  onChange?: (value: string) => void;
}

export default function ColorPicker(props: ColorPickerProps) {
  const { options, value, onChange } = props;

  return (
    <div className="flex items-center gap-2">
      {options.map((option) => {
        const selected = option.value === value;

        return (
          <Button
            variant="custom"
            key={option.value}
            type="button"
            aria-label={option.value}
            onClick={() => onChange && onChange(option.value)}
            className={clsx(
              'flex h-5 w-5 cursor-pointer items-center justify-center rounded-full hover:ring-1',
              selected && 'ring-1'
            )}
          >
            <span
              className="flex h-4 w-4 items-center justify-center rounded-full"
              style={{ backgroundColor: option.color }}
            >
              {selected && (
                <ClipIcons icon="CheckIcon" size={12} color={colors.white} className="block" />
              )}
            </span>
          </Button>
        );
      })}
    </div>
  );
}
