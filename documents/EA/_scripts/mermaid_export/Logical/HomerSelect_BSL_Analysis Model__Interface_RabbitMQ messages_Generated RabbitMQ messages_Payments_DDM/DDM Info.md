# DDM Info

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Payments/DDM
- **Diagram ID**: 163221
- **Elements**: 10
- **Connectors**: 10

```mermaid
classDiagram
    class Send_DDM_Info["Send DDM Info"]
    class DdmJfsPartnerDto["DdmJfsPartnerDto"]
    class DDMRegularPaymentTypeDto["DDMRegularPaymentTypeDto"]
    class DDMStatusTypeDto["DDMStatusTypeDto"]
    class FrequencyTypeDto["FrequencyTypeDto"]
    class BankAccountInfoDto["BankAccountInfoDto"]
    class DDMInfoMessage["DDMInfoMessage"]
    class ContractDDMBaseDto["ContractDDMBaseDto"]
    class DDMConfirmStatusTypeDto["DDMConfirmStatusTypeDto"]
    class DDMInfoBaseDto["DDMInfoBaseDto"]
    DDMInfoMessage ..> DDMInfoBaseDto : unnamed
    DDMInfoBaseDto ..> DDMConfirmStatusTypeDto : unnamed
    DDMInfoMessage ..> ContractDDMBaseDto : unnamed
    DDMInfoBaseDto ..> ContractDDMBaseDto : unnamed
    DDMInfoMessage <|.. Send_DDM_Info : unnamed
    DDMInfoBaseDto ..> BankAccountInfoDto : unnamed
    DDMInfoBaseDto ..> FrequencyTypeDto : unnamed
    DDMInfoBaseDto ..> DDMStatusTypeDto : unnamed
    DDMInfoBaseDto ..> DDMRegularPaymentTypeDto : unnamed
    DDMInfoBaseDto ..> DdmJfsPartnerDto : unnamed
```
