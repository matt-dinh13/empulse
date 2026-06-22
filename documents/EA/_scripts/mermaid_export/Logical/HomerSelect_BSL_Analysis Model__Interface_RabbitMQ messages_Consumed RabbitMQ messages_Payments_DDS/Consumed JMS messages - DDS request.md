# Consumed JMS messages - DDS request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Consumed RabbitMQ messages/Payments/DDS
- **Diagram ID**: 97288
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class AttributeDto["AttributeDto"]
    class DDSRequestTypeDto["DDSRequestTypeDto"]
    class DDSRequestDto["DDSRequestDto"]
    class DDSRequestsMessage["DDSRequestsMessage"]
    DDSRequestsMessage ..> DDSRequestDto : unnamed
    DDSRequestDto ..> AttributeDto : unnamed
    DDSRequestDto ..> DDSRequestTypeDto : unnamed
```
