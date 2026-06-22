---
type: Requirement
stereotype: "Functional"
package: "HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features"
domain: "Analysis Model"
element_id: 1876180
diagrams: 1
connections: 2
tags:
  - requirement
  - analysis-model
---

# 📋 Create first insurance period upon first transaction

> **Type**: Requirement · **Stereotype**: «Functional»
> **Package**: HomerSelect/BSL/Analysis Model/Insurance/Insurance Contract/REL Insurance features

## 📝 Notes

Inputs:

	
- Contract Insurance Service


Steps:


	
- System determines insurance period according to business rule Determine first insurance period with following parameters:
- Insurance Service = Insurance Service (exact version) which is being processed
- term = NULL a default
- date sent to approval = NULL a default
- date signed = NULL a default
- transaction signed = current date
- date activated = NULL a default
	
- System calculates sum insured for the insurance according to the tariff assigned to the service. Sum insured is calculated as a sum of tariff items values with Tariff Item Type.Usage = 'Sum Insured' (tariff items valid by the date of contract's date sent to approval are taken into account)
	
- System calculates insurance premium for the insurance from tariff items calculated for the contract (FP Tariff Item). All items linked to the current insurance service having Tariff Item->Tariff Item Type.Usage = 'Service' are summed and the result is used as an insurance premium.
	
- System creates a new insurance period for the insurance contract (Insurance Period) using UC 11.020 Add insurance period with insurance period start, end, sum insured and insurance premium as parameters.

## 🔗 Connections (2)

- ← Dependency: [[01.770 Process account transaction notification (UseCase 1875616)]]
- → Dependency: [[11.020 Add insurance period (UseCase 1879775)]]

## 📊 Appears In (1 diagrams)

- Use Case: Processing of first transaction notification
