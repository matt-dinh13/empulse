# Request Parameters

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Request Parameters
- **Diagram ID**: 146568
- **Elements**: 3
- **Connectors**: 2

```mermaid
classDiagram
    class InsuranceSubjectType["InsuranceSubjectType"]
    class InsuranceProgramVersionStatus["InsuranceProgramVersionStatus"]
    class InsuranceProgramSearchFilter["InsuranceProgramSearchFilter"]
    InsuranceProgramSearchFilter --> InsuranceProgramVersionStatus : unnamed
    InsuranceProgramSearchFilter --> InsuranceSubjectType : unnamed
```
