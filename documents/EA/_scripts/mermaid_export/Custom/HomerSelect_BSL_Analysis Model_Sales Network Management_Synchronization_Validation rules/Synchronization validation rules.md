# Synchronization validation rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Validation rules
- **Diagram ID**: 72163
- **Elements**: 8
- **Connectors**: 6

```mermaid
graph TD
    Business_rules_SNM_Synchronization["Business rules : SNM Synchronization"]
    SNM_synchronization_validation_rules["SNM synchronization - validation rules"]
    SN_Sales_area_synchronization_validation_rules["SN Sales area synchronization validation rules"]
    SN_Contact_Person_validation_rules["SN Contact Person validation rules"]
    SN_Salesman_synchronization_validation_rules["SN Salesman synchronization validation rules"]
    MOD_SN_Address_validation_rules["{MOD}SN Address validation rules"]
    SN_Contact_Information_validation_rules["SN Contact Information validation rules"]
    SN_Bank_Account_validation_rules["SN Bank Account validation rules"]
    SNM_synchronization_validation_rules -->|unnamed| SN_Bank_Account_validation_rules
    SNM_synchronization_validation_rules -->|unnamed| SN_Contact_Information_validation_rules
    SNM_synchronization_validation_rules -->|unnamed| MOD_SN_Address_validation_rules
    SNM_synchronization_validation_rules -->|unnamed| SN_Salesman_synchronization_validation_rules
    SNM_synchronization_validation_rules -->|unnamed| SN_Contact_Person_validation_rules
    SNM_synchronization_validation_rules -->|unnamed| SN_Sales_area_synchronization_validation_rules
```
