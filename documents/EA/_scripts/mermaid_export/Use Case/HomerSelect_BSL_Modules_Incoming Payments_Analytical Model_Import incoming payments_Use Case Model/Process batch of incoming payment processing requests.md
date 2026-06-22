# Process batch of incoming payment processing requests

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model
- **Diagram ID**: 164570
- **Elements**: 15
- **Connectors**: 8

```mermaid
graph LR
    n_03_140_Recalculate_accrued_income(("03.140 Recalculate accrued income"))
    n_05_046_Cancel_special_payments["05.046 Cancel special payments"]
    MOD_05_200_Perform_decoupling(("{MOD}05.200 Perform decoupling"))
    Create_incoming_payment_rule["Create incoming payment rule"]
    MOD_01_720_Reactivate_finished_contracts(("{MOD}01.720 Reactivate finished contracts"))
    MOD_Contract_pairing_allowed["{MOD}Contract pairing allowed"]
    MOD_05_180_Perform_coupling_payments_with_instalments(("{MOD}05.180 Perform coupling payments with instalments"))
    UseCase_Model_Processing_incoming_payments_message["UseCase Model : Processing incoming payments message"]
    Use_Case_Import_incoming_payments["Use Case : Import incoming payments"]
    MOD_05_183_Process_batch_of_incoming_payment_processing_requ(("{MOD}05.183 Process batch of incoming payment processing requests"))
    Special_incoming_payments["Special incoming payments"]
    n_05_045_Cancel_incoming_payment(("05.045 Cancel incoming payment"))
    Incoming_Payments_Generated_JMS_messages_Set_incoming_paymen["Incoming Payments :Generated JMS messages - Set incoming payments"]
    MOD_05_184_Reflect_change_of_balance(("{MOD}05.184 Reflect change of balance"))
    n_05_182_Pair_payment_with_contract(("05.182 Pair payment with contract"))
    MOD_05_184_Reflect_change_of_balance -.->|include| MOD_05_180_Perform_coupling_payments_with_instalments
    MOD_05_184_Reflect_change_of_balance -.->|include| n_03_140_Recalculate_accrued_income
    n_05_046_Cancel_special_payments -->|External Reference| n_05_045_Cancel_incoming_payment
    MOD_05_180_Perform_coupling_payments_with_instalments -.->|include| MOD_05_200_Perform_decoupling
    MOD_05_183_Process_batch_of_incoming_payment_processing_requ -->|unnamed| UseCase_Model_Processing_incoming_payments_message
    n_05_045_Cancel_incoming_payment -.->|include| MOD_05_200_Perform_decoupling
    MOD_05_183_Process_batch_of_incoming_payment_processing_requ -->|unnamed| Use_Case_Import_incoming_payments
    MOD_05_200_Perform_decoupling -->|unnamed| Special_incoming_payments
```
