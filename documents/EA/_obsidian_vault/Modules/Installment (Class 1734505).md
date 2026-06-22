---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Installment schedule management/Interface Provided/REST"
domain: "Modules"
element_id: 1734505
diagrams: 1
connections: 4
tags:
  - class
  - modules
---

# 🔷 Installment

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Installment schedule management/Interface Provided/REST

## 🔗 Connections (4)

- → Dependency: [[Recalculation Reason]]
- → Dependency: [[Installment Type]]
- ← Dependency: [[getISResponse]]
- → Dependency: [[InstallmentPart]]

## 📊 Appears In (1 diagrams)

- Logical: GetIS

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| active | boolean |  |
| creationDate | dateTime |  |
| customerDueDate | date |  |
| dataExchangeID | UUID |  |
| deactivatedInVersion | number |  |
| dueDate | date |  |
| fullyPaidWithTolerance | date |  |
| fullyPaidWithoutTolerance | date |  |
| chargedToInstallment | number |  |
| installmentNumber | number |  |
| installmentVersion | number |  |
| recalculationReason | recalculationReason |  |
| type | installmentType |  |
| installmentParts | installmentPart |  |
