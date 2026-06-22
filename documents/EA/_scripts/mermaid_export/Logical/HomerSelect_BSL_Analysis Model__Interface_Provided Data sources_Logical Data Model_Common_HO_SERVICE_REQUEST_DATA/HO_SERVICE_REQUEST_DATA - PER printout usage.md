# HO_SERVICE_REQUEST_DATA - PER printout usage

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_SERVICE_REQUEST_DATA
- **Diagram ID**: 136375
- **Elements**: 14
- **Connectors**: 11

```mermaid
classDiagram
    class ClientDataDto["ClientDataDto"]
    class PartialEarlyRepaymentRequest["PartialEarlyRepaymentRequest"]
    class BonusServiceAttribute["BonusServiceAttribute"]
    class EvaluatedBonusService["EvaluatedBonusService"]
    class AddressTypesDto["AddressTypesDto"]
    class AddressType["AddressType"]
    class ContractDataDto["ContractDataDto"]
    class MoneyType["MoneyType"]
    class MOD_RequestTypeChoice["{MOD}RequestTypeChoice"]
    class RequestFeeData["RequestFeeData"]
    class Generate_barcode["Generate barcode"]
    class MOD_NameType["{MOD}NameType"]
    class LoanServiceRequestType["LoanServiceRequestType"]
    class LoanServiceRequestDocument["LoanServiceRequestDocument"]
    LoanServiceRequestDocument ..> LoanServiceRequestType : unnamed
    LoanServiceRequestDocument ..> Generate_barcode : unnamed
    LoanServiceRequestDocument ..> RequestFeeData : unnamed
    LoanServiceRequestDocument --> MOD_RequestTypeChoice : unnamed
    RequestFeeData ..> MoneyType : unnamed
    LoanServiceRequestDocument ..> ContractDataDto : unnamed
    ClientDataDto ..> AddressTypesDto : unnamed
    LoanServiceRequestDocument ..> EvaluatedBonusService : unnamed
    EvaluatedBonusService ..> BonusServiceAttribute : unnamed
    LoanServiceRequestDocument ..> ClientDataDto : unnamed
    MOD_RequestTypeChoice ..> PartialEarlyRepaymentRequest : unnamed
```
