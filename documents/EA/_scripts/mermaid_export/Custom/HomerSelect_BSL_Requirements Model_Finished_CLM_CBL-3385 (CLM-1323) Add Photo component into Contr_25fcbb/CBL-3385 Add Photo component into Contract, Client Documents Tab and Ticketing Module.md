# CBL-3385 Add Photo component into Contract, Client Documents Tab and Ticketing Module

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-3385 (CLM-1323) Add Photo component into Contract, Client Documents Tab and Ticketing Module
- **Diagram ID**: 109364
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph TD
    CBL_3385_CLM_1323_Function_to_take_and_upload_Ticket_attachm["CBL-3385 (CLM-1323) Function to take and upload Ticket attachment photo : CBL-3385 (CLM-1323) Function to take and upload Ticket attachment photo"]
    Tab_Client_documents_Tab_Client_documents["Tab-Client documents : Tab-Client documents"]
    Tab_Contract_documents_Tab_Contract_documents["Tab-Contract documents : Tab-Contract documents"]
    REQ_1_Function_to_take_and_upload_client_and_contract_docume["REQ #1 - Function to take and upload client and contract documents photo"]
    n_01_129_Take_and_upload_client_document_photo["01.129 Take and upload client document photo"]
    n_01_127_Take_and_upload_contract_document_photo["01.127 Take and upload contract document photo"]
    Tab_Contract_documents_Tab_Contract_documents -->|unnamed| REQ_1_Function_to_take_and_upload_client_and_contract_docume
    Tab_Client_documents_Tab_Client_documents -->|unnamed| REQ_1_Function_to_take_and_upload_client_and_contract_docume
    n_01_129_Take_and_upload_client_document_photo -->|unnamed| REQ_1_Function_to_take_and_upload_client_and_contract_docume
    n_01_127_Take_and_upload_contract_document_photo -->|unnamed| REQ_1_Function_to_take_and_upload_client_and_contract_docume
```
