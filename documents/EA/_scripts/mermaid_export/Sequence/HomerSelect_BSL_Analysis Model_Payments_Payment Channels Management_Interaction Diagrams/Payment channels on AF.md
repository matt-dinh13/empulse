# Payment channels on AF

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Interaction Diagrams
- **Diagram ID**: 162511
- **Elements**: 5
- **Connectors**: 12

```mermaid
sequenceDiagram
    participant LOR as LOR
    participant External_Reference as External Reference
    participant PAYM as PAYM
    LOR->>+External_Reference: Sequence
    PAYM->>+LOR: PC Validated
    LOR->>+PAYM: PATCH Draft or Payment Channel
    PAYM->>+PAYM: Payment Channel Draft Archived
    PAYM->>+PAYM: Update Payment Channel Draft
    PAYM->>+LOR: Response OK (Data Exchange ID))
    PAYM->>+PAYM: Create Payment Channel Draft
    LOR->>+PAYM: POST Create Payment Channel Draft
    PAYM->>+LOR: Response OK
    LOR->>+PAYM: POST Validate Payment Channel
    PAYM->>+PAYM: Payment Channel Saved
    LOR->>+External_Reference: Contract ready for signing
```
