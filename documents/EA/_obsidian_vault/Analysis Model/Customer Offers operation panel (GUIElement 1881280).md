---
type: GUIElement
stereotype: "panel"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model"
domain: "Analysis Model"
element_id: 1881280
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Customer Offers operation panel

> **Type**: GUIElement · **Stereotype**: «panel»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model

## 📝 Notes

Panel with button(s) for the operations with customer's offers.

Displayed only if:

	
- Contract is in status Approved ('S') or Canceled ('T').
	
- Panel Customer offers is not displayed or the button Display customer offers has not been clicked yet.


	
- There is an active scoring of respective customer in progress (which has been triggered based on the underwriting decision done during the evaluation of actual application), which means:
   - Contract->External_Identifier[.Key = 'RECALC_SCORING_ID'] exists AND the scoring with respective identifier has not finished yet (i.e. RBP_Scoring[.Request_ID=External_Identifier.Value].Result is null)

## 📊 Appears In (1 diagrams)

- Custom: Contract detail
