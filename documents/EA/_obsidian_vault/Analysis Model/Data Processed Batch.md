---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Logical data model/Change credit limit request processing"
domain: "Analysis Model"
element_id: 1443627
diagrams: 5
connections: 8
tags:
  - class
  - analysis-model
---

# 🔷 Data Processed Batch

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Logical data model/Change credit limit request processing

## 📝 Notes

The entity keeps identifiers of processed data set (batch, file) prepared by an external system.

## 🔗 Connections (6)

- ← Association: [[{ADD}Contract Notification Request]]
- → Dependency «use»: [[Dataset Type]]
- → Dependency «use»: [[Batch Status Type]]
- ← Association: [[Campaign Processing Result]]
- ← Association: [[{DEL}Client Service Eligibility]]
- ← Association: [[Amortized Contract]]

## 📊 Appears In (5 diagrams)

- Logical: Campaign processing result - LDM
- Logical: Data for Write-off downloading from DWH - domain model (obsolete)
- Logical: Data prepared notification - LDM
- Logical: Processing Contract notification resending request
- Logical: Service eligibility evaluation from external system

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Batch Status | Batch Status Type |  |
| Dataset Type | Dataset Type |  |
| Effective Date | DateTime |  |
| Processing Date End | Date Time |  |
| Processing Date Start | DateTime |  |
| Snapshot ID | string |  |
