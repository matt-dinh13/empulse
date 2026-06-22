# Business rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Outgoing Payments/Business rules
- **Diagram ID**: 117341
- **Elements**: 6
- **Connectors**: 3

```mermaid
graph TD
    Get_OBS_contract_identification["Get OBS contract identification"]
    Processing_PaymentOrderRequest["Processing PaymentOrderRequest"]
    Processing_CancelOugoingPaymentRequest["Processing CancelOugoingPaymentRequest"]
    Processing_DisbursementConfirmationResponse["Processing DisbursementConfirmationResponse"]
    Generating_DisbursementConfirmationRequest["Generating DisbursementConfirmationRequest "]
    MOD_Processing_OutgoingPaymentDto["{MOD}Processing OutgoingPaymentDto"]
    Processing_PaymentOrderRequest -->|unnamed| MOD_Processing_OutgoingPaymentDto
    Processing_CancelOugoingPaymentRequest -->|unnamed| MOD_Processing_OutgoingPaymentDto
    MOD_Processing_OutgoingPaymentDto -->|unnamed| Get_OBS_contract_identification
```
