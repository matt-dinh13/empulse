---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service to Product profile/COMMON for Service to Product profile/User Interface"
domain: "Modules"
element_id: 1867592
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Service to Product Profile Relations

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service to Product profile/COMMON for Service to Product profile/User Interface

## 📝 Notes

{ADD PCG-5343/}
Country: ID

Displays Relations between Service and Product Profiles assigned in ServiceToProductProfileRelation where ServiceToProductProfilerelation.ServiceCode = Service.Code

## 🔗 Connections (3)

- → Dependency: [[{ADD}Remove Service Relation to Product Profile]]
- → Realisation: [[{DEL}08.436 Remove Service Limit from Service]]
- → Realisation: [[{DEL}08.435 Add Service Limit to Service]]

## 📊 Appears In (1 diagrams)

- Custom: {ADD} TAB Service to Product Profile Relations

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Product Profile Code | string |  |
| Remove | icon |  |
