# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Cooling-off period/Access Rights
- **Diagram ID**: 146226
- **Elements**: 9
- **Connectors**: 5

```mermaid
graph TD
    ADD_08_065_Calculate_Cooling_off_period_repayment_preview["{ADD}08.065 Calculate Cooling-off period repayment preview"]
    n_08_065_Calculate_Cooling_off_period_repayment_preview["08.065 Calculate Cooling-off period repayment preview"]
    MOD_08_257_Create_Cooling_off_period_request["{MOD}08.257 Create Cooling-off period request"]
    n_08_255_Show_Cooling_off_period_repayment_preview["08.255 Show Cooling-off period repayment preview"]
    n_08_257_Create_Cooling_off_period_request["08.257 Create Cooling-off period request"]
    n_08_255_Show_Cooling_off_period_repayment_preview["08.255 Show Cooling-off period repayment preview"]
    Access_rights_for_service_evaluation_and_processing["Access rights for service evaluation and processing"]
    MOD_08_252_Process_cooling_off_period["{MOD}08.252 Process cooling-off period"]
    n_08_252_Process_cooling_off_period["08.252 Process cooling-off period"]
    n_08_255_Show_Cooling_off_period_repayment_preview -->|unnamed| n_08_255_Show_Cooling_off_period_repayment_preview
    MOD_08_252_Process_cooling_off_period -->|unnamed| n_08_252_Process_cooling_off_period
    MOD_08_257_Create_Cooling_off_period_request -->|unnamed| n_08_257_Create_Cooling_off_period_request
    n_08_065_Calculate_Cooling_off_period_repayment_preview -->|unnamed| ADD_08_065_Calculate_Cooling_off_period_repayment_preview
    Access_rights_for_service_evaluation_and_processing -->|unnamed| n_08_252_Process_cooling_off_period
```
