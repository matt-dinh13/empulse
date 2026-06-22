---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/User Interface Model/VN"
domain: "Modules"
element_id: 1799960
diagrams: 1
connections: 2
tags:
  - object
  - modules
---

# 🔸 List of clients - VN

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/User Interface Model/VN

## 📝 Notes

Grid with found clients based on searching criteria.
Default order by: CUID asc

Client's data may be masked/hidden (see business rule Mask client data)

## 🔗 Connections (1)

- → Dependency: [[{MOD}Mask client data]]

## 📊 Appears In (1 diagrams)

- Custom: List of clients - VN

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CUID | Number |  |
| Client's full name | text |  |
| Client's birth date | date |  |
| Gender | enumeration Gender |  |
| Buttons | Icons |  |
