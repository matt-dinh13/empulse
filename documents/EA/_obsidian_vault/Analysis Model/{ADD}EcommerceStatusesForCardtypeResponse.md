---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1163809
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}EcommerceStatusesForCardtypeResponse

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 📝 Notes

{ADD PBR-1230 /}
Response with allowed e-commerce statuses for defined card type.

## 🔗 Connections (3)

- → Dependency: [[{ADD}AvailableEcommerceStatusDto (Class 1481409)]]
- → Dependency: [[{ADD}EcommerceStatusesForCardtypeResponseResultCodeDto]]
- ← Dependency: [[CardManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: Card Management - E-commerce

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| availableEcommerceStatuses | {ADD}AvailableEcommerceStatusDto |  |
| resultCode | EcommerceStatusesForCardtypeResponseResultCodeDto |  |
