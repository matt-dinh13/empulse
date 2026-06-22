# CEL Installment schedule - JMS messages

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Installment Schedule/Communication model/JMS messages
- **Diagram ID**: 75356
- **Elements**: 8
- **Connectors**: 6

```mermaid
classDiagram
    class InstallmentPartTypeDto["InstallmentPartTypeDto"]
    class InstallmentOperationTypeDto["InstallmentOperationTypeDto"]
    class RecalculationReasonTypeDto["RecalculationReasonTypeDto"]
    class InstallmentPartDto["InstallmentPartDto"]
    class InstallmentTypeDto["InstallmentTypeDto"]
    class InstallmentDto["InstallmentDto"]
    class Legend["Legend"]
    class InstallmentScheduleInfoRequest["InstallmentScheduleInfoRequest"]
    InstallmentScheduleInfoRequest ..> InstallmentDto : unnamed
    InstallmentDto ..> InstallmentTypeDto : unnamed
    InstallmentDto ..> InstallmentOperationTypeDto : unnamed
    InstallmentDto ..> InstallmentPartDto : unnamed
    InstallmentDto ..> RecalculationReasonTypeDto : unnamed
    InstallmentPartDto ..> InstallmentPartTypeDto : unnamed
```
