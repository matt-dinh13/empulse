---
type: Class
stereotype: "XSDcomplexType"
package: "HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/Interface - import"
domain: "Analysis Model"
element_id: 530401
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 salesroom2ProductType

> **Type**: Class · **Stereotype**: «XSDcomplexType»
> **Package**: HomerSelect/BSL/Analysis Model/Sales Network Management/Salesroom/Products on Salesroom/Interface - import

## 📝 Notes

Assignment instruction - defines what product is supposed to be assigned to which salesroom and time period of this assignment.

## 🔗 Connections (3)

- → Dependency: [[salesroomType]]
- ← Association: [[hsSalesroom2ProductFileType]]
- → Dependency: [[errorType]]

## 📊 Appears In (1 diagrams)

- Logical: Structure of files for import of assignment of Product to Salesroom

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| salesroom | salesroomType |  |
| product | string |  |
| validFrom | date |  |
| validTo | date |  |
| error | errorType |  |
