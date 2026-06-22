# DirectDebitServiceRestAPI - Get DDM

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitMandateRest/DirectDebitMandateRestV1
- **Diagram ID**: 147108
- **Elements**: 8
- **Connectors**: 7

```mermaid
classDiagram
    class ADD_Extended_Property["{ADD}Extended Property"]
    class DDMExtendedPropertyData["DDMExtendedPropertyData"]
    class ECSProviderData["ECSProviderData"]
    class BankAccountInfoDto["BankAccountInfoDto"]
    class DirectDebitMandateData["DirectDebitMandateData"]
    class GetDDMRequest["GetDDMRequest"]
    class GetDDMResponse["GetDDMResponse"]
    class DirectDebitServiceRestAPI["DirectDebitServiceRestAPI"]
    DirectDebitServiceRestAPI ..> GetDDMResponse : unnamed
    DirectDebitServiceRestAPI ..> GetDDMRequest : unnamed
    GetDDMResponse ..> DirectDebitMandateData : unnamed
    DirectDebitMandateData ..> BankAccountInfoDto : unnamed
    DirectDebitMandateData ..> ECSProviderData : unnamed
    ADD_Extended_Property ..> DDMExtendedPropertyData : unnamed
    DirectDebitMandateData ..> ADD_Extended_Property : unnamed
```
