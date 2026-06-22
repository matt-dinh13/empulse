# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Loan Restructuring/Access Rights
- **Diagram ID**: 146242
- **Elements**: 13
- **Connectors**: 9

```mermaid
graph TD
    ADD_08_405_Confirm_offer_for_loan_restructuring_common["{ADD}08.405 Confirm offer for loan restructuring common"]
    MOD_08_405_Confirm_offer_for_loan_restructuring_common["{MOD}08.405 Confirm offer for loan restructuring common"]
    ADD_08_403_Create_request_for_loan_restructuring_common["{ADD}08.403 Create request for loan restructuring common"]
    MOD_08_403_Create_request_for_loan_restructuring_common["{MOD}08.403 Create request for loan restructuring common"]
    n_08_406_Process_request_for_loan_restructuring["08.406 Process request for loan restructuring"]
    n_08_404_Confirm_offer_for_loan_restructuring["08.404 Confirm offer for loan restructuring"]
    n_08_402_Create_request_for_loan_restructuring["08.402 Create request for loan restructuring"]
    MOD_08_406_Process_request_for_loan_restructuring["{MOD}08.406 Process request for loan restructuring"]
    n_08_404_Confirm_offer_for_loan_restructuring["08.404 Confirm offer for loan restructuring"]
    n_08_402_Create_request_for_loan_restructuring["08.402 Create request for loan restructuring"]
    n_08_400_Show_parameters_for_loan_restructuring["08.400 Show parameters for loan restructuring"]
    n_08_400_Show_parameters_for_loan_restructuring_can_overrule["08.400 Show parameters for loan restructuring (can overrule eligibility)"]
    n_08_400_Show_parameters_for_loan_restructuring["08.400 Show parameters for loan restructuring"]
    MOD_08_405_Confirm_offer_for_loan_restructuring_common -->|unnamed| ADD_08_405_Confirm_offer_for_loan_restructuring_common
    n_08_404_Confirm_offer_for_loan_restructuring -->|unnamed| MOD_08_405_Confirm_offer_for_loan_restructuring_common
    n_08_404_Confirm_offer_for_loan_restructuring -->|unnamed| n_08_404_Confirm_offer_for_loan_restructuring
    n_08_400_Show_parameters_for_loan_restructuring -->|unnamed| n_08_400_Show_parameters_for_loan_restructuring_can_overrule
    n_08_400_Show_parameters_for_loan_restructuring -->|unnamed| n_08_400_Show_parameters_for_loan_restructuring
    n_08_402_Create_request_for_loan_restructuring -->|unnamed| MOD_08_403_Create_request_for_loan_restructuring_common
    MOD_08_403_Create_request_for_loan_restructuring_common -->|unnamed| ADD_08_403_Create_request_for_loan_restructuring_common
    MOD_08_406_Process_request_for_loan_restructuring -->|unnamed| n_08_406_Process_request_for_loan_restructuring
    n_08_402_Create_request_for_loan_restructuring -->|unnamed| n_08_402_Create_request_for_loan_restructuring
```
