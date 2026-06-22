# Pay-off REL Operation diagram

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract pay-off/UseCase Model/Pay-off REL Operation diagram
- **Diagram ID**: 160825
- **Elements**: 6
- **Connectors**: 12

```mermaid
sequenceDiagram
    participant RMQ_broker as RMQ broker
    participant Loxon as Loxon
    participant COMA as COMA
    participant KAFKA as KAFKA
    participant BSL as BSL
    participant AM as AM
    RMQ_broker->>+Loxon: lcs.account_closure_result.queue
    COMA->>+KAFKA: coma.contract.event.v1
    RMQ_broker->>+COMA: clm.event.account.rel-account-closure-result.v1.queue
    Loxon->>+RMQ_broker: lcs.headers.payoff.request
    KAFKA->>+BSL: coma.contract.event.v1
    BSL->>+BSL: Update service and insurance status
    COMA->>+COMA: Status update + Bus.event
    RMQ_broker->>+BSL: coma.event.account.rel-account-closure-result.v1.queue
    RMQ_broker->>+AM: am.lcs.payoff.notification.queue
    AM->>+RMQ_broker: am.topic.account.closure
    AM->>+RMQ_broker: am.topic.account.closure
    BSL->>+BSL: Request postprocessing()
```
