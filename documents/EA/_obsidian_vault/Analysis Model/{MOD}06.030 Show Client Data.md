---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Client Management/Client center/Access Rights"
domain: "Analysis Model"
element_id: 1813900
diagrams: 24
connections: 30
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}06.030 Show Client Data

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Client Management/Client center/Access Rights

## 📝 Notes

Purpose of this use case is to show required data from CIF and BSL for selected client.

## 🔗 Connections (27)

- ← Dependency: [[List of clients - KZ]]
- ← Dependency: [[List of clients - Default]]
- ← Dependency: [[Client data (Screen 1686952)]]
- ← Dependency: [[Client Detail URL]]
- ← Dependency: [[{ADD}Customer offers tab v2]]
- → Realisation: [[{ADD}06.030 Show client data (hidden contracts)]]
- → Dependency: [[{DEL}Get original number instead of alias for Unique Id document]]
- → Realisation: [[{ADD}06.030 Show client data (show unmasked client email)]]
- → Realisation: [[06.030 Show client data (CB results)]]
- → Realisation: [[{ADD}06.030 Show client data (display Parent name)]]
- → Realisation: [[06.030 Show client data]]
- → Realisation: [[06.030 Show client´s phone (Client detail)]]
- → Realisation: [[{ADD}06.030 Show client data (display Date of birth)]]
- → UseCase: [[{DEL}02.070 Show product version detail]]
- → Dependency: [[{ADD}Get active Customer offers (Requirement 1813859)]]
- → Realisation: [[{ADD}06.030 Show client data (display Gender)]]
- → Dependency: [[{MOD}Select Client center for user]]
- → Dependency: [[BSL-to-CIF mapping]]
- → Realisation: [[{MOD}06.030 Show client data (show documents)]]
- → Realisation: [[{DEL}06.030 Show client data (display additional client data)]]
- → UseCase: [[CIF (Actor 1880899)]]
- → Realisation: [[06.030 Show client data (Manage in CIF)]]
- → Dependency: [[{MOD}02.912 Get Customer Marketing Offers]]
- → Association «navigate»: [[CLC (Actor 1880888)]]
- → Realisation: [[{ADD}06.030 Show client data (show client address data)]]
- → Realisation: [[{MOD}Phone number visibility setting]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (24 diagrams)

- Custom: Access Rights
- Custom: CBL-10179 (CLM-3194) Resending two Genesys attributes to Offer Store
- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: CBL-11502 (CLM-4318) Replace screen MMO with tab CO in CC
- Custom: CBL-11677 (CLM-3731) Client center - BSL - Redirection to CLC
- Custom: CBL-11677 (LM-4295) - Switch internal traffic from SHOP domain to CLC
- Custom: CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screens
- Custom: CBL-15196 (CLM-4429) Client center - Extend Customer offers with RTDM data
- Custom: CBL-2410 (CLM-1135) Genesys Operation Part - BSL change_DHS499
- Custom: CBL-6566 (CLM-2222) Mystery Shopper search restriction for unauthorized user
- Custom: CBL-9343 (CLM-3079) Add controls in client data access in PIF via URL
- Custom: Client detail
- Custom: Client detail URL
- Custom: CLM 813 (CBL-1249) Hide client's phone number
- Custom: CLM Overview
- Custom: CLM-694 (CBL-1019) Hide non-selectable offers in Client detail and Manage market offers screen
- Custom: Customer offers tab v2
- Custom: List of clients - Default
- Custom: List of clients - KZ
- Custom: List of clients - VN
- Custom: LOR-9883 Remove obsolete switches related to applicant
- Custom: Overview
- Use Case: Client management
- Use Case: Communication records
