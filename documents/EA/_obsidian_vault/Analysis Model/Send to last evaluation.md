---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Contract information"
domain: "Analysis Model"
element_id: 1612888
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Send to last evaluation

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/User Interface Model/Tab-Contract information

## 📝 Notes

Date when the contract was sent to last evaluation.
The date (Contract.Scoring.Evaluation_Request_Date) is based on the latest performed scoring type for the contract(the check is done in the given order):

	
- If scoring type "OFFER" exists on the contract, then time and date when the contract entered the scoring type is taken. And the following is ignored.
	
- If scoring type "MAIN" exists on the contract, then time and date when the contract entered the scoring type is taken. And the following is ignored.
	
- If scoring type "PRELIM" exists on the contract, then time and date when the contract entered the scoring type is taken.


Localization code: CON_SendEvaluationDate

## 📊 Appears In (1 diagrams)

- Custom: Tab-Contract information
