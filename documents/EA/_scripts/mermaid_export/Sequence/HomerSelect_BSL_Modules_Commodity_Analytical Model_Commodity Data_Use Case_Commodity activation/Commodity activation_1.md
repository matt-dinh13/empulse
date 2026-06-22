# Commodity activation

```mermaid
sequenceDiagram
    participant Commodity as Commodity
    participant Kafka as Kafka
    participant RabbitMQ as RabbitMQ
    Commodity->>Commodity: Activate commodity
    Commodity->>Commodity: Activate commodity
    Kafka->>Commodity: coma.contract.event.v1
    Commodity->>Commodity: Activate commodity
    RabbitMQ->>Commodity: bsl.contract-supplement.v6
    RabbitMQ->>Commodity: am.headers.event.notification
```
