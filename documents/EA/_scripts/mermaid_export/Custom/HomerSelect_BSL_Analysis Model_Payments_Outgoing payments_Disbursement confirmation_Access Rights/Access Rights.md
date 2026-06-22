# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Disbursement confirmation/Access Rights
- **Diagram ID**: 66199
- **Elements**: 7
- **Connectors**: 5

```mermaid
graph TD
    n_05_350_Process_disbursement_confirmation_message["05.350 Process disbursement confirmation message"]
    MOD_05_350_Process_disbursement_confirmation_message["{MOD}05.350 Process disbursement confirmation message"]
    Access_rights_for_processing_confirmations_about_payment_rec["Access rights for processing confirmations about payment receiving"]
    n_05_310_Process_confirmations_about_payment_receiving["05.310 Process confirmations about payment receiving"]
    n_05_300_Import_confirmations_about_payment_receiving["05.300 Import confirmations about payment receiving"]
    MOD_05_310_Process_disbursement_confirmations["{MOD}05.310 Process disbursement confirmations"]
    n_05_300_Import_disbursement_confirmations["05.300 Import disbursement confirmations"]
    Access_rights_for_processing_confirmations_about_payment_rec -->|unnamed| n_05_300_Import_confirmations_about_payment_receiving
    Access_rights_for_processing_confirmations_about_payment_rec -->|unnamed| n_05_310_Process_confirmations_about_payment_receiving
    MOD_05_350_Process_disbursement_confirmation_message -->|unnamed| n_05_350_Process_disbursement_confirmation_message
    MOD_05_310_Process_disbursement_confirmations -->|unnamed| n_05_310_Process_confirmations_about_payment_receiving
    n_05_300_Import_disbursement_confirmations -->|unnamed| n_05_300_Import_confirmations_about_payment_receiving
```
