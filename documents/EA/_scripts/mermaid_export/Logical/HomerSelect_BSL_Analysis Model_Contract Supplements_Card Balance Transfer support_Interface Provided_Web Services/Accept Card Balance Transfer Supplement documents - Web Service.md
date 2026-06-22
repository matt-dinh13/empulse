# Accept Card Balance Transfer Supplement documents - Web Service

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Interface Provided/Web Services
- **Diagram ID**: 157616
- **Elements**: 6
- **Connectors**: 3

```mermaid
classDiagram
    class SupplementTypeSpecificData_v4["SupplementTypeSpecificData_v4"]
    class ContractSupplement["ContractSupplement"]
    class DEL_AcceptCardBalanceTransferRequest["{DEL}AcceptCardBalanceTransferRequest"]
    class DEL_CardBalanceTransferSupplement["{DEL}CardBalanceTransferSupplement"]
    class DEL_13_414_Accept_Card_Balance_Transfer_Supplement_document["{DEL}13.414 Accept Card Balance Transfer Supplement document"]
    class ADD_CardBalanceTransferSupplement["{ADD}CardBalanceTransferSupplement"]
    ADD_CardBalanceTransferSupplement ..> DEL_13_414_Accept_Card_Balance_Transfer_Supplement_document : unnamed
    ADD_CardBalanceTransferSupplement --> DEL_AcceptCardBalanceTransferRequest : unnamed
    ContractSupplement --> SupplementTypeSpecificData_v4 : unnamed
```
