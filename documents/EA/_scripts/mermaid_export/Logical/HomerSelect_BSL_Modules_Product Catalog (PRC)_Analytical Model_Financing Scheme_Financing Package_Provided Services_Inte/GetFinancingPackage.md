# GetFinancingPackage

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetFinancingPackage
- **Diagram ID**: 97504
- **Elements**: 17
- **Connectors**: 13

```mermaid
classDiagram
    class Use_Case_Financing_Package_UC["Use Case : Financing Package UC"]
    class ResultCodeGetFinancingPackage["ResultCodeGetFinancingPackage"]
    class ValidationCodeGetFinancingPackage["ValidationCodeGetFinancingPackage"]
    class COMMON_for_Financing_Package_FinancingPackageValues["COMMON for Financing Package : FinancingPackageValues"]
    class FinancingPackageValues["FinancingPackageValues"]
    class ResultGetFinancingPackage["ResultGetFinancingPackage"]
    class GetFinancingPackageResponse["GetFinancingPackageResponse"]
    class GetVersionedEntityCriterionType["GetVersionedEntityCriterionType"]
    class GetFinancingPackageCriterionType["GetFinancingPackageCriterionType"]
    class GetFinancingPackageCriterion["GetFinancingPackageCriterion"]
    class GetFinancingPackageRequest["GetFinancingPackageRequest"]
    class FinancingSchemeWS["FinancingSchemeWS"]
    class DEL_04_412_Get_Financing_Package["{DEL}04.412 Get Financing Package"]
    class ValidationResult["ValidationResult"]
    class VersionData["VersionData"]
    class Version["Version"]
    class Interface_Provided_FinancingSchemeWS["Interface Provided : FinancingSchemeWS"]
    ResultGetFinancingPackage ..> Version : unnamed
    ResultGetFinancingPackage ..> VersionData : unnamed
    GetFinancingPackageResponse ..> ValidationResult : unnamed
    GetFinancingPackageRequest ..> GetFinancingPackageCriterion : unnamed
    GetFinancingPackageCriterion ..> GetFinancingPackageCriterionType : unnamed
    GetFinancingPackageCriterionType ..> GetVersionedEntityCriterionType : unnamed
    GetFinancingPackageResponse ..> ResultGetFinancingPackage : unnamed
    ResultGetFinancingPackage ..> FinancingPackageValues : unnamed
    GetFinancingPackageResponse ..> ValidationCodeGetFinancingPackage : unnamed
    GetFinancingPackageResponse ..> ResultCodeGetFinancingPackage : unnamed
    DEL_04_412_Get_Financing_Package <|.. FinancingSchemeWS : unnamed
    FinancingSchemeWS ..> GetFinancingPackageResponse : unnamed
    FinancingSchemeWS ..> GetFinancingPackageRequest : unnamed
```
