# Contract - Party roles

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Management/COMMON for Contract Management/Logical Data Model
- **Diagram ID**: 164487
- **Elements**: 9
- **Connectors**: 8

```mermaid
classDiagram
    class Contract_Party_Role_Attribute_Type["Contract Party Role Attribute Type"]
    class Custom_Data_Definition["Custom Data Definition"]
    class Logical_Data_Model_Custom_Data_definition["Logical Data Model : Custom Data definition"]
    class Contract_Party_Role_Attribute_Definition["Contract Party Role Attribute Definition"]
    class Contract_Party_Role_Attribute["Contract Party Role Attribute"]
    class Contract_Party_Role_Type["Contract Party Role Type"]
    class Contract_Party_Role["Contract Party Role"]
    class Credit_Owner["Credit Owner"]
    class MOD_Contract["{MOD}Contract"]
    MOD_Contract o-- Contract_Party_Role : unnamed
    Contract_Party_Role o-- Contract_Party_Role_Attribute : unnamed
    Contract_Party_Role ..> Contract_Party_Role_Type : unnamed
    Contract_Party_Role_Attribute_Type ..> Contract_Party_Role_Attribute_Definition : filled from
    Contract_Party_Role_Attribute_Type ..> Custom_Data_Definition : unnamed
    Logical_Data_Model_Custom_Data_definition --> Custom_Data_Definition : unnamed
    Contract_Party_Role_Attribute ..> Contract_Party_Role_Attribute_Type : unnamed
```
