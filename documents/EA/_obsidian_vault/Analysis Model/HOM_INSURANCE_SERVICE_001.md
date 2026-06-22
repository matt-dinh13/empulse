---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371207
diagrams: 1
connections: 1
tags:
  - class
  - analysis-model
---

# 🔷 HOM_INSURANCE_SERVICE_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

Defines specific parameters of service insurance

## 🔗 Connections (1)

- → Generalization: [[HOM_SERVICE_001]]

## 📊 Appears In (1 diagrams)

- Logical: Service (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| service ID | number |  |
| insurance program code | string |  |
| max loan amount amount | number |  |
| max loan amount currency | string |  |
| first period trigger | string |  |
| first period offset | number |  |
| first period duration | string |  |
| first period duration offset | number |  |
| refund on manual termination | string |  |
| terminate on full loan repayment | boolean |  |
| automatic prolongation | boolean |  |
| next period duration | number |  |
