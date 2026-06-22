---
type: GUIElement
stereotype: "label"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface"
domain: "Modules"
element_id: 1872020
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Partner scheme

> **Type**: GUIElement · **Stereotype**: «label»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Root/User Interface

## 📝 Notes

Displayed only when Product catalog Application properties.partnerScheme = true

Partner scheme code obtained by Get partner scheme code  with attributes productCode = Product.code from response
If no value is returned then display "Manage partner scheme" instead of schemeCode.

Displayed as link to Partner scheme code management in Commodity module (User Interface : User Interface )
address: https://commodity.{environment}/partner-schemes
example: https://commodity.ph00a1.cz.infra/partner-schemes

## 🔗 Connections (1)

- → Dependency: [[Get partner scheme code]]

## 📊 Appears In (1 diagrams)

- Custom: Set main product properties
