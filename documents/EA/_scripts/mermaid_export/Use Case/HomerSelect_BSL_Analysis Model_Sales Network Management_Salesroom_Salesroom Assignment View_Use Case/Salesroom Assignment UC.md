# Salesroom Assignment UC

- **Diagram Type**: Use Case
- **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Salesroom Assignment View/Use Case
- **Diagram ID**: 102652
- **Elements**: 3
- **Connectors**: 2

```mermaid
graph LR
    DEL_09_308_Get_Salesroom_Sales_Item(("{DEL}09.308 Get Salesroom Sales Item"))
    MOD_09_281_Show_assignments_on_salesroom(("{MOD}09.281 Show assignments on salesroom"))
    User[/"User"/]
    User --- MOD_09_281_Show_assignments_on_salesroom
    MOD_09_281_Show_assignments_on_salesroom -.->|include| DEL_09_308_Get_Salesroom_Sales_Item
```
