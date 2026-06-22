---
type: Requirement
stereotype: "Business rule"
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Update application/Business rules"
domain: "Analysis Model"
element_id: 1817744
diagrams: 1
connections: 1
tags:
  - requirement
  - analysis-model
---

# 📋 Find identical payment channel

> **Type**: Requirement · **Stereotype**: «Business rule»
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Update application/Business rules

## 📝 Notes

Following attributes are compared:
 

	
- Payment_Channel_ID //i.e. Payment_Channel.Data_Exchange_ID


If exists a record, where value of such attribute equals to the value from the input, then such record is considered as identical.

## 🔗 Connections (1)

- ← Dependency: [[{MOD}Find identical records]]

## 📊 Appears In (1 diagrams)

- Custom: Update application - Business rules
