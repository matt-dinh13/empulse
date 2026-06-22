---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Interface Provided/REST"
domain: "Modules"
element_id: 1757472
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 generatedInstallment

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Interface Provided/REST

## 🔗 Connections (3)

- → Dependency: [[generatedInstallmentPart]]
- → Dependency: [[installmentPart (Class 1757480)]]
- ← Dependency: [[generateResponse]]

## 📊 Appears In (1 diagrams)

- Logical: GenerateIS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| installmentNumber | integer |  |
| dueDate | dateTime |  |
| customerDueDate | dateTime |  |
| generatedInstallmentParts | generatedInstallmentPart |  |
| installmentType | string |  |
| recalculationReason | string |  |
| activeFlag | boolean |  |
| installmentParts | installmentPart |  |
