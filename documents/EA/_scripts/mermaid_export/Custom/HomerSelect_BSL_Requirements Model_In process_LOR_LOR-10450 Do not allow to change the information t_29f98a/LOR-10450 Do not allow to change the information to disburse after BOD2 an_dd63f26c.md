# LOR-10450 Do not allow to change the information to disburse after BOD2 and before sign

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/LOR/LOR-10450 Do not allow to change the information to disburse after BOD2 and before sign
- **Diagram ID**: 159660
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    MOD_01_661_Change_application_disbursement_payment_channel["{MOD}01.661 Change application disbursement payment channel"]
    ADD_01_661_Change_application_disbursement_payment_channel_B["{ADD}01.661 Change application disbursement payment channel (Beneficiary)"]
    LOR_10603_Access_right_for_changing_disbursement_data["LOR-10603 Access right for changing disbursement data"]
    LOR_10450_Do_not_allow_to_change_the_information_to_disburse["LOR-10450 Do not allow to change the information to disburse after BOD2 and before sign"]
    MOD_01_661_Change_application_disbursement_payment_channel -->|unnamed| ADD_01_661_Change_application_disbursement_payment_channel_B
    LOR_10603_Access_right_for_changing_disbursement_data -->|unnamed| LOR_10450_Do_not_allow_to_change_the_information_to_disburse
```
