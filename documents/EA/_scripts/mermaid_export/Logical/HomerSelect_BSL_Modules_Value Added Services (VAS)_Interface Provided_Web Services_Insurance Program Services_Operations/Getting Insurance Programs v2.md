# Getting Insurance Programs v2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Getting Insurance Programs by search criteria
- **Diagram ID**: 141466
- **Elements**: 10
- **Connectors**: 7

```mermaid
classDiagram
    class InsuranceProgramDetail_response["InsuranceProgramDetail response"]
    class InsuranceProgramBase_response["InsuranceProgramBase response"]
    class IneligibleProfession["IneligibleProfession"]
    class InsuranceSubjectType["InsuranceSubjectType"]
    class InsuranceProgramVersionStatus["InsuranceProgramVersionStatus"]
    class InsuranceProgramSearchFilter["InsuranceProgramSearchFilter"]
    class InsurancePrograms["InsurancePrograms"]
    class n_11_200_Get_Insurance_Programs_service["11.200 Get Insurance Programs service"]
    class InsurancePrograms["InsurancePrograms"]
    class Web_Services_Resource_overview["Web Services - Resource overview"]
    InsurancePrograms ..> InsuranceProgramSearchFilter : unnamed
    InsurancePrograms ..> n_11_200_Get_Insurance_Programs_service : unnamed
    InsurancePrograms ..> InsurancePrograms : unnamed
    InsuranceProgramSearchFilter --> InsuranceSubjectType : unnamed
    InsuranceProgramSearchFilter --> InsuranceProgramVersionStatus : unnamed
    InsurancePrograms ..> InsuranceProgramBase_response : unnamed
    InsurancePrograms ..> InsuranceProgramDetail_response : unnamed
```
