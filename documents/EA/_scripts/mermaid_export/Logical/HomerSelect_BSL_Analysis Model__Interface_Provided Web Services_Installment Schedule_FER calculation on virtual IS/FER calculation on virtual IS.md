# FER calculation on virtual IS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/FER calculation on virtual IS
- **Diagram ID**: 164648
- **Elements**: 5
- **Connectors**: 4

```mermaid
classDiagram
    class n_08_067_Calculate_FER_on_virtual_IS["08.067 Calculate FER on virtual IS"]
    class OfferData["OfferData"]
    class FERcalculationOnVirtualISResponse["FERcalculationOnVirtualISResponse"]
    class FERcalculationOnVirtualISRequest["FERcalculationOnVirtualISRequest"]
    class FERcalculationOnVirtualIS["FERcalculationOnVirtualIS"]
    FERcalculationOnVirtualIS ..> n_08_067_Calculate_FER_on_virtual_IS : unnamed
    FERcalculationOnVirtualISRequest ..> OfferData : unnamed
    FERcalculationOnVirtualIS ..> FERcalculationOnVirtualISResponse : unnamed
    FERcalculationOnVirtualIS ..> FERcalculationOnVirtualISRequest : unnamed
```
