# SNM Synchronization

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Synchronization/Business rules
- **Diagram ID**: 136710
- **Elements**: 8
- **Connectors**: 6

```mermaid
graph TD
    Use_case_Synchronization_of_SNM_data["Use case : Synchronization of SNM data"]
    Business_rules_SNM_User_Synchronization["Business rules : SNM User Synchronization"]
    SNM_User_Synchronization["SNM User Synchronization"]
    MOD_SNM_Partner_and_Salesroom_Synchronization["{MOD}SNM Partner and Salesroom Synchronization"]
    Business_rules_SNM_Partner_and_Salesroom_Synchronization["Business rules : SNM Partner and Salesroom Synchronization"]
    Validation_rules_Synchronization_validation_rules["Validation rules : Synchronization validation rules"]
    SNM_synchronization_validation_rules["SNM synchronization - validation rules"]
    Algorithm_Synchronization_of_SN_object["Algorithm:Synchronization of SN object"]
    Validation_rules_Synchronization_validation_rules -->|unnamed| SNM_synchronization_validation_rules
    Algorithm_Synchronization_of_SN_object -->|unnamed| SNM_synchronization_validation_rules
    Business_rules_SNM_Partner_and_Salesroom_Synchronization -->|unnamed| MOD_SNM_Partner_and_Salesroom_Synchronization
    Algorithm_Synchronization_of_SN_object -->|unnamed| MOD_SNM_Partner_and_Salesroom_Synchronization
    Algorithm_Synchronization_of_SN_object -->|unnamed| SNM_User_Synchronization
    Business_rules_SNM_User_Synchronization -->|unnamed| SNM_User_Synchronization
```
