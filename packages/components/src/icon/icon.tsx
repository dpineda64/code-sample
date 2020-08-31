import React, { useState, useRef, useEffect } from 'react';
import { icons } from './icons';
export type IconName = typeof icons[number];

interface IconProps extends React.SVGProps<any> {
  name: IconName;
  className?: string;
}

const Icon: React.FC<IconProps> = ({
  name,
  className,
  ...props
}: IconProps) => {
  const [loading, setLoading] = useState(true);
  const Svg = useRef<React.FC<React.SVGProps<SVGAElement>>>();
  useEffect(() => {
    const loadIcon = async (): Promise<void> => {
      try {
        const icon = await import(`./icons/${name}.tsx`);
        if (!icon.default.jest) {
          Svg.current = icon.default;
        }
      } catch (e) {
        // console.log(e);
      } finally {
        setLoading(false);
      }
    };
    loadIcon();
  }, [name]);

  if (!loading && Svg.current) {
    return <Svg.current className={className} {...props} />;
  }

  return null;
};

Icon.defaultProps = {
  className: 'fill-current',
};

export { Icon };
