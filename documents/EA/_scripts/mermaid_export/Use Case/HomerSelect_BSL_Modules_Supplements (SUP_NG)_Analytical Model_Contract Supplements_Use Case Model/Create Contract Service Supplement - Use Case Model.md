# Create Contract Service Supplement - Use Case Model

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Supplements (SUP_NG)/Analytical Model/Contract Supplements/Use Case Model
- **Diagram ID**: 163939
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph LR
    Set_Transaction_Supplement_values["Set Transaction Supplement values"]
    Get_Contract_by_code_from_COMA["Get Contract by code from COMA"]
    Validate_Contract_Supplement_request["Validate Contract Supplement request"]
    Get_Application_data_by_code_from_ADS_SUP["Get Application data by code from ADS (SUP)"]
    Generating_Contract_Supplement_code["Generating Contract Supplement code"]
    Create_contract_supplement_rule["Create contract supplement rule"]
    Create_Contract_Supplement_Create_Contract_Supplement["Create Contract Supplement : Create Contract Supplement"]
    External_system[/"External system"/]
    n_13_010_Create_Contract_Supplement(("13.010 Create Contract Supplement"))
    Create_Contract_Supplement_Create_Contract_Supplement -->|unnamed| n_13_010_Create_Contract_Supplement
    External_system --- n_13_010_Create_Contract_Supplement
    n_13_010_Create_Contract_Supplement -->|unnamed| Create_contract_supplement_rule
    Create_contract_supplement_rule -->|unnamed| Generating_Contract_Supplement_code
    Validate_Contract_Supplement_request -->|unnamed| Get_Application_data_by_code_from_ADS_SUP
    n_13_010_Create_Contract_Supplement -->|unnamed| Validate_Contract_Supplement_request
    Validate_Contract_Supplement_request -->|unnamed| Get_Contract_by_code_from_COMA
    Create_contract_supplement_rule -->|unnamed| Set_Transaction_Supplement_values
```
