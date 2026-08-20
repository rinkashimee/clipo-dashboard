import { Button } from '@/components/ui/Button';
import SettingCard from '@/components/ui/SettingCard';
import SettingItem from '@/components/ui/SettingItem';
import { Typography } from '@/components/ui/Typography';
import { RECENT_NOTIFICATIONS } from '@/data/NotificationSettings';
import { colors } from '@/lib/colors/colors';
import { useTranslation } from 'react-i18next';

export default function RecentNotifications() {
  const { t } = useTranslation();

  return (
    <SettingCard className="px-6 xl:py-4 2xl:py-6">
      <div className="flex items-center justify-between">
        <Typography as="span" variant="body-md" color="neutral900" cursor="default">
          {t('settings.recent-notif.title')}
        </Typography>

        <Button
          variant="custom"
          className="flex cursor-pointer items-center justify-center rounded-lg bg-white px-4.5 py-1.5 transition-colors hover:bg-[var(--primary-50)]"
        >
          <Typography as="span" variant="body-sm" color="primary500" cursor="pointer">
            {t('overview.view-all')}
          </Typography>
        </Button>
      </div>

      <div className="mt-1">
        {RECENT_NOTIFICATIONS.map((data) => {
          return (
            <SettingItem
              key={data.id}
              icon={data.icon}
              showIconBackground={true}
              iconColor={
                data.type === 'invoice'
                  ? colors.warning500
                  : data.type === 'export'
                    ? colors.success500
                    : colors.primary500
              }
              iconBackgroundColor={
                data.type === 'invoice'
                  ? colors.warning50
                  : data.type === 'export'
                    ? colors.success50
                    : colors.primary50
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
