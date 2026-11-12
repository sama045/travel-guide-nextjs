"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

const BodyClass = () => {
  const pathname = usePathname();

  useEffect(() => {
    // ลบ class เดิมที่ขึ้นต้นด้วย page-
    document.body.classList.forEach((className) => {
      if (className.startsWith("page-")) {
        document.body.classList.remove(className);
      }
    });

    // หน้า Home
    const pageClass =
      pathname === "/"
        ? "page-home"
        : `page-${pathname.replace(/\//g, "-").replace(/^-/, "")}`;

    document.body.classList.add(pageClass);

    return () => {
      document.body.classList.remove(pageClass);
    };
  }, [pathname]);

  return null;
};

export default BodyClass;