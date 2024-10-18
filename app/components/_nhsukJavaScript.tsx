"use client";

import { useEffect } from "react";
import Tabs from "nhsuk-frontend/packages/components/tabs/tabs";

export default function NHSUKJavaScript() {
  useEffect(() => {
    document.body.classList.add("js-enabled");
    Tabs();
  }, []);

  return null;
}
