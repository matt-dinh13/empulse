# SIR_Contract_Insurance_Service_creation_seq

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR)/Analytical Model/Use Case Model/Service Interpreter (SIR)/SIR_Contract_Insurance_Service_creation_seq
- **Diagram ID**: 146208
- **Elements**: 6
- **Connectors**: 10

```mermaid
sequenceDiagram
    participant unnamed as unnamed
    participant VASDeals as VASDeals
    participant SIR as SIR
    participant ContractServices as ContractServices
    participant TransactionSupplementAccepted as TransactionSupplementAccepted
    participant VAS_Sales_Quote as VAS Sales Quote
    unnamed->>VASDeals: NoteLink
    SIR->>+VASDeals: Activate VAS Deal
    ContractServices->>+SIR: Sequence
    SIR->>+VASDeals: Add Insurance Period
    TransactionSupplementAccepted->>+SIR: Sequence
    SIR->>+ContractServices: Assign VAS
    VAS_Sales_Quote->>+SIR: Sequence
    SIR->>+VASDeals: Create VAS Deal
    VASDeals->>+SIR: Sequence
    SIR->>+VASDeals: Add Insurance Period
```
