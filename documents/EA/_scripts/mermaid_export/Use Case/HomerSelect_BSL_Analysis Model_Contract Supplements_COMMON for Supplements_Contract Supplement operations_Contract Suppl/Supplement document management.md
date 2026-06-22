# Supplement document management

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/COMMON for Supplements/Contract Supplement operations/Contract Supplement document management/UseCase Model
- **Diagram ID**: 164457
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph LR
    MOD_13_205_Create_contract_supplement_documents_v2(("{MOD}13.205 Create contract supplement documents v2"))
    User_Interface_Model_Contract_Supplement_printout_list["User Interface Model : Contract Supplement printout list"]
    n_13_190_Reprint_supplement_documentation(("13.190 Reprint supplement documentation"))
    User[/"User"/]
    User_Interface_Model_Contract_Supplement_printout_list -->|unnamed| n_13_190_Reprint_supplement_documentation
    User --- n_13_190_Reprint_supplement_documentation
```
