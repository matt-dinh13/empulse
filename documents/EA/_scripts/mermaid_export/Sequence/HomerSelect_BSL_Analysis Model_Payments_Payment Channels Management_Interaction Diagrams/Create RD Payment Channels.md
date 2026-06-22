# Create RD Payment Channels

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Interaction Diagrams
- **Diagram ID**: 162512
- **Elements**: 4
- **Connectors**: 6

```mermaid
sequenceDiagram
    participant CLM as CLM
    participant External_Reference as External Reference
    participant PAYM as PAYM
    CLM->>+External_Reference: Sequence
    PAYM->>+CLM: Response OK (Data Exchange ID)
    PAYM->>+PAYM: Payment Channel Created and Validated
    CLM->>+PAYM: POST Create And Validate Payment Channel
    CLM->>+PAYM: GET Payment Channel
    PAYM->>+CLM: Payment Channel Data
```
