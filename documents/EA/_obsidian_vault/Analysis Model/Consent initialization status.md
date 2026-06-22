---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/X-sell offer recalculation/India"
domain: "Analysis Model"
element_id: 1621932
diagrams: 1
connections: 0
tags:
  - guielement
  - analysis-model
---

# 🖥️ Consent initialization status

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Application detail/User Interface Model/X-sell offer recalculation/India

## 📝 Notes

Initially enabled.
Value changes based on values of attributes in the response of consent initialization:

	
- "Not started" - default value (ConsentInitStatus.NOT_STARTED)
	
- "Service not available" - if the service is not working or didn't send any response (ConsentInitStatus.NOT_AVAILABLE)
	
- "VIL number, consent required" - partner =VIL (ConsentInitStatus.VIL_REQUIRED)
	
- "not VIL number" - partner=OTHER or UNKNOWN (ConsentInitStatus.NOT_VIL)


Localization code: GEN_ConsentInitStatus

## 📊 Appears In (1 diagrams)

- Custom: India
