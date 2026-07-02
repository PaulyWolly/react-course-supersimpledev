function useAutoScroll(dependencies) {
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const container = containerRef.current;

    if (container) {
      container.scrollTop = container.scrollHeight;
    }
  }, dependencies);

  return containerRef;
}
