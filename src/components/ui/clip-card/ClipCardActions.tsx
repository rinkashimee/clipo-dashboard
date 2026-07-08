import { colors } from '@/lib/colors/colors';
import { Button } from '../Button';

export default function ClipCardActions() {
  return (
    <div className="flex justify-start gap-4">
      <Button
        size={18}
        variant="custom"
        color={colors.neutral500}
        icon="PencilSimpleIcon"
        className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
      ></Button>

      <Button
        size={18}
        variant="custom"
        color={colors.neutral500}
        icon="DownloadSimpleIcon"
        className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
      ></Button>

      <Button
        size={18}
        variant="custom"
        color={colors.neutral500}
        icon="DotsThreeVerticalIcon"
        className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
      ></Button>
    </div>
  );
}
