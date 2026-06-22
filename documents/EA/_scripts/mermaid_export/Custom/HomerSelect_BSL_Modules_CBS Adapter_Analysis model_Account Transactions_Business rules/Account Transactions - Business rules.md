# Account Transactions - Business rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/CBS Adapter/Analysis model/Account Transactions/Business rules
- **Diagram ID**: 107594
- **Elements**: 9
- **Connectors**: 8

```mermaid
graph TD
    Generate_artificial_outgoing_payment_for_external_consolidat["Generate artificial outgoing payment for external consolidation"]
    Processing_InsuranceTransactionRequest["Processing InsuranceTransactionRequest"]
    Processing_TransactionReconciliationDto["Processing TransactionReconciliationDto"]
    Get_OBS_contract_identification["Get OBS contract identification"]
    Processing_TransactionMessageDto["Processing TransactionMessageDto"]
    Processing_CELInsuranceAccountTransaction["Processing CELInsuranceAccountTransaction"]
    Processing_CELFeeAccountTransaction["Processing CELFeeAccountTransaction"]
    Processing_CELPrincipalAccountTransaction["Processing CELPrincipalAccountTransaction"]
    Processing_CELAccountTransactionsRequest["Processing CELAccountTransactionsRequest"]
    Processing_CELPrincipalAccountTransaction -->|unnamed| Generate_artificial_outgoing_payment_for_external_consolidat
    Processing_CELAccountTransactionsRequest -->|unnamed| Processing_CELPrincipalAccountTransaction
    Processing_CELAccountTransactionsRequest -->|unnamed| Processing_CELFeeAccountTransaction
    Processing_CELAccountTransactionsRequest -->|unnamed| Processing_CELInsuranceAccountTransaction
    Processing_CELInsuranceAccountTransaction -->|unnamed| Get_OBS_contract_identification
    Processing_CELFeeAccountTransaction -->|unnamed| Get_OBS_contract_identification
    Processing_CELPrincipalAccountTransaction -->|unnamed| Get_OBS_contract_identification
    Processing_TransactionMessageDto -->|unnamed| Processing_TransactionReconciliationDto
```
