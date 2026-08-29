import { colors } from '@/lib/colors/colors';
import { ClipIcons } from '../icons/ClipIcons';
import { Typography } from './Typography';
import { useTranslation } from 'react-i18next';
import { MIN_SCREEN_WIDTH } from '@/hooks/UseScreenSize';
import { useEffect, useState } from 'react';

export default function UnsupportedScreen() {
  const { t } = useTranslation();

  const [currentWidth, setCurrentWidth] = useState<number>(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setCurrentWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <main className="bg-neutral50 flex min-h-screen w-full items-center justify-center px-6">
      <div className="flex w-full max-w-[900px] flex-col items-center text-center">
        <img
          src="/unsupported-illustration.svg"
          alt="Screen size not supported"
          className="h-auto w-[200px] md:w-[250px] lg:w-[280px]"
        />

        <Typography
          variant="h1"
          color="neutral900"
          className="mt-8 !text-[1.563rem] !leading-[1.3] md:!text-[1.95rem] md:!leading-[1.2] lg:!text-[2.444rem] lg:!leading-[1.2]"
        >
          {t('common.unsupported.title')}
        </Typography>

        <Typography
          variant="body-md"
          color="neutral400"
          className="mt-3 max-w-[650px] !text-[0.8rem] !leading-[1.5] md:!text-[1rem] md:!leading-[1.5] lg:!text-[1rem] lg:!leading-[1.5]"
        >
          {t('common.unsupported.desc')}
        </Typography>

        <div className="mt-8">
          <div className="flex items-center justify-between gap-5 rounded-lg bg-[var(--primary-50)]/40 px-10 py-3">
            <ClipIcons
              icon="MonitorIcon"
              color={colors.primary500}
              className="h-8 w-8 md:h-12 md:w-12 lg:h-13 lg:w-13"
            />

            <div className="divider vertical" />

            <div className="space-y-1 text-left">
              <Typography
                variant="body-md"
                color="primary500"
                cursor="default"
                className="!text-[0.8rem] !leading-[1.5] font-bold md:!text-[1rem] md:!leading-[1.5] lg:!text-[1rem] lg:!leading-[1.5]"
              >
                {t('common.unsupported.width-req', { width: MIN_SCREEN_WIDTH })}
              </Typography>

              <Typography
                variant="body-md"
                color="neutral400"
                cursor="default"
                className="!text-[0.8rem] !leading-[1.5] md:!text-[1rem] md:!leading-[1.5] lg:!text-[1rem] lg:!leading-[1.5]"
              >
                {t('common.unsupported.current-width', { width: currentWidth })}
              </Typography>
            </div>
          </div>
        </div>

        <div className="mt-7 flex items-center gap-2">
          <ClipIcons
            size={18}
            icon="QuestionIcon"
            color={colors.primary500}
            className="cursor-pointer"
          />

          <Typography variant="body-sm" color="neutral400" cursor="default">
            {t('common.unsupported.need-help')}
          </Typography>

          <div className="flex cursor-pointer items-center gap-1">
            <Typography
              as="span"
              variant="body-sm"
              color="primary500"
              cursor="pointer"
              className="font-bold underline"
            >
              {t('common.unsupported.contact-supp')}
            </Typography>

            <ClipIcons
              size={18}
              icon="ArrowUpRightIcon"
              color={colors.primary500}
              className="cursor-pointer"
            />
          </div>
        </div>
      </div>
    </main>
  );
}
