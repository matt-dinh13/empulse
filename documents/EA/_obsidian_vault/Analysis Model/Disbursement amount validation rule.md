---
type: Requirement
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Validations"
domain: "Analysis Model"
element_id: 1615946
diagrams: 2
connections: 6
tags:
  - requirement
  - analysis-model
---

# 📋 Disbursement amount validation rule

> **Type**: Requirement
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consolidation/Validations

## 📝 Notes

Input:

	
- consolidation service
	
- credit amount
	
- consolidation amount


1. Get consolidation service on the offer.
2. If Consolidation service.Consolidation type=ONLY_FOR_REFINANCING and credit amount minus consolidation amount<>0, the validation failed (MSG_DisbursementLimitExceeded)
3. If credit amount minus consolidation amount > Consolidation Service.Maximal Disbursement Amount, the validation failed (MSG_DisbursementLimitExceeded).
4. If credit amount minus consolidation amount < Consolidation Service.Minimal Disbursement Amount(if not defined, 0 is used), the validation failed.(MSG_DisbursementLimitExceeded)
5. Otherwise validation passed.

## 🔗 Connections (6)

- ← Dependency: [[Validate parameters for contract refinancing]]
- → Realisation: [[LOR-393 - New Consolidation form]]
- → Realisation: [[LOR-494 - Display the list of consolidated contracts before product calculator]]
- ← Dependency: [[01.080 Fill in application (UseCase 1821367)]]
- ← Dependency: [[01.010 Choose product offer (UseCase 1827711)]]
- ← Dependency: [[{MOD}01.186 Prepare documentation]]

## 📊 Appears In (2 diagrams)

- Custom: Validations
- Use Case: Prepare documentation to sign
