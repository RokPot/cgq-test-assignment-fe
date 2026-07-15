import { cva, VariantProps } from 'class-variance-authority';

export const input = cva(
  ['rounded-lg text-sm placeholder:text-gray-400', 'px-4 py-2'],
  {
    variants: {
      variant: {
        primary: 'bg-blue-200',
        outlined: 'border border-gray-300 bg-white',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export type InputVariant = NonNullable<VariantProps<typeof input>['variant']>;
