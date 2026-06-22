# BSL Privilege Setting

- **Diagram Type**: Custom
- **Package**: Model/Work
- **Diagram ID**: 91297
- **Elements**: 20
- **Connectors**: 8

```mermaid
graph TD
    el_1137919["Note"]
    el_1137918["Note"]
    el_1137917["Note"]
    Close["Close"]
    Import["Import"]
    Export["Export"]
    Save["Save"]
    UI_Control["UI Control"]
    el_1137911["Note"]
    el_1137910["Note"]
    Add_selected["Add selected"]
    Search_for["Search for"]
    el_1137906["Note"]
    Available_Privileges["Available Privileges"]
    el_1137904["Note"]
    Remove_selected["Remove selected"]
    Assigned_Privileges["Assigned Privileges"]
    el_1137901["Note"]
    Application_Role["Application Role"]
    BSL_Privilege_Setting["BSL Privilege Setting"]
    el_1137901 -->|unnamed| Application_Role
    el_1137904 -->|unnamed| Remove_selected
    el_1137906 -->|unnamed| Search_for
    el_1137910 -->|unnamed| Add_selected
    el_1137911 -->|unnamed| Available_Privileges
    Save -->|unnamed| el_1137917
    Export -->|unnamed| el_1137918
    Import -->|unnamed| el_1137919
```
