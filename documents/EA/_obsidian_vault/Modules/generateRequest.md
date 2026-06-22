---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Interface Provided/REST"
domain: "Modules"
element_id: 1757482
diagrams: 1
connections: 5
tags:
  - class
  - modules
---

# 🔷 generateRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Interface Provided/REST

## 🔗 Connections (5)

- ← Dependency: [[GenerateIS]]
- → Dependency: [[financingSchemeVariant]]
- → Dependency: [[financialParameters]]
- → Dependency: [[installmentPlanScheme]]
- → Dependency: [[serviceParameters]]

## 📊 Appears In (1 diagrams)

- Logical: GenerateIS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| financialParameters | financialParameters |  |
| contractCode | string |  |
| currentDate | dateTime |  |
| recalculationReason | string |  |
| installmentPlanScheme | installmentPlanScheme |  |
| financingSchemeVariant | financingSchemeVariant |  |
| serviceParameters | serviceParameters |  |
