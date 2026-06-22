# Insurance Program LDM modification

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-8512 (CSI-13) CLM Modularization - Insurance Program functionalities/Insurance Program LDM modification
- **Diagram ID**: 134662
- **Elements**: 6
- **Connectors**: 5

```mermaid
classDiagram
    class Ineligible_Profession["Ineligible Profession"]
    class Eligible_Commodity_Type["Eligible Commodity Type"]
    class Insurance_Eligibility_Criteria["Insurance Eligibility Criteria"]
    class Insurance_Partner["Insurance Partner"]
    class Salesroom["Salesroom"]
    class Insurance_Program["Insurance Program"]
    Insurance_Program o-- Insurance_Eligibility_Criteria : unnamed
    Insurance_Program ..> Salesroom : {DEL CLM-2618}
    Insurance_Program --> Insurance_Partner : {ADD CLM-2618 /}
    Insurance_Eligibility_Criteria o-- Eligible_Commodity_Type : unnamed
    Insurance_Eligibility_Criteria o-- Ineligible_Profession : unnamed
```
