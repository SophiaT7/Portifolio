import { forwardRef } from 'react';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  return (
    <img
      src="/favicon.svg"
      alt="Logo"
      className={classes(styles.monogram, className)}
      width="56"
      height="56"
      ref={ref}
      {...props}
    />
  );
});
