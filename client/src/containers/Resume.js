import React, { useState } from 'react';
import { Document, Page } from 'react-pdf';
import Resumee from './jonathan_trevino-resume.pdf'

function Resume() {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  return (
    <div>
      <Document file={Resumee} onLoadSuccess={onDocumentLoadSuccess}>
        <Page pageNumber={pageNumber} />
      </Document>
      <p>

      </p>
    </div>
  );
}
export default Resume