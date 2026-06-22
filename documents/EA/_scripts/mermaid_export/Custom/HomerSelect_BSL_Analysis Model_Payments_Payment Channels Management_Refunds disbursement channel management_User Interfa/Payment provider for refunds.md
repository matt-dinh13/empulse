# Payment provider for refunds

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Refunds disbursement channel management/User Interface Model
- **Diagram ID**: 100624
- **Elements**: 7
- **Connectors**: 1

```mermaid
graph TD
    Partner_bank_address["Partner bank address"]
    Partner["Partner"]
    Partner_bank_branch["Partner bank branch"]
    Region["Region"]
    Payment_provider_for_refunds_change_disb_channel["Payment provider for refunds - change disb. channel"]
    District["District"]
    Filtering_based_on_address_structure["Filtering based on address structure"]
    Payment_provider_for_refunds_change_disb_channel -->|unnamed| Filtering_based_on_address_structure
```
