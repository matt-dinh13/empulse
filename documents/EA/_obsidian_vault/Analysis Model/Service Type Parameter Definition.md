---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Logical Data Model"
domain: "Analysis Model"
element_id: 1868573
diagrams: 1
connections: 3
tags:
  - class
  - analysis-model
---

# 🔷 Service Type Parameter Definition

> **Type**: Class
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Loan Service Processing/COMMON for Loan Services/Logical Data Model

## 📝 Notes

The entity stores a definition of service parameters for a Service Type,  which are to be created and calculated on the respective event

## 🔗 Connections (3)

- → Dependency: [[{MOD}Check Moment Type]]
- → Dependency: [[Service Type (Class 1880808)]]
- → Dependency: [[Contract Service Parameter Type]]

## 📊 Appears In (1 diagrams)

- Logical: Service Processing Setting

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Service Type | Service Type |  |
| Event Type | {MOD}Check Moment Type |  |
| Parameter Type | Contract Service Parameter Type |  |
