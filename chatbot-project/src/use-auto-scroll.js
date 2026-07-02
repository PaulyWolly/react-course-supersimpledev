import { useRef, useCallback } from 'react';

function useAutoScroll() {
  const containerRef = useRef(null);

  const scrollToBottom = useCallback(() => {
    const container = containerRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, []);

  return { containerRef, scrollToBottom };
}

export default useAutoScroll;