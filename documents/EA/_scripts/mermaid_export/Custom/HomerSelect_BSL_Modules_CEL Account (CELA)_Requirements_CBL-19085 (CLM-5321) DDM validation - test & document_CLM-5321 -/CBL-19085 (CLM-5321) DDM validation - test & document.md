# CBL-19085 (CLM-5321) DDM validation - test & document

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/CEL Account (CELA)/Requirements/CBL-19085 (CLM-5321) DDM validation - test & document/CLM-5321 - DDM validation - test & document
- **Diagram ID**: 156130
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    el_1799839["Text"]
    el_1799838["Text"]
    ADD_Flag_contract_with_extended_property_of_type_DDM["{ADD}Flag contract with extended property of type DDM"]
    ADD_Process_DDM_change["{ADD}Process DDM change"]
    ADD_Process_contract_change["{ADD}Process contract change"]
    MOD_Check_DDM_account["{MOD}Check DDM account"]
    MOD_Check_DDM_account -->|unnamed| ADD_Process_contract_change
    MOD_Check_DDM_account -->|unnamed| ADD_Process_DDM_change
    MOD_Check_DDM_account -->|If yes, then DDM=BLACKLISTED| ADD_Flag_contract_with_extended_property_of_type_DDM
```
