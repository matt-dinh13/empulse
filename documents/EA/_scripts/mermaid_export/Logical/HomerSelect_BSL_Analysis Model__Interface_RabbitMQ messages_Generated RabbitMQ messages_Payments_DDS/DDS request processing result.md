#  DDS request processing result

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDS
- **Diagram ID**: 162810
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class DDSRequestProcessingResultMessage["DDSRequestProcessingResultMessage"]
    class DDSRequestProcessingResultItemDto["DDSRequestProcessingResultItemDto"]
    class DDSRequestProcessingResultTypeDto["DDSRequestProcessingResultTypeDto"]
    class DDSRequestProcessingResultDto["DDSRequestProcessingResultDto"]
    DDSRequestProcessingResultDto ..> DDSRequestProcessingResultTypeDto : unnamed
    DDSRequestProcessingResultDto ..> DDSRequestProcessingResultItemDto : unnamed
    DDSRequestProcessingResultMessage ..> DDSRequestProcessingResultDto : unnamed
```
