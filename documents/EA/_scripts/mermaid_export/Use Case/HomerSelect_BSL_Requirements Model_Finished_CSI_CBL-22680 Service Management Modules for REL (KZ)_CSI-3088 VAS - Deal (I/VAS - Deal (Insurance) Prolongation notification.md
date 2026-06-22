# VAS - Deal (Insurance) Prolongation notification

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-22680 Service Management Modules for REL (KZ)/CSI-3088 VAS - Deal (Insurance) Prolongation notification
- **Diagram ID**: 155809
- **Elements**: 6
- **Connectors**: 2

```mermaid
graph LR
    unnamed["unnamed"]
    unnamed["unnamed"]
    ADD_11_072_Create_New_Period_for_Prolongation_VAS(("{ADD}11.072 Create New Period for Prolongation (VAS)"))
    ADD_11_074_Finalize_Elapsed_and_Create_new_Period_for_Prolon(("{ADD}11.074 Finalize Elapsed and Create new Period for Prolongation (VAS)"))
    unnamed["unnamed"]
    Create_notifications_for_Insurance_prolongation["Create notifications for Insurance prolongation"]
    unnamed -->|unnamed| ADD_11_074_Finalize_Elapsed_and_Create_new_Period_for_Prolon
    unnamed -->|unnamed| ADD_11_072_Create_New_Period_for_Prolongation_VAS
```
