---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons"
domain: "Analysis Model"
element_id: 1848498
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Fill in application (2BoD)

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Panel of buttons

## 📝 Notes

This button invokes use case 01.083 Fill in application - 2BoD.

Visible only IF Contract.Status = 'IN PRE-PROCESS' and (Contract.Substatus = 'DRAFT' or (Contract.Substatus = 'APPROVED WITH CROSS-SELL LIMITS' and the record in Scoring with Evaluation Request Type=PRELIM exists and product is selected)) and Contract:

	
- is in 2BoD queue (see Algorithm: Check if contract is currently in 2BoD queue) AND the type of the queue (see Algorithm: Find which 2BoD queue type is a contract in) is available for user's application role (the user meets conditions in Process contracts in 2BoD queue (from contract detail) AND the contract is not currently assigned to some other user (Algorithm: Find user assigned to contract in 2BoD queue returns no user or the current user) ... this is the precondition of 01.083 Fill in application - 2BoD

OR

	
- is not in 2BoD queue (see Algorithm: Check if contract is currently in 2BoD queue)


If the contract's 2BoD is required to be filled in via online channel (i.e. Contract->Application Filling Queue.Filling Channel = 'ONLINE'), this button is disabled and message MSG_OnlineFillingChannelRequired is displayed in a tooltip (see the rule Displaying tooltips).

Localization code: APP_FillInApplication

## 🔗 Connections (1)

- → Realisation: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]

## 📊 Appears In (1 diagrams)

- Custom: Panel of buttons
