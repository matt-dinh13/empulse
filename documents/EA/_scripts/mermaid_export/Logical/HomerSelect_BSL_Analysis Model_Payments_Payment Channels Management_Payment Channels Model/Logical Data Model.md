# Logical Data Model

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Payment Channels Management/Payment Channels Model
- **Diagram ID**: 162023
- **Elements**: 12
- **Connectors**: 9

```mermaid
classDiagram
    class Contract["Contract"]
    class Outgoing_Payment["Outgoing Payment"]
    class Payment_channel_history["Payment channel history"]
    class Local_applications["Local applications"]
    class Bank_Account["Bank Account"]
    class Payment_channel["Payment channel"]
    class Application["Application"]
    class Transaction["Transaction"]
    class Party["Party"]
    class Account["Account"]
    class Surrounding_modules["Surrounding modules"]
    class Surrounding_modules["Surrounding modules"]
    Contract --> Payment_channel : unnamed
    Outgoing_Payment --> Payment_channel : unnamed
    Payment_channel o-- Payment_channel_history : unnamed
    Local_applications --> Payment_channel : creates
    Application --> Payment_channel : creates and manages
    Transaction --> Payment_channel : creates and manages
    Party --> Payment_channel : creates and manages
    Account --> Payment_channel : creates and manages
    Payment_channel --> Bank_Account : references to
```
