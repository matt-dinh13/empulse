# Financing Scheme Values - validation Rules

- **Diagram Type**: Custom
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Scheme/Provided Services/Validation Rules
- **Diagram ID**: 141364
- **Elements**: 9
- **Connectors**: 7

```mermaid
graph TD
    Financing_Scheme_Variant_Criterion_Type["Financing Scheme Variant Criterion Type"]
    CoolingOff_Period_Scheme["CoolingOff Period Scheme"]
    Financing_Scheme_Variant_Type["Financing Scheme Variant Type"]
    DEL_Financing_Scheme_Initial_Payment_Type["{DEL}Financing Scheme Initial Payment Type"]
    MOD_Tariff["{MOD}Tariff"]
    Installment_Plan_Scheme["Installment Plan Scheme"]
    Currency["Currency"]
    MOD_ValidationCodeFinancingSchemeValues["{MOD}ValidationCodeFinancingSchemeValues"]
    FinancingSchemeValues_validation_rules["FinancingSchemeValues - validation rules"]
    FinancingSchemeValues_validation_rules -->|unnamed| Currency
    FinancingSchemeValues_validation_rules -->|unnamed| Installment_Plan_Scheme
    FinancingSchemeValues_validation_rules -->|unnamed| MOD_Tariff
    FinancingSchemeValues_validation_rules -->|unnamed| DEL_Financing_Scheme_Initial_Payment_Type
    FinancingSchemeValues_validation_rules -->|unnamed| Financing_Scheme_Variant_Type
    FinancingSchemeValues_validation_rules -->|unnamed| CoolingOff_Period_Scheme
    FinancingSchemeValues_validation_rules -->|unnamed| Financing_Scheme_Variant_Criterion_Type
```
