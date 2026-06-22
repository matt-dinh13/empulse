# Refunds - Communication tables

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Refunds/Communication Model/Communication tables
- **Diagram ID**: 55309
- **Elements**: 4
- **Connectors**: 2

```mermaid
classDiagram
    class Legend["Legend"]
    class CommResult["CommResult"]
    class REFUNDPAY222_Refund_Type["REFUNDPAY222 Refund Type"]
    class REFUNDPAY222["REFUNDPAY222"]
    REFUNDPAY222 ..> REFUNDPAY222_Refund_Type : unnamed
    REFUNDPAY222 ..> CommResult : unnamed
```
