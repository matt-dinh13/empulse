# DirectDebitServiceRestAPI - Create DDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1
- **Diagram ID**: 147105
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class DDMExtendedProperties["DDMExtendedProperties"]
    class regularPaymentData["regularPaymentData"]
    class DdmJfsPartnerDto["DdmJfsPartnerDto"]
    class DDMBankAccountData["DDMBankAccountData"]
    class CreateDDMResponse["CreateDDMResponse"]
    class CreateDDMRequest["CreateDDMRequest"]
    class DirectDebitServiceRestAPI["DirectDebitServiceRestAPI"]
    DirectDebitServiceRestAPI ..> CreateDDMRequest : unnamed
    DirectDebitServiceRestAPI ..> CreateDDMResponse : unnamed
    CreateDDMRequest ..> DDMBankAccountData : unnamed
    CreateDDMRequest ..> DdmJfsPartnerDto : unnamed
    CreateDDMRequest ..> regularPaymentData : unnamed
    CreateDDMRequest ..> DDMExtendedProperties : unnamed
```
