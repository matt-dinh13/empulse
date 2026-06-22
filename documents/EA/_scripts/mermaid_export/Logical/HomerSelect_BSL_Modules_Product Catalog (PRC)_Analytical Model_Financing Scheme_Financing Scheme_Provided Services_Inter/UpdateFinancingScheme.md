# UpdateFinancingScheme

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/UpdateFinancingScheme
- **Diagram ID**: 102271
- **Elements**: 15
- **Connectors**: 11

```mermaid
classDiagram
    class ResultCodeUpdateFinancingScheme["ResultCodeUpdateFinancingScheme"]
    class ValidationResult["ValidationResult"]
    class ValidationCodeUpdateFinancingScheme["ValidationCodeUpdateFinancingScheme"]
    class ResultUpdateFinancingScheme["ResultUpdateFinancingScheme"]
    class UpdateFinancingSchemeResponse["UpdateFinancingSchemeResponse"]
    class UpdateFinancingScheme["UpdateFinancingScheme"]
    class UpdateFinancingSchemeRequest["UpdateFinancingSchemeRequest"]
    class DEL_04_403_Update_Financing_Scheme["{DEL}04.403 Update Financing Scheme"]
    class COMMON_for_Financing_Scheme_FinancingSchemeValues["COMMON for Financing Scheme : FinancingSchemeValues"]
    class Use_Case_Financing_Scheme_UC["Use Case : Financing Scheme UC"]
    class Interface_Provided_FinancingSchemeWS["Interface Provided : FinancingSchemeWS"]
    class Version["Version"]
    class MOD_ValidationCodeFinancingSchemeValues["{MOD}ValidationCodeFinancingSchemeValues"]
    class FinancingSchemeValues["FinancingSchemeValues"]
    class FinancingSchemeWS["FinancingSchemeWS"]
    UpdateFinancingScheme ..> FinancingSchemeValues : unnamed
    ValidationCodeUpdateFinancingScheme ..> MOD_ValidationCodeFinancingSchemeValues : includes
    UpdateFinancingScheme ..> Version : unnamed
    UpdateFinancingSchemeRequest ..> UpdateFinancingScheme : unnamed
    UpdateFinancingSchemeResponse ..> ResultUpdateFinancingScheme : unnamed
    ResultUpdateFinancingScheme ..> ValidationCodeUpdateFinancingScheme : unnamed
    ResultUpdateFinancingScheme ..> ValidationResult : unnamed
    ResultUpdateFinancingScheme ..> ResultCodeUpdateFinancingScheme : unnamed
    DEL_04_403_Update_Financing_Scheme <|.. FinancingSchemeWS : unnamed
    FinancingSchemeWS ..> UpdateFinancingSchemeRequest : unnamed
    FinancingSchemeWS ..> UpdateFinancingSchemeResponse : unnamed
```
