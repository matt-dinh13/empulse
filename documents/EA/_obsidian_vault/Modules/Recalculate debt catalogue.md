---
type: Requirement
stereotype: "BusinessRule"
package: "HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue"
domain: "Modules"
element_id: 1877497
diagrams: 5
connections: 1
tags:
  - requirement
  - modules
---

# 📋 Recalculate debt catalogue

> **Type**: Requirement · **Stereotype**: «BusinessRule»
> **Package**: HomerSelect/BSL/Modules/Debt catalogue/Analytical Model/Business Rules/Debt Catalogue

## 📝 Notes

Input parameters:
- contractCode
- mandatoryABCnotification
 

	
- System call UC01.474 Calculate CEL debt info with input parameters
	
- If global parameter "DEBT_CATALOGUE_MODULE_OUT" is TRUE, ten system sends CreateDebtCatalogueRecalculationRequest message with input parameters

## 🔗 Connections (1)

- → Dependency: [[01.474 Calculate CEL debt info (UseCase 1876071)]]

## 📊 Appears In (5 diagrams)

- Custom: Debt full info calculations
- Use Case: Pay-off CEL contract
- Use Case: Pay-off REL contract
- Use Case: Write-off CEL contract
- Use Case: Write-off REL contract
