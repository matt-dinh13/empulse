# CLM-5305 - REST API checkDocument

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Requirements/CBL-19687/CLM-5305 - REST API checkDocument
- **Diagram ID**: 156799
- **Elements**: 7
- **Connectors**: 3

```mermaid
graph TD
    MOD_Check_registration_document["{MOD}Check registration document"]
    MOD_Check_registration_document_via_API["{MOD}Check registration document via API"]
    ADD_Check_registration_documents["{ADD}Check registration documents"]
    Get_registration_documents["Get registration documents"]
    ADD_Get_User_Id_based_on_Employee_Number_or_Client_Id["{ADD}Get User Id based on Employee Number or Client Id"]
    User["User"]
    CLM_5305_Implement_RES_API_endpoint_checkDocument["CLM-5305 - Implement RES API endpoint checkDocument"]
    MOD_Check_registration_document -->|unnamed| ADD_Check_registration_documents
    MOD_Check_registration_document -->|unnamed| ADD_Get_User_Id_based_on_Employee_Number_or_Client_Id
    User -->|unnamed| MOD_Check_registration_document_via_API
```
