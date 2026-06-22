# ActivateFinancingScheme

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/ActivateFinancingScheme
- **Diagram ID**: 105663
- **Elements**: 12
- **Connectors**: 9

```mermaid
classDiagram
    class ResultCodeActivateFinancingScheme["ResultCodeActivateFinancingScheme"]
    class ValidationCodeActivateFinancingScheme["ValidationCodeActivateFinancingScheme"]
    class ResultActivateFinancingScheme["ResultActivateFinancingScheme"]
    class ActivateFinancingScheme["ActivateFinancingScheme"]
    class ActivateFinancingSchemeResponse["ActivateFinancingSchemeResponse"]
    class ActivateFinancingSchemeRequest["ActivateFinancingSchemeRequest"]
    class DEL_04_404_Activate_Financing_Scheme["{DEL}04.404 Activate Financing Scheme"]
    class ValidationResult["ValidationResult"]
    class Use_Case_Financing_Scheme_UC["Use Case : Financing Scheme UC"]
    class Interface_Provided_FinancingSchemeWS["Interface Provided : FinancingSchemeWS"]
    class Version["Version"]
    class FinancingSchemeWS["FinancingSchemeWS"]
    FinancingSchemeWS ..> ActivateFinancingSchemeResponse : unnamed
    DEL_04_404_Activate_Financing_Scheme <|.. FinancingSchemeWS : unnamed
    FinancingSchemeWS ..> ActivateFinancingSchemeRequest : unnamed
    ActivateFinancingScheme ..> Version : unnamed
    ResultActivateFinancingScheme ..> ValidationResult : unnamed
    ActivateFinancingSchemeRequest ..> ActivateFinancingScheme : unnamed
    ActivateFinancingSchemeResponse ..> ResultActivateFinancingScheme : unnamed
    ResultActivateFinancingScheme ..> ValidationCodeActivateFinancingScheme : unnamed
    ResultActivateFinancingScheme ..> ResultCodeActivateFinancingScheme : unnamed
```
