# PAYM-1625 (CBL-4117) Outgoing Payment Disbursement for Telco Partners 

```mermaid
graph TD
    MOD_Compute_partner_s_payment_amount["{MOD}Compute partner’s payment amount"]
    MOD_05_090_Generate_outgoing_payment_for_contract["{MOD}05.090 Generate outgoing payment for contract"]
    Requirement1["Requirement1"]
    MOD_05_090_Generate_outgoing_payment_for_contract -->|unnamed| MOD_Compute_partner_s_payment_amount
```
