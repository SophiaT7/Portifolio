import { useTheme } from '~/components/theme-provider';
import { Transition } from '~/components/transition';
import { useEffect, useRef, useState } from 'react';
import styles from './displacement-sphere.module.css';

export const DisplacementSphere = props => {
  const { theme } = useTheme();
  const containerRef = useRef();
  const vantaEffect = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (!containerRef.current) return;
    if (typeof window === 'undefined') return;

    let isMounted = true;

    const initVanta = async () => {
      try {
        const THREE = await import('three');
        const CELLS = (await import('vanta/dist/vanta.cells.min')).default;

        if (!isMounted || !containerRef.current) return;

        if (vantaEffect.current) {
          vantaEffect.current.destroy();
        }

        vantaEffect.current = CELLS({
          el: containerRef.current,
          THREE: THREE,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.0,
          minWidth: 200.0,
          scale: 1.0,
          color1: theme === 'dark' ? 0x098ad4 : 0xb9e5ff,
          color2: theme === 'dark' ? 0x35e6f2 : 0xb9e5ff,
          size: 3.0,
          speed: 1.4,
        });

        setIsLoaded(true);
      } catch (error) {
        console.error('Vanta init error:', error);
      }
    };

    initVanta();

    return () => {
      isMounted = false;
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
        vantaEffect.current = null;
      }
    };
  }, [theme]);

  return (
    <Transition in timeout={3000} nodeRef={containerRef}>
      {({ visible, nodeRef }) => (
        <div
          aria-hidden
          className={styles.canvas}
          data-visible={visible}
          ref={nodeRef}
          {...props}
        />
      )}
    </Transition>
  );
};
