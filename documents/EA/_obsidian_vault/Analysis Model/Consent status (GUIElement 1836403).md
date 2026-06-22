---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Client Management/Offer management/User Interface Model/India"
domain: "Analysis Model"
element_id: 1836403
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Consent status

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Offer management/User Interface Model/India

## 📝 Notes

Initially disabled.
Value changes based on values of attributes in the response of consent check:

	
- "Consent accepted" - consent_status=ALLOWED (ConsentStatus.ACCEPTED)
	
- "Consent not accepted yet." - consent_status=PENDING (ConsentStatus.NOT_YET_ACCEPTED)
	
- "Service not available" - consent_status is empty or communication failed (ConsentStatus.NOT_AVAILABLE)


Localization code: GEN_ConsentStatus

## 📊 Appears In (1 diagrams)

- Custom: India
