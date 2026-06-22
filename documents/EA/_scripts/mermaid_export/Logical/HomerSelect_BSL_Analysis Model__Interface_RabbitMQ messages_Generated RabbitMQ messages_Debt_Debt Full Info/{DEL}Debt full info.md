# {DEL}Debt full info

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/RabbitMQ messages/Generated RabbitMQ messages/Debt/Debt Full Info
- **Diagram ID**: 155319
- **Elements**: 5
- **Connectors**: 3

```mermaid
classDiagram
    class ADDIncomingPaymentOverviewDto["{ADDIncomingPaymentOverviewDto"]
    class ADD_PaidInstallmentTypeOverviewDto["{ADD}PaidInstallmentTypeOverviewDto"]
    class InstallmentTypeDto["InstallmentTypeDto"]
    class ADD_DebtInstallmentDto["{ADD}DebtInstallmentDto"]
    class ADD_DebtFullInfoMessage["{ADD}DebtFullInfoMessage"]
    ADD_DebtFullInfoMessage ..> ADD_DebtInstallmentDto : unnamed
    ADD_DebtFullInfoMessage ..> ADD_PaidInstallmentTypeOverviewDto : unnamed
    ADD_DebtFullInfoMessage ..> ADDIncomingPaymentOverviewDto : unnamed
```
