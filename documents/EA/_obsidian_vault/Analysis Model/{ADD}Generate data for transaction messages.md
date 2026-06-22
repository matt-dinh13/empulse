---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model"
domain: "Analysis Model"
element_id: 1878731
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 {ADD}Generate data for transaction messages

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Installment Schedule/Installment Schedule/Use Case Model

## 📝 Notes

{ADD PAYM-870 /}
This business rule finds all contracts with current date > due date >= previous job execution date and generates transaction data for their next installment into HO.BSL_CONTRACT_TRANS_BOOK table for subsequent processing by {ADD}03.011 Generate daily transaction messages for BOOK NG.

Input:

	
- previous job execution date


1. Select contracts fulfilling following conditions:

	
- Its parent installment is first future installment (it has minimal due date that is >= current date)


	
- Its parent installment has ACTIVE_FLAG = 1
	
- Its parent installment has TYPE = STANDARD
	
- Its parent contract has STATUS in (Active, Signed)
	
- Its parent contract has installment which has DUE_DATE < current date AND DUE_DATE >= date of the previous job execution AND CREATION_DATE < date of the previous job execution
	
- The installment part has ITEM_TYPE not in (S, ST)

2. Store collected data into HO.BSL_CONTRACT_TRANS_BOOK table as follows:

	
- CONTRACT.CODE as CONTRACT_CODE
	
- INSTALLMENT.ID as INSTALLMENT_ID
	
- INSTALLMENT.DUE_DATE as DUE_DATE
	
- INSTALLMENT.RECALCULATION_REASON_TYPE as RECALCULATION_REASON
	
- TARIFF_ITEM.CODE as TARIFF_ITEM_TYPE_CODE
	
- INSTALLMENT_PART.PART_TYPE
	
- INSTALLMENT_PART.AMOUNT
	
- INSTALLMENT_PART.AMOUNT_CURR
	
- INSTALLMENT_PART.DATA_EXCHANGE_ID
	
- PREVIOUS_DUE_DATE – due date of previous standard installment

## 🔗 Connections (1)

- ← Dependency: [[{ADD}03.011 Generate daily transaction messages for BOOK NG (UseCase 1879442)]]

## 📊 Appears In (1 diagrams)

- Use Case: Daily ISIR generating for BOOK NG
