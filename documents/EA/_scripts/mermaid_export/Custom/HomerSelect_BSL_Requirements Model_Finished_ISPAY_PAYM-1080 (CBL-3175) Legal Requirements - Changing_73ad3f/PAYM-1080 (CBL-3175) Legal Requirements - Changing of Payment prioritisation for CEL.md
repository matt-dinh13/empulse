# PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/ISPAY/PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL
- **Diagram ID**: 113631
- **Elements**: 6
- **Connectors**: 5

```mermaid
graph TD
    Use_Case_Model_Pairing_installment_parts_procedure["Use Case Model : Pairing installment parts procedure"]
    Logical_Data_Model_Pairing_priority["Logical Data Model : Pairing priority"]
    REQ_3_Create_new_pairing_settings_and_priorities_for_KZ["REQ#3 Create new pairing settings and priorities for KZ"]
    REQ_2_Use_Pairing_Settings_for_TAC_in_pairing_process["REQ#2 Use Pairing Settings for TAC in pairing process"]
    REQ_1_Allow_versioning_of_pairing_settings_and_pairing_prior["REQ#1 Allow versioning of pairing settings and pairing priorities for TandC"]
    PAYM_1080_CBL_3175_Legal_Requirements_Changing_of_Payment_pr["PAYM-1080 (CBL-3175) Legal Requirements - Changing of Payment prioritisation for CEL"]
    REQ_3_Create_new_pairing_settings_and_priorities_for_KZ -->|unnamed| PAYM_1080_CBL_3175_Legal_Requirements_Changing_of_Payment_pr
    REQ_2_Use_Pairing_Settings_for_TAC_in_pairing_process -->|unnamed| PAYM_1080_CBL_3175_Legal_Requirements_Changing_of_Payment_pr
    REQ_1_Allow_versioning_of_pairing_settings_and_pairing_prior -->|unnamed| PAYM_1080_CBL_3175_Legal_Requirements_Changing_of_Payment_pr
    REQ_1_Allow_versioning_of_pairing_settings_and_pairing_prior -->|unnamed| Logical_Data_Model_Pairing_priority
    REQ_2_Use_Pairing_Settings_for_TAC_in_pairing_process -->|unnamed| Use_Case_Model_Pairing_installment_parts_procedure
```
