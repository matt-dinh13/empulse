# FinancingPackageValues

- **Diagram Type**: Logical
- **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Financing Scheme/Financing Package/Provided Services/Interface Provided/COMMON for Financing Package
- **Diagram ID**: 138384
- **Elements**: 16
- **Connectors**: 11

```mermaid
classDiagram
    class Subvention_Purpose["Subvention Purpose"]
    class Financing_Package_Initial_Payment_Limit_Type["Financing Package Initial Payment Limit Type"]
    class FinancingPackageInitialPaymentLimit["FinancingPackageInitialPaymentLimit"]
    class Subvention_Scheme["Subvention Scheme"]
    class Commodity_Type["Commodity Type"]
    class MOD_FinancingPackageSubvention["{MOD}FinancingPackageSubvention"]
    class Financing_Package_Flag_Type["Financing Package Flag Type"]
    class FinancingPackageFlag["FinancingPackageFlag"]
    class MOD_ValidationCodeFinancingPackageValues["{MOD}ValidationCodeFinancingPackageValues"]
    class FinancingPackageItem["FinancingPackageItem"]
    class FinancingPackageCriterion["FinancingPackageCriterion"]
    class Financing_Scheme["Financing Scheme"]
    class FinancingPackageValues["FinancingPackageValues"]
    class GetFinancingPackage_GetFinancingPackage["GetFinancingPackage : GetFinancingPackage"]
    class UpdateFinancingPackage_UpdateFinancingPackage["UpdateFinancingPackage : UpdateFinancingPackage"]
    class CreateFinancingPackage_CreateFinancingPackage["CreateFinancingPackage : CreateFinancingPackage"]
    FinancingPackageItem ..> Financing_Scheme : unnamed
    FinancingPackageValues ..> FinancingPackageCriterion : unnamed
    FinancingPackageValues ..> FinancingPackageItem : unnamed
    FinancingPackageValues ..> FinancingPackageFlag : unnamed
    FinancingPackageFlag ..> Financing_Package_Flag_Type : unnamed
    FinancingPackageValues ..> MOD_FinancingPackageSubvention : unnamed
    MOD_FinancingPackageSubvention ..> Commodity_Type : unnamed
    MOD_FinancingPackageSubvention ..> Subvention_Scheme : unnamed
    FinancingPackageValues ..> FinancingPackageInitialPaymentLimit : unnamed
    FinancingPackageInitialPaymentLimit ..> Financing_Package_Initial_Payment_Limit_Type : unnamed
    MOD_FinancingPackageSubvention ..> Subvention_Purpose : unnamed
```
