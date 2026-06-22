# ApplicationPaymentChannelManagementWS_v3 - Get DDM by Contract

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Application/ApplicationPaymentChannelManagementWS/ApplicationPaymentChannelManagementWS_v3
- **Diagram ID**: 158227
- **Elements**: 12
- **Connectors**: 11

```mermaid
classDiagram
    class DDMStatusTypeDto["DDMStatusTypeDto"]
    class DDMConfirmStatusTypeDto["DDMConfirmStatusTypeDto"]
    class FrequencyTypeDto["FrequencyTypeDto"]
    class AccountTypeDto["AccountTypeDto"]
    class BankAccountInfoDto["BankAccountInfoDto"]
    class DDMInfoBaseDto["DDMInfoBaseDto"]
    class GetDDMByApplicationResultCode["GetDDMByApplicationResultCode"]
    class MOD_01_462_Get_DDM_by_application["{MOD}01.462 Get DDM by application"]
    class GetDDMByApplicationFault["GetDDMByApplicationFault"]
    class GetDDMByApplicationResponse["GetDDMByApplicationResponse"]
    class GetDDMByApplicationRequest["GetDDMByApplicationRequest"]
    class ApplicationPaymentChannelManagementWS_v3["ApplicationPaymentChannelManagementWS_v3"]
    ApplicationPaymentChannelManagementWS_v3 ..> GetDDMByApplicationRequest : unnamed
    ApplicationPaymentChannelManagementWS_v3 ..> GetDDMByApplicationResponse : unnamed
    ApplicationPaymentChannelManagementWS_v3 ..> GetDDMByApplicationFault : unnamed
    MOD_01_462_Get_DDM_by_application <|.. ApplicationPaymentChannelManagementWS_v3 : unnamed
    GetDDMByApplicationFault ..> GetDDMByApplicationResultCode : unnamed
    GetDDMByApplicationResponse ..> DDMInfoBaseDto : unnamed
    DDMInfoBaseDto ..> BankAccountInfoDto : unnamed
    BankAccountInfoDto ..> AccountTypeDto : unnamed
    DDMInfoBaseDto ..> FrequencyTypeDto : unnamed
    DDMInfoBaseDto ..> DDMConfirmStatusTypeDto : unnamed
    DDMInfoBaseDto ..> DDMStatusTypeDto : unnamed
```
