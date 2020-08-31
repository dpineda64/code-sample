import * as React from 'react';

function SvgDrag(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg width={17} height={10} fill="none" {...props}>
      <circle cx={1.5} cy={1.5} r={1.5} fill="#576370" />
      <circle cx={8.5} cy={1.5} r={1.5} fill="#576370" />
      <circle cx={15.5} cy={1.5} r={1.5} fill="#576370" />
      <circle cx={1.5} cy={8.5} r={1.5} fill="#576370" />
      <circle cx={8.5} cy={8.5} r={1.5} fill="#576370" />
      <circle cx={15.5} cy={8.5} r={1.5} fill="#576370" />
    </svg>
  );
}

export default SvgDrag;
