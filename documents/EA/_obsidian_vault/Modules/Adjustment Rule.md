---
type: GUIElement
stereotype: "combobox"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/User Interface"
domain: "Modules"
element_id: 1803028
diagrams: 1
connections: 2
tags:
  - guielement
  - modules
---

# 🖥️ Adjustment Rule

> **Type**: GUIElement · **Stereotype**: «combobox»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/User Interface

## 📝 Notes

Listed : ServiceTypeAdjustmentRule.name
LDM: Product.ProductToServiceType.ServiceTypeAdjustmentRule

Disabled and set to MANDATORY if ServiceType.ServiceTypeFlag(MANDATORY_WITH_PRODUCT) = True else enabled.

(SERVICE_TYPE_NOT_SET)

## 🔗 Connections (2)

- → Dependency: [[Service Type Adjustment Rule]]
- → Dependency: [[Mandatory (Action 1789793)]]

## 📊 Appears In (1 diagrams)

- Custom: Service or Insurance-Assign
