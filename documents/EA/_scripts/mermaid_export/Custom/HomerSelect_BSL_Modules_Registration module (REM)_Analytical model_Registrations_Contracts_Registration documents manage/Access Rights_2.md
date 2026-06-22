# Access Rights

```mermaid
graph TD
    ADD_Check_registration_documents["{ADD}Check registration documents"]
    MOD_Check_registration_document["{MOD}Check registration document"]
    MOD_Uncheck_all_registration_documents_via_API["{MOD}Uncheck all registration documents via API"]
    MOD_Check_all_registration_documents_via_API["{MOD}Check all registration documents via API"]
    MOD_Uncheck_all_registration_documents_via_API -->|unnamed| ADD_Check_registration_documents
    MOD_Check_registration_document -->|unnamed| ADD_Check_registration_documents
    MOD_Check_all_registration_documents_via_API -->|unnamed| ADD_Check_registration_documents
```
