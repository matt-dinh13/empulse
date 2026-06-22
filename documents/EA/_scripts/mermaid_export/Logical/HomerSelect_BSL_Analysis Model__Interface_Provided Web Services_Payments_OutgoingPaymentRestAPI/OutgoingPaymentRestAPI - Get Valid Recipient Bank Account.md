# OutgoingPaymentRestAPI - Get Valid Recipient Bank Account

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/OutgoingPaymentRestAPI
- **Diagram ID**: 163416
- **Elements**: 4
- **Connectors**: 3

```mermaid
classDiagram
    class OutgoingPaymentBankAccountData["OutgoingPaymentBankAccountData"]
    class GetValidRecipientBankAccountResponse["GetValidRecipientBankAccountResponse"]
    class GetValidRecipientBankAccountRequest["GetValidRecipientBankAccountRequest"]
    class OutgoingPaymentRestAPI["OutgoingPaymentRestAPI"]
    OutgoingPaymentRestAPI ..> GetValidRecipientBankAccountRequest : unnamed
    OutgoingPaymentRestAPI ..> GetValidRecipientBankAccountResponse : unnamed
    GetValidRecipientBankAccountResponse ..> OutgoingPaymentBankAccountData : unnamed
```
