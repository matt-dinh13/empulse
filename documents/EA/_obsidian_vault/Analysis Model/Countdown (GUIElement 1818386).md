---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model"
domain: "Analysis Model"
element_id: 1818386
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Countdown

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Contract signing/User Interface Model

## 📝 Notes

Countdown (time-based) relevant for the particular verification attempt.

Other:

	
- When the time validity of the particular verification expires, then system performs the following:
   - When the result is not set yet, then system sets Contract->Agreement->Agreement_Verification[last].Result = 'VERIFICATION_TIMEOUT'.
   - System enables the Generate verification code button.
	
- If the expired validity belongs to the last available generated code (count of Contract[selected via ticked Contract number checkbox and with the lowest .Creation_Date]->Agreement->Agreement_Verification >= value of the global parameter MaxSendingOfVerificationCode), then the Skip verification button is enabled.

## 📊 Appears In (1 diagrams)

- Custom: Contract signing
