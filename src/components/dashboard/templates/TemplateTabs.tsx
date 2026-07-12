import Tabs from '@/components/ui/tabs/Tabs';
import { useState } from 'react';
import TemplateGrid from './TemplateGrid';
import { templatesData } from '@/hooks/template/TemplateData';
import Library from './Library';
import { useTranslation } from 'react-i18next';

export default function TemplateTabs() {
  const { t } = useTranslation();

  const [tab, setTab] = useState<string>('my-templates');
  const [search, setSearch] = useState<string>('');
  const [sort, setSort] = useState<string>('recent');
  const [platforms, setPlatforms] = useState<string>('all');

  const data = templatesData();

  const items = [
    {
      key: 'my-templates',
      label: t('common.my-templates'),
      children: (
        <TemplateGrid
          sort={sort}
          search={search}
          templateData={data}
          platforms={platforms}
          setSort={setSort}
          setSearch={setSearch}
          setPlatforms={setPlatforms}
        />
      ),
    },
    {
      key: 'library',
      label: t('common.library'),
      children: <Library />,
    },
  ];

  return (
    <div className="border-default shadow-default mt-1 rounded-lg border bg-white p-3 xl:mt-1 2xl:mt-2">
      <Tabs items={items} activeKey={tab} onChange={setTab} />
    </div>
  );
}
