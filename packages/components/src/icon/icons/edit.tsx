import * as React from 'react';

function SvgEdit(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={24} height={24} {...props}>
      <path fill="none" d="M0 0h24v24H0z" />
      <path d="M6.414 16L16.556 5.858l-1.414-1.414L5 14.586V16h1.414zm.829 2H3v-4.243L14.435 2.322a1 1 0 011.414 0l2.829 2.829a1 1 0 010 1.414L7.243 18zM3 20h18v2H3v-2z" />
    </svg>
  );
}

export default SvgEdit;
