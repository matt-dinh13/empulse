# DirectDebitService.getDDMByCUID

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/DirectDebitService/getDDMByCUID
- **Diagram ID**: 136604
- **Elements**: 14
- **Connectors**: 13

```mermaid
classDiagram
    class DdmJfsPartnerDto["DdmJfsPartnerDto"]
    class DDMFilterTypeDto["DDMFilterTypeDto"]
    class ContractDDMBaseDto["ContractDDMBaseDto"]
    class n_01_583_Get_DDM_by_CUID["01.583 - Get DDM by CUID"]
    class AccountTypeDto["AccountTypeDto"]
    class FrequencyTypeDto["FrequencyTypeDto"]
    class BankAccountInfoDto["BankAccountInfoDto"]
    class DDMStatusTypeDto["DDMStatusTypeDto"]
    class DDMConfirmStatusTypeDto["DDMConfirmStatusTypeDto"]
    class DDMInfoBaseDto["DDMInfoBaseDto"]
    class GetDDMInfoResultTypeDto["GetDDMInfoResultTypeDto"]
    class GetDDMByCUIDResponse["GetDDMByCUIDResponse"]
    class GetDDMByCUIDRequest["GetDDMByCUIDRequest"]
    class DirectDebitService["DirectDebitService"]
    GetDDMByCUIDResponse ..> GetDDMInfoResultTypeDto : unnamed
    GetDDMByCUIDResponse ..> DDMInfoBaseDto : unnamed
    GetDDMByCUIDRequest ..> DDMFilterTypeDto : unnamed
    DirectDebitService ..> GetDDMByCUIDRequest : unnamed
    DirectDebitService ..> n_01_583_Get_DDM_by_CUID : unnamed
    DirectDebitService ..> GetDDMByCUIDResponse : unnamed
    DDMInfoBaseDto ..> BankAccountInfoDto : unnamed
    BankAccountInfoDto ..> AccountTypeDto : unnamed
    DDMInfoBaseDto ..> ContractDDMBaseDto : unnamed
    DDMInfoBaseDto ..> FrequencyTypeDto : unnamed
    DDMInfoBaseDto ..> DDMConfirmStatusTypeDto : unnamed
    DDMInfoBaseDto ..> DDMStatusTypeDto : unnamed
    DDMInfoBaseDto ..> DdmJfsPartnerDto : unnamed
```
