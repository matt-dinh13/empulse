# OutgoingDirectDebitMandates

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Direct Debit Mandate (DDM)/DDM confirmation/Logical Data Model/OutgoingDirectDebitMandates
- **Diagram ID**: 126805
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class DdmJfsPartnerDto["DdmJfsPartnerDto"]
    class bankAccountType["bankAccountType"]
    class MOD_ddmDocumentType[" {MOD}ddmDocumentType"]
    class channelType["channelType"]
    class frequencyType["frequencyType"]
    class moneyAmountType["moneyAmountType"]
    class ddmDocumentsType["ddmDocumentsType"]
    class directDebitMandatesType["directDebitMandatesType"]
    class directDebitMandate["directDebitMandate"]
    class hsOutgoingDirectDebitMandateFile["hsOutgoingDirectDebitMandateFile"]
    directDebitMandatesType --> directDebitMandate : directDebitMandate
    hsOutgoingDirectDebitMandateFile --> directDebitMandatesType : unnamed
    directDebitMandate --> ddmDocumentsType : unnamed
    directDebitMandate --> moneyAmountType : unnamed
    directDebitMandate --> frequencyType : unnamed
    directDebitMandate --> channelType : unnamed
    ddmDocumentsType --> MOD_ddmDocumentType : unnamed
    directDebitMandate --> bankAccountType : unnamed
    directDebitMandate ..> DdmJfsPartnerDto : unnamed
```
