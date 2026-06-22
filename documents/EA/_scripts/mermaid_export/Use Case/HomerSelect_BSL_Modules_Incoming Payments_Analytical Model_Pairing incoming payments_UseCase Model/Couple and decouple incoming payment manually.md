# Couple and decouple incoming payment manually

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/UseCase Model
- **Diagram ID**: 164100
- **Elements**: 14
- **Connectors**: 16

```mermaid
graph LR
    UseCase_Model_Pair_payment_with_contract["UseCase Model : Pair payment with contract"]
    PaymentPairingService_PaymentPairingService_pair_and_unpari_["PaymentPairingService :PaymentPairingService - pair and unpari payment"]
    unnamed["unnamed"]
    n_05_182_Pair_payment_with_contract(("05.182 Pair payment with contract"))
    unnamed["unnamed"]
    unnamed["unnamed"]
    n_05_045_Cancel_incoming_payment(("05.045 Cancel incoming payment"))
    unnamed["unnamed"]
    Incoming_payment_unpairing_is_alowed["Incoming payment unpairing is alowed"]
    Browse_incoming_payments_Browse_incoming_payments_UI["Browse incoming payments : Browse incoming payments - UI"]
    User_Interface_Couple_incoming_payment_manually_UI["User Interface : Couple incoming payment manually - UI"]
    User[/"User"/]
    MOD_05_060_Decouple_incoming_payment_manually(("{MOD}05.060 Decouple incoming payment manually"))
    n_05_030_Couple_incoming_payment_manually(("05.030 Couple incoming payment manually"))
    n_05_030_Couple_incoming_payment_manually -->|unnamed| PaymentPairingService_PaymentPairingService_pair_and_unpari_
    n_05_182_Pair_payment_with_contract -->|unnamed| unnamed
    UseCase_Model_Pair_payment_with_contract -->|unnamed| n_05_182_Pair_payment_with_contract
    n_05_030_Couple_incoming_payment_manually -.->|include| n_05_182_Pair_payment_with_contract
    MOD_05_060_Decouple_incoming_payment_manually -.->|include| n_05_045_Cancel_incoming_payment
    n_05_182_Pair_payment_with_contract -.->|include| n_05_045_Cancel_incoming_payment
    MOD_05_060_Decouple_incoming_payment_manually -->|unnamed| PaymentPairingService_PaymentPairingService_pair_and_unpari_
    MOD_05_060_Decouple_incoming_payment_manually -->|unnamed| Incoming_payment_unpairing_is_alowed
    unnamed -->|unnamed| n_05_030_Couple_incoming_payment_manually
    MOD_05_060_Decouple_incoming_payment_manually -->|unnamed| Browse_incoming_payments_Browse_incoming_payments_UI
    n_05_030_Couple_incoming_payment_manually -->|unnamed| Browse_incoming_payments_Browse_incoming_payments_UI
    unnamed -->|unnamed| MOD_05_060_Decouple_incoming_payment_manually
    User_Interface_Couple_incoming_payment_manually_UI -->|unnamed| n_05_030_Couple_incoming_payment_manually
    User --- n_05_045_Cancel_incoming_payment
    User --> MOD_05_060_Decouple_incoming_payment_manually
    User --> n_05_030_Couple_incoming_payment_manually
```
