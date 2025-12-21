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
    <div className="w-full flex flex-col items-center">
      <Document file={file} onLoadSuccess={onLoadSuccess}>
        <Page pageNumber={page} scale={1.2} width={595} height={842} />
      </Document>

      <div style={{ marginTop: 20, display: "flex", gap: 12 }}>
        <button onClick={() => setPage((p) => Math.max(p - 1, 1))}>
          Previous
        </button>

        <span>
          Page {page} of {numPages}
        </span>

        <button onClick={() => setPage((p) => Math.min(p + 1, numPages))}>
          Next
        </button>
      </div>
    </div>
  );
}
