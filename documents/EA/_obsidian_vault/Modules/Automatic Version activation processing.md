---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Versioned entity/Business Rules"
domain: "Modules"
element_id: 1208896
diagrams: 7
connections: 10
tags:
  - requirement
  - modules
---

# 📋 Automatic Version activation processing

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/COMMON for Product Catalog/Versioned entity/Business Rules

## 📝 Notes

Automatic activation of versioned object.
Input: Type of versioned Entity 
(PRODUCT/SERVICE/TARIFF/FIN_SCHEME/FIN_PACKAGE).

Procedure:

For each version of instance of Entity where 
- version.VersionStatus = 'ForActivation' 
- version.PlannedActivationDate <= current date (the Day fraction is compared, time is ignored)

System checks activation rules for corresponding Entity type:
-- PRODUCT: Product activation validation rules. 
-- SERVICE: Service activation validation rules. 
-- TARIFF: Tariff activation validation rules. 
-- FIN_SCHEME: ActivateFinancingScheme - validation rules
-- FIN_PACKAGE: ActivateFinancingPackage - validation rules

If any error/warning is detected it is sent to message box (see Info to Message Box below).
If an error is detected then
- version.VersionStatus is set to Inactive (N)
- system continues with the next version

If exists another version of the same Instance of Entity in status  Active, system sets the status of this version to Terminated and Version Termination date to current date and time.
System sets the status of selected version of Instance of Entity to Active and Version Activation date to current date and time. 

System continues with the next version of instance of Entity where 

Info to Message Box:
Info about detected error/warning is sent to message box of the user who sets the Entity version to status ForActivation. 
Format of message is 'Activation of <Entity> version <Entity code>/<Entity version number> warning/error: <validation message>.'.
Example: Activation of PRODUCT version CLX-012/2 warning/error: No product variant assigned to product.

## 🔗 Connections (10)

- → Dependency: [[{MOD}Tariff activation validation rules]]
- → Dependency: [[{MOD}Service activation validation rules]]
- → Dependency: [[ActivateFinancingPackage - validation rules]]
- → Dependency: [[ActivateFinancingScheme - validation rules]]
- → Dependency: [[{MOD}Product activation validation rules]]
- ← Dependency: [[04.190 Activate Tariff version automatically]]
- ← Dependency: [[08.190 Activate Service version automatically]]
- ← Dependency: [[04.416 Activate Financing Package version automatically (UseCase 1859182)]]
- ← Dependency: [[04.406 Activate Financing Scheme version automatically (UseCase 1859186)]]
- ← Dependency: [[02.262 Activate product version automatically (UseCase 1872117)]]

## 📊 Appears In (7 diagrams)

- Custom: Business Rules for Versioned Entity
- Custom: PCG-5653 CBL-31043 BRPH-2754 - Short term product versions (promo version)
- Use Case: Financing Package - job processing
- Use Case: Financing Scheme - job processing
- Use Case: Manage Product
- Use Case: Manage Services
- Use Case: Tariffs
