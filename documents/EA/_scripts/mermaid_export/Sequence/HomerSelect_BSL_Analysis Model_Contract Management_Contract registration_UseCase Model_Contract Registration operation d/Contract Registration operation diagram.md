# Contract Registration operation diagram

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract registration/UseCase Model/Contract Registration operation diagram
- **Diagram ID**: 160871
- **Elements**: 9
- **Connectors**: 27

```mermaid
sequenceDiagram
    participant BSL as BSL
    participant REM as REM
    participant External_system as External system
    participant KAFKA as KAFKA
    participant COMA as COMA
    participant User as User
    BSL->>+REM: rem./registrations/contracts/register
    BSL->>+BSL: Post processing
    REM->>+REM: Sequence
    BSL->>+External_system: Sequence
    KAFKA->>+BSL: rem.contract-registration.event.v1
    REM->>+KAFKA: rem.contract-registration.event.v1
    BSL->>+REM: rem./registrations/contracts/check-all
    REM->>+REM: RegisterContract
    COMA->>+COMA: ContractSigned
    BSL->>+REM: rem./registrations/contracts/register
    External_system->>+BSL: ContractOperationsWS
    User->>+BSL: RegisterContract
    KAFKA->>+BSL: rem.contract-registration.event.v1
    REM->>+REM: RegisterContract
    REM->>+REM: CheckAllDocuments
    BSL->>+BSL: DocumentValidations
    REM->>+BSL: Sequence
    REM->>+KAFKA: rem.contract-registration.event.v1
    REM->>+BSL: Sequence
    REM->>+REM: CheckAllDocuments
    COMA->>+KAFKA: coma.contract.event.v1
    BSL->>+BSL: Post processing
    BSL->>+BSL: Post processing
    REM->>+BSL: Sequence
    REM->>+KAFKA: rem.contract-registration.event.v1
    KAFKA->>+BSL: rem.contract-registration.event.v1
    KAFKA->>+REM: coma.contract.event.v1
```
