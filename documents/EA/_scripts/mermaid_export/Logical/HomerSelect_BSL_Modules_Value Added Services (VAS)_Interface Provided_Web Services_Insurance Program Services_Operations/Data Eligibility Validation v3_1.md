# Data Eligibility Validation v3

```mermaid
classDiagram
    class ClientData_v3["ClientData_v3"]
    class DataEligibilityCheck_v3["DataEligibilityCheck_v3"]
    class InsuranceProgramEligibilityResults["InsuranceProgramEligibilityResults"]
    class InsuranceProgramEligibilityUsed["InsuranceProgramEligibilityUsed"]
    class InsurancePrograms["InsurancePrograms"]
    class n_11_124_Validate_data_eligibility_for_insurance["11.124 Validate data eligibility for insurance"]
    class CommodityDataResult["CommodityDataResult"]
    class ResultDetail["ResultDetail"]
    class ClientEligibilityResult["ClientEligibilityResult"]
    class DataEligibilityResult["DataEligibilityResult"]
    class Web_Services_Resource_overview["Web Services - Resource overview"]
    class CommodityData["CommodityData"]
    DataEligibilityCheck_v3 --> ClientData_v3 : unnamed
    DataEligibilityCheck_v3 --> InsuranceProgramEligibilityUsed : unnamed
    DataEligibilityCheck_v3 --> CommodityData : unnamed
    ClientEligibilityResult --> ResultDetail : unnamed
    CommodityDataResult --> ResultDetail : unnamed
    DataEligibilityResult --> CommodityDataResult : unnamed
    InsuranceProgramEligibilityResults --> DataEligibilityResult : unnamed
    DataEligibilityResult --> ClientEligibilityResult : unnamed
    InsurancePrograms --> n_11_124_Validate_data_eligibility_for_insurance : unnamed
    InsurancePrograms --> InsuranceProgramEligibilityResults : unnamed
    InsurancePrograms --> DataEligibilityCheck_v3 : unnamed
```
