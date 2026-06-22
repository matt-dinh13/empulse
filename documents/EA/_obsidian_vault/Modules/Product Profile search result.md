---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/User Interface"
domain: "Modules"
element_id: 1803351
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 Product Profile search result

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Product Profile/User Interface

## 📝 Notes

Default order: ProductType asc, InitialTransactionType asc
Paging: Yes (number of rows is defined by system parameter)

## 🔗 Connections (1)

- → Realisation: [[{DEL}02.014 Show Product Profile detail]]

## 📊 Appears In (1 diagrams)

- Custom: Search for Product Profile

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | char |  |
| product type | char |  |
| initial transaction type | char |  |
| active | checkbox |  |
| detail | icon |  |
