---
type: GUIElement
stereotype: "lcheckbox"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Common panel for consent - product AF"
domain: "Analysis Model"
element_id: 1817818
diagrams: 1
connections: 3
tags:
  - guielement
  - analysis-model
---

# 🖥️ Consents

> **Type**: GUIElement · **Stereotype**: «lcheckbox»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/COMMON for User Interface/Common panel for consent - product AF

## 📝 Notes

Checkbox is initially disabled:
- if GlobalParameter.PrintConsentRequired(BL_PRINT_CONSENT_REQUIRED) = True (enabled after the consent is printed).
- the experimental feature code OTP must be retrieved from HOMESIS REST API GET ( https://{environment}/homesis/restful/salesrooms/{salesroomCode}/experimentalfeatures)

Checkbox is initially enabled:
- if the privilege for use case 01.087 Print consent(UC01_087) is not granted to current user
- if the consent is not set for print (Profile Document Rule Print Moment is missing and the button Print consent is invisible)

Localization code: APP_ConsentPersonalData

## 🔗 Connections (3)

- ← Generalization: [[Consents (GUIElement 1572634)]]
- → Realisation: [[LOR-957 Consent verification via OTP]]
- → Realisation: [[OTP (Feature 1822789)]]

## 📊 Appears In (1 diagrams)

- Custom: Common panel for consent - product AF
