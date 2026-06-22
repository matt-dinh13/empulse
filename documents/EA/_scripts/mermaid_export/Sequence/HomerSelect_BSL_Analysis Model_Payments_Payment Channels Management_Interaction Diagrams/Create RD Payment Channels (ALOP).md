# Create RD Payment Channels (ALOP)

- **Diagram Type**: Sequence
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Interaction Diagrams
- **Diagram ID**: 162515
- **Elements**: 5
- **Connectors**: 13

```mermaid
sequenceDiagram
    participant PAYM as PAYM
    participant Account_Management as Account Management
    participant ADS as ADS
    participant CLM_Mobile_APP as CLM / Mobile APP
    participant External_Reference as External Reference
    PAYM->>+PAYM: Creation of CL outgoing Payment
    PAYM->>+Account_Management: ConfirmDisbursementMessage
    ADS->>+CLM_Mobile_APP: Response (Data Exchange ID)
    CLM_Mobile_APP->>+Account_Management: AuthorizeTransactionWithIPConvertion
    Account_Management->>+Account_Management: ConfirmTransactionWithIPConvertion
    PAYM->>+CLM_Mobile_APP: Response OK (Data exchange ID)
    Account_Management->>+CLM_Mobile_APP: InstallmentPlanOfferResponse
    Account_Management->>+External_Reference: Sequence
    CLM_Mobile_APP->>+Account_Management: GetInstallmentPlanOffers
    Account_Management->>+PAYM: ProcessDisbursementRequest
    CLM_Mobile_APP->>+ADS: Save Payment Channel Data Exchange ID
    Account_Management->>+CLM_Mobile_APP: AuthorizeTransactionResponse
    CLM_Mobile_APP->>+PAYM: POST Create And Validate Payment Channel (RD)
```
