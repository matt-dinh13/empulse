# IncomingDirectDebitMandates

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM confirmation/Logical Data Model/IncomingDirectDebitMandates
- **Diagram ID**: 162646
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class remarkType["remarkType"]
    class statusType["statusType"]
    class bankAccountTypeType["bankAccountTypeType"]
    class directDebitMandateResultType["directDebitMandateResultType"]
    class directDebitMandateResultsType["directDebitMandateResultsType"]
    class hsIncomingDirectDebitMandateFile["hsIncomingDirectDebitMandateFile"]
    hsIncomingDirectDebitMandateFile --> directDebitMandateResultsType : unnamed
    directDebitMandateResultsType --> directDebitMandateResultType : unnamed
    directDebitMandateResultType --> bankAccountTypeType : unnamed
    directDebitMandateResultType --> statusType : unnamed
    directDebitMandateResultType --> remarkType : unnamed
```
