# Business events - Types

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Business events/Types
- **Diagram ID**: 130080
- **Elements**: 6
- **Connectors**: 3

```mermaid
classDiagram
    class CardOperationFailedReasonTypeDto["CardOperationFailedReasonTypeDto"]
    class SimpleBusinessEventAttributeDto["SimpleBusinessEventAttributeDto"]
    class CardOperationFailedReasonDto["CardOperationFailedReasonDto"]
    class BusinessEventResultTypeDto["BusinessEventResultTypeDto"]
    class BusinessEventTypeDto["BusinessEventTypeDto"]
    class BusinessEventAttributeDto["BusinessEventAttributeDto"]
    CardOperationFailedReasonDto ..> CardOperationFailedReasonTypeDto : unnamed
    BusinessEventAttributeDto <|-- CardOperationFailedReasonDto : unnamed
    BusinessEventAttributeDto <|-- SimpleBusinessEventAttributeDto : unnamed
```
