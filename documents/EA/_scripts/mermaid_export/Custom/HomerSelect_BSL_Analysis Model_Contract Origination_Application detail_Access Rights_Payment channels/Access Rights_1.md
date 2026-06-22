# Access Rights

```mermaid
graph TD
    ADD_01_661_Change_application_disbursement_payment_channel_B["{ADD}01.661 Change application disbursement payment channel (Beneficiary)"]
    MOD_01_661_Change_application_disbursement_payment_channel["{MOD}01.661 Change application disbursement payment channel"]
    n_01_659_Change_application_repayment_payment_channel["01.659 Change application repayment payment channel"]
    n_01_661_Change_application_disbursement_payment_channel["01.661 Change application disbursement payment channel"]
    n_01_659_Change_application_repayment_payment_channel["01.659 Change application repayment payment channel"]
    n_01_659_Change_application_repayment_payment_channel -->|unnamed| n_01_659_Change_application_repayment_payment_channel
    MOD_01_661_Change_application_disbursement_payment_channel -->|unnamed| ADD_01_661_Change_application_disbursement_payment_channel_B
    MOD_01_661_Change_application_disbursement_payment_channel -->|unnamed| n_01_661_Change_application_disbursement_payment_channel
```
