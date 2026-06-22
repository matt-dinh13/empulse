---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model"
domain: "Analysis Model"
element_id: 1881256
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Display customer offers

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model

## 📝 Notes

Logic behind this button is described within the 01.210 Show contract detail use case.

Enabled only if:

	
- Contract is in status Approved ('S') or Canceled ('T').
	
- Panel Customer offers is not loaded yet.
	
- For the respective instance of customer's scoring, which was during the initialization of the superior Customer Offers operation panel still in progress (for more detail, see the panel's conditions for visibility):
   - System either received the final scoring result (i.e. RBP_Scoring[.Request_ID=External_Identifier[.Key = 'RECALC_SCORING_ID'].Value].Result is not null anymore).
      <OR>
   - Timeout for getting the scoring result defined by the global parameter RecalculationWaitingTime has already expired (i.e. system has been waiting for the result of the scoring longer than the number of seconds defined by such global parameter).


Localization code:
CON_DisplayCustomerOffers

## 📊 Appears In (1 diagrams)

- Custom: Contract detail
