# DebtFullInfo

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Debt catalogue/Interface Provided/RabbitMQ/DebtFullInfo/v1.0/DebtFullInfoMessage
- **Diagram ID**: 155405
- **Elements**: 7
- **Connectors**: 7

```mermaid
classDiagram
    class n_01_486_Calculate_debt_full_info["01.486 Calculate debt full info"]
    class InstallmentType["InstallmentType"]
    class PaidInstallmentTypeOverview["PaidInstallmentTypeOverview"]
    class DebtInstallment["DebtInstallment"]
    class IncomingPaymentOverview["IncomingPaymentOverview"]
    class DebtFullInfo["DebtFullInfo"]
    unnamed --> DebtFullInfo : unnamed
    DebtFullInfo ..> IncomingPaymentOverview : unnamed
    DebtFullInfo ..> DebtInstallment : unnamed
    DebtFullInfo ..> PaidInstallmentTypeOverview : unnamed
    PaidInstallmentTypeOverview ..> InstallmentType : unnamed
    DebtInstallment ..> InstallmentType : unnamed
    DebtFullInfo --> n_01_486_Calculate_debt_full_info : unnamed
```
