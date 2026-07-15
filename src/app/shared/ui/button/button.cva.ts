import { cva, VariantProps } from 'class-variance-authority';

export const button = cva(
  [
    'flex items-center justify-center rounded-lg px-4 py-2 text-base leading-normal font-medium',
    'cursor-pointer',
  ],
  {
    variants: {
      variant: {
        outlined: 'border border-gray-400 text-black hover:bg-gray-100',
        primary: 'bg-blue-500 text-white hover:bg-blue-200',
      },
    },
    defaultVariants: {
      variant: 'primary',
    },
  },
);

export type ButtonVariant = NonNullable<VariantProps<typeof button>['variant']>;
