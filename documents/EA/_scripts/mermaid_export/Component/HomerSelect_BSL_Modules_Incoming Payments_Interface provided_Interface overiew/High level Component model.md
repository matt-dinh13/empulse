# High level Component model

- **Diagram Type**: Component
- **Package**: HomerSelect/BSL/Modules/Incoming Payments/Interface provided/Interface overiew
- **Diagram ID**: 162740
- **Elements**: 7
- **Connectors**: 9

```mermaid
graph TD
    Local_payment_gateways[["Local payment gateways"]]
    Data_Warehouse[["Data Warehouse"]]
    Account_Management[["Account Management"]]
    INCPAY_module[["INCPAY module"]]
    OSB[["OSB"]]
    Local_payment_transformation_layer[["Local payment transformation layer"]]
    BSL[["BSL"]]
    INCPAY_module -->|REL payments| Account_Management
    OSB -->|recoupleMispostedPayment REST API| INCPAY_module
    INCPAY_module -->|CEL payments| BSL
    INCPAY_module -->|MV logs - all payments| Data_Warehouse
    Local_payment_gateways -->|unnamed| Local_payment_transformation_layer
    Local_payment_transformation_layer -->|Files - deprecated!| INCPAY_module
    Local_payment_transformation_layer -->|Web services| OSB
    OSB -->|automaticIncomingPaymentsImport REST API| INCPAY_module
    OSB -->|Web services| INCPAY_module
```
