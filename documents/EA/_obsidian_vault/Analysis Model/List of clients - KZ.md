---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Search clients/KZ"
domain: "Analysis Model"
element_id: 1478458
diagrams: 1
connections: 3
tags:
  - object
  - analysis-model
---

# 🔸 List of clients - KZ

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Search clients/KZ

## 📝 Notes

Grid with found clients based on searching criteria.
Default order by: CUID asc

Client's data may be masked/hidden (see business rule Mask client data)

## 🔗 Connections (2)

- → Dependency: [[{MOD}06.030 Show Client Data]]
- → Dependency: [[{MOD}Mask client data (Requirement 1813862)]]

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
