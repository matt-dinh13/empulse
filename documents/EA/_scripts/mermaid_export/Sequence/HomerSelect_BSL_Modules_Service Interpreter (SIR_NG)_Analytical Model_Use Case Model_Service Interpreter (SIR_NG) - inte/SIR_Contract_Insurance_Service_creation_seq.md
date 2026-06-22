# SIR_Contract_Insurance_Service_creation_seq

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Modules/Service Interpreter (SIR_NG)/Analytical Model/Use Case Model/Service Interpreter (SIR_NG) - interaction diagrams/SIR_Contract_Insurance_Service_creation_seq
- **Diagram ID**: 160387
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
    SIR->>+VASDeals: Create VAS Deal
    SIR->>+ContractServices: Assign VAS
    SIR->>+VASDeals: Activate VAS Deal
    SIR->>+VASDeals: Add Insurance Period
    VASDeals->>+SIR: Sequence
    ContractServices->>+SIR: Sequence
    TransactionSupplementAccepted->>+SIR: Sequence
    VAS_Sales_Quote->>+SIR: Sequence
    SIR->>+VASDeals: Add Insurance Period
```
