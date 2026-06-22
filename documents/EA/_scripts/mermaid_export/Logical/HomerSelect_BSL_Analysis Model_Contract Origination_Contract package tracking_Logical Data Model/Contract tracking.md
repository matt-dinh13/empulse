# Contract tracking

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract package tracking/Logical Data Model
- **Diagram ID**: 110078
- **Elements**: 12
- **Connectors**: 14

```mermaid
classDiagram
    class Contract_Supplement["Contract Supplement"]
    class Salesroom["Salesroom"]
    class Sales_Area["Sales Area"]
    class Contract_Status_Type["Contract Status Type"]
    class ContractPackageType2ContractStatus["ContractPackageType2ContractStatus"]
    class ContractPackageType["ContractPackageType"]
    class Package_Item_Type["Package Item Type"]
    class ContractPackage_Status["ContractPackage Status"]
    class Contract_Package_Location["Contract Package Location"]
    class Contract_Package_Item["Contract Package Item"]
    class Contract_Package["Contract Package"]
    class MOD_Contract["{MOD}Contract"]
    Contract_Package o-- Contract_Package_Item : unnamed
    Contract_Package ..> Contract_Package_Location : unnamed
    Contract_Package ..> ContractPackage_Status : unnamed
    Contract_Package_Item ..> Package_Item_Type : unnamed
    Contract_Package ..> ContractPackageType : unnamed
    ContractPackageType2ContractStatus ..> ContractPackageType : unnamed
    ContractPackageType2ContractStatus ..> Contract_Status_Type : unnamed
    Contract_Package ..> Sales_Area : unnamed
    Salesroom ..> Sales_Area : unnamed
    MOD_Contract ..> Sales_Area : unnamed
    MOD_Contract --> Contract_Package_Item : unnamed
    MOD_Contract ..> Contract_Status_Type : unnamed
    Contract_Supplement --> Salesroom : Arranged on salesroom
    MOD_Contract o-- Contract_Supplement : unnamed
```
