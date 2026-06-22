---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface"
domain: "Modules"
element_id: 1873518
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Run all

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Salesroom/User Interface

## 📝 Notes

Button Run all will process all parsed product to salesroom assignments, from the imported file, for all salesrooms from the imported file by calling POST salesrooms/{codes}/products (UC POST salesrooms products )

## 🔗 Connections (1)

- → Dependency: [[POST salesrooms products]]

## 📊 Appears In (1 diagrams)

- Custom: Products import
