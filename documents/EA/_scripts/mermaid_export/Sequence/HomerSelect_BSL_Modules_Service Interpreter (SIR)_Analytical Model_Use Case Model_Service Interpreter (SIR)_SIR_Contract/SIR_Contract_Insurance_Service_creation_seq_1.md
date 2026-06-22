# SIR_Contract_Insurance_Service_creation_seq

```mermaid
sequenceDiagram
    participant unnamed as unnamed
    participant VASDeals as VASDeals
    participant SIR as SIR
    participant ContractServices as ContractServices
    participant TransactionSupplementAccepted as TransactionSupplementAccepted
    participant VAS_Sales_Quote as VAS Sales Quote
    unnamed->>VASDeals: NoteLink
    SIR->>VASDeals: Activate VAS Deal
    ContractServices->>SIR: Sequence
    SIR->>VASDeals: Add Insurance Period
    TransactionSupplementAccepted->>SIR: Sequence
    SIR->>ContractServices: Assign VAS
    VAS_Sales_Quote->>SIR: Sequence
    SIR->>VASDeals: Create VAS Deal
    VASDeals->>SIR: Sequence
    SIR->>VASDeals: Add Insurance Period
```
