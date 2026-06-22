# CBL-5196 (CLM-1854) Stop insurance charging in collection

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5196 (CLM-1854) Stop insurance charging in collection
- **Diagram ID**: 118809
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    Logical_Data_Model_Insurance_Contract["Logical Data Model : Insurance Contract"]
    REQ_Generating_a_notification_message_for_Notifier_when_prol["REQ  - Generating a notification message (for Notifier) when prolongation failed"]
    REQ_2_Stop_a_new_insurance_period_creation_on_contracts_havi["REQ #2 - Stop a new insurance period creation on contracts having DPD over limit (EoM event)"]
    Use_Case_Model_Insurance_based_on_EOM_event["Use Case Model : Insurance based on EOM event"]
    Use_Case_Model_Insurance_prolongation["Use Case Model : Insurance prolongation"]
    REQ_1_Stop_insurance_prolongation_on_contracts_having_DPD_ov["REQ #1 - Stop insurance prolongation on contracts having DPD over limit (automatic job)"]
    Logical_Data_Model_Insurance_Contract -->|unnamed| REQ_1_Stop_insurance_prolongation_on_contracts_having_DPD_ov
    Use_Case_Model_Insurance_prolongation -->|unnamed| REQ_1_Stop_insurance_prolongation_on_contracts_having_DPD_ov
    Use_Case_Model_Insurance_based_on_EOM_event -->|unnamed| REQ_2_Stop_a_new_insurance_period_creation_on_contracts_havi
```
