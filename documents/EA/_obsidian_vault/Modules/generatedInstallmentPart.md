---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Installment Schedule Generator/Interface Provided/REST"
domain: "Modules"
element_id: 1757473
diagrams: 1
connections: 2
tags:
  - class
  - modules
---

# 🔷 generatedInstallmentPart

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Installment Schedule Generator/Interface Provided/REST

## 🔗 Connections (2)

- → Dependency: [[tariffItem (Class 1757478)]]
- ← Dependency: [[generatedInstallment]]

## 📊 Appears In (1 diagrams)

- Logical: GenerateIS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| partType | string |  |
| amount | integer |  |
| fullyPaidDate | dateTime |  |
| tariffItem | tariffItem |  |
