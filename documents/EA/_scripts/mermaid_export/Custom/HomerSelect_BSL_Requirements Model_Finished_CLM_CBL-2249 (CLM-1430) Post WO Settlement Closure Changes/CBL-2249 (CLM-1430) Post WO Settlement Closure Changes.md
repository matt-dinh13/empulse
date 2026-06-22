# CBL-2249 (CLM-1430) Post WO Settlement Closure Changes

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-2249 (CLM-1430) Post WO Settlement Closure Changes
- **Diagram ID**: 116686
- **Elements**: 4
- **Connectors**: 3

```mermaid
graph TD
    Panel_of_buttons_Panel_of_buttons["Panel of buttons : Panel of buttons"]
    Use_Case_model_Setting_an_Business_Event_on_WO_contract["Use Case model : Setting an Business Event on WO contract"]
    Logical_data_model_Business_event_Logical_data_model["Logical data model : Business event - Logical data model"]
    REQ_1_Post_WO_Settlement_Closure_for_contract["REQ #1 - Post WO Settlement Closure for contract"]
    Logical_data_model_Business_event_Logical_data_model -->|unnamed| REQ_1_Post_WO_Settlement_Closure_for_contract
    Use_Case_model_Setting_an_Business_Event_on_WO_contract -->|unnamed| REQ_1_Post_WO_Settlement_Closure_for_contract
    Panel_of_buttons_Panel_of_buttons -->|unnamed| REQ_1_Post_WO_Settlement_Closure_for_contract
```
