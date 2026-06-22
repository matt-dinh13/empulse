# Pay-off CEL Operation diagram

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/UseCase Model/Pay-off CEL Operation diagram
- **Diagram ID**: 160826
- **Elements**: 6
- **Connectors**: 15

```mermaid
sequenceDiagram
    participant User as User
    participant BSL as BSL
    participant COMA as COMA
    participant KAFKA as KAFKA
    participant Loxon as Loxon
    participant RMQ_broker as RMQ broker
    User->>+BSL: BSL UI
    BSL->>+BSL: Request validation
    BSL->>+COMA: COMA.payOffContract Request
    BSL->>+BSL: Request postprocessing()
    KAFKA->>+BSL: coma.contract.event.v1
    BSL->>+BSL: Request validation
    BSL->>+BSL: Request processing()
    COMA->>+BSL: COMA.payOffContract Response()
    COMA->>+KAFKA: coma.contract.event.v1
    Loxon->>+RMQ_broker: lcs.headers.payoff.request
    COMA->>+COMA: Contract Status update + Bus.event
    RMQ_broker->>+Loxon: lcs.payoff_result.queue
    RMQ_broker->>+BSL: clm.request.contract.pay-off.v1.queue
    BSL->>+RMQ_broker: clm.response.contract
    COMA->>+COMA: Contract Data stream
```
