# VAS - Cancel Deal method update - cancel out payment

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/CSI-3061	VAS - Cancel Deal method update - cancel out payment
- **Diagram ID**: 155513
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    ADD_Cancel_Outgoing_Payments_related_to_Deal["{ADD}Cancel Outgoing Payments related to Deal"]
    External_system[/"External system"/]
    ADD_11_080_Cancel_Deal_VAS(("{ADD}11.080 Cancel Deal (VAS)"))
    External_system --- ADD_11_080_Cancel_Deal_VAS
    ADD_11_080_Cancel_Deal_VAS -->|unnamed| ADD_Cancel_Outgoing_Payments_related_to_Deal
```
