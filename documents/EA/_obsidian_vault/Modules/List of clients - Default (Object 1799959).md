---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/User Interface Model/Default"
domain: "Modules"
element_id: 1799959
diagrams: 1
connections: 3
tags:
  - object
  - modules
---

# 🔸 List of clients - Default

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Client center (CLC)/Analytical Model/Client Search/User Interface Model/Default

## 📝 Notes

Grid with found clients based on searching criteria.
Default order by: CUID asc

Client's data may be masked/hidden (see business rule Mask client data)

## 🔗 Connections (2)

- → Dependency: [[{MOD}06.030 Show Client Data (UseCase 1878935)]]
- → Dependency: [[{MOD}Mask client data]]

## 📊 Appears In (1 diagrams)

- Custom: List of clients - Default

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| CUID | Number |  |
| Client's full name | text |  |
| Client's birth date | date |  |
| Gender | enumeration Gender |  |
| Parent’s full name | text |  |
| Preferred languages | enumeration Preferred language |  |
| Buttons | Icons |  |
