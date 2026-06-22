# Interfaces overiew

```mermaid
graph TD
    Local_payment_transformation_layer["Local payment transformation layer"]
    Account_Management["Account Management"]
    OSB["OSB"]
    BSL["BSL"]
    INCPAY_module["INCPAY module"]
    File_storage["File storage"]
    Loxon["Loxon"]
    BSL -->|IncomingPaymentResponse RMQ| INCPAY_module
    BSL -->|ContractFullInfo RMQ| INCPAY_module
    BSL -->|PaymentsWS| INCPAY_module
    OSB -->|automaticIncomingPaymentsImport REST API| INCPAY_module
    OSB -->|getActivePayments REST API| INCPAY_module
    OSB -->|recoupleMispostedPayment REST API| INCPAY_module
    Account_Management -->|PaymentManagementWS| INCPAY_module
    Local_payment_transformation_layer -->|PaymentService| OSB
    Local_payment_transformation_layer -->|unnamed| File_storage
    OSB -->|IncomingPaymentWS (external requets)| INCPAY_module
    File_storage -->|unnamed| INCPAY_module
    INCPAY_module -->|AMQP IncomingPaymentsConnector| BSL
    BSL -->|RefundInfoMessage RMQ| INCPAY_module
    BSL -->|ArtificialIncomingPaymentRequest RMQ| INCPAY_module
    BSL -->|PaymentManagementWS| INCPAY_module
    Loxon -->|getActivePayments REST API| INCPAY_module
    INCPAY_module -->|AccountManagementWS| Account_Management
```
