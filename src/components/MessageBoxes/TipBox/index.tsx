"use client";

import { useEffect } from "react";
import Swal from "sweetalert2";

import "../component.css";

interface TipBoxProps {
  message: string;
  onHide: () => void;
}

const TipBox: React.FC<TipBoxProps> = ({ message, onHide }) => {
  useEffect(() => {
    Swal.fire({
      title: "Tip",
      text: message,
      icon: "info",
    }).then(() => {
      onHide();
    });
  }, []);

  return null;
};

export default TipBox;
