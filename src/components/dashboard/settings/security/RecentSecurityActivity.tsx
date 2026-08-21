import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import { Typography } from '@/components/ui/Typography';
import { RECENT_SECURITY_ACTIVITY } from '@/data/SecuritySettings';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function RecentSecurityActivity() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-5 xl:py-3 2xl:py-5">
      <div className="flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.recent-security.title')}
        </Typography>

        <Button
          variant="custom"
          className="flex cursor-pointer items-center justify-center rounded-md bg-white px-4.5 py-1.5 transition-colors hover:bg-[var(--primary-50)]"
        >
          <Typography as="span" variant="body-sm" color="primary500" cursor="pointer">
            {t('overview.view-all')}
          </Typography>
        </Button>
      </div>

      <div className="mt-1">
        {RECENT_SECURITY_ACTIVITY.map((data) => {
          return (
            <SettingItem
              key={data.id}
              icon={data.icon}
              showIconBackground={true}
              iconColor={
                data.type === 'password'
                  ? colors.info500
                  : data.type === 'backup'
                    ? colors.primary500
                    : colors.success500
              }
              iconBackgroundColor={
                data.type === 'password'
                  ? colors.info50
                  : data.type === 'backup'
                    ? colors.primary50
                    : colors.success50
              }
              className="hover:bg-neutral-50"
              label={t(data.title)}
              caption={t(data.description)}
            >
              <Typography variant="caption" color="neutral400" cursor="default">
                {data.time}
              </Typography>
            </SettingItem>
          );
        })}
      </div>
    </SettingCard>
  );
}
