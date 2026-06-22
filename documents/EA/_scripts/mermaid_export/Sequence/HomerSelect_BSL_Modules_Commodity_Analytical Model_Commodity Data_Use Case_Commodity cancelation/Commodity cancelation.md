# Commodity cancelation

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Commodity/Analytical Model/Commodity Data/Use Case/Commodity cancelation
- **Diagram ID**: 161149
- **Elements**: 8
- **Connectors**: 16

```mermaid
sequenceDiagram
    participant Commodity as Commodity
    participant External_manufacturer as External manufacturer
    participant Kafka as Kafka
    participant RabbitMQ as RabbitMQ
    Commodity->>+Commodity: Cancel commodity
    Commodity->>+External_manufacturer: Cancel external validation
    Kafka->>+Commodity: coma.contract.event.v1
    External_manufacturer->>+Commodity: Result
    Commodity->>+Commodity: Cancel commodity
    External_manufacturer->>+Commodity: Result
    RabbitMQ->>+Commodity: am.headers.event.notification
    Commodity->>+Commodity: Cancel commodity
    RabbitMQ->>+Commodity:  bsl.headers.application.notification
    Commodity->>+External_manufacturer: Cancel external validation
    Kafka->>+Commodity: bsl.contract-supplement.v6
    Commodity->>+Commodity: Cancel commodity
    External_manufacturer->>+Commodity: Result
    External_manufacturer->>+Commodity: Result
    Commodity->>+External_manufacturer: Cancel external validation
    Commodity->>+External_manufacturer: Cancel external validation
```
