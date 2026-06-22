# Bonus service request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/Interest Back/Logical Data Model
- **Diagram ID**: 163993
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class RequestStatus["RequestStatus"]
    class BonusServiceType["BonusServiceType"]
    class OperationType["OperationType"]
    class Bonus_Service_Request["Bonus Service Request"]
    Bonus_Service_Request ..> OperationType : unnamed
    Bonus_Service_Request ..> BonusServiceType : unnamed
    Bonus_Service_Request ..> RequestStatus : unnamed
```
