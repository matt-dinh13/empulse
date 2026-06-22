# CSI-2973 Replace Service on Contract

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Contract Services (COS)/Requirement Model/CBL-22680 Service Management Modules for REL/CSI-2973 Replace Service on Contract
- **Diagram ID**: 155596
- **Elements**: 7
- **Connectors**: 2

```mermaid
graph LR
    unnamed["unnamed"]
    VAS_Deal[/"VAS Deal"/]
    External_System[/"External System"/]
    MOD_08_060_Replace_Loan_Service_method_COS(("{MOD}08.060 Replace Loan Service method (COS)"))
    Contract_Service_replacement_validation["Contract Service replacement validation"]
    n_01_782_Replace_Contract_Service(("01.782 Replace Contract Service"))
    n_08_085_Replace_Contract_Service_manually(("08.085 Replace Contract Service manually"))
    External_System --- MOD_08_060_Replace_Loan_Service_method_COS
    MOD_08_060_Replace_Loan_Service_method_COS --- VAS_Deal
```
