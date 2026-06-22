---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/Access Rights"
domain: "Analysis Model"
element_id: 1813890
diagrams: 12
connections: 16
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}06.040 Search Clients

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/Access Rights

## 📝 Notes

Purpose of this use case is to find clients based on defined searching criteria. Searching can be done in BSL or in CIF (see scenario).

## 🔗 Connections (13)

- ← Dependency: [[Search Clients]]
- → Realisation: [[{ADD}06.040 Search clients by Name and Date of birth]]
- → Realisation: [[06.040 Search clients]]
- → UseCase: [[CIF (Actor 1880899)]]
- → Realisation: [[{ADD}06.040 Search clients (display Parent name)]]
- → Dependency: [[{MOD}Mask client data (Requirement 1813862)]]
- → Dependency: [[{MOD}Select Client center for user]]
- → Dependency: [[BSL-to-CIF mapping]]
- → Dependency: [[{DEL}Get alias number instead of original for Unique Id document]]
- → Realisation: [[{ADD}06.040 Search clients (display Gender)]]
- → Realisation: [[{ADD}06.040 Show client data (display Date of birth)]]
- → Association «navigate»: [[CLC (Actor 1880888)]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (12 diagrams)

- Custom: Access Rights
- Custom: CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC
- Custom: CBL-11677 (LM-4295) - Switch internal traffic from SHOP domain to CLC
- Custom: CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screens
- Custom: CBL-5079 (CLM-1813) case insensitive for BSL - search client
- Custom: CBL-6566 (CLM-2222) Mystery Shopper search restriction for unauthorized user
- Custom: CBL-8249 (CLM-2591) Search client function: Hide Birth+Name in searching criteria
- Custom: CLM Overview
- Custom: LOR-9883 Remove obsolete switches related to applicant
- Custom: Overview
- Custom: Search Clients
- Use Case: Client management
