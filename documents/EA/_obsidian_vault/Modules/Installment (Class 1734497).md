---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Installment schedule management/Interface Provided/REST"
domain: "Modules"
element_id: 1734497
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 Installment

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Installment schedule management/Interface Provided/REST

## 🔗 Connections (2)

- ← Dependency: [[SaveRequest]]
- → Dependency: [[InstallmentPart (Class 1734503)]]

## 📊 Appears In (1 diagrams)

- Logical: SaveIS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| recalculationReason | string |  |
| installmentType | string |  |
| installmentParts | installmentPart |  |
| installmentNumber | integer |  |
| dueDate | dateTime |  |
| customerDueDate | dateTime |  |
| activeFlag | boolean |  |
