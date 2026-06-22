---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Client search/Access rights"
domain: "Analysis Model"
element_id: 1742739
diagrams: 10
connections: 21
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.160 Search client

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Origination/Fill in application/Client search/Access rights

## 📝 Notes

This use case describes how the user searches client before application starts to fill in. If client is found, all his data are output of this use case.

## 🔗 Connections (19)

- ← Dependency: [[Client identification (GUIElement 1462038)]]
- ← Dependency: [[Search client]]
- → Realisation: [[01.160 Search client with Identification result]]
- → Dependency «invokes»: [[External Reference (Boundary 1819992)]]
- → Dependency: [[Algorithm_ Decision of 1SP or 2SP]]
- → Dependency: [[Mask fields rule for AUI]]
- → Realisation: [[{DEL}01.160 Search client_with evaluation]]
- → Dependency: [[Display remotely created applications]]
- → Realisation: [[01.160 Search client]]
- → Dependency «invokes»: [[01.010 Choose product offer (UseCase 1827711)]]
- → Dependency: [[{ADD}Get document data]]
- → Dependency «invokes»: [[01.080 Fill in application (UseCase 1821367)]]
- → Dependency: [[Is Marketing Offer available on Salesroom]]
- → Dependency: [[Display revolving contracts for a repeated purchase]]
- → Dependency: [[Mystery shopper]]
- ← UseCase «include»: [[{MOD}01.020 Create contract]]
- ← Dependency: [[Product offer search result]]
- ← Dependency: [[01.143 Recalculate client's x-sell offer (UseCase 1827708)]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (10 diagrams)

- Custom: Access rights
- Custom: Client search
- Custom: Create contract
- Custom: Loan origination funcionality
- Custom: LOR-8989 - Remove InitiateEvaluationRequest functionality
- Custom: Overview
- Use Case: Client search
- Use Case: Contract origination
- Use Case: Fill in application
- Use Case: Fill in application - 2SP
