---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848497
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ {MOD}Disburse money

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

Invokes use case 05.092 Create outgoing payments manually

Visibility:
Only if Contract status is SIGNED
and
Salesroom[where contract was signed].Manual Disbursement Allowed = true
...Salesroom[where contract was signed] is get according to the rule Get salesroom by operation, passed is Contract and operation = APPLICATION_CREATED


{DEL CBL-860 PAYM-469}Renamed from Create outgoing payments manually
Enabled:
Only if one of the conditions is met:

	
- Contract has outgoing payment in status W (Waiting)
	
- Contract has no outgoing payment where type is PTR (Payment to retailer) or CL (Cash loan disbursement)

{/ADD}
{DEL CBL-860 PAYM-469}Renamed from Create outgoing payments manually
Enable:
Only if does not exist Contract.OutgoingPayment in any status where Payment Type is not in ('INS' (Premium to insurance company), 'INR' (Insurance revenue)). 
{/DEL}

Localozation code:
CON_DisbMoney

## 🔗 Connections (1)

- → Dependency: [[05.092 {MOD}Disburse outgoing payments manually]]

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons
