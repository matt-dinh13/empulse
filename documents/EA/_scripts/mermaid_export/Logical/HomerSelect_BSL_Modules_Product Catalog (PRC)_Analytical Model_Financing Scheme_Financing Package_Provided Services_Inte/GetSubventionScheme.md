# GetSubventionScheme

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/GetSubventionScheme
- **Diagram ID**: 102730
- **Elements**: 9
- **Connectors**: 5

```mermaid
classDiagram
    class COMMON_for_Financing_Package_SubventionSchemeValues["COMMON for Financing Package : SubventionSchemeValues"]
    class GetSubventionSchemeResponse["GetSubventionSchemeResponse"]
    class ResultCodeGetSubventionScheme["ResultCodeGetSubventionScheme"]
    class SubventionSchemeValues["SubventionSchemeValues"]
    class GetSubventionSchemeRequest["GetSubventionSchemeRequest"]
    class DEL_04_418_Get_Subvention_Scheme["{DEL}04.418 Get Subvention Scheme"]
    class Use_Case_Financing_Package_UC["Use Case : Financing Package UC"]
    class Interface_Provided_FinancingSchemeWS["Interface Provided : FinancingSchemeWS"]
    class FinancingSchemeWS["FinancingSchemeWS"]
    FinancingSchemeWS ..> GetSubventionSchemeRequest : unnamed
    DEL_04_418_Get_Subvention_Scheme <|.. FinancingSchemeWS : unnamed
    FinancingSchemeWS ..> GetSubventionSchemeResponse : unnamed
    GetSubventionSchemeResponse ..> SubventionSchemeValues : unnamed
    GetSubventionSchemeResponse ..> ResultCodeGetSubventionScheme : unnamed
```
