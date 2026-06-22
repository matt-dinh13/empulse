---
type: Object
stereotype: "grid"
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Search clients/VN"
domain: "Analysis Model"
element_id: 1121431
diagrams: 1
connections: 2
tags:
  - object
  - analysis-model
---

# 🔸 List of clients - VN

> **Type**: Object · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/User Interface model/Search clients/VN

## 📝 Notes

Grid with found clients based on searching criteria.
Default order by: CUID asc

Client's data may be masked/hidden (see business rule Mask client data)

## 🔗 Connections (1)

- → Dependency: [[{MOD}Mask client data (Requirement 1813862)]]

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
