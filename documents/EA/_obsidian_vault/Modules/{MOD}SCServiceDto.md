---
type: Class
stereotype: "Represntation"
package: "HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog"
domain: "Modules"
element_id: 1845758
diagrams: 2
connections: 5
tags:
  - class
  - modules
---

# 🔷 {MOD}SCServiceDto

> **Type**: Class · **Stereotype**: «Represntation»
> **Package**: HomerSelect/BSL/Modules/Product Catalog (PRC)/Interface Provided/Product Catalog REST API/Service Catalog

## 🔗 Connections (5)

- → Dependency: [[SCServiceCriterionDto]]
- ← Dependency: [[SCServiceResponse]]
- → Dependency: [[SCServiceRelationsDto]]
- → Dependency: [[{ADD}SCServiceRoleDto]]
- → Dependency: [[SCServiceParameterDto]]

## 📊 Appears In (2 diagrams)

- Logical: SCServiceDto
- Logical: Service Catalog

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| code | string |  |
| name | string |  |
| serviceType | string |  |
| description | string |  |
| tariffCode | string |  |
| serviceLevel | string |  |
| finalVersion | boolean |  |
| validFrom | string |  |
| validTo | string |  |
| criteria | SCServiceCriterionDto |  |
| parameters | SCServiceParameterDto |  |
| relations | SCServiceRelationsDto |  |
| manualTerminationAllowed | boolean |  |
| manualCancellationAllowed | boolean |  |
| {ADD}roles | SCServiceCriterionDto |  |
