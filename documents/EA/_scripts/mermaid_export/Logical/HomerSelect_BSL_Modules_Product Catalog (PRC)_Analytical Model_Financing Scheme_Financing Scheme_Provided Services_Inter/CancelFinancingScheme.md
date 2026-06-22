# CancelFinancingScheme

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/CancelFinancingScheme
- **Diagram ID**: 96792
- **Elements**: 12
- **Connectors**: 9

```mermaid
classDiagram
    class ResultCodeCancelFinancingScheme["ResultCodeCancelFinancingScheme"]
    class ValidationCodeCancelFinancingScheme["ValidationCodeCancelFinancingScheme"]
    class ResultCancelFinancingScheme["ResultCancelFinancingScheme"]
    class CancelFinancingSchemeResponse["CancelFinancingSchemeResponse"]
    class CancelFinancingScheme["CancelFinancingScheme"]
    class CancelFinancingSchemeRequest["CancelFinancingSchemeRequest"]
    class DEL_04_407_Cancel_Financing_Scheme["{DEL}04.407 Cancel Financing Scheme"]
    class ValidationResult["ValidationResult"]
    class Use_Case_Financing_Scheme_UC["Use Case : Financing Scheme UC"]
    class Interface_Provided_FinancingSchemeWS["Interface Provided : FinancingSchemeWS"]
    class Version["Version"]
    class FinancingSchemeWS["FinancingSchemeWS"]
    CancelFinancingScheme ..> Version : unnamed
    ResultCancelFinancingScheme ..> ValidationResult : unnamed
    CancelFinancingSchemeRequest ..> CancelFinancingScheme : unnamed
    CancelFinancingSchemeResponse ..> ResultCancelFinancingScheme : unnamed
    ResultCancelFinancingScheme ..> ValidationCodeCancelFinancingScheme : unnamed
    ResultCancelFinancingScheme ..> ResultCodeCancelFinancingScheme : unnamed
    DEL_04_407_Cancel_Financing_Scheme <|.. FinancingSchemeWS : unnamed
    FinancingSchemeWS ..> CancelFinancingSchemeResponse : unnamed
    FinancingSchemeWS ..> CancelFinancingSchemeRequest : unnamed
```
