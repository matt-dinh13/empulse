# CreateFinancingScheme

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/CreateFinancingScheme
- **Diagram ID**: 96696
- **Elements**: 15
- **Connectors**: 12

```mermaid
classDiagram
    class ResultCodeCreateFinancingScheme["ResultCodeCreateFinancingScheme"]
    class ValidationResult["ValidationResult"]
    class ValidationCodeCreateFinancingScheme["ValidationCodeCreateFinancingScheme"]
    class COMMON_for_Financing_Scheme_FinancingSchemeValues["COMMON for Financing Scheme : FinancingSchemeValues"]
    class Use_Case_Financing_Scheme_UC["Use Case : Financing Scheme UC"]
    class Interface_Provided_FinancingSchemeWS["Interface Provided : FinancingSchemeWS"]
    class DEL_04_401_Create_Financing_Scheme["{DEL}04.401 Create Financing Scheme"]
    class Version["Version"]
    class MOD_ValidationCodeFinancingSchemeValues["{MOD}ValidationCodeFinancingSchemeValues"]
    class FinancingSchemeValues["FinancingSchemeValues"]
    class ResultCreateFinancingScheme["ResultCreateFinancingScheme"]
    class CreateFinancingScheme["CreateFinancingScheme"]
    class CreateFinancingSchemeResponse["CreateFinancingSchemeResponse"]
    class CreateFinancingSchemeRequest["CreateFinancingSchemeRequest"]
    class FinancingSchemeWS["FinancingSchemeWS"]
    CreateFinancingSchemeRequest ..> CreateFinancingScheme : unnamed
    CreateFinancingSchemeResponse ..> ResultCreateFinancingScheme : unnamed
    CreateFinancingScheme ..> FinancingSchemeValues : unnamed
    ValidationCodeCreateFinancingScheme ..> MOD_ValidationCodeFinancingSchemeValues : unnamed
    ResultCreateFinancingScheme ..> Version : unnamed
    CreateFinancingScheme ..> Version : unnamed
    ResultCreateFinancingScheme ..> ValidationCodeCreateFinancingScheme : unnamed
    ResultCreateFinancingScheme ..> ValidationResult : unnamed
    ResultCreateFinancingScheme ..> ResultCodeCreateFinancingScheme : unnamed
    FinancingSchemeWS ..> CreateFinancingSchemeResponse : unnamed
    FinancingSchemeWS ..> CreateFinancingSchemeRequest : unnamed
    DEL_04_401_Create_Financing_Scheme <|.. FinancingSchemeWS : unnamed
```
