# Access Rights

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Process requests for outgoing payments from external systems/Access Rights
- **Diagram ID**: 163411
- **Elements**: 10
- **Connectors**: 5

```mermaid
graph TD
    n_05_706_Cancel_PAID_outgoing_payment_via_REST_API["05.706 Cancel PAID outgoing payment via REST API"]
    ADD_05_706_Cancel_PAID_outgoing_payment_via_REST_API["{ADD}05.706 Cancel PAID outgoing payment via REST API"]
    n_05_705_Get_outgoing_payment_amount_via_REST_API["05.705 Get outgoing payment amount via REST API"]
    ADD_05_705_Get_Outgoing_Payment_Amount_via_REST_API["{ADD}05.705 Get Outgoing Payment Amount via REST API"]
    n_05_702_Get_outgoing_payments_for_contract_service["05.702 Get outgoing payments for contract - service"]
    n_05_702_Get_outgoing_payments_for_contract_service["05.702 Get outgoing payments for contract - service"]
    MOD_05_701_Process_DisbursementMessage["{MOD}05.701 Process DisbursementMessage"]
    n_05_701_Process_DisbursementMessage["05.701 Process DisbursementMessage"]
    n_05_700_Process_TransactionMessageDto["05.700 Process TransactionMessageDto "]
    n_05_700_Process_TransactionMessageDto["05.700 Process TransactionMessageDto "]
    n_05_700_Process_TransactionMessageDto -->|unnamed| n_05_700_Process_TransactionMessageDto
    MOD_05_701_Process_DisbursementMessage -->|unnamed| n_05_701_Process_DisbursementMessage
    n_05_702_Get_outgoing_payments_for_contract_service -->|unnamed| n_05_702_Get_outgoing_payments_for_contract_service
    ADD_05_705_Get_Outgoing_Payment_Amount_via_REST_API -->|unnamed| n_05_705_Get_outgoing_payment_amount_via_REST_API
    ADD_05_706_Cancel_PAID_outgoing_payment_via_REST_API -->|unnamed| n_05_706_Cancel_PAID_outgoing_payment_via_REST_API
```
