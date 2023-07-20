"use client";

import { useEffect } from "react";
import Swal from "sweetalert2";

interface WarningBoxProps {
  message: string;
  onConfirm: () => void;
  onCancel: () => void;
}

const WarningBox: React.FC<WarningBoxProps> = ({
  message,
  onConfirm,
  onCancel,
}) => {
  useEffect(() => {
    Swal.fire({
      title: "Are you sure?",
      text: message,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        onConfirm();
      } else {
        onCancel();
      }
    });
  }, []);

  return null;
};

export default WarningBox;
