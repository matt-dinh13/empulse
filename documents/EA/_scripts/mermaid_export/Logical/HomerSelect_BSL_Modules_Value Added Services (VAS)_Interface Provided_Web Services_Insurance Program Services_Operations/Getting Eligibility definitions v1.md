# Getting Eligibility definitions v1

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Getting Eligibility definitions
- **Diagram ID**: 134365
- **Elements**: 7
- **Connectors**: 5

```mermaid
classDiagram
    class EligibilityDefinition["EligibilityDefinition"]
    class InsurancePrograms["InsurancePrograms"]
    class IneligibleProfession["IneligibleProfession"]
    class EligibleCommodity["EligibleCommodity"]
    class Web_Services_Resource_overview["Web Services - Resource overview"]
    class n_11_204_Get_Insurance_Eligibility_definition_service["11.204 Get Insurance Eligibility definition service"]
    class EligibilityDefinition["EligibilityDefinition"]
    InsurancePrograms ..> EligibilityDefinition : /{insuranceProgramExternalId}
    EligibilityDefinition ..> EligibilityDefinition : unnamed
    EligibilityDefinition ..> n_11_204_Get_Insurance_Eligibility_definition_service : unnamed
    EligibilityDefinition ..> IneligibleProfession : unnamed
    EligibilityDefinition ..> EligibleCommodity : unnamed
```
