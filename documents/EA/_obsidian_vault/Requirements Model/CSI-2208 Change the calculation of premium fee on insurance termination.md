---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16453 (CSI-2123) Change the calculation of refunding fee when customer ET"
domain: "Requirements Model"
element_id: 1730343
diagrams: 1
connections: 0
tags:
  - requirement
  - requirements-model
---

# 📋 CSI-2208 Change the calculation of  premium fee on insurance termination

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CSI/CBL-16453 (CSI-2123) Change the calculation of refunding fee when customer ET

## 📝 Notes

Refund amount (terminated insurance amount):

BSL create new type of “Remaining Fee Calculation Type” to generate the correct formula to calculate Refunding fee when customer ER (Early Repayment) or ET (Early terminated) insurance only.  The correct formula be defined under this new type is:

Formula for Non-PPI:
Refund premium = [Total_insurance_premium /Initial validity period (days) *(i)*] * Remaining time (days) (ii) * Refunding ratio (iii)
Remaining Provided Credit Amount = Remaining Provided Credit Amount Total – Refund premium

In there:

	
- ( i) Refer as point 1
	
- (ii) Number of days left after termination = Contract End date – Number of joining days
	
- Number of joining days = termination request date – contract sign date
	
- (iii) Refer as point 2


Formula for PPI:
Refund premium = [Total_Insurance_Premium/ loan tenor] * remaining tenor of contract * Refunding ratio (iii)

After determining the Refund premium, the system will regenerated payment schedule based on Remaining Provided Credit Amount as the current behavior.

1. Insurance tenor (the term of the insurance/ Insurance period):

	
- Based on the setting of “Term Count Limit” at Insurance Service tab, BSL define the insurance tenor separated with the loan tenor


2. Refunding ratio (setting of Insurance Service.Ratio):
Create new field on BSL for user can set the Refunding ratio for each insurance product line at services code level. Below is the current refunding ratios per Insurance Product matched with Insurers:
Insurance product | Refunding ratio

	
- PPI	    100%
	
- CI	     80%
	
- HOCO  80%
	
- TWI	     70%
	
- ADLD   30%

## 📊 Appears In (1 diagrams)

- Custom: CBL-16453 (CSI-2123) Change the calculation of refunding fee when customer ET
