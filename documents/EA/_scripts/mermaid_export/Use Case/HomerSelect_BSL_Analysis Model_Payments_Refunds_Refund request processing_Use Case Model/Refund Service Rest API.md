# Refund Service Rest API

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Payments/Refunds/Refund request processing/Use Case Model
- **Diagram ID**: 164248
- **Elements**: 5
- **Connectors**: 4

```mermaid
graph LR
    External_system[/"External system"/]
    Cancel_Refund_Item_via_API(("Cancel Refund Item via API"))
    Get_Refund_Item_via_API(("Get Refund Item via API"))
    Process_Refund_Outgoing_Payment_via_API(("Process Refund Outgoing Payment via API"))
    Edit_Refund_Disbursement_Method_via_API(("Edit Refund Disbursement Method via API"))
    External_system --- Cancel_Refund_Item_via_API
    External_system --- Edit_Refund_Disbursement_Method_via_API
    External_system --- Get_Refund_Item_via_API
    External_system --- Process_Refund_Outgoing_Payment_via_API
```
