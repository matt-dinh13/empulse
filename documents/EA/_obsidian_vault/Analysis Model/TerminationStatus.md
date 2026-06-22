---
type: Enumeration
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces"
domain: "Analysis Model"
element_id: 1736083
diagrams: 1
connections: 2
tags:
  - enumeration
  - analysis-model
---

# 📝 TerminationStatus

> **Type**: Enumeration
> **Package**: HomerSelect/BSL/Analysis Model/_Interface/Consumed services/Collections system interfaces

## 📝 Notes

Enumeration with possible results codes of Payoff activity. Codes are sent as a result to LCS.

## 🔗 Connections (2)

- ← Dependency: [[TerminationItem]]
- ← Dependency «use»: [[PayoffResultItem]]

## 📊 Appears In (1 diagrams)

- Logical: LCS interface - TerminationStatusService

## 📋 Attributes

| Name | Type | Default |
|------|------|---------|
| ABNORMAL |  |  |
| ALREADY |  |  |
| ALREADYPAID |  |  |
| BADDATE |  |  |
| LATER |  |  |
| NODATA |  |  |
| NOFEES |  |  |
| NOFUTURE |  |  |
| NOINST |  |  |
| NOPAST |  |  |
| NOTGEN |  |  |
| OK |  |  |
| UNKNOWN |  |  |
| WRONGSTATUS |  |  |
