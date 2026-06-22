# InsuranceProgramBase response

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Schema definitions
- **Diagram ID**: 146575
- **Elements**: 7
- **Connectors**: 6

```mermaid
classDiagram
    class ADD_CustomDataType_v2["{ADD}CustomDataType_v2"]
    class ADD_CustomDataDefinition_v2["{ADD}CustomDataDefinition_v2"]
    class InsuranceProgramBase["InsuranceProgramBase"]
    class IneligibleProfession["IneligibleProfession"]
    class EligibleCommodity["EligibleCommodity"]
    class EligibilityDefinition["EligibilityDefinition"]
    class InsuranceProvider["InsuranceProvider"]
    InsuranceProgramBase --> InsuranceProvider : unnamed
    InsuranceProgramBase --> EligibilityDefinition : unnamed
    EligibilityDefinition ..> EligibleCommodity : unnamed
    EligibilityDefinition ..> IneligibleProfession : unnamed
    InsuranceProgramBase --> ADD_CustomDataDefinition_v2 : unnamed
    ADD_CustomDataDefinition_v2 ..> ADD_CustomDataType_v2 : unnamed
```
