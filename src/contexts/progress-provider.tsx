// Create a Providers component to wrap your application with all the components requiring 'use client', such as next-nprogress-bar or your different contexts...
"use client";

import { AppProgressBar as ProgressBar } from "next-nprogress-bar";
import { PropsWithChildren } from "react";

const Providers = ({ children }: PropsWithChildren) => {
  return (
    <>
      {children}
      <ProgressBar
        height="4px"
        color="#4338ca"
        options={{ showSpinner: false }}
        shallowRouting
      />
    </>
  );
};

export { Providers as ProgressProvider };
