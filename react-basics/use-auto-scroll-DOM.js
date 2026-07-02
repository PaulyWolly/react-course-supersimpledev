function useAutoScrollDOM(selector, dependencies) {
    React.useEffect(() => {
      const container = document.querySelector(selector);
      if (container) {
        container.scrollTop = container.scrollHeight;
      }
    }, dependencies);
}
