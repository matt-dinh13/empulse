# Manual unpairing incoming payment from contract

```mermaid
graph TD
    Special_incoming_payments["Special incoming payments"]
    Use_Case_Pairing_installment_parts_procedure["Use Case : Pairing installment parts procedure"]
    Incoming_payment_pairing_is_not_locked["Incoming payment pairing is not locked"]
    MOD_05_200_Perform_decoupling["{MOD}05.200 Perform decoupling"]
    n_05_045_Cancel_incoming_payment["05.045 Cancel incoming payment"]
    Payment_unpairing_process_example["Payment unpairing process example"]
    User["User"]
    MOD_05_180_Perform_coupling_payments_with_instalments["{MOD}05.180 Perform coupling payments with instalments"]
    n_05_060_Decouple_incoming_payment_manually["05.060 Decouple incoming payment manually"]
    n_05_046_Cancel_special_payments["05.046 Cancel special payments"]
    n_05_060_Decouple_incoming_payment_manually -->|unnamed| MOD_05_180_Perform_coupling_payments_with_instalments
    n_05_060_Decouple_incoming_payment_manually -->|unnamed| n_05_045_Cancel_incoming_payment
    n_05_060_Decouple_incoming_payment_manually -->|unnamed| Incoming_payment_pairing_is_not_locked
    MOD_05_180_Perform_coupling_payments_with_instalments -->|unnamed| MOD_05_200_Perform_decoupling
    MOD_05_180_Perform_coupling_payments_with_instalments -->|unnamed| Use_Case_Pairing_installment_parts_procedure
    Payment_unpairing_process_example -->|unnamed| n_05_060_Decouple_incoming_payment_manually
    MOD_05_200_Perform_decoupling -->|unnamed| Special_incoming_payments
    MOD_05_200_Perform_decoupling -->|unnamed| Incoming_payment_pairing_is_not_locked
    User -->|unnamed| n_05_060_Decouple_incoming_payment_manually
    n_05_045_Cancel_incoming_payment -->|unnamed| MOD_05_200_Perform_decoupling
    n_05_046_Cancel_special_payments -->|External Reference| n_05_045_Cancel_incoming_payment
```
