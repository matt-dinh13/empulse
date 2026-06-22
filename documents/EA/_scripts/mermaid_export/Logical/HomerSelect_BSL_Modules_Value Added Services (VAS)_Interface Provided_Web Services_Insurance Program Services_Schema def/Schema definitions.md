# Schema definitions

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Schema definitions
- **Diagram ID**: 146574
- **Elements**: 12
- **Connectors**: 8

```mermaid
classDiagram
    class ResultDetail["ResultDetail"]
    class RevenueShareType["RevenueShareType"]
    class RegisterInclusionType["RegisterInclusionType"]
    class InsuranceContractCodeType["InsuranceContractCodeType"]
    class EligibilityDefinition["EligibilityDefinition"]
    class ClientEligibilityResult["ClientEligibilityResult"]
    class InsuranceProgramDetail["InsuranceProgramDetail"]
    class InsuranceProvider["InsuranceProvider"]
    class LabelValue["LabelValue"]
    class LocalizedValue["LocalizedValue"]
    class CustomDataDefinition["CustomDataDefinition"]
    LabelValue ..> LocalizedValue : unnamed
    CustomDataDefinition ..> LabelValue : unnamed
    InsuranceProgramDetail --> InsuranceProvider : unnamed
    InsuranceProgramDetail --> EligibilityDefinition : unnamed
    InsuranceProgramDetail --> InsuranceContractCodeType : unnamed
    InsuranceProgramDetail ..> RegisterInclusionType : unnamed
    InsuranceProgramDetail ..> RevenueShareType : unnamed
    ClientEligibilityResult ..> ResultDetail : unnamed
```
