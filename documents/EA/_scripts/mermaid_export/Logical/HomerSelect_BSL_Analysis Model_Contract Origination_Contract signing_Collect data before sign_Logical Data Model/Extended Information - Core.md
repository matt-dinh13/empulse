# Extended Information - Core

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/Collect data before sign/Logical Data Model
- **Diagram ID**: 111685
- **Elements**: 9
- **Connectors**: 11

```mermaid
classDiagram
    class Extended_Information["Extended Information"]
    class Economical_Status["Economical Status"]
    class Industry["Industry"]
    class Investment_Valid_Criteria["Investment Valid Criteria"]
    class Investment_Amount_Range["Investment Amount Range"]
    class Investment_Category["Investment Category"]
    class Enterprise_Subcategory["Enterprise Subcategory"]
    class Enterprise_Category["Enterprise Category"]
    class MOD_Contract["{MOD}Contract"]
    Enterprise_Category o-- Investment_Amount_Range : unnamed
    Extended_Information ..> Enterprise_Category : unnamed
    Enterprise_Category o-- Investment_Valid_Criteria : unnamed
    Enterprise_Category o-- Enterprise_Subcategory : unnamed
    Extended_Information ..> Enterprise_Subcategory : unnamed
    Extended_Information ..> Investment_Category : unnamed
    Investment_Category o-- Investment_Amount_Range : unnamed
    Extended_Information ..> Investment_Amount_Range : unnamed
    Investment_Valid_Criteria ..> Industry : unnamed
    Investment_Valid_Criteria ..> Economical_Status : unnamed
    MOD_Contract o-- Extended_Information : unnamed
```
