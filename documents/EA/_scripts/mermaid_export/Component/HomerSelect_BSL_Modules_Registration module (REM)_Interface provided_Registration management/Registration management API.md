# Registration management API

- **Diagram Type**: Component
- **Package**: HomerSelect/BSL/Modules/Registration module (REM)/Interface provided/Registration management
- **Diagram ID**: 162028
- **Elements**: 9
- **Connectors**: 16

```mermaid
graph TD
    contractCode_resolve_actions["/{contractCode}/resolve-actions"]
    ADD_uncheckDocument["{ADD}uncheckDocument"]
    checkDocument["checkDocument"]
    documents["/documents"]
    contractCode["/{contractCode}"]
    contractCode_register["/{contractCode}/register"]
    contractCode_uncheck_all["/{contractCode}/uncheck-all"]
    contractCode_check_all["/{contractCode}/check-all"]
    Registration_management["Registration management"]
    Registration_management -->|/contracts/{contractCode}/| contractCode
    ADD_uncheckDocument -->|unnamed| documents
    checkDocument -->|unnamed| documents
    documents -->|unnamed| Registration_management
    contractCode -->|unnamed| Registration_management
    contractCode_register -->|unnamed| contractCode
    contractCode_resolve_actions -->|unnamed| contractCode
    contractCode_check_all -->|unnamed| contractCode
    Registration_management -->|/contracts/{contractCode}/documents/{documentId}/check| checkDocument
    Registration_management -->|/contracts/{contractCode}/documents| documents
    Registration_management -->|/contracts/{contractCode}/uncheck-all| contractCode_uncheck_all
    Registration_management -->|/contracts/{contractCode}/check-all| contractCode_check_all
    Registration_management -->|/contracts/{contractCode}/resolve-actions| contractCode_resolve_actions
    Registration_management -->|/contracts/{contractCode}/documents/{documentId}/uncheck| ADD_uncheckDocument
    Registration_management -->|/contracts/{contractCode}/register| contractCode_register
    contractCode_uncheck_all -->|unnamed| contractCode
```
