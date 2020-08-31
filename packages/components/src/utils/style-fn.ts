import tw from 'twin.macro';
import { BaseVariants } from '@vg-kit/utils';

export const applyVariant = (variant: BaseVariants): any => {
  switch (variant) {
    case 'secondary':
      return {
        ...tw`bg-accent text-txt-base`,
        fontWeight: 500,
      };

    case 'clean':
      return {
        ...tw`bg-transparent text-txt-base`,
        '&:hover': {
          ...tw`bg-gray-200`,
        },
      };
    default:
      return {
        ...tw`bg-primary`,
        '&:hover': {
          ...tw`bg-blue-500`,
        },
      };
  }
};
