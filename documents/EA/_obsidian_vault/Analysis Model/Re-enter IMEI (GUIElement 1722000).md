---
type: GUIElement
stereotype: "text"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF"
domain: "Analysis Model"
element_id: 1722000
diagrams: 1
connections: 2
tags:
  - guielement
  - analysis-model
---

# 🖥️ Re-enter IMEI

> **Type**: GUIElement · **Stereotype**: «text»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/COMMON for Fill in application/User Interface Model/Product/Commodities - product AF/Commodity - product AF

## 📝 Notes

Always empty on initialization. Serve to re-enter IMEI so that user fill-in the value correctly.
It is not possible to paste any value from the clipboard.

Visible and enabled only if CommodityType.flags = 'IMEI'.

Localization:GEN_Re_IMEI

## 🔗 Connections (2)

- ← Generalization: [[Re-enter IMEI]]
- → Dependency: [[Re-entered IMEI (Action 1789790)]]

## 📊 Appears In (1 diagrams)

- Custom: Commodity - product AF
