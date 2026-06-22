# CLM-89 (CBL-57) CKYC support

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CLM-89 (CBL-57) CKYC support
- **Diagram ID**: 103167
- **Elements**: 8
- **Connectors**: 6

```mermaid
graph TD
    User_Interface_Model_View_and_download_stored_document["User Interface Model : View and download stored document"]
    Tab_Contract_documents_Tab_Contract_documents["Tab-Contract documents : Tab-Contract documents"]
    UseCase_Model_Document_proof_check_use_case_model["UseCase Model : Document proof check - use case model"]
    Tab_Client_documents_Tab_Client_documents["Tab-Client documents : Tab-Client documents"]
    REQ_2_Document_proof_check_performing["REQ#2 - Document proof check performing"]
    Logical_Data_Model_Document_Type["Logical Data Model : Document Type"]
    REQ_1_Changes_in_Document_Type_definition["REQ#1 - Changes in Document Type definition"]
    Logical_Data_Model_Document["Logical Data Model : Document "]
    Logical_Data_Model_Document -->|unnamed| REQ_2_Document_proof_check_performing
    Logical_Data_Model_Document_Type -->|unnamed| REQ_1_Changes_in_Document_Type_definition
    Tab_Client_documents_Tab_Client_documents -->|unnamed| REQ_2_Document_proof_check_performing
    UseCase_Model_Document_proof_check_use_case_model -->|unnamed| REQ_2_Document_proof_check_performing
    Tab_Contract_documents_Tab_Contract_documents -->|unnamed| REQ_2_Document_proof_check_performing
    User_Interface_Model_View_and_download_stored_document -->|unnamed| REQ_2_Document_proof_check_performing
```
