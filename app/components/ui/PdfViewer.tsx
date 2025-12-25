"use client";

import { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import 'react-pdf/dist/Page/TextLayer.css';
import 'react-pdf/dist/Page/AnnotationLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function PDFViewer({ file = "/resume.pdf" }) {
  const [numPages, setNumPages] = useState<number>(0);
  const [page, setPage] = useState(1);

  function onLoadSuccess({ numPages }: { numPages: number }): void {
    setNumPages(numPages);
  }

  return (
    <div className="w-full flex flex-col items-center my-4 mb-12">
      <div className="w-full max-w-[700px] px-2 sm:px-0">
        <Document file={file} onLoadSuccess={onLoadSuccess}>
          <Page
            pageNumber={page}
            width={typeof window !== 'undefined' ? Math.min(window.innerWidth - 32, 700) : 700}
            renderTextLayer={false}
            renderAnnotationLayer={false}
          />
        </Document>
      </div>
    </div>
  );
}
