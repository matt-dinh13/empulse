# Client documents

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/Use Case Model/Client documents
- **Diagram ID**: 158232
- **Elements**: 5
- **Connectors**: 5

```mermaid
graph LR
    n_20_133_Delete_document_content(("20.133 Delete document content"))
    n_01_085_Capture_Photo(("01.085 Capture Photo"))
    n_20_129_Take_and_upload_client_document_photo(("20.129 Take and upload client document photo"))
    User[/"User"/]
    n_20_126_Upload_client_document_file(("20.126 Upload client document file"))
    n_20_129_Take_and_upload_client_document_photo -.->|include| n_01_085_Capture_Photo
    User --- n_01_085_Capture_Photo
    User --- n_20_129_Take_and_upload_client_document_photo
    User --- n_20_126_Upload_client_document_file
    User --- n_20_133_Delete_document_content
```
