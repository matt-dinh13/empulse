# Contract - Status

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model
- **Diagram ID**: 164481
- **Elements**: 8
- **Connectors**: 14

```mermaid
classDiagram
    class SubStatus_Description_Type["SubStatus Description Type"]
    class Used_Deal_Type["Used Deal Type"]
    class Contract_Status_Transitions_Reasons["Contract Status Transitions Reasons"]
    class Contract_SubStatus_Transitions["Contract SubStatus Transitions"]
    class Contract_Status_Transition["Contract Status Transition"]
    class MOD_Contract["{MOD}Contract"]
    class Contract_SubStatus["Contract SubStatus"]
    class Contract_Status_Type["Contract Status Type"]
    Contract_Status_Transition ..> Contract_Status_Type : unnamed
    MOD_Contract ..> Contract_Status_Type : unnamed
    Contract_SubStatus_Transitions ..> Contract_SubStatus : unnamed
    MOD_Contract ..> Contract_SubStatus : unnamed
    Contract_Status_Transition --> MOD_Contract : unnamed
    Contract_SubStatus_Transitions --> MOD_Contract : unnamed
    Contract_SubStatus_Transitions --> Contract_Status_Transition : unnamed
    Contract_Status_Transition --> Contract_Status_Transition : unnamed
    Contract_SubStatus_Transitions --> Contract_SubStatus_Transitions : unnamed
    Contract_Status_Transition ..> Contract_Status_Transitions_Reasons : unnamed
    Contract_SubStatus --> SubStatus_Description_Type : unnamed
    Contract_SubStatus --> Contract_Status_Type : unnamed
    Contract_Status_Transitions_Reasons ..> Contract_Status_Type : unnamed
    Contract_Status_Transitions_Reasons ..> Used_Deal_Type : unnamed
```
