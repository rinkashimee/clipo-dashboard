import clsx from 'clsx';
import type { TableColumn, TablePaginationTypes } from '@/types/ClipoCommonTypes';
import TablePagination from './TablePagination';

interface TableScroll {
  x?: number | string;
  y?: number | string;
}

interface TableProps<T> {
  rowKey: keyof T | ((record: T) => React.Key);
  columns: TableColumn<T>[];
  data: T[];
  scroll?: TableScroll;
  pagination?: false | TablePaginationTypes;
}

export default function Table<T>(props: TableProps<T>) {
  const { rowKey, columns, data, scroll, pagination } = props;

  const height = scroll?.y ? `h-[${scroll?.y}px]` : `xl:h-[690px] 2xl:h-[720px]`;

  return (
    <div
      className={`border-default shadow-default flex flex-col overflow-hidden rounded-lg bg-white ${height}`}
    >
      <div className="no-scrollbar flex-1 overflow-y-auto">
        <table
          className="w-full border-collapse"
          style={{
            minWidth: scroll?.x,
          }}
        >
          <thead>
            {columns.map((column) => (
              <th
                key={column.key}
                style={{ width: column.width }}
                className={clsx(
                  'table-b-border body-sm sticky top-0 bg-[#F3F3F4] px-4 py-3 text-left text-[var(--neutral-500)] xl:px-8 xl:py-[18px] 2xl:px-8 2xl:py-5',
                  {
                    'text-center': column.align === 'center',
                    'text-right': column.align === 'right',
                  }
                )}
              >
                {column.title}
              </th>
            ))}
          </thead>

          <tbody>
            {data.map((record, rowIndex) => {
              const key = typeof rowKey === 'function' ? rowKey(record) : record[rowKey];

              return (
                <tr key={String(key)} className="table-b-border transition hover:bg-neutral-50">
                  {columns.map((column) => {
                    const value = column.dataIndex ? record[column.dataIndex] : undefined;

                    return (
                      <td
                        key={column.key}
                        className={clsx('px-4 py-2 xl:px-8 xl:py-[14px] 2xl:px-8 2xl:py-4', {
                          'text-center': column.align === 'center',
                          'text-right': column.align === 'right',
                        })}
                      >
                        {column.render
                          ? column.render(value, record, rowIndex)
                          : String(value ?? '')}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {pagination && <TablePagination {...pagination} />}
    </div>
  );
}
