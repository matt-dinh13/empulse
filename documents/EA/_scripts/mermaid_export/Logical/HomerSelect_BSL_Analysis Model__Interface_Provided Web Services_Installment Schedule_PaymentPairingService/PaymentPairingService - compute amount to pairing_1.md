# PaymentPairingService - compute amount to pairing 

```mermaid
classDiagram
    class MOD_05_033_Compute_amount_avaiable_to_pair_with_IS_on_local_["{MOD}05.033 Compute amount avaiable to pair with IS on local request"]
    class ComputeAmountToPairingResponse["ComputeAmountToPairingResponse"]
    class ComputeAmountToPairingRequest["ComputeAmountToPairingRequest"]
    class PaymentPairingService["PaymentPairingService"]
    PaymentPairingService --> ComputeAmountToPairingRequest : unnamed
    PaymentPairingService --> MOD_05_033_Compute_amount_avaiable_to_pair_with_IS_on_local_ : unnamed
    PaymentPairingService --> ComputeAmountToPairingResponse : unnamed
```
