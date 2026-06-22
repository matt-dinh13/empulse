---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Validations"
domain: "Analysis Model"
element_id: 1615948
diagrams: 2
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Consolidation amount validation rule

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Validations

## 📝 Notes

Input:

	
- Consolidation service
	
- consolidation amount


1. Get consolidation service on the offer.
2. If consolidation amount > Consolidation Service.Maximal Consolidation Amount, the validation failed (MSG_ConsolidationLimitExceeded)
3. If consolidation amount < Consolidation Service.Minimal Consolidation Amount, the validation failed (MSG_ConsolidationLimitExceeded).
4. Otherwise validation passed.

## 🔗 Connections (6)

- → Realisation: [[LOR-494 - Display the list of consolidated contracts before product calculator]]
- → Realisation: [[LOR-393 - New Consolidation form]]
- ← Dependency: [[Validate parameters for contract refinancing]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[01.010 Choose product offer (UseCase 1827711)]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]

## 📊 Appears In (2 diagrams)

- Custom: Validations
- Use Case: Prepare documentation to sign
