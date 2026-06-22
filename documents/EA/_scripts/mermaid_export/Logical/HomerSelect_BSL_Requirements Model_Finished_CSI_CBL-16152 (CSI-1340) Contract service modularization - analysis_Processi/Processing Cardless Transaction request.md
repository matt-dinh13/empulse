# Processing Cardless Transaction request

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16152 (CSI-1340) Contract service modularization - analysis/Processing Cardless Transaction request
- **Diagram ID**: 151169
- **Elements**: 11
- **Connectors**: 9

```mermaid
classDiagram
    class LoanServiceRequest_Events["LoanServiceRequest Events"]
    class LoanServiceRequest_data["LoanServiceRequest data"]
    class LoanServiceRequests["LoanServiceRequests"]
    class ContractSupplement_Events["ContractSupplement Events"]
    class CreditLimitChange_Events["CreditLimitChange Events"]
    class TransactionSupplement_Events["TransactionSupplement Events"]
    class KAFKA_Broker["KAFKA Broker"]
    class ContractSupplement_data["ContractSupplement data"]
    class ContractSupplement_service["ContractSupplement service"]
    class CreditLimitChange_service["CreditLimitChange service"]
    class TransactionSupplements_service["TransactionSupplements service"]
    LoanServiceRequests ..> ContractSupplement_service : unnamed
    CreditLimitChange_service ..> ContractSupplement_service : unnamed
    TransactionSupplements_service ..> ContractSupplement_service : unnamed
    ContractSupplement_service ..> ContractSupplement_data : unnamed
    TransactionSupplements_service --> TransactionSupplement_Events : unnamed
    CreditLimitChange_service --> CreditLimitChange_Events : unnamed
    ContractSupplement_service --> ContractSupplement_Events : unnamed
    LoanServiceRequests ..> LoanServiceRequest_data : unnamed
    LoanServiceRequests --> LoanServiceRequest_Events : unnamed
```
