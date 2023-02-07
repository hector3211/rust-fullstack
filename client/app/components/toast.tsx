"use client";

import { useEffect, useState } from "react";

type ToastProps = {
  message: string;
  duration: number;
};

export default function TheToast({ message, duration }: ToastProps) {
  const [visible, setVisible] = useState<true | false>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setVisible(false);
    }, duration);

    return () => {
      clearTimeout(timer);
    };
  }, [duration]);
  if (!visible) {
    return <div></div>;
  }

  return (
    <div className="toast-bottom">
      <div className="alert alert-info">
        <div>
          <span>{message}</span>
        </div>
      </div>
    </div>
  );
}
