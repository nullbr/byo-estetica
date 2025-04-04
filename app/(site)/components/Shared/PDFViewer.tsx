"use client";
import { useState } from "react";
import { pdfjs, Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.mjs",
  import.meta.url
).toString();

const options = { cMapUrl: "/cmaps/", standardFontDataUrl: "/standard_fonts/" };

interface PDFViewerProps {
  url: string;
}

interface DocumentLoadSuccess {
  numPages: number;
}

const PDFViewer: React.FC<PDFViewerProps> = ({ url }) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: DocumentLoadSuccess) {
    setNumPages(numPages);
  }

  function onLoadError(error: Error) {
    console.error(error);
  }

  return (
    <div className="PDF-container flex items-center justify-center">
      <Document
        file={url}
        onLoadSuccess={onDocumentLoadSuccess}
        onLoadError={onLoadError}
        options={options}
        error={() => (
          <div className="mt-12 p-4 flex flex-col items-center justify-center">
            <p className="text-4xl">Error</p>
            <br />
            <p>Não foi possível carregar este PDF.</p>
          </div>
        )}
      >
        {numPages &&
          Array.from({ length: numPages }, (_, index) => (
            <div key={`page_${index + 1}`}>
              <Page
                pageNumber={index + 1}
                loading={"Loading page"}
                scale={1.7}
              />
              <br />
            </div>
          ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
