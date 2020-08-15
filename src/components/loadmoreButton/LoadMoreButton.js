import React from "react";
import "./LoadMoreButton.css";

export default function LoadMoreButton(params) {
  return window.scrollTo({
    top: document.documentElement.scrollHeight,
    behavior: "smooth",
  });
}
