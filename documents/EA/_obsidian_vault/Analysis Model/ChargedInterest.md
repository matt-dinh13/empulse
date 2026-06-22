---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA"
domain: "Analysis Model"
element_id: 1879490
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 ChargedInterest

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Data sources/Logical Data Model/Common/HO_ALOP_DATA

## 📝 Notes

A charged interest structure
Mapping into ChargedInterest structure:
-- Regular IP (non gift)
Case ASQ.regularInstalmentPlan.annualInterestRate value exists

	
- caseType = STANDARD, interestType = NOMINAL, rate = annualInterestRate

Case ASQ.regularInstalmentPlan.effectiveInterestRate value exists

	
- caseType = STANDARD, interestType = EFFECTIVE, rate = effectiveInterestRate


-- Gift IP
Case ASQ.giftInstalmentPlan.annualInterestRate value exists

	
- caseType = PRIME, interestType = NOMINAL, rate = annualInterestRate

Case ASQ.giftInstalmentPlan.effectiveInterestRate value exists

	
- caseType =PRIME, interestType = EFFECTIVE, rate = effectiveInterestRate

## 🔗 Connections (1)

- ← Dependency: [[LoanParameters]]

## 📊 Appears In (1 diagrams)

- Logical: HO_ALOP_DATA

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | string |  |
| case | string |  |
| rate | decimal |  |
