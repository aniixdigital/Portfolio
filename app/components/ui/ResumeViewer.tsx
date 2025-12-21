"use client";
import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("./PdfViewer"), { ssr: false });

export default function ResumeViewer() {
  return (
    <PDFViewer file="/resume.pdf" />
  );
}