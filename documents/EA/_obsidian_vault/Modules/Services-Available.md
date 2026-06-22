---
type: GUIElement
stereotype: "list"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Exclusivity/User Interface"
domain: "Modules"
element_id: 1265933
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Services-Available

> **Type**: GUIElement · **Stereotype**: «list»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Exclusivity/User Interface

## 📝 Notes

Listed: List of active Service.(Service.ServiceType.(code+name)/Service.(code+name)) where service <> current.service which are not displayed in the field Services-Selected.

Filtered according to selected service type in combo Service type.
Multiple selection must be possible.
Not saved.
Current service means the service to which are service relations assigned.

Localization code: SER_ServAvailable

## 🔗 Connections (1)

- → Dependency: [[Service (Class 1880804)]]

## 📊 Appears In (1 diagrams)

- Custom: Service Relations - Set
