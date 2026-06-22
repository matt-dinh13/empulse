# Getting Insurance Program data v2

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Interface Provided/Web Services/Insurance Program Services/Operations/Getting Insurance Program data
- **Diagram ID**: 141468
- **Elements**: 6
- **Connectors**: 4

```mermaid
classDiagram
    class InsuranceProgramBase_response["InsuranceProgramBase response"]
    class InsuranceProgramDetail_response["InsuranceProgramDetail response"]
    class InsurancePrograms["InsurancePrograms"]
    class n_11_050_Get_Insurance_Program_detail_service_v2["11.050 Get Insurance Program detail service v2"]
    class Web_Services_Resource_overview["Web Services - Resource overview"]
    class GetInsuranceProgram["GetInsuranceProgram"]
    InsurancePrograms ..> InsuranceProgramBase_response : unnamed
    InsurancePrograms ..> GetInsuranceProgram : unnamed
    InsurancePrograms ..> InsuranceProgramDetail_response : unnamed
    InsurancePrograms ..> n_11_050_Get_Insurance_Program_detail_service_v2 : unnamed
```
