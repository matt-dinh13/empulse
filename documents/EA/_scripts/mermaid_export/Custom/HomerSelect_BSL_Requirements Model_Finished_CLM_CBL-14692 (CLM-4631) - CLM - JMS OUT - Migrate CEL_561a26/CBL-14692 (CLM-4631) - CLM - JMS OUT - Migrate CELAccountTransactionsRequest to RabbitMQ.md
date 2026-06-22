# CBL-14692 (CLM-4631) - CLM - JMS OUT - Migrate CELAccountTransactionsRequest to RabbitMQ

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-14692 (CLM-4631) - CLM - JMS OUT - Migrate CELAccountTransactionsRequest to RabbitMQ
- **Diagram ID**: 144927
- **Elements**: 5
- **Connectors**: 1

```mermaid
graph TD
    MOD_Process_CashDisbursementConfirmedSE["{MOD}Process CashDisbursementConfirmedSE"]
    CELAccountTransactionsRequest_CELAccountTransactionsRequest["CELAccountTransactionsRequest : CELAccountTransactionsRequest"]
    Process_ContractCancellationSE["Process ContractCancellationSE"]
    Process_ContractSignSE["Process ContractSignSE"]
    CLM_4631_CLM_JMS_OUT_Migrate_CELAccountTransactionsRequest_t["CLM-4631 - CLM - JMS OUT - Migrate CELAccountTransactionsRequest to RabbitMQ"]
    MOD_Process_CashDisbursementConfirmedSE -->|unnamed| CELAccountTransactionsRequest_CELAccountTransactionsRequest
```
