# Document proof check - use case model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/UseCase Model
- **Diagram ID**: 164551
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    User_Interface_Model_Set_document_proof_check_user_interface["User Interface Model : Set document proof check - user interface model"]
    Tab_Client_documents_Tab_Client_documents["Tab-Client documents : Tab-Client documents"]
    User[/"User"/]
    MOD_01_105_Set_document_proof_check(("{MOD}01.105 Set document proof check"))
    User_Interface_Model_Set_document_proof_check_user_interface -->|unnamed| MOD_01_105_Set_document_proof_check
    MOD_01_105_Set_document_proof_check -->|unnamed| Tab_Client_documents_Tab_Client_documents
    User --> MOD_01_105_Set_document_proof_check
```
