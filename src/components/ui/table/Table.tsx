import clsx from 'clsx';
import type { TableColumn, TablePaginationTypes } from '@/types/ClipoCommonTypes';
import TablePagination from './TablePagination';

interface TableProps<T> {
  rowKey: keyof T | ((record: T) => React.Key);
  columns: TableColumn<T>[];
  data: T[];
  pagination?: false | TablePaginationTypes;
  tableWrapperClassName?: string;
  tableHeaderClassName?: string;
  tableColumnClassName?: string;
}

export default function Table<T>(props: TableProps<T>) {
  const {
    rowKey,
    columns,
    data,
    pagination,
    tableWrapperClassName,
    tableHeaderClassName,
    tableColumnClassName,
  } = props;

  return (
    <div
      className={clsx(
        'border-default shadow-default flex flex-col overflow-hidden rounded-lg bg-white',
        tableWrapperClassName
      )}
    >
      <div className="hide-y-scrollbar flex-1 overflow-auto">
        <table
          className="border-collapse"
          style={{
            width: 'max-content',
            minWidth: '100%',
          }}
        >
          <thead>
            <tr>
              {columns.map((column) => (
                <th
                  key={column.key}
                  style={{ width: column.width }}
                  className={clsx(
                    'table-b-border body-sm sticky top-0 z-10 bg-[#F3F3F4] px-4 py-3 text-left text-[var(--neutral-500)]',
                    !tableHeaderClassName && 'xl:px-8 xl:py-[18px] 2xl:px-8 2xl:py-5',
                    tableHeaderClassName,
                    {
                      'text-center': column.align === 'center',
                      'text-right': column.align === 'right',
                    }
                  )}
                >
                  {column.title}
                </th>
              ))}
            </tr>
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
                        className={clsx(
                          'px-4 py-2',
                          !tableColumnClassName && 'xl:px-8 xl:py-[14px] 2xl:px-8 2xl:py-4',
                          tableColumnClassName,
                          {
                            'text-center': column.align === 'center',
                            'text-right': column.align === 'right',
                          }
                        )}
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
