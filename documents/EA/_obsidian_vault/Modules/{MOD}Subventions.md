---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Subvention/User Interface"
domain: "Modules"
element_id: 1825306
diagrams: 2
connections: 8
tags:
  - class
  - modules
---

# 🔷 {MOD}Subventions

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Subvention/User Interface

## 📝 Notes

Common grid for displaying of Product and Service subventions.
For Product Subventions display Product.Subvention. 
For Service Subventions display Service.Subvention. 

Default order: participant.Name asc., model asc.
Paging: No.

## 🔗 Connections (6)

- → Realisation: [[{DEL}08.422 Show detail of subvention for service (UseCase 1861794)]]
- → Realisation: [[{DEL}02.603 Set subvention for product]]
- → Realisation: [[{DEL}08.420 Set subvention for service (UseCase 1861793)]]
- → Realisation: [[{DEL}08.424 Remove subvention for service (UseCase 1861798)]]
- → Realisation: [[{DEL}02.073 Show detail of subvention for product]]
- → Realisation: [[{DEL}02.643 Remove subvention for product]]

## 📊 Appears In (2 diagrams)

- Custom: Tab Product Subventions
- Custom: Tab Service Subventions

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Commodity Type | char |  |
| Participant | char |  |
| Allocation to client | percentage |  |
| Discount | percentage |  |
| Fixed amount | money |  |
| Percentage rate | percentage |  |
| Percentage based on | char |  |
| Purpose | string |  |
| {ADD}Model | string |  |
| Edit | icon |  |
| Remove | icon |  |
| Detail | icon |  |
