import { useState } from "react";

export const useTabs = (initialTab, allTabs) => {
  const [currentIndex, setCurrentsIndex] = useState(initialTab);

  if (!allTabs || !Array.isArray(allTabs)) {
    return;
  }
  return {
    currentItem: allTabs[currentIndex],
    changeItem: setCurrentsIndex,
  };
};
