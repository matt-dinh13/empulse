---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule"
domain: "Analysis Model"
element_id: 1507677
diagrams: 3
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Search for transactions rule

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Account management/Account detail/Business rule

## 📝 Notes

Rule for searching revolving transactions on the Transaction history screen
All defined criteria are forwarded to the Account management via GetAccountItemRequest method of interface AccountUIWS

Entering criteria in Show transactions field:

	
- In case 'ALL' value (getting all transaction Active as well as Canceled),
- AccountItemSearchDto.isCancelled = NULL (no setting for this attribute is done)
- If 'Including recalculated transactions' is FALSE, then add 'RECALCULATION' into AccountItemSearchDto.excludedCancellationReasons else excludedCancellationReasons is empty
	
- In case 'ACTIVE_ONLY' value (getting only Active transaction), system sets AccountItemSearchDto.isCancelled = FALSE. This is default setting on the screen opening
- AccountItemSearchDto.excludedCancellationReasons is not filled in
	
- In case 'CANCELLED_ONLY' value (getting only Cancelled transaction), system sets AccountItemSearchDto.isCancelled = TRUE.
- If 'Including recalculated transactions' is FALSE, then add 'RECALCULATION' into AccountItemSearchDto.excludedCancellationReasons else excludedCancellationReasons is empty


For next search criteria see country specifications as below:

	
- Search transaction - countries specification

## 🔗 Connections (2)

- ← Generalization: [[Search for transactions rule - countries specification]]
- ← Dependency: [[12.604 Show transaction history (UseCase 1878585)]]

## 📊 Appears In (3 diagrams)

- Custom: Business rule
- Custom: CBL-2410 (CLM-1135) Genesys Operation Part - BSL change_DHS499
- Custom: Tab - Transaction History
