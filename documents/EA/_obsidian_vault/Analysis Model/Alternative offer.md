---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules"
domain: "Analysis Model"
element_id: 1818742
diagrams: 2
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Alternative offer

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application Evaluation/Business Rules

## 📝 Notes

This rule describes what set of fullpathes is expected in LAP vector so that we can use them for alternative offer generation.
There could be an array of offers and each offer could have a lot of attributes.

Pattern:
STRATEGY.offers[0].ATTRIBUTE

where STRATEGY can be one of following values:

	
- ceResult
	
- hvResult
	
- postResult
	
- preResult
	
- prelim2Result
	
- prelimRegisterResult
	
- prelim1Result


and ATTRIBUTE can be one of following values:

	
- offerID
	
- creditAmount_Max
	
- creditAmount_min
	
- cashPayment_Max
	
- cashPayment_Min
	
- annuity_Max
	
- annuity_Min
	
- paymentNum_Max
	
- paymentNum_Min
	
- offerValidTo
	
- sameProduct
	
- sortAttribute1
	
- sortOrder1
	
- sortAttribute2
	
- sortOrder2
	
- numOffersDisplayed
	
- giftPaymentForbidden
	
- gracePeriodForbidden
	
- insuranceType1
	
- insuranceType2
	
- insuranceRequired
	
- isForRefinance
	
- pricingCategory
	
- prodCode
	
- prodCode[]
	
- prodSelectionType
	
- eir_Max
	
- eir_Min
	
- prodTypeCode
	
- qualificationCriteria[].key
	
- qualificationCriteria[].val
	
- isRelToOriginalCel

## 🔗 Connections (1)

- ← Dependency: [[01.450 Receive evaluation result (UseCase 1819978)]]

## 📊 Appears In (2 diagrams)

- Custom: Business Rules
- Use Case: Receive evaluation results
