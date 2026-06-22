# Commodity activation

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case/Commodity activation
- **Diagram ID**: 161136
- **Elements**: 3
- **Connectors**: 6

```mermaid
sequenceDiagram
    participant Commodity as Commodity
    participant Kafka as Kafka
    participant RabbitMQ as RabbitMQ
    Commodity->>+Commodity: Activate commodity
    Commodity->>+Commodity: Activate commodity
    Kafka->>+Commodity: coma.contract.event.v1
    Commodity->>+Commodity: Activate commodity
    RabbitMQ->>+Commodity: bsl.contract-supplement.v6
    RabbitMQ->>+Commodity: am.headers.event.notification
```
