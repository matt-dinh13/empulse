---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1481409
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}AvailableEcommerceStatusDto

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 📝 Notes

{ADD PBR-1230 /}
Available e-commerce statuses

## 🔗 Connections (3)

- ← Dependency: [[{ADD}EcommerceStatusesForCardtypeResponse]]
- → Dependency: [[{ADD}EcommerceStatusDto]]
- → Dependency: [[EcommerceRestrictionLevel]]

## 📊 Appears In (1 diagrams)

- Logical: Card Management - E-commerce

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| status | {ADD}EcommerceStatusDto |  |
| restrictionLevel | EcommerceRestrictionLevel |  |
