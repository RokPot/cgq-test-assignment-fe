import { cva, VariantProps } from 'class-variance-authority';

export const typography = cva('font-sans', {
  variants: {
    variant: {
      h1: 'text-xl leading-normal',
      'body-1': 'text-base leading-tight',
      'body-2': 'text-sm leading-tight',
      label: 'text-xs leading-tight',
    },
  },
  defaultVariants: {
    variant: 'body-1',
  },
});

export type TypographyVariant = NonNullable<
  VariantProps<typeof typography>['variant']
>;

export type TypographyTag = 'h1' | 'h2' | 'p' | 'span';
