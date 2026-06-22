# CBL-4795 (CLM-1712) Create API to set document UID for document uploaded externaly to CAB

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4795 (CLM-1712) Create API to set document UID for document uploaded externaly to CAB
- **Diagram ID**: 112259
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph TD
    MOD_SetDocumentFileRequest_validation["{MOD}SetDocumentFileRequest validation"]
    Use_Case_Model_Contract_document_services["Use Case Model : Contract document services"]
    Documents_Set_Document_File["Documents : Set Document File"]
    n_01_791_Set_Document_File_service["01.791 Set Document File service"]
    n_01_791_Set_Document_File_service["01.791 Set Document File service"]
    REQ_1_create_a_new_API_to_store_document_UUID_for_Contract_D["REQ#1 - create a new API to store document UUID for Contract+DocumentID"]
    REQ_1_create_a_new_API_to_store_document_UUID_for_Contract_D -->|unnamed| Documents_Set_Document_File
    Use_Case_Model_Contract_document_services -->|unnamed| Documents_Set_Document_File
    n_01_791_Set_Document_File_service -->|unnamed| n_01_791_Set_Document_File_service
    n_01_791_Set_Document_File_service -->|unnamed| MOD_SetDocumentFileRequest_validation
    n_01_791_Set_Document_File_service -->|unnamed| Documents_Set_Document_File
```
