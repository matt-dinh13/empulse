---
type: Class
stereotype: "type"
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Logical data model/Change credit limit request processing"
domain: "Analysis Model"
element_id: 1443629
diagrams: 6
connections: 2
tags:
  - class
  - analysis-model
---

# 🔷 Dataset Type

> **Type**: Class · **Stereotype**: «type»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Logical data model/Change credit limit request processing

## 📝 Notes

The structure is type of dataset enumeration for Data Processed Batch entity.

## 🔗 Connections (2)

- ← Dependency «use»: [[Data Processed Batch]]
- ← Aggregation: [[Dataset Type Processing Parameter]]

## 📊 Appears In (6 diagrams)

- Logical: Campaign processing result - LDM
- Logical: Contract Write-off domain model
- Logical: Data for Write-off downloading from DWH - domain model (obsolete)
- Logical: Data prepared notification - LDM
- Logical: Processing Contract notification resending request
- Logical: Service eligibility evaluation from external system

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| O_CLIENT_SERVICE_ELIGIBILITY |  |  |
| CREDIT_LIMIT_CHANGE |  |  |
| DDS_REQUEST |  |  |
| O_CONTRACT_WRITEOFF |  |  |
| {ADD}WRITE_OFF_FILE |  |  |
| {ADD}WRITE_OFF_SET |  |  |
| FIN_PARTNER_FILE |  |  |
| {ADD}CONTRACT_NOTIFICATION |  |  |
