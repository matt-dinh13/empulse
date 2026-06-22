# CBL-3091 Cash payment deduction driven by a new parameter

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/In process/ISPAY/PAYM-1049 (CBL-3091) Cash payment deduction driven by a new parameter
- **Diagram ID**: 102775
- **Elements**: 2
- **Connectors**: 1

```mermaid
graph TD
    MOD_Compute_partner_s_payment_amount["{MOD}Compute partner’s payment amount"]
    MOD_05_090_Generate_outgoing_payment_for_contract["{MOD}05.090 Generate outgoing payment for contract"]
    MOD_05_090_Generate_outgoing_payment_for_contract -->|unnamed| MOD_Compute_partner_s_payment_amount
```
