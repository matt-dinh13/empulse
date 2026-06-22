# Use Case

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Loan Agreement Management/Use Case
- **Diagram ID**: 158217
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph LR
    MOD_01_099_Sign_contract_externally(("{MOD}01.099 Sign contract externally"))
    n_01_096_Prepare_documentation_externally(("01.096 Prepare documentation externally"))
    External_system[/"External system"/]
    n_01_335_Get_agreement_documentation_externally(("01.335 Get agreement documentation externally"))
    External_system --> MOD_01_099_Sign_contract_externally
    External_system --> n_01_096_Prepare_documentation_externally
    External_system --> n_01_335_Get_agreement_documentation_externally
```
