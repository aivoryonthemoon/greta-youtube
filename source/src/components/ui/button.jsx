// Adapted from shadcn/ui's Button (MIT). Styles use the existing Link.me palette.
import React from 'react';
import { Slot } from '@radix-ui/react-slot';
import { cva } from 'class-variance-authority';
export const buttonVariants = cva('ui-button', { variants: { variant: { default: 'primary', quiet: 'channel' } }, defaultVariants: { variant: 'default' } });
export const Button = React.forwardRef(({ asChild = false, variant, className = '', ...props }, ref) => {
 const Comp = asChild ? Slot : 'button';
 return <Comp ref={ref} className={`${buttonVariants({variant})} ${className}`} {...props}/>;
});
Button.displayName = 'Button';
