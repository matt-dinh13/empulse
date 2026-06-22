# Uncheck/Check

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Registration documents management/Uncheck/Check documents/Use Cases
- **Diagram ID**: 160756
- **Elements**: 11
- **Connectors**: 13

```mermaid
graph LR
    External_System[/"External System"/]
    ADD_Get_registration(("{ADD}Get registration"))
    MOD_Check_registration_document_via_API(("{MOD}Check registration document via API"))
    MOD_Check_registration_document(("{MOD}Check registration document"))
    MOD_Uncheck_all_registration_documents_via_API(("{MOD}Uncheck all registration documents via API"))
    Get_registration_documents(("Get registration documents"))
    ADD_Get_User_Id_based_on_Employee_Number_or_Client_Id["{ADD}Get User Id based on Employee Number or Client Id"]
    MOD_Uncheck_all_registration_documents(("{MOD}Uncheck all registration documents"))
    User[/"User"/]
    MOD_Check_all_registration_documents_via_API(("{MOD}Check all registration documents via API"))
    MOD_Check_all_registration_documents(("{MOD}Check all registration documents"))
    MOD_Check_all_registration_documents_via_API -.->|include| MOD_Check_all_registration_documents
    MOD_Uncheck_all_registration_documents_via_API -.->|include| MOD_Uncheck_all_registration_documents
    MOD_Check_all_registration_documents -->|unnamed| ADD_Get_User_Id_based_on_Employee_Number_or_Client_Id
    MOD_Uncheck_all_registration_documents -->|unnamed| ADD_Get_User_Id_based_on_Employee_Number_or_Client_Id
    MOD_Check_registration_document -->|unnamed| ADD_Get_User_Id_based_on_Employee_Number_or_Client_Id
    MOD_Check_all_registration_documents -.->|include| Get_registration_documents
    MOD_Uncheck_all_registration_documents -.->|include| Get_registration_documents
    MOD_Check_registration_document -.->|include| Get_registration_documents
    MOD_Check_registration_document_via_API -.->|include| MOD_Check_registration_document
    User --- MOD_Check_registration_document_via_API
    User --- MOD_Uncheck_all_registration_documents_via_API
    User --- MOD_Check_all_registration_documents_via_API
    External_System --- ADD_Get_registration
```
