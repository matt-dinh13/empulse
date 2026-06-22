---
type: Class
stereotype: "DWH interface"
package: "HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue"
domain: "Analysis Model"
element_id: 1371181
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 HOM_SMS_NTF_SER2NTF_TP_001

> **Type**: Class · **Stereotype**: «DWH interface»
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/DWH tables/PCG/Product Catalogue

## 📝 Notes

Defines tariff item types available/required for a service.

## 🔗 Connections (2)

- → Generalization: [[HOM_SERVICE_001]]
- → Dependency: [[HOM_SMS_NOTIF_TP_001]]

## 📊 Appears In (1 diagrams)

- Logical: Service (DWH Interface)

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| SMS notification service ID | number |  |
| notification type | HOM_SMS_NOTIF_TP_001 |  |
| archived | boolean |  |
