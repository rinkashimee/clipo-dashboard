import type { TemplatesDataTypes } from '@/types/TemplateTypes';
import { Typography } from '../Typography';
import { Button } from '../Button';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';
import Tooltip from '../Tooltip';

interface TemplateCardsProps {
  template: TemplatesDataTypes;
}

export default function TemplateCards({ template }: TemplateCardsProps) {
  const { t } = useTranslation();

  return (
    <div className="border-default shadow-default flex h-full flex-col overflow-hidden rounded-2xl bg-white">
      <div className="relative overflow-hidden">
        <img
          src={template.thumbnail}
          alt={template.title}
          className="aspect-video h-51 w-full object-cover 2xl:h-57"
        />
      </div>

      <div className="flex items-center justify-between p-3">
        <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
          {template.title}
        </Typography>

        <Tooltip title={t('common.more')}>
          <Button
            size={18}
            variant="custom"
            color={colors.neutral500}
            icon="DotsThreeVerticalIcon"
            className="border-default flex h-8 w-8 cursor-pointer items-center justify-center rounded-md border bg-white transition-colors hover:bg-neutral-50"
          ></Button>
        </Tooltip>
      </div>

      <div className="card-t-border flex items-center justify-between border-t p-3">
        <Typography as="span" variant="body-sm" color="neutral900" cursor="default">
          {template.ratio}
        </Typography>

        <Button variant="secondary" className="caption flex h-8 w-8 rounded-md">
          {t('common.use')}
        </Button>
      </div>
    </div>
  );
}
