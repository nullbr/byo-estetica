"use client";
import { useState, useEffect, useRef } from "react";
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
  const [width, setWidth] = useState<number>(1200); // Default width
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function updateWidth() {
      if (containerRef.current) {
        setWidth(containerRef.current.clientWidth);
      }
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  function onDocumentLoadSuccess({ numPages }: DocumentLoadSuccess) {
    setNumPages(numPages);
  }

  function onLoadError(error: Error) {
    console.error(error);
  }

  return (
    <div ref={containerRef} className="flex items-center justify-center w-full">
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
            <div key={`page_${index + 1}`} className="w-full">
              <Page pageNumber={index + 1} width={width} />
            </div>
          ))}
      </Document>
    </div>
  );
};

export default PDFViewer;
