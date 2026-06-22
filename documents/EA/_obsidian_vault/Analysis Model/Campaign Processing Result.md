---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Logical data model/Change credit limit request processing"
domain: "Analysis Model"
element_id: 1549378
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Campaign Processing Result

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Supplements/Credit limit change support/Logical data model/Change credit limit request processing

## 📝 Notes

An entity to keep results of campaign data processing. It is used to as data source for generating a result file (see CampaignDataProcessingResult strucure)

## 🔗 Connections (3)

- → Association: [[Data Processed Batch]]
- ← Aggregation: [[Credit Limit Change Result]]
- → Usage: [[Campaign Result Item]]

## 📊 Appears In (1 diagrams)

- Logical: Campaign processing result - LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Campaign ID | string |  |
| Error Descriptions | Campaign Result Item |  |
| File Name | string |  |
| Offer Type | string |  |
