---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Use Case Model"
domain: "Analysis Model"
element_id: 1876163
diagrams: 5
connections: 3
tags:
  - requirement
  - analysis-model
---

# 📋 Create first insurance period upon activation

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/Use Case Model

## 📝 Notes

Inputs:

	
- contract insurance service


Steps:


	
- System determines insurance period according to business rule Determine first insurance period with following parameters:
- insurance service = insurance service (exact version) which is being processed
- term = term of the contract
- date sent to approval = Contract.Sent To Approval
- date signed = date of the first contract's status transition to status "Signed"
-  transaction signed = NULL
- date activated = current date
- last repayment date is set to the latest due date of the contract's installment schedule (last regular installment)
- estimated duration is set to the duration of the pre calculated first period in days for the insurance service being processed (estimated duration = period end - period start + 1) where period start and end are Offer Insurance Service.Estimated First Period Start and Offer Insurance Service.Estimated First Period End respectively)
	
- System calculates sum insured for the insurance according to the tariff assigned to the service. Sum insured is calculated as a sum of tariff items values with Tariff Item Type.Usage = 'Sum Insured' (tariff items valid by the date of contract's date sent to approval are taken into account)
	
- System calculates insurance premium for the insurance from tariff items calculated for the contract (FP Tariff Item). All items linked to the current insurance service having Tariff Item->Tariff Item Type.Usage = 'Service' are summed and the result is used as an insurance premium.
	
- System creates a new insurance period for the insurance contract (Insurance Period) using UC 11.020 Add insurance period with insurance period start, end, sum insured and insurance premium as parameters.

## 🔗 Connections (3)

- ← Dependency: [[{MOD}01.290 Activate contract]]
- → Dependency: [[Determine first insurance period]]
- → Dependency: [[11.020 Add insurance period (UseCase 1879775)]]

## 📊 Appears In (5 diagrams)

- Use Case: Activate Insurance contract
- Use Case: Contract registration
- Use Case: CSI-2977 COS - Process Contract notifications to Deal activation
- Use Case: CSI-2977 COS - Process Contract notifications to Deal activation
- Use Case: Insurance Contract Management
