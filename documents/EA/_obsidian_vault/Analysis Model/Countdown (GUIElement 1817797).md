---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consent verification/User Interface Model - Consent verification"
domain: "Analysis Model"
element_id: 1817797
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Countdown

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Consent verification/User Interface Model - Consent verification

## 📝 Notes

When time validity of verification expires:

	
- if result is not set yet, system sets TempAppl Document Verification(last).Result = VERIFICATION_TIMEOUT
	
- system checks if limit for maximum number of generated verification codes is reached according to the rule Check limit for maximum number of generated codes for OTP consent verification. If so (i.e. limitReached = 'TRUE'), then the Generate verification code button and respective field with primary mobile phone number on Contact to client panel (i.e. Mobile phone1) remain disabled. Otherwise system enables them again.

## 🔗 Connections (2)

- ← Generalization: [[Countdown (GUIElement 1572621)]]
- → Dependency: [[Check limit for maximum number of generated codes for OTP consent verification]]

## 📊 Appears In (1 diagrams)

- Custom: Verification panel
