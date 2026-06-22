# Use DMS in UC08.359 Print service request document

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-12588 (CSI-545) Integrate DMS component with BSL CSI functions/CSI-1120 Use DMS in UC08.359 Print service request document
- **Diagram ID**: 148946
- **Elements**: 5
- **Connectors**: 3

```mermaid
graph LR
    DEL_03_210_Print_ER_document["{DEL}03.210 Print ER document"]
    Cabinet[/"Cabinet"/]
    n_01_008_Download_file_from_document_archive(("01.008 Download file from document archive"))
    User[/"User"/]
    n_08_359_Print_service_request_document(("08.359 Print service request document"))
    n_01_008_Download_file_from_document_archive --> Cabinet
    User --> n_08_359_Print_service_request_document
    Cabinet --> n_08_359_Print_service_request_document
```
