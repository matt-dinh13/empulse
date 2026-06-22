# RabbitMQ Messages - Domain Data

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Blocking outgoing payments/RabbitMQ Messages
- **Diagram ID**: 149022
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class MOD_Unblock_Outgoing_Payments["{MOD}Unblock Outgoing Payments"]
    class Block_Outgoing_Payments["Block Outgoing Payments"]
    class DomainData["DomainData "]
    Block_Outgoing_Payments --> DomainData : unnamed
    MOD_Unblock_Outgoing_Payments --> DomainData : unnamed
```
