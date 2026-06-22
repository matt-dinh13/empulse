---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageAssignmentCodeLists"
domain: "Modules"
element_id: 1285699
diagrams: 3
connections: 3
tags:
  - class
  - modules
---

# 🔷 Sales Package

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Analytical Model/{ADD}Sales Package/Provided Services/Interface Provided/{DEL}GetSalesPackageAssignmentCodeLists

## 📝 Notes

Set of Products, Services, etc. to be sold together.

## 🔗 Connections (3)

- ← Aggregation: [[Sales Package Item]]
- ← Dependency: [[Salesroom To Sales Package]]
- ← Dependency: [[{DEL}SalesPackage]]

## 📊 Appears In (3 diagrams)

- Logical: GetSalesPackageAssignmentCodeLists
- Logical: Sales Package
- Logical: Salesroom

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Code | string |  |
| Name | string |  |
| Description | string |  |
| Active | boolean | true |
| Archived | boolean | false |
