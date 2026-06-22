---
type: Class
stereotype: "XSDComplexType"
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management"
domain: "Analysis Model"
element_id: 1163811
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 {ADD}ChangeEcommerceStatusResponse

> **Type**: Class · **Stereotype**: «XSDComplexType»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Payment Card system/Card/Card Management

## 📝 Notes

{ADD PBR-1230 /}
Response on request for allowed e-commerce statuses for defined card type.

## 🔗 Connections (2)

- → Dependency: [[{ADD}ChangeEcommerceStatusResponseResultCodeDto]]
- ← Dependency: [[CardManagementWS]]

## 📊 Appears In (1 diagrams)

- Logical: Card Management - E-commerce

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| resultCode | ChangeEcommerceStatusResponseResultCodeDto |  |
