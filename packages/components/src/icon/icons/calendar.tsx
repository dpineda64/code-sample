import * as React from 'react';

function SvgCalendar(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M17 3h4a1 1 0 011 1v16a1 1 0 01-1 1H3a1 1 0 01-1-1V4a1 1 0 011-1h4V1h2v2h6V1h2v2zm-2 2H9v2H7V5H4v4h16V5h-3v2h-2V5zm5 6H4v8h16v-8z" />
    </svg>
  );
}

export default SvgCalendar;
