# GetInstallmentPlanScheme

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Interface Provided/GetInstallmentPlanScheme
- **Diagram ID**: 98557
- **Elements**: 8
- **Connectors**: 5

```mermaid
classDiagram
    class InstallmentPlanSchemeValues["InstallmentPlanSchemeValues"]
    class ResultCodeGetInstallmentPlanScheme["ResultCodeGetInstallmentPlanScheme"]
    class GetInstallmentPlanSchemeResponse["GetInstallmentPlanSchemeResponse"]
    class GetInstallmentPlanSchemeRequest["GetInstallmentPlanSchemeRequest"]
    class DEL_04_400_Get_Installment_Plan_Scheme["{DEL}04.400 Get Installment Plan Scheme"]
    class Use_Case_Financing_Scheme_UC["Use Case : Financing Scheme UC"]
    class Interface_Provided_FinancingSchemeWS["Interface Provided : FinancingSchemeWS"]
    class FinancingSchemeWS["FinancingSchemeWS"]
    GetInstallmentPlanSchemeResponse ..> ResultCodeGetInstallmentPlanScheme : unnamed
    GetInstallmentPlanSchemeResponse ..> InstallmentPlanSchemeValues : unnamed
    FinancingSchemeWS ..> GetInstallmentPlanSchemeResponse : unnamed
    DEL_04_400_Get_Installment_Plan_Scheme <|.. FinancingSchemeWS : unnamed
    FinancingSchemeWS ..> GetInstallmentPlanSchemeRequest : unnamed
```
