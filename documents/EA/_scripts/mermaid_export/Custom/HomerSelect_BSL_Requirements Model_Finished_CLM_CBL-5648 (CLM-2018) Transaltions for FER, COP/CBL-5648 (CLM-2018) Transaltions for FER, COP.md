# CBL-5648 (CLM-2018) Transaltions for FER, COP

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-5648 (CLM-2018) Transaltions for FER, COP
- **Diagram ID**: 119396
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    n_01_786_Create_ContractFERRequest_service["01.786 Create ContractFERRequest service"]
    n_08_066_Calculate_Full_Early_repayment_preview["08.066 Calculate Full Early repayment preview"]
    Check_ER_request_availability["Check ER request availability"]
    n_08_065_Calculate_Cooling_off_period_repayment_preview["08.065 Calculate Cooling-off period repayment preview"]
    MOD_Check_COP_ER_request_availability["{MOD}Check COP ER request availability"]
    REQ_1_Add_new_message_placeholder_COP_Length["REQ#1 Add new message placeholder ${COP Length}"]
    n_08_065_Calculate_Cooling_off_period_repayment_preview -->|unnamed| MOD_Check_COP_ER_request_availability
    n_08_066_Calculate_Full_Early_repayment_preview -->|unnamed| Check_ER_request_availability
    n_01_786_Create_ContractFERRequest_service -->|unnamed| Check_ER_request_availability
```
