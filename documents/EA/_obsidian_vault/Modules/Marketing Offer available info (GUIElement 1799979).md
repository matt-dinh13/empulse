---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model"
domain: "Modules"
element_id: 1799979
diagrams: 1
connections: 0
tags:
  - guielement
  - modules
---

# 🖥️ Marketing Offer available info

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Detail/User Interface Model

## 📝 Notes

If client is identified then check marketing offers according to the rule Is Marketing Offer to be Responded with parameters
- CUID of client
- Salesroom (if current user is logged on any)
- FilterUnresponded = TRUE
If the result is TRUE then information is displayed (MSG_MarketingOfferAvailable).
Otherwise no information is displayed.

## 📊 Appears In (1 diagrams)

- Custom: Client detail
