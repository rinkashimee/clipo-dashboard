import { colors } from '@/lib/colors/colors';
import { ClipIcons } from '../icons/ClipIcons';
import MarcusLee from '@/assets/images/marcus.webp';
import { Typography } from '../ui/Typography';
import { useTranslation } from 'react-i18next';

export default function UserProfile() {
  const { t } = useTranslation();

  return (
    <div className="flex items-center justify-between rounded-xl px-3 py-2 transition-colors hover:bg-neutral-900/40">
      <div className="flex items-center gap-3">
        <div className="relative">
          <div className="h-10 w-10 rounded-full ">
            <img
              src={MarcusLee}
              alt={t('sidebar.username')}
              className="rounded-full object-cover"
            />
          </div>
        </div>

        <div className="leading-tight">
          <Typography variant="body-sm" color="neutral50" cursor="default">
            {t('sidebar.username')}
          </Typography>

          <Typography variant="caption" color="neutral300" cursor="default">
            {t('sidebar.email')}
          </Typography>
        </div>
      </div>

      <ClipIcons icon="CaretDownIcon" size={18} color={colors.neutral50} />
    </div>
  );
}
