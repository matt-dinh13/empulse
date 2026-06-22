# DDS export

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDS
- **Diagram ID**: 162812
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class ddmAttributeTypeDto["ddmAttributeTypeDto"]
    class ddmJfsPartnerDto["ddmJfsPartnerDto"]
    class n_05_262_DDS_process["05.262 DDS process"]
    class DDS_export["DDS export"]
    n_05_262_DDS_process ..> DDS_export : unnamed
    DDS_export ..> ddmJfsPartnerDto : unnamed
    DDS_export ..> ddmAttributeTypeDto : unnamed
```
