# AssignSalesAgent

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Sales Network Management/{DEL}SalesroomWS/{DEL}AssignSalesAgent
- **Diagram ID**: 150984
- **Elements**: 10
- **Connectors**: 9

```mermaid
classDiagram
    class DEL_AssignSalesAgentData["{DEL}AssignSalesAgentData"]
    class Use_Case_DEL_Manage_Sales_agents_on_Salesroom_from_external_["Use Case :{DEL}Manage Sales agents on Salesroom from external systems"]
    class DEL_09_297_Assign_or_remove_Sales_Agent_on_salesroom_from_ex["{DEL}09.297 Assign or remove Sales Agent on salesroom from external systems"]
    class DEL_AssignSalesAgentResultCode["{DEL}AssignSalesAgentResultCode"]
    class DEL_AssignSalesAgentResultData["{DEL}AssignSalesAgentResultData"]
    class SalesroomWS_SalesroomWS["SalesroomWS : SalesroomWS"]
    class DEL_AssignMode["{DEL}AssignMode"]
    class DEL_AssignSalesAgentResponse["{DEL}AssignSalesAgentResponse"]
    class DEL_AssignSalesAgentRequest["{DEL}AssignSalesAgentRequest"]
    class DEL_SalesroomWS["{DEL}SalesroomWS"]
    SalesroomWS_SalesroomWS --> DEL_SalesroomWS : unnamed
    DEL_SalesroomWS ..> DEL_AssignSalesAgentRequest : unnamed
    DEL_SalesroomWS ..> DEL_AssignSalesAgentResponse : unnamed
    DEL_AssignSalesAgentData ..> DEL_AssignMode : unnamed
    DEL_AssignSalesAgentResponse ..> DEL_AssignSalesAgentResultData : unnamed
    DEL_AssignSalesAgentResultData ..> DEL_AssignSalesAgentResultCode : unnamed
    Use_Case_DEL_Manage_Sales_agents_on_Salesroom_from_external_ --> DEL_09_297_Assign_or_remove_Sales_Agent_on_salesroom_from_ex : unnamed
    DEL_09_297_Assign_or_remove_Sales_Agent_on_salesroom_from_ex <|.. DEL_SalesroomWS : unnamed
    DEL_AssignSalesAgentRequest ..> DEL_AssignSalesAgentData : unnamed
```
