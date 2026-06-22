# Application documents

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/Use Case Model/Application documents
- **Diagram ID**: 158224
- **Elements**: 4
- **Connectors**: 4

```mermaid
graph LR
    n_01_085_Capture_Photo(("01.085 Capture Photo"))
    n_20_127_Take_and_upload_contract_document_photo(("20.127 Take and upload contract document photo"))
    n_20_125_Upload_application_document(("20.125 Upload application document"))
    User[/"User"/]
    n_20_127_Take_and_upload_contract_document_photo -.->|include| n_01_085_Capture_Photo
    User --- n_01_085_Capture_Photo
    User --- n_20_125_Upload_application_document
    User --- n_20_127_Take_and_upload_contract_document_photo
```
