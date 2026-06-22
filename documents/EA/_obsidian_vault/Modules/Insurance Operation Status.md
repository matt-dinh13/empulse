---
type: Class
stereotype: ""
package: "HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance Contract - Changes in LDM"
domain: "Modules"
element_id: 1700874
diagrams: 1
connections: 3
tags:
  - class
  - modules
---

# 🔷 Insurance Operation Status

> **Type**: Class
> **Package**: HomerSelect/BSL/Modules/Value Added Services (VAS)/Requirement model/CBL-11727 (CSI-376) CSI Modularization - Insurance Contract/Insurance Contract - Changes in LDM

## 📝 Notes

It records changes of operation statuses of the Insurance Contract (i.e. Switch on/ switch off the insurance)

## 🔗 Connections (2)

- → Dependency: [[Insurance Operation Status Type]]
- → Aggregation: [[Insurance Contract (Class 1700872)]]

## 📊 Appears In (1 diagrams)

- Logical: Changes in LDM

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| Created By | User |  |
| Status | Insurance Operation Status Type |  |
| Creation Date | DateTime |  |
| Reason Code | string |  |
| Request Id | string |  |
| Reason Notice | string |  |
