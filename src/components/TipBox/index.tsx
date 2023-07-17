"use client";

import { useEffect } from "react";
import "./component.css"
import Swal from "sweetalert2";

interface TipBoxProps {
  message: string;
}

export default function TipBox({ message }: TipBoxProps) {
  useEffect(() => {
    Swal.fire({
      title: "Tip",
      text: message,
      icon: "info",
    });
  }, []);

  return null;

}
