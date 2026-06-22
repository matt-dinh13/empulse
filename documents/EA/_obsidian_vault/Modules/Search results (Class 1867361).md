---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/User Interface Model"
domain: "Modules"
element_id: 1867361
diagrams: 1
connections: 1
tags:
  - class
  - modules
---

# 🔷 Search results

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Service/User Interface for Service Management/Service Root/User Interface Model

## 📝 Notes

Default order: Service type, Code asc.
Paging: Yes (number of rows is defined by system parameter)

## 🔗 Connections (1)

- → Realisation: [[{DEL}08.160 Show Service version detail]]

## 📊 Appears In (1 diagrams)

- Custom: Search for Service

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | char |  |
| name | char |  |
| version number | int |  |
| version status | char |  |
| service type | char |  |
| version activated | date |  |
| detail | icon |  |
