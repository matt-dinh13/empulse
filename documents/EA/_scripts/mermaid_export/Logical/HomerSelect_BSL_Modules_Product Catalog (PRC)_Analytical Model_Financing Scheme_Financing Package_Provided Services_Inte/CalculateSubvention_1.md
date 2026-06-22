# CalculateSubvention

```mermaid
classDiagram
    class MOD_CalculateSubventionTransaction["{MOD}CalculateSubventionTransaction"]
    class SubventionItem["SubventionItem"]
    class Commodity_Type["Commodity Type"]
    class Version["Version"]
    class ResultCodeCalculateSubvention["ResultCodeCalculateSubvention"]
    class CalculateSubventionResponse["CalculateSubventionResponse"]
    class CalculateSubventionRequest["CalculateSubventionRequest"]
    class n_04_419_Calculate_Subvention["04.419 Calculate Subvention"]
    class Use_Case_Financing_Package_UC["Use Case : Financing Package UC"]
    class Interface_Provided_FinancingSchemeWS["Interface Provided : FinancingSchemeWS"]
    class FinancingSchemeWS["FinancingSchemeWS"]
    FinancingSchemeWS --> n_04_419_Calculate_Subvention : unnamed
    FinancingSchemeWS --> CalculateSubventionRequest : unnamed
    FinancingSchemeWS --> CalculateSubventionResponse : unnamed
    CalculateSubventionResponse --> ResultCodeCalculateSubvention : unnamed
    CalculateSubventionRequest --> Version : unnamed
    MOD_CalculateSubventionTransaction --> Commodity_Type : unnamed
    CalculateSubventionResponse --> SubventionItem : unnamed
    CalculateSubventionRequest --> MOD_CalculateSubventionTransaction : unnamed
```
