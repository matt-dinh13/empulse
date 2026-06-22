# Edit contract documents

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract documents management/UseCase Model
- **Diagram ID**: 164552
- **Elements**: 10
- **Connectors**: 13

```mermaid
graph LR
    n_01_107_Add_contract_document_common(("01.107 Add contract document common"))
    Access_control_to_Document_by_Contract_status["Access control to Document by Contract status"]
    Order_of_documents_and_attributes_on_them["Order of documents and attributes on them"]
    Add_Edit_document_validations["Add/Edit document validations"]
    Access_control_to_Contract_by_Salesroom["Access control to Contract by Salesroom"]
    Manage_contract_documents_Add_Edit_document["Manage contract documents : Add/Edit document"]
    User[/"User"/]
    n_01_120_Delete_contract_document(("01.120 Delete contract document"))
    MOD_01_110_Edit_contract_document(("{MOD}01.110 Edit contract document"))
    MOD_01_100_Add_contract_document(("{MOD}01.100 Add contract document"))
    MOD_01_100_Add_contract_document -->|unnamed| Manage_contract_documents_Add_Edit_document
    MOD_01_110_Edit_contract_document -->|unnamed| Manage_contract_documents_Add_Edit_document
    n_01_107_Add_contract_document_common -->|unnamed| Add_Edit_document_validations
    MOD_01_110_Edit_contract_document -->|unnamed| Add_Edit_document_validations
    MOD_01_110_Edit_contract_document -->|unnamed| Order_of_documents_and_attributes_on_them
    MOD_01_100_Add_contract_document -->|unnamed| Order_of_documents_and_attributes_on_them
    MOD_01_100_Add_contract_document -->|unnamed| Access_control_to_Document_by_Contract_status
    n_01_120_Delete_contract_document -->|unnamed| Access_control_to_Document_by_Contract_status
    MOD_01_110_Edit_contract_document -->|unnamed| Access_control_to_Document_by_Contract_status
    MOD_01_100_Add_contract_document -->|unnamed| n_01_107_Add_contract_document_common
    User --- MOD_01_110_Edit_contract_document
    User --- MOD_01_100_Add_contract_document
    User --- n_01_120_Delete_contract_document
```
