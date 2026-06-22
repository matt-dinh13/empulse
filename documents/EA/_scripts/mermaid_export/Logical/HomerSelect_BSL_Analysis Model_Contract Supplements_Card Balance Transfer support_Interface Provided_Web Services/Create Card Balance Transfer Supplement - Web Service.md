# Create Card Balance Transfer Supplement - Web Service

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Card Balance Transfer support/Interface Provided/Web Services
- **Diagram ID**: 157615
- **Elements**: 6
- **Connectors**: 3

```mermaid
classDiagram
    class SupplementTypeSpecificData_v4["SupplementTypeSpecificData_v4"]
    class ContractSupplement["ContractSupplement"]
    class DEL_CardBalanceTransferSupplement["{DEL}CardBalanceTransferSupplement"]
    class ADD_13_410_Create_Card_Balance_Transfer_Supplement["{ADD}13.410 Create Card Balance Transfer Supplement"]
    class ADD_CreateCardBalanceTransferSupplement["{ADD}CreateCardBalanceTransferSupplement"]
    class ADD_CardBalanceTransferSupplement["{ADD}CardBalanceTransferSupplement"]
    ADD_CardBalanceTransferSupplement --> ADD_CreateCardBalanceTransferSupplement : unnamed
    ADD_CardBalanceTransferSupplement ..> ADD_13_410_Create_Card_Balance_Transfer_Supplement : unnamed
    ContractSupplement --> SupplementTypeSpecificData_v4 : unnamed
```
