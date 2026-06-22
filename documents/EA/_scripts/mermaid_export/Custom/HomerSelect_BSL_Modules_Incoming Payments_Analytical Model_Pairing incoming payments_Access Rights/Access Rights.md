# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Analytical Model/Pairing incoming payments/Access Rights
- **Diagram ID**: 143081
- **Elements**: 6
- **Connectors**: 4

```mermaid
graph TD
    n_05_182_Pair_payment_with_contract["05.182 Pair payment with contract"]
    MOD_05_060_Decouple_incoming_payment_manually["{MOD}05.060 Decouple incoming payment manually"]
    n_05_030_Couple_incoming_payment_manually["05.030 Couple incoming payment manually"]
    n_05_182_Pair_payment_with_contract["05.182 Pair payment with contract"]
    n_05_060_Decouple_incoming_payment_manually["05.060 Decouple incoming payment manually"]
    n_05_030_Couple_incoming_payments_manually["05.030 Couple incoming payments manually"]
    n_05_030_Couple_incoming_payment_manually -->|unnamed| n_05_030_Couple_incoming_payments_manually
    n_05_030_Couple_incoming_payment_manually -->|unnamed| n_05_182_Pair_payment_with_contract
    MOD_05_060_Decouple_incoming_payment_manually -->|unnamed| n_05_060_Decouple_incoming_payment_manually
    n_05_182_Pair_payment_with_contract -->|unnamed| n_05_182_Pair_payment_with_contract
```
