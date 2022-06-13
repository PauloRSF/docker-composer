import { createContext, FC, PropsWithChildren, ReactNode, useState } from 'react';

type DialogContextData = {
  Component: ReactNode | null;
  closeDialog: () => void;
  openDialog: (component: ReactNode) => void;
};

export const DialogContext = createContext<DialogContextData>({
  Component: null,
  closeDialog: () => ({}),
  openDialog: () => ({}),
});

export const DialogContextProvider: FC<PropsWithChildren<unknown>> = ({ children }) => {
  const [component, setComponent] = useState<ReactNode | null>(null);

  const closeDialog = () => setComponent(null);

  const openDialog = (component: ReactNode) => setComponent(component);

  return (
    <DialogContext.Provider
      value={{
        Component: component,
        closeDialog,
        openDialog,
      }}
    >
      {children}
    </DialogContext.Provider>
  );
};
