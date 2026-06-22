---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules"
domain: "Modules"
element_id: 1803035
diagrams: 5
connections: 5
tags:
  - requirement
  - modules
---

# 📋 {MOD}Check compatibility of service type to product properties

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Calculator/Analytical Model/Product Calculator Engine/Business Rules

## 📝 Notes

Only such Service types are allowed for assignment to Product, which satisfy all following conditions (AND):
 

	
- If ServiceType.DedicatedForProductType is defined then Product.ProductProfile.ProductType must be the same.
	
- Checked only for ServiceType = DEFP:
If Product.ProductProfile.InstallmentScheduleMethod contains at least one option of (IS_ALG_EQ_PRINC, IS_ALG_AN_PRINC), which is marked as default, then ServiceType = DEFP is allowed otherwise is disabled
	
- Checked only for ServiceType.Scope = COMMODITY:
If Product.ProductProfile.InitialTransactionType = POS or Product.ProductProfile.ProductType = SAI then ServiceType with Scope = COMMODITY is allowed otherwise is disabled
	
- Checked for ServiceType in (RELIP, ZPROMO, GRREL):
If Product.ProductProfile.IsDebit = True then ServiceType is disabled.
	
- Checked only for ServiceType = CONS:
If Product.ProductProfile.InitialTransactionType = CASH, then ServiceType = CONS is allowed otherwise is disabled.
	
- Checked only for ServiceType = RELIP:
If Product.UseFinancingScheme = True then ServiceType is disabled.


	
- Checked only for ServiceType.Category = INSURANCE:
If Product.ProductProfile.ProductType = SAI then only service types with ServiceType.ServiceTypeFlag.ServiceTypeFlagType = STANDALONE_INSURANCE are allowed.
	
- Checked only for ServiceType.Category <> INSURANCE:
If Product.ProductProfile.ProductType = SAI then only ServiceType COP{ADD PCG-4515}, FER, PAYHOL, LRES {/ADD} are allowed.

## 🔗 Connections (5)

- ← Dependency: [[Service type (GUIElement 1803025)]]
- ← Dependency: [[Service type (GUIElement 1803025)]]
- ← Dependency: [[Add mandatory service]]
- ← Dependency: [[ProductServiceDto - validation]]
- ← Dependency: [[{DEL}02.631 Assign service to product]]

## 📊 Appears In (5 diagrams)

- Custom: Calculate product offer
- Custom: Offer recalculation
- Custom: Product and Service selection
- Custom: Service or Insurance-Assign
- Custom: Validation Rules
