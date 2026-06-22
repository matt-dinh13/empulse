# User interface model

```mermaid
graph TD
    n_01_008_Download_file_from_document_archive["01.008 Download file from document archive"]
    Preprinted_documents["Preprinted documents"]
    n_01_012_Show_preprinted_documents["01.012 Show preprinted documents"]
    Show_preprinted_documents["Show preprinted documents"]
    Show_preprinted_documents -->|unnamed| n_01_012_Show_preprinted_documents
    Preprinted_documents -->|unnamed| n_01_008_Download_file_from_document_archive
    n_01_012_Show_preprinted_documents -->|unnamed| n_01_008_Download_file_from_document_archive
```
