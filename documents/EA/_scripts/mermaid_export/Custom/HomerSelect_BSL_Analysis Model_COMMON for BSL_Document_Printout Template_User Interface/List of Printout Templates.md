# List of Printout Templates

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Analysis Model/COMMON for BSL/Document/Printout Template/User Interface
- **Diagram ID**: 71466
- **Elements**: 8
- **Connectors**: 6

```mermaid
graph TD
    n_02_550_Deactivate_printout_template["02.550 Deactivate printout template"]
    n_02_510_Find_printout_templates["02.510 Find printout templates"]
    List_of_Printout_templates["List of Printout templates"]
    Set_Printout_Template_Set_Printout_Template["Set Printout Template : Set Printout Template"]
    n_02_540_Update_printout_template["02.540 Update printout template"]
    n_02_520_Create_printout_template["02.520 Create printout template"]
    Create_printout_template["Create printout template"]
    Printout_templates["Printout templates"]
    Printout_templates -->|unnamed| n_02_510_Find_printout_templates
    Create_printout_template -->|unnamed| n_02_520_Create_printout_template
    Create_printout_template -->|unnamed| Set_Printout_Template_Set_Printout_Template
    List_of_Printout_templates -->|unnamed| n_02_540_Update_printout_template
    List_of_Printout_templates -->|unnamed| n_02_550_Deactivate_printout_template
    List_of_Printout_templates -->|unnamed| Set_Printout_Template_Set_Printout_Template
```
