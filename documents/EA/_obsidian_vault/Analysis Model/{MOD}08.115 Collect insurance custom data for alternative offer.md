---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Access Rights"
domain: "Analysis Model"
element_id: 1819532
diagrams: 4
connections: 10
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}08.115 Collect insurance custom data for alternative offer

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Insurance and Service Origination/Access Rights

## 📝 Notes

This use case describes how system collects from user insurance custom data for the alternative offer with insurance services included.

## 🔗 Connections (8)

- ← Realisation: [[Collect insurance custom data (Screen 1473348)]]
- → Dependency: [[Get application commodity data]]
- → Realisation: [[LOR-1565 - Create Contract2Commodity and update services related to commodity]]
- → Realisation: [[08.115 Collect insurance custom data for alternative offer]]
- → Dependency: [[Copy insurance custom data between offers]]
- → Realisation: [[REQ-5_ Collect custom insurance data for insurance adjusted in alternative offers]]
- ← Dependency «invokes»: [[01.158 Accept offer (UseCase 1827719)]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (4 diagrams)

- Custom: Access Rights
- Custom: Collect insurance custom data
- Use Case: Accept/Reject optional offers
- Use Case: Select insurance services
