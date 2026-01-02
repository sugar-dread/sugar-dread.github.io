import { useEffect, useRef } from 'react';

const TypedText = ({ strings }) => {
  const typedRef = useRef(null);
  const typedInstance = useRef(null);

  useEffect(() => {
    // Check if Typed is available from CDN
    if (window.Typed && typedRef.current) {
      typedInstance.current = new window.Typed(typedRef.current, {
        strings: strings,
        loop: true,
        typeSpeed: 80,
        backSpeed: 40
      });
    }

    return () => {
      // Cleanup on unmount
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [strings]);

  return (
    <span 
      ref={typedRef} 
      className="typing" 
      style={{ fontWeight: 300, color: '#004d40' }}
    />
  );
};

export default TypedText;
