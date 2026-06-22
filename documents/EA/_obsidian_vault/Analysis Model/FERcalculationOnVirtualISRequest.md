---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/FER calculation on virtual IS"
domain: "Analysis Model"
element_id: 1881291
diagrams: 1
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 FERcalculationOnVirtualISRequest

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Provided Web Services/Installment Schedule/FER calculation on virtual IS

## 📝 Notes

{ADD IS-2795}{country VN}

## 🔗 Connections (2)

- → Dependency: [[OfferData]]
- ← Dependency: [[FERcalculationOnVirtualIS]]

## 📊 Appears In (1 diagrams)

- Logical: FER calculation on virtual IS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| offerData | OfferData |  |
| ferDueDate | date |  |
| paidInstallments | integer |  |
| ferServiceCode | string |  |
| ferServiceVersion | string |  |
