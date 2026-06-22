---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Document Container Assignment/User Interface"
domain: "Modules"
element_id: 1663126
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 {MOD}Containers

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Document Container Assignment/User Interface

## 📝 Notes

Default order: code asc.
Paging: No.
{ADD PCG-3403}System gets data about document container by Get list of Document Containers with filled list of document containers codes assigned on product (Product.DocumentContainerRule.DocumentContainerCode){/ADD}

## 🔗 Connections (3)

- → Realisation: [[{DEL}02.604 Assign document container to product]]
- → Realisation: [[02.330 Show document container detail (UseCase 876486)]]
- → Realisation: [[{DEL}02.644 Remove document container from product]]

## 📊 Appears In (1 diagrams)

- Custom: Tab Containers

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Container code | char |  |
| Container name | char |  |
| Minimal count of documents | int |  |
| When required in 2SP | char |  |
| Required for Client Scoring Segment | string |  |
| Edit | icon |  |
| Remove | icon |  |
| Detail | icon |  |
