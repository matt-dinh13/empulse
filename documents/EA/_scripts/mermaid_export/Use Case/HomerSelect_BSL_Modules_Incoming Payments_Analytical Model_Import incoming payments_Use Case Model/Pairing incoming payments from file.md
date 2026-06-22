# Pairing incoming payments from file

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Import incoming payments/Use Case Model
- **Diagram ID**: 164569
- **Elements**: 14
- **Connectors**: 4

```mermaid
graph LR
    n_05_185_Prepare_payments_to_pairing(("05.185 Prepare payments to pairing"))
    Check_Payment_File_For_Finish["Check Payment File For Finish"]
    n_05_298_Check_incoming_payment_file_for_finish(("05.298 Check incoming payment file for finish"))
    Payment_Processing_Status_PaymentProcessingStatusWS["Payment Processing Status : PaymentProcessingStatusWS"]
    n_05_297_Process_results_of_incoming_payment_pairing(("05.297 Process results of incoming payment pairing"))
    n_05_292_Remove_incoming_payment_file(("05.292 Remove incoming payment file"))
    Incoming_payment_file_pairing_message_structure["Incoming payment file pairing message structure"]
    n_05_182_Pair_payment_with_contract(("05.182 Pair payment with contract"))
    User_Interface_Browse_incoming_payment_file["User Interface : Browse incoming payment file"]
    n_05_295_Pair_incoming_payments_from_file(("05.295 Pair incoming payments from file"))
    n_05_280_Browse_incoming_payment_files(("05.280 Browse incoming payment files"))
    n_05_290_Confirm_incoming_payment_file(("05.290 Confirm incoming payment file"))
    MOD_Contract_pairing_allowed["{MOD}Contract pairing allowed"]
    Algorithm_Find_contract_for_coupling["Algorithm: Find contract for coupling"]
    User_Interface_Browse_incoming_payment_file -->|unnamed| n_05_290_Confirm_incoming_payment_file
    Payment_Processing_Status_PaymentProcessingStatusWS -->|unnamed| n_05_297_Process_results_of_incoming_payment_pairing
    User_Interface_Browse_incoming_payment_file -->|unnamed| n_05_292_Remove_incoming_payment_file
    User_Interface_Browse_incoming_payment_file -->|unnamed| n_05_280_Browse_incoming_payment_files
```
