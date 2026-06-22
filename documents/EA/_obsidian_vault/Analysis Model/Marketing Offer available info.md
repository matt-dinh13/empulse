---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail"
domain: "Analysis Model"
element_id: 1686961
diagrams: 1
connections: 1
tags:
  - guielement
  - analysis-model
---

# 🖥️ Marketing Offer available info

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Client detail

## 📝 Notes

If client is identified then check marketing offers according to the rule Is Marketing Offer to be Responded with parameters
- CUID of client
- Salesroom (if current user is logged on any)
- FilterUnresponded = TRUE
If the result is TRUE then information is displayed (MSG_MarketingOfferAvailable).
Otherwise no information is displayed.

## 🔗 Connections (1)

- → Dependency: [[Is Marketing Offer to be Responded (Requirement 1817938)]]

## 📊 Appears In (1 diagrams)

- Custom: Client detail
