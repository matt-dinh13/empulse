# Pair payment with contract

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/UseCase Model
- **Diagram ID**: 164101
- **Elements**: 10
- **Connectors**: 12

```mermaid
graph LR
    PaymentPairingService_PaymentPairingService_pair_and_unpari_["PaymentPairingService : PaymentPairingService - pair and unpari payment"]
    PaymentPairingService_PaymentPairingService_compute_amount_t["PaymentPairingService : PaymentPairingService - compute amount to pairing "]
    UseCase_Model_Cancel_incoming_payment["UseCase Model : Cancel incoming payment"]
    n_05_045_Cancel_incoming_payment(("05.045 Cancel incoming payment"))
    Use_Case_Model_Creating_incoming_payment_on_internal_compone["Use Case Model : Creating incoming payment on internal component request"]
    UseCase_Model_Couple_and_decouple_incoming_payment_manually["UseCase Model : Couple and decouple incoming payment manually"]
    n_05_185_Prepare_payments_to_pairing(("05.185 Prepare payments to pairing"))
    Cabus_AM[/"Cabus AM"/]
    Installment_schedule[/"Installment schedule"/]
    n_05_182_Pair_payment_with_contract(("05.182 Pair payment with contract"))
    PaymentPairingService_PaymentPairingService_pair_and_unpari_ -->|unnamed| n_05_182_Pair_payment_with_contract
    UseCase_Model_Couple_and_decouple_incoming_payment_manually -->|unnamed| n_05_182_Pair_payment_with_contract
    Use_Case_Model_Creating_incoming_payment_on_internal_compone -->|unnamed| n_05_182_Pair_payment_with_contract
    n_05_182_Pair_payment_with_contract --> Installment_schedule
    n_05_185_Prepare_payments_to_pairing --> Installment_schedule
    n_05_182_Pair_payment_with_contract --> Cabus_AM
    n_05_182_Pair_payment_with_contract -.->|include| n_05_185_Prepare_payments_to_pairing
    UseCase_Model_Cancel_incoming_payment -->|unnamed| n_05_045_Cancel_incoming_payment
    n_05_182_Pair_payment_with_contract -.->|include| n_05_045_Cancel_incoming_payment
    n_05_185_Prepare_payments_to_pairing -->|unnamed| PaymentPairingService_PaymentPairingService_compute_amount_t
    Installment_schedule --> n_05_045_Cancel_incoming_payment
    Cabus_AM --> n_05_045_Cancel_incoming_payment
```
