# Get registration documents

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Analytical model/Registrations/Contracts/Registration documents management/Get registration documents/Use Cases
- **Diagram ID**: 162034
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    External_System[/"External System"/]
    getRegistrationDocuments_getRegistrationDocuments["getRegistrationDocuments : getRegistrationDocuments"]
    MOD_Get_registration_documents_via_API(("{MOD}Get registration documents via API"))
    Get_registration_documents(("Get registration documents"))
    MOD_Get_registration_documents_via_API -.->|include| Get_registration_documents
    External_System --- MOD_Get_registration_documents_via_API
    getRegistrationDocuments_getRegistrationDocuments -->|unnamed| MOD_Get_registration_documents_via_API
```
