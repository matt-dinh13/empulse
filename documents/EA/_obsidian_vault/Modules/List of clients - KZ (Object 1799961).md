---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/User Interface Model/KZ"
domain: "Modules"
element_id: 1799961
diagrams: 1
connections: 3
tags:
  - object
  - modules
---

# 🔸 List of clients - KZ

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/User Interface Model/KZ

## 📝 Notes

Grid with found clients based on searching criteria.
Default order by: CUID asc

Client's data may be masked/hidden (see business rule Mask client data)

## 🔗 Connections (2)

- → Dependency: [[{MOD}Mask client data]]
- → Dependency: [[{MOD}06.030 Show Client Data (UseCase 1878935)]]

## 📊 Appears In (1 diagrams)

- Custom: List of clients - KZ

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CUID | Number |  |
| Client's full name | text |  |
| National identification number | text |  |
| Gender | enumeration Gender |  |
| Client's birth date | date |  |
| Client's contact address | int |  |
| Buttons | Icons |  |
