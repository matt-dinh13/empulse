# CardRetirementWS.StolenCard

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Card Management System/CardRetirementWS
- **Diagram ID**: 95749
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class CardRetirementWS["CardRetirementWS"]
    class StolenCardResponse["StolenCardResponse"]
    class StolenCardRequest["StolenCardRequest"]
    CardRetirementWS ..> StolenCardRequest : External Reference
    CardRetirementWS ..> StolenCardResponse : External Reference
```
