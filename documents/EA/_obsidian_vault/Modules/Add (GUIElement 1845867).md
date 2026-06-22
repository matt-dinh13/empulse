---
type: GUIElement
stereotype: "button"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Sales Description/User Interface for Sales Description Management"
domain: "Modules"
element_id: 1845867
diagrams: 1
connections: 1
tags:
  - guielement
  - modules
---

# 🖥️ Add

> **Type**: GUIElement · **Stereotype**: «button»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Sales Description/User Interface for Sales Description Management

## 📝 Notes

If no sales description exists for the entity, create new one by calling POST sales-descriptions with parameters from the form
- name = generate by rule Generate sales description name 
- attributes.add
  - key = Key
  - type = Type
  - value = Value
  - localizedValue - localizedValue.key = code of the language, localizedValue.value = Value for specific language
- assignments.add
  - entityType = entityType
  - entityCode = entity.Code
  - entityVersion = fill only if the Versioned checkbox is ticked (true) with the value of entity.VersionNumber of the entity, else null

If sales description exists for the entity, update by calling PUT sales-descriptions with parameters
- attributes.add
  - key = Key
  - type = Type
  - value = Value
  - localizedValue - localizedValue.key = code of the language, localizedValue.value = Value for specific language

## 🔗 Connections (1)

- → Dependency: [[{ADD}Generate sales description name]]

## 📊 Appears In (1 diagrams)

- Custom: Set Sales Description on entity
