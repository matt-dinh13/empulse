# Take document photo - use case overview

```mermaid
graph TD
    n_01_085_Capture_Photo["01.085 Capture Photo"]
    Set_parameters_for_file_upload["Set parameters for file upload"]
    n_01_009_Upload_file_to_document_archive["01.009 Upload file to document archive"]
    ADD_01_131_Upload_document_file_common["{ADD}01.131 Upload document file - common"]
    User["User"]
    n_01_129_Take_and_upload_client_document_photo["01.129 Take and upload client document photo"]
    n_01_127_Take_and_upload_contract_document_photo["01.127 Take and upload contract document photo"]
    n_01_129_Take_and_upload_client_document_photo -->|unnamed| ADD_01_131_Upload_document_file_common
    n_01_129_Take_and_upload_client_document_photo -->|unnamed| n_01_085_Capture_Photo
    ADD_01_131_Upload_document_file_common -->|unnamed| Set_parameters_for_file_upload
    n_01_127_Take_and_upload_contract_document_photo -->|unnamed| ADD_01_131_Upload_document_file_common
    ADD_01_131_Upload_document_file_common -->|unnamed| n_01_009_Upload_file_to_document_archive
    n_01_127_Take_and_upload_contract_document_photo -->|unnamed| n_01_085_Capture_Photo
    User -->|unnamed| n_01_127_Take_and_upload_contract_document_photo
    User -->|unnamed| n_01_129_Take_and_upload_client_document_photo
    User -->|unnamed| n_01_085_Capture_Photo
```
