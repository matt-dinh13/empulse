---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles"
domain: "Modules"
element_id: 1873252
diagrams: 4
connections: 18
tags:
  - class
  - modules
---

# 🔷 Input

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Bundles

## 📝 Notes

Schema for input is inherited from parent element

## 🔗 Connections (18)

- ← Dependency: [[{ADD}BundleInputDto]]
- ← Dependency: [[SCServiceInputDto]]
- ← Dependency: [[SalesDescriptionInputDto]]
- ← Dependency: [[ProductInputDto]]
- → Usage: [[ProductVariantDto]]
- → Usage: [[{MOD}SubventionDto]]
- → Usage: [[ProductServiceTypeDto]]
- → Usage: [[DocumentPrintoutDto]]
- → Dependency: [[{ADD}BundleServiceDto]]
- → Dependency: [[SalesDescriptionAttributeDto]]
- → Usage: [[ProductCommodityTypeDto]]
- → Usage: [[ContainerRuleDto]]
- → Dependency: [[{MOD}SalesDescriptionAssignmentDto]]
- → Usage: [[ProductServiceDto]]
- → Dependency: [[SCServiceRelationsDto]]
- → Dependency: [[SCServiceCriterionDto]]
- → Dependency: [[SCServiceParameterDto]]
- → Dependency: [[{ADD}SCServiceRoleDto]]

## 📊 Appears In (4 diagrams)

- Logical: BundleInputDto
- Logical: ProductInputDto
- Logical: SalesDescriptionInputDto
- Logical: SCServiceInputDto

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| set | string |  |
| delete | sting |  |
| add | string |  |
| update | string |  |
