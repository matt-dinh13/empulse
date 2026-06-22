# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/Access Rights/Client documents
- **Diagram ID**: 151488
- **Elements**: 12
- **Connectors**: 9

```mermaid
graph TD
    n_20_133_Delete_document_content_flag_PHOTO["20.133 Delete document content (flag PHOTO)"]
    n_20_133_Delete_document_content_all_statuses["20.133 Delete document content (all statuses)"]
    n_20_133_Delete_document_content_all_salesrooms["20.133 Delete document content (all salesrooms)"]
    n_20_133_Delete_document_content["20.133 Delete document content"]
    n_20_133_Delete_document_content["20.133 Delete document content"]
    n_20_129_Take_and_upload_client_document_photo_all_salesroom["20.129 Take and upload client document photo (all salesrooms)"]
    n_20_129_Take_and_upload_client_document_photo["20.129 Take and upload client document photo"]
    n_20_129_Take_and_upload_client_document_photo["20.129 Take and upload client document photo"]
    n_20_126_Upload_client_document_file_all_salesrooms["20.126 Upload client document file (all salesrooms)"]
    n_20_126_Upload_client_document_file["20.126 Upload client document file"]
    n_20_126_Upload_client_document_file_flag_PHOTO["20.126 Upload client document file (flag PHOTO)"]
    n_20_126_Upload_client_document_file["20.126 Upload client document file"]
    n_20_133_Delete_document_content -->|unnamed| n_20_133_Delete_document_content_flag_PHOTO
    n_20_133_Delete_document_content -->|unnamed| n_20_133_Delete_document_content_all_statuses
    n_20_133_Delete_document_content -->|unnamed| n_20_133_Delete_document_content_all_salesrooms
    n_20_133_Delete_document_content -->|unnamed| n_20_133_Delete_document_content
    n_20_129_Take_and_upload_client_document_photo -->|unnamed| n_20_129_Take_and_upload_client_document_photo
    n_20_129_Take_and_upload_client_document_photo -->|unnamed| n_20_129_Take_and_upload_client_document_photo_all_salesroom
    n_20_126_Upload_client_document_file -->|unnamed| n_20_126_Upload_client_document_file_flag_PHOTO
    n_20_126_Upload_client_document_file -->|unnamed| n_20_126_Upload_client_document_file
    n_20_126_Upload_client_document_file -->|unnamed| n_20_126_Upload_client_document_file_all_salesrooms
```
