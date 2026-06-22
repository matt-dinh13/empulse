---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/User Interface"
domain: "Modules"
element_id: 1803024
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Services

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/User Interface

## 📝 Notes

Default order: sortOrder asc.
Paging: No.
For Insurances only these records are displayed where Service.ServiceType.ServiceCategory = Insurance.
For other Services only these records are displayed where Service.ServiceType.ServiceCategory <> Insurance.

{ADD PCG-2332}Services with Service.ServiceType.ActiveFlag = 0 are also displayed //for purpose of un-assigning services of inactive service type{/ADD}

## 🔗 Connections (2)

- → Realisation: [[{DEL}02.631 Assign service to product]]
- → Realisation: [[{DEL}02.632 Remove service from product]]

## 📊 Appears In (1 diagrams)

- Custom: Tab Services

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| type | char |  |
| adjustment rule | char |  |
| code | char |  |
| name | char |  |
| sort order | char |  |
| remove | icon |  |
