# Generated JMS messages - Contract Securitization

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Contract/Contract Securitization
- **Diagram ID**: 147420
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class ADD_OwnerInfoDto["{ADD}OwnerInfoDto"]
    class SecuritizedPenaltyItemDto["SecuritizedPenaltyItemDto"]
    class SecuritizedFeeItemDto["SecuritizedFeeItemDto"]
    class SecuritizationTrancheStatusTypeDto["SecuritizationTrancheStatusTypeDto"]
    class CreditOwnerDto["CreditOwnerDto"]
    class MoneyDto["MoneyDto"]
    class ContractSecuritizationStatusTypeDto["ContractSecuritizationStatusTypeDto"]
    class SecuritizedContractDto["SecuritizedContractDto"]
    class SecuritizationTrancheDto["SecuritizationTrancheDto"]
    class DEL_ContractSecuritizationNotification["{DEL}ContractSecuritizationNotification"]
    SecuritizedContractDto ..> SecuritizedPenaltyItemDto : unnamed
    SecuritizedContractDto ..> ContractSecuritizationStatusTypeDto : unnamed
    SecuritizedContractDto ..> SecuritizedFeeItemDto : unnamed
    SecuritizedContractDto ..> ADD_OwnerInfoDto : unnamed
    SecuritizedContractDto ..> MoneyDto : unnamed
    SecuritizationTrancheDto ..> SecuritizedContractDto : unnamed
    SecuritizationTrancheDto ..> CreditOwnerDto : unnamed
    SecuritizationTrancheDto ..> SecuritizationTrancheStatusTypeDto : unnamed
    DEL_ContractSecuritizationNotification ..> SecuritizationTrancheDto : unnamed
```
