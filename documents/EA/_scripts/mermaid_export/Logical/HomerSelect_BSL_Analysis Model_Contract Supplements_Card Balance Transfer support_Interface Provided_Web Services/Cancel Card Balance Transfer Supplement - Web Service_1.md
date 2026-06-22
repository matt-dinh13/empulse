# Cancel Card Balance Transfer Supplement - Web Service

```mermaid
classDiagram
    class ADD_13_420_Cancel_Card_Balance_Transfer_request["{ADD}13.420 Cancel Card Balance Transfer request"]
    class ADD_CancelCardBalanceTransferRequest["{ADD}CancelCardBalanceTransferRequest"]
    class DEL_CardBalanceTransferSupplement["{DEL}CardBalanceTransferSupplement"]
    class ADD_CardBalanceTransferSupplement["{ADD}CardBalanceTransferSupplement"]
    class SupplementTypeSpecificData_v4["SupplementTypeSpecificData_v4"]
    class ContractSupplement["ContractSupplement"]
    ADD_CardBalanceTransferSupplement --> ADD_CancelCardBalanceTransferRequest : unnamed
    ADD_CardBalanceTransferSupplement --> ADD_13_420_Cancel_Card_Balance_Transfer_request : unnamed
    ContractSupplement --> SupplementTypeSpecificData_v4 : unnamed
```
