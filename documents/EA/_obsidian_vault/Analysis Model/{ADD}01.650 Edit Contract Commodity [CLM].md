---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Access Rights"
domain: "Analysis Model"
element_id: 1852204
diagrams: 6
connections: 21
tags:
  - usecase
  - analysis-model
---

# 🎯 {ADD}01.650 Edit Contract Commodity [CLM]

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract commodities management/Access Rights

## 📝 Notes

{ADD CLM-3768/}
This use case describes editing contract commodity attributes from Contract detail screen.

## 🔗 Connections (20)

- ← Dependency: [[Edit commodity]]
- ← Realisation: [[Edit commodity (Screen 1848389)]]
- → Dependency: [[Get update mode for commodity data update]]
- → Realisation: [[01.650 Edit Contract Commodity]]
- → Dependency: [[Access control to Commodity by Contract status]]
- → Dependency: [[{ADD}Get contract commodity data for update]]
- → Realisation: [[01.650 Edit Contract Commodity (non-validated commodity)]]
- → Dependency: [[Access control to Contract by Salesroom]]
- → Realisation: [[{ADD}01.650 Edit Contract Commodity (skip validation)]]
- → Dependency: [[Unique chassis and engine numbers]]
- → Dependency: [[Validate IMEI internally]]
- → Realisation: [[01.650 Edit Contract Commodity (edit other fields)]]
- → Dependency: [[{ADD}Update contract commodity]]
- → Realisation: [[01.650 Edit Contract Commodity (all statuses)]]
- → Dependency: [[Access control to edit commodity fields]]
- → Realisation: [[01.650 Edit Contract Commodity (all salesrooms)]]
- → Realisation: [[01.650 Edit Contract Commodity (validated commodity)]]
- → Dependency: [[Get event type for commodity data update]]
- → Dependency: [[Get validation parameters for commodity data update]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (6 diagrams)

- Custom: Access Rights
- Custom: CBL-13568 (CLM-4182) - Pagination for commodity search REST API
- Custom: CBL-9226 (CLM-3768) Remove CLM dependencies on Commodity Module
- Custom: Edit commodity
- Custom: Tab-Commodity
- Use Case: Manage contract commodities
