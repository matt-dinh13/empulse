# PaymentManagementWS

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Payments/PaymentManagementWS
- **Diagram ID**: 117263
- **Elements**: 15
- **Connectors**: 11

```mermaid
classDiagram
    class n_05_381_Cancel_incoming_payments_by_type_for_contract_on_lo["05.381 Cancel incoming payments by type for contract on local request"]
    class External_Reference["External Reference"]
    class External_Reference["External Reference"]
    class CancelIncomingPaymentSourceSystemTypeDto["CancelIncomingPaymentSourceSystemTypeDto"]
    class CancelIncomingPaymentsByTypeForContractResultTypeDto["CancelIncomingPaymentsByTypeForContractResultTypeDto"]
    class CancelIncomingPaymentForContractTypeDto["CancelIncomingPaymentForContractTypeDto"]
    class CancelIncomingPaymentsByTypeForContractResponse["CancelIncomingPaymentsByTypeForContractResponse"]
    class CancelIncomingPaymentsByTypeForContractRequest["CancelIncomingPaymentsByTypeForContractRequest"]
    class PaymentDto["PaymentDto"]
    class PaymentTypeDto["PaymentTypeDto"]
    class CancelIncomingPaymentResponse["CancelIncomingPaymentResponse"]
    class CancelIncomingPaymentRequest["CancelIncomingPaymentRequest"]
    class CreateIncomingPaymentResponse["CreateIncomingPaymentResponse"]
    class CreateIncomingPaymentRequest["CreateIncomingPaymentRequest"]
    class PaymentManagementWS["PaymentManagementWS"]
    PaymentDto ..> PaymentTypeDto : unnamed
    PaymentManagementWS ..> CreateIncomingPaymentResponse : unnamed
    PaymentManagementWS ..> CancelIncomingPaymentsByTypeForContractRequest : unnamed
    PaymentManagementWS ..> CreateIncomingPaymentRequest : unnamed
    PaymentManagementWS ..> CancelIncomingPaymentsByTypeForContractResponse : unnamed
    PaymentManagementWS ..> CancelIncomingPaymentResponse : unnamed
    PaymentManagementWS ..> CancelIncomingPaymentRequest : unnamed
    CreateIncomingPaymentRequest ..> PaymentDto : unnamed
    CancelIncomingPaymentsByTypeForContractResponse ..> CancelIncomingPaymentsByTypeForContractResultTypeDto : unnamed
    CancelIncomingPaymentsByTypeForContractRequest ..> CancelIncomingPaymentForContractTypeDto : unnamed
    CancelIncomingPaymentRequest ..> CancelIncomingPaymentSourceSystemTypeDto : unnamed
```
