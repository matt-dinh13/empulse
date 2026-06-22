# Refunds - Business rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Refunds/Business rules
- **Diagram ID**: 98949
- **Elements**: 4
- **Connectors**: 2

```mermaid
graph TD
    Get_HoSel_contract_code["Get HoSel contract code"]
    Create_RESULT290_record_from_an_incoming_message["Create RESULT290 record from an incoming message"]
    Processing_RefundPaymentResponse["Processing RefundPaymentResponse"]
    Generating_RefundPaymentRequest["Generating RefundPaymentRequest "]
    Generating_RefundPaymentRequest -->|unnamed| Get_HoSel_contract_code
    Processing_RefundPaymentResponse -->|unnamed| Create_RESULT290_record_from_an_incoming_message
```
