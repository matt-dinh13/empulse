# Component model

```mermaid
graph TD
    Refund_items["Refund items"]
    Payment_channels["Payment channels"]
    Outgoing_Payments["Outgoing Payments"]
    Incoming_Payments["Incoming Payments"]
    BSL["BSL"]
    BSL -->|Notify about Refund| Incoming_Payments
    Incoming_Payments -->|Create Refund| BSL
    Incoming_Payments -->|Get Refund Info| BSL
    Incoming_Payments -->|Cancel Refund| BSL
```
