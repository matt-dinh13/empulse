---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model"
domain: "Analysis Model"
element_id: 1310790
diagrams: 1
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Rules for Entering Outgoing Payment Search criteria - PAID

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Payments/Outgoing payments/Browsing Outgoing Payments/User Interface model

## 📝 Notes

- PaymentType - optional
	
- TransactionDateFrom - optional
	
- TransactionDateTo - optional


Values TransactionDateFrom/To are checked and adjusted according to the rule Validation and Adjustment of Interval in Days with parameter MaxDays = 31.
Adjusted values are refreshed in the form for search criteria.

## 🔗 Connections (3)

- → Generalization: [[Rules for Entering Outgoing Payment Search criteria]]
- → Dependency: [[Validation and Adjustment of Interval in Days]]
- ← Dependency: [[Search criteria - PAID]]

## 📊 Appears In (1 diagrams)

- Custom: Search criteria - PAID
