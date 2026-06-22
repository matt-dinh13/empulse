# DirectDebitServiceV5 - Get DDM by contract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/DirectDebitServiceV5
- **Diagram ID**: 147081
- **Elements**: 10
- **Connectors**: 10

```mermaid
classDiagram
    class DDMStatusTypeDto["DDMStatusTypeDto"]
    class AccountTypeDto["AccountTypeDto"]
    class DdmJfsPartnerDto["DdmJfsPartnerDto"]
    class BankAccountInfoDto["BankAccountInfoDto"]
    class DDMInfoBaseAttributes["DDMInfoBaseAttributes"]
    class DDMInfoBaseDto["DDMInfoBaseDto"]
    class GetDDMByContractResponse["GetDDMByContractResponse"]
    class ContractDDMBaseDto["ContractDDMBaseDto"]
    class GetDDMByContractRequest["GetDDMByContractRequest"]
    class DirectDebitService["DirectDebitService"]
    DirectDebitService ..> GetDDMByContractRequest : unnamed
    DDMInfoBaseDto ..> ContractDDMBaseDto : unnamed
    GetDDMByContractRequest ..> ContractDDMBaseDto : unnamed
    DirectDebitService ..> GetDDMByContractResponse : unnamed
    GetDDMByContractResponse ..> DDMInfoBaseDto : unnamed
    DDMInfoBaseDto ..> DDMInfoBaseAttributes : unnamed
    DDMInfoBaseDto ..> BankAccountInfoDto : unnamed
    DDMInfoBaseDto ..> DdmJfsPartnerDto : unnamed
    BankAccountInfoDto ..> AccountTypeDto : unnamed
    DDMInfoBaseDto ..> DDMStatusTypeDto : unnamed
```
