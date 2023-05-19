import React, { MouseEvent, useCallback, useState } from "react";

const useModal = () => {
  const [isOpened, setIsOpened] = useState(false);
  const open = useCallback(() => setIsOpened(true), [isOpened]);
  const close = useCallback(
    (e: MouseEvent) => {
      e.stopPropagation();
      setIsOpened(false);
    },
    [isOpened]
  );

  return { isOpened, open, close };
};

export default useModal;
