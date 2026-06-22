# Use case model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Preprinted documents/Use case model
- **Diagram ID**: 63563
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    n_01_008_Download_file_from_document_archive(("01.008 Download file from document archive"))
    n_01_012_Show_preprinted_documents(("01.012 Show preprinted documents"))
    User[/"User"/]
    n_01_012_Show_preprinted_documents -.->|include| n_01_008_Download_file_from_document_archive
    User --- n_01_012_Show_preprinted_documents
```
