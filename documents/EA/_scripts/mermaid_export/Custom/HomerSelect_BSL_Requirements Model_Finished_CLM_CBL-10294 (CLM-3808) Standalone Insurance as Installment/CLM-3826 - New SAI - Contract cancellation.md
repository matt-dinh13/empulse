# CLM-3826 - New SAI - Contract cancellation

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-10294 (CLM-3808) Standalone Insurance as Installment
- **Diagram ID**: 144844
- **Elements**: 11
- **Connectors**: 9

```mermaid
graph TD
    Cancellation_after_disbursement_check["Cancellation after disbursement check"]
    CLM_3826_New_SAI_Contract_cancellation["CLM-3826 - New SAI - Contract cancellation"]
    n_01_333_Cancel_active_contract_service["01.333 Cancel active contract service"]
    n_01_332_Cancel_signed_contract_service["01.332 Cancel signed contract service"]
    n_01_360_Cancel_contract["01.360 Cancel contract"]
    CaBus_AM["CaBus-AM"]
    Loyalty_program["Loyalty program"]
    n_01_592_Cancel_paid_off_contract_manually["01.592 Cancel paid-off contract manually"]
    n_01_590_Cancel_active_contract_manually["01.590 Cancel active contract manually"]
    n_01_330_Cancel_signed_contract_manually["01.330 Cancel signed contract manually"]
    User["User"]
    n_01_330_Cancel_signed_contract_manually -->|unnamed| Cancellation_after_disbursement_check
    n_01_330_Cancel_signed_contract_manually -->|unnamed| User
    n_01_592_Cancel_paid_off_contract_manually -->|unnamed| Cancellation_after_disbursement_check
    n_01_590_Cancel_active_contract_manually -->|unnamed| User
    n_01_590_Cancel_active_contract_manually -->|unnamed| Cancellation_after_disbursement_check
    Loyalty_program -->|unnamed| n_01_590_Cancel_active_contract_manually
    Loyalty_program -->|unnamed| n_01_592_Cancel_paid_off_contract_manually
    Loyalty_program -->|unnamed| n_01_330_Cancel_signed_contract_manually
    User -->|unnamed| n_01_592_Cancel_paid_off_contract_manually
```
