---
type: Action
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Use Case model"
domain: "Analysis Model"
element_id: 1876334
diagrams: 1
connections: 3
tags:
  - action
  - analysis-model
---

# 📄 Creates one active summarized installment with installment parts

> **Type**: Action
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/Loan Option CEL/COMMON for Early Repayment/Use Case model

## 📝 Notes

7.    System creates one active INSTALLMENT with

	
- due date from input (INSTALLMENT.DUE_DATE)
	
- number as value from step 5 incremented by 1 (INSTALLMENT.INSTALLMENT_NUMBER)
	
- version as value from step 6 incremented by 1 (INSTALLMENT.INSTALLMENT_VERSION)
	
- deactivated in version as null (INSTALLMENT.DEACTIVATED_IN_VERSION)
	
- contract from input (INSTALLMENT.CONTRACT_ID)
	
- active (INSTALLMENT.ARCHIVED = false)

8.     If RESULT.PRINCIPAL > 0 (from step 3), system creates principal installment part of installment created in step 7 with

	
- part type as principal (INSTALLMENT_PART.INSTALLMENT_PART_TYPE = Principal)
	
- amount as RESULT.PRINCIPAL from step 3 (INSTALLMENT_PART.AMOUNT)
	
- amount paid as zero (INSTALLMENT_PART.AMOUNT_PAID)

9.    If RESULT.INTEREST > 0 (from step 3), system creates interest installment part of installment created in step 7 with

	
- part type as interest (INSTALLMENT_PART.INSTALLMENT_PART_TYPE = Interest)
	
- amount as RESULT.INTEREST from step 3 (INSTALLMENT_PART.AMOUNT)
	
- amount paid as zero (INSTALLMENT_PART.AMOUNT_PAID)

10.    If RESULT.FEE = 0 (from step 3), system creates fee installment part of installment created in step 7 with

	
- part type as fee (INSTALLMENT_PART.INSTALLMENT_PART_TYPE = Fee)
	
- amount as RESULT.FEE from step 3 (INSTALLMENT_PART.AMOUNT)
	
- amount paid as zero (INSTALLMENT_PART.AMOUNT_PAID)

11.    If RESULT.PENALTY = 0 (from step 3), system creates penalty installment part of installment created in step 7 with

	
- part type as penalty (INSTALLMENT_PART.INSTALLMENT_PART_TYPE = Penalty)
	
- amount as RESULT.PENALTY from step 3 (INSTALLMENT_PART.AMOUNT)
	
- amount paid as zero (INSTALLMENT_PART.AMOUNT_PAID)

## 🔗 Connections (2)

- → ControlFlow: [[Get tariff item _Early repayment fee_ by contract and ER request date]]
- ← ControlFlow: [[Get the last version of installment]]

## 📊 Appears In (1 diagrams)

- Activity: 03.110 Perform early repayment installment schedule
