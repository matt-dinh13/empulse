---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface"
domain: "Modules"
element_id: 1872038
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Incentive Program

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface

## 📝 Notes

LDM: PRODUCT.IncentiveProgram

List of available incentive programs - retrieved from external module (Account Pricing) by REST service IncentivePrograms.incentive-programs with parameter:
- status = RUNNING
If external module does not respond then message MSG_IP_NotAvailable is displayed and UC ends.

Visible only if ProductProfile.ProductType = REL

Localization code: PRD_IncentiveProgram

Note:
example of REST request: nejaky-cabus-web/incentive-programs?status=RUNNING

## 🔗 Connections (1)

- → Dependency: [[Optional]]

## 📊 Appears In (1 diagrams)

- Custom: Set main product properties
