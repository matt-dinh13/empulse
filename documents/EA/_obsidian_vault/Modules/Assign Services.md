---
type: Class
stereotype: "grid"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/User Interface"
domain: "Modules"
element_id: 1803021
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Assign Services

> **Type**: Class · **Stereotype**: «grid»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/User Interface

## 📝 Notes

Default order: see UC 02.631 Assign service to product.
Paging: No.
For validation see rules
- Maximal number of services of the same type
- Service Exclusivity Check (for each assigned service)
- Check compatibility of service attributes with product

## 🔗 Connections (3)

- → Dependency: [[Maximal number of services of the same type]]
- → Dependency: [[Service Exclusivity Check]]
- → Dependency: [[Check compatibility of service attributes with product]]

## 📊 Appears In (1 diagrams)

- Custom: Service or Insurance-Assign

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Selection | boolean |  |
| code | char |  |
| name | char |  |
| sort order | int |  |
