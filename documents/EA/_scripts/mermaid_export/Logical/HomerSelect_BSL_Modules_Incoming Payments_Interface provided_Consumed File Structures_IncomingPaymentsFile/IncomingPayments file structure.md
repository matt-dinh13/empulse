# IncomingPayments file structure

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Consumed File Structures/IncomingPaymentsFile
- **Diagram ID**: 137897
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class currencyType["currencyType"]
    class moneyValueType["moneyValueType"]
    class moneyAmountType["moneyAmountType"]
    class bankAccountNumberType["bankAccountNumberType"]
    class incomingPaymentType["incomingPaymentType"]
    class incomingPaymentsType["incomingPaymentsType"]
    class hsIncomingPaymentsFile["hsIncomingPaymentsFile"]
    hsIncomingPaymentsFile ..> incomingPaymentsType : unnamed
    incomingPaymentsType ..> incomingPaymentType : unnamed
    incomingPaymentType ..> bankAccountNumberType : unnamed
    incomingPaymentType ..> moneyAmountType : unnamed
    moneyAmountType ..> moneyValueType : unnamed
    moneyAmountType ..> currencyType : unnamed
```
