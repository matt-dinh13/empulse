# ActivateFinancingPackage

```mermaid
classDiagram
    class ResultCodeActivateFinancingPackage["ResultCodeActivateFinancingPackage"]
    class ValidationCodeActivateFinancingPackage["ValidationCodeActivateFinancingPackage"]
    class ResultActivateFinancingPackage["ResultActivateFinancingPackage"]
    class ActivateFinancingPackageResponse["ActivateFinancingPackageResponse"]
    class ActivateFinancingPackage["ActivateFinancingPackage"]
    class ActivateFinancingPackageRequest["ActivateFinancingPackageRequest"]
    class Use_Case_Financing_Package_UC["Use Case : Financing Package UC"]
    class DEL_04_414_Activate_Financing_Package["{DEL}04.414 Activate Financing Package"]
    class ValidationResult["ValidationResult"]
    class Interface_Provided_FinancingSchemeWS["Interface Provided : FinancingSchemeWS"]
    class Version["Version"]
    class FinancingSchemeWS["FinancingSchemeWS"]
    ActivateFinancingPackage --> Version : unnamed
    ResultActivateFinancingPackage --> ValidationResult : unnamed
    ActivateFinancingPackageRequest --> ActivateFinancingPackage : unnamed
    ActivateFinancingPackageResponse --> ResultActivateFinancingPackage : unnamed
    ResultActivateFinancingPackage --> ValidationCodeActivateFinancingPackage : unnamed
    ResultActivateFinancingPackage --> ResultCodeActivateFinancingPackage : unnamed
    FinancingSchemeWS --> ActivateFinancingPackageRequest : unnamed
    FinancingSchemeWS --> ActivateFinancingPackageResponse : unnamed
    FinancingSchemeWS --> DEL_04_414_Activate_Financing_Package : unnamed
```
