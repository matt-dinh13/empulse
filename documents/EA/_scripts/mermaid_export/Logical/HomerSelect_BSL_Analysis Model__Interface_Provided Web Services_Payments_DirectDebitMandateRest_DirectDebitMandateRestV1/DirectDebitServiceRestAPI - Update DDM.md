# DirectDebitServiceRestAPI - Update DDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1
- **Diagram ID**: 147106
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class regularPaymentData["regularPaymentData"]
    class DDMBankAccountData["DDMBankAccountData"]
    class DDMExtendedProperties["DDMExtendedProperties"]
    class updateDDMRequest["updateDDMRequest"]
    class UpdateDDMResponse["UpdateDDMResponse"]
    class DirectDebitServiceRestAPI["DirectDebitServiceRestAPI"]
    DirectDebitServiceRestAPI ..> UpdateDDMResponse : unnamed
    DirectDebitServiceRestAPI ..> updateDDMRequest : unnamed
    updateDDMRequest ..> DDMExtendedProperties : unnamed
    updateDDMRequest ..> DDMBankAccountData : unnamed
    updateDDMRequest ..> regularPaymentData : unnamed
```
