# Common Automatic Import SD

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Communication/CommunicationListImportWS/Common Automatic Import SD
- **Diagram ID**: 100552
- **Elements**: 4
- **Connectors**: 4

```mermaid
sequenceDiagram
    participant OSB_mediator as OSB (mediator)
    participant External_System as External System
    participant BSL as BSL
    OSB_mediator->>+External_System: commonReceiveResult
    OSB_mediator->>+BSL: commonAutomaticImport
    External_System->>+OSB_mediator: commonAutomaticImport
    BSL->>+OSB_mediator: commonReceiveResult
```
