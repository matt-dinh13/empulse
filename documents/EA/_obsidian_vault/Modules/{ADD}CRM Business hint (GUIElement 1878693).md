---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-15196/CLM-4429  - Extend Customer offers with RTDM data"
domain: "Modules"
element_id: 1878693
diagrams: 2
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ {ADD}CRM Business hint

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Requirements/CBL-15196/CLM-4429  - Extend Customer offers with RTDM data

## 📝 Notes

If global parameter extendOffersWithRTDMData = True then this element is visible.
If MSG_RtdmModule_RecoredFailedToLoad is displayed for this offer then element value is 'Communication error'.

LDM source: Outputs.businessHint from getRTDMData REST API response

Localization code: CLI_CRM_Hint

## 📊 Appears In (2 diagrams)

- Custom: CLM-4429  - Extend Customer offers with RTDM data
- Custom: Customer offers tab v2
