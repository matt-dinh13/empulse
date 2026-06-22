---
type: Requirement
stereotype: "Validate"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/User Interface"
domain: "Modules"
element_id: 1803034
diagrams: 2
connections: 2
tags:
  - requirement
  - modules
---

# 📋 Maximal number of services of the same type

> **Type**: Requirement · **Stereotype**: «Validate»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/Product/User Interface for Product Management/Service Assignment/User Interface

## 📝 Notes

Number of services of the same type assigned to one product cannot exceed the value ServiceType.ServiceTypSettings.MaxAssignmentsToProduct.
Loc.code: PRODUCT_MAX_NUM_SERVICES

## 🔗 Connections (2)

- ← Dependency: [[Assign Services]]
- ← Dependency: [[ProductServiceDto - validation]]

## 📊 Appears In (2 diagrams)

- Custom: Service or Insurance-Assign
- Custom: Validation Rules
