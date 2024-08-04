import React, { useRef, useEffect } from 'react';

import './styles.scss';

interface Column {
  key: string;
  label: string;
}

interface Content {
  [key: string]: any;
}

interface DashboardTableProps {
  columns: Column[];
  content: Content[];
  ariaLabel: string;
  error: string;
}

export const DashboardTable: React.FC<DashboardTableProps> = ({ columns, content, ariaLabel, error }) => {

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const customScrollbarRef = useRef<HTMLDivElement>(null);
  const thumbRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollContainerRef.current && customScrollbarRef.current && thumbRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
        const thumbWidth = (clientWidth / scrollWidth) * clientWidth;
        const thumbLeft = (scrollLeft / scrollWidth) * clientWidth;

        thumbRef.current.style.width = `${thumbWidth}px`;
        thumbRef.current.style.transform = `translateX(${thumbLeft}px)`;
      }
    };

    const scrollContainer = scrollContainerRef.current;

    if (scrollContainer) {
      scrollContainer.addEventListener('scroll', handleScroll);
      handleScroll(); // Инициализация ползунка

      return () => {
        scrollContainer.removeEventListener('scroll', handleScroll);
      };
    }
  }, []);

  const handleCustomScroll = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scrollContainerRef.current && customScrollbarRef.current) {
      const { clientWidth, scrollWidth } = scrollContainerRef.current;
      const newScrollLeft = (e.nativeEvent.offsetX / clientWidth) * scrollWidth;
      scrollContainerRef.current.scrollLeft = newScrollLeft;
    }
  };

  return (
    <>
      <div className="table-wrapper" ref={scrollContainerRef}>
        <table className="dashboard-table" aria-label={ariaLabel}>
          <thead>
            <tr>
              {columns.map(column => (
                <th key={column.key} scope="col">
                  <div className="column-title">
                    {column.label}
                  </div>
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {content.length > 0 ? (
              content.map((item, index) => (
                <tr key={index}>
                  {columns.map(column => (
                    <td key={column.key}>{item[column.key]}</td>
                  ))}
                </tr>
              ))
            ) : (
              <tr>
                <td className="not-found" colSpan={columns.length}>{error}</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <div className="scrollbar-track" onClick={handleCustomScroll} ref={customScrollbarRef}>
        <div className="scrollbar-thumb" ref={thumbRef}></div>
      </div>
    </>
  );
};
