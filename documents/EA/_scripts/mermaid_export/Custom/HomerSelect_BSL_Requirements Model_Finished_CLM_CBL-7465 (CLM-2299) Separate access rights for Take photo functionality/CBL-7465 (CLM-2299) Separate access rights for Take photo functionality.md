# CBL-7465 (CLM-2299) Separate access rights for Take photo functionality

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-7465 (CLM-2299) Separate access rights for Take photo functionality
- **Diagram ID**: 119368
- **Elements**: 14
- **Connectors**: 10

```mermaid
graph TD
    ADD_01_127_Upload_document_all_salesrooms["{ADD}01.127 Upload document (all salesrooms)"]
    ADD_01_127_Upload_document_statuses_before_signing["{ADD}01.127 Upload document (statuses before signing)"]
    ADD_01_127_Upload_document_status_Signed["{ADD}01.127 Upload document (status Signed)"]
    ADD_01_127_Upload_document_all_statuses["{ADD}01.127 Upload document (all statuses)"]
    n_01_127_Take_and_upload_contract_document_photo["01.127 Take and upload contract document photo"]
    n_01_127_Take_and_upload_contract_document_photo["01.127 Take and upload contract document photo"]
    ADD_01_129_Upload_client_document_all_salesrooms["{ADD}01.129 Upload client document (all salesrooms)"]
    ADD_01_129_Upload_client_document_all_statuses["{ADD}01.129 Upload client document (all statuses)"]
    ADD_01_129_Upload_client_document_status_Signed["{ADD}01.129 Upload client document (status Signed)"]
    ADD_01_129_Upload_client_document_statuses_before_signing["{ADD}01.129 Upload client document (statuses before signing)"]
    n_01_129_Take_and_upload_client_document_photo["01.129 Take and upload client document photo"]
    n_01_129_Take_and_upload_client_document_photo["01.129 Take and upload client document photo"]
    REQ_2_Separate_access_rights_for_Take_photo_functionality_fr["REQ #2 - Separate access rights for Take photo functionality from Upload client documents"]
    REQ_1_Separate_access_rights_for_Take_photo_functionality_fr["REQ #1 - Separate access rights for Take photo functionality from Upload contract documents"]
    n_01_129_Take_and_upload_client_document_photo -->|unnamed| ADD_01_129_Upload_client_document_all_statuses
    n_01_129_Take_and_upload_client_document_photo -->|unnamed| ADD_01_129_Upload_client_document_statuses_before_signing
    n_01_129_Take_and_upload_client_document_photo -->|unnamed| ADD_01_129_Upload_client_document_status_Signed
    n_01_129_Take_and_upload_client_document_photo -->|unnamed| ADD_01_129_Upload_client_document_all_salesrooms
    n_01_129_Take_and_upload_client_document_photo -->|unnamed| n_01_129_Take_and_upload_client_document_photo
    n_01_127_Take_and_upload_contract_document_photo -->|unnamed| ADD_01_127_Upload_document_status_Signed
    n_01_127_Take_and_upload_contract_document_photo -->|unnamed| ADD_01_127_Upload_document_statuses_before_signing
    n_01_127_Take_and_upload_contract_document_photo -->|unnamed| ADD_01_127_Upload_document_all_statuses
    n_01_127_Take_and_upload_contract_document_photo -->|unnamed| n_01_127_Take_and_upload_contract_document_photo
    n_01_127_Take_and_upload_contract_document_photo -->|unnamed| ADD_01_127_Upload_document_all_salesrooms
```
