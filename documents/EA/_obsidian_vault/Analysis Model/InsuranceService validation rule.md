---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules"
domain: "Analysis Model"
element_id: 1773396
diagrams: 1
connections: 4
tags:
  - requirement
  - analysis-model
---

# 📋 InsuranceService validation rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Interface to external system (eshop)/Contract origination/Application Management/Validation Rules

## 📝 Notes

- code - only values of insurance services assigned to the offer(Product Offer Response- >Offer Financial Parameters-> Offer Insurance Service -> Service.Code) are accepted 
	
- insuranceCustomData - each record is validated according to InsuranceCustomData validation rule


All assigned Insurance custom data (Insurance Service->Insurance Program-> Insurance Custom Data Def -> Custom Data Definition.Code) must be present.

## 🔗 Connections (4)

- ← Dependency: [[Application validation rule (Requirement 1773433)]]
- → Dependency: [[InsuranceCustomData validation rule]]
- → Generalization: [[Service validation rule]]
- ← Dependency: [[{MOD}01.170 Update offer externally]]

## 📊 Appears In (1 diagrams)

- Custom: Validation Rules
