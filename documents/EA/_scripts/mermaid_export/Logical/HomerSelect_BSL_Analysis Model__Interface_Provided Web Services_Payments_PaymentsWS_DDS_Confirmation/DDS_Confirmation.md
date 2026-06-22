# DDS_Confirmation

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentsWS/DDS_Confirmation
- **Diagram ID**: 109307
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class DdmJfsPartnerDto["DdmJfsPartnerDto"]
    class moneyAmountType["moneyAmountType"]
    class bankAccountNumberType["bankAccountNumberType"]
    class directDebitStatementType["directDebitStatementType"]
    class directDebitStatementsType["directDebitStatementsType"]
    class hsDirectDebitStatementsFile["hsDirectDebitStatementsFile"]
    directDebitStatementType ..> DdmJfsPartnerDto : unnamed
    hsDirectDebitStatementsFile --> directDebitStatementsType : unnamed
    directDebitStatementsType --> directDebitStatementType : unnamed
    hsDirectDebitStatementsFile --> bankAccountNumberType : unnamed
    directDebitStatementType ..> moneyAmountType : unnamed
```
