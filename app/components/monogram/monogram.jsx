import { forwardRef } from 'react';
import { useTheme } from '~/components/theme-provider';
import { classes } from '~/utils/style';
import styles from './monogram.module.css';

export const Monogram = forwardRef(({ highlight, className, ...props }, ref) => {
  const { theme } = useTheme();
  const logoSrc = theme === 'dark' ? '/logo-white.png' : '/logo-black.png';

  return (
    <img
      src={logoSrc}
      alt="Logo"
      className={classes(styles.monogram, className)}
      width="72"
      height="72"
      ref={ref}
      {...props}
    />
  );
});
