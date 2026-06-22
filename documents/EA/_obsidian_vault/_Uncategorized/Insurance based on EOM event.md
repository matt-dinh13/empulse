---
type: Package
stereotype: ""
package: ""
domain: "_Uncategorized"
element_id: 1854459
diagrams: 0
connections: 0
tags:
  - package
  - _uncategorized
---

# 📁 Insurance based on EOM event

> **Type**: Package
> **Package**: N/A

## 📝 Notes

This type of insurance is run on EOMBillingFinishedSE event that notify about end-of-month billing on the REL account is finished.
Insurance Service has following setting:

	
- First Insurance Period Trigger = FIRST_EOM_BILLING_DATE
	
- Automatic Prolongation = TRUE
	
- Premium calculation ?


Nowadays, the EOMBillingFinishedSE event is generated internally by evaluation of AccountBalanceChange message (see UC 01.476 Process contract debt change request for more information). 
The "Insurance based on EOM event" process ensures creation of insurance period including insurance premium, revenue amount calculation, generation of a payment for insurance company and the insurance contract activation. There are processed both the first insurance period and next insurance periods (insurance prolongation) for insurance scheme based on REL account billing period.
Notice to this type of insurance:

	
- Insurance starts after the first EOM billing on the account finished
	
- Insurance Period is created even if debt as EOM result is zero. It means, insurance premium amount is zero.
