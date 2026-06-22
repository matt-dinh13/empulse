---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Access Rights"
domain: "Analysis Model"
element_id: 1873831
diagrams: 49
connections: 76
tags:
  - usecase
  - analysis-model
---

# 🎯 {MOD}01.210 Show contract detail

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Analysis Model/Contract Management/Contract detail/Show contract detail/Access Rights

## 📝 Notes

Purpose of this use case is to show detailed information about a particular Contract. The user is able to see contract information and also to perform some actions.

## 🔗 Connections (67)

- ← Dependency: [[Found payments]]
- ← Dependency: [[List of contracts]]
- ← Dependency: [[List of contracts (Object 1565368)]]
- ← Realisation: [[Tab Services]]
- ← Dependency: [[Contract detail (GUIElement 1688923)]]
- ← UseCase «include»: [[01.200 Add to contract package (UseCase 1759983)]]
- ← Dependency «invokes»: [[{MOD}01.300 Search for contract]]
- ← Dependency: [[Display remotely created applications]]
- ← Dependency: [[01.143 Recalculate client's x-sell offer (UseCase 1827708)]]
- ← UseCase «include»: [[01.330 Cancel signed contract manually (UseCase 1850502)]]
- ← Dependency: [[01.325 Cancel In Pre-Process or In Process contract manually (UseCase 1850515)]]
- ← UseCase «include»: [[01.320 Cancel approved contract manually (UseCase 1850514)]]
- ← UseCase «include»: [[01.590 Cancel active contract manually (UseCase 1850510)]]
- ← UseCase «include»: [[01.340 Cancel contract with generated offers manually (UseCase 1850505)]]
- ← Realisation: [[Application detail (Screen 1871761)]]
- → Realisation: [[01.210 Show contract detail]]
- → Dependency: [[{MOD}Show documents based on security level]]
- → Dependency: [[Get application payment channel]]
- → Dependency: [[{MOD}Get applicant data from PIF]]
- → Realisation: [[{ADD}01.210 Show contract detail (document with security level 2)]]
- → Realisation: [[01.210 Show Client data on Contract detail]]
- → Dependency: [[Get external payment card data]]
- → Realisation: [[{ADD}01.210 Show contract detail (display Marital status)]]
- → Dependency: [[Get application commodity data]]
- → Realisation: [[01.210 Show contract detail (all salesrooms)]]
- → Realisation: [[{ADD} 01.210 Show client´s phone (Tab Client on Contract detail)]]
- → Realisation: [[{ADD}01.210 Show contract detail (display Gender)]]
- → Dependency: [[{DEL}Get original number instead of alias for Unique Id document]]
- → Dependency: [[Access control to Contract by Sales area for contract detail]]
- → Dependency: [[Get offer data]]
- → Realisation: [[{DEL}01.210 Show contract detail (display additional client data)]]
- → Dependency: [[Getting Commodity data rule]]
- → Dependency: [[Select application DDM for displaying]]
- → Realisation: [[01.210 Show contract detail (show unmasked client email)]]
- → Realisation: [[{ADD}01.210 Show contract detail (display Parent name)]]
- → Realisation: [[List of contracts (Object 1813879)]]
- → Realisation: [[{MOD}Phone number visibility setting]]
- → Realisation: [[{MOD}01.210 Show client data (show documents)]]
- → UseCase «include»: [[{MOD}01.473 Show debt catalogue detail]]
- → Realisation: [[{ADD}01.210 Show client data (Payment Channel data)]]
- → Realisation: [[01.210 Show Client documents Tab on Contract detail]]
- → Dependency: [[CardManagementWS]]
- → Realisation: [[01.210 Show contract detail (contract in FO queue)]]
- → Dependency: [[Get allowed repayment methods for application]]
- → Realisation: [[01.210 Show contract detail (display bank accout data)]]
- → Realisation: [[REQ#1 Insurance Commodity change]]
- → Realisation: [[{ADD}01.210 Show contract detail (display Date of birth)]]
- → Dependency: [[Process contracts in 2BoD queue (from contract detail)]]
- → Realisation: [[01.210 Show contract detail (all sales areas)]]
- → Realisation: [[01.210 Show contract detail (contract in BO queue)]]
- → Dependency: [[Get all application DDM]]
- → Realisation: [[{ADD}01.210 Show contract detail (display Gender)]]
- → Realisation: [[01.210 Show contract detail (show client address data)]]
- → Dependency: [[Get application DDM]]
- → Realisation: [[{ADD}01.210 Show contract detail (my contract with limitation)]]
- → Realisation: [[01.210 Show contract detail (managed salesrooms)]]
- → Realisation: [[{ADD} 01.210 Show Document Printouts Tab on Contract detail]]
- → Realisation: [[{MOD}Account detail visibility]]
- → Dependency: [[Access control to Contract by Salesroom for contract detail]]
- → Realisation: [[01.210 Show contract detail (document with security level 1)]]
- ← Dependency: [[Contract detail (Screen 1881271)]]
- ← UseCase «include»: [[{MOD}01.110 Edit contract document]]
- ← UseCase «include»: [[01.120 Delete contract document]]
- ← UseCase «include»: [[{MOD}01.100 Add contract document]]
- ← UseCase «include»: [[01.125 Upload contract document]]
- ← UseCase: [[CaBus-AM]]
- ← Association: [[User (Actor 1880892)]]

## 📊 Appears In (49 diagrams)

- Custom: Access Rights
- Custom: Application detail
- Custom: Browse outgoing payments screen
- Custom: CBL-11026 (CLM-3615) Hiding of personal data - Changes in Client Detail
- Custom: CBL-14153 (CLM-4255) Masking of personal data on BSL CLM/CSI screens
- Custom: CBL-21155 (CLM-6898) Business event list filtering according to privilege
- Custom: CBL-23168 (CLM-5891) [VAS] Standalone PPI as a second loan
- Custom: CBL-25127 (CSI-3646) Display BNPL Credit Limit
- Custom: CBL-5594 (CLM-2052) Limited access on BSL Account detail for Salary product
- Custom: CBL-8720 (CLM-2719) Availability of DA document to Sales Agents & Retailer Agents
- Custom: CBL-8758 (CLM-2846) Display offer type code on Contract Detail
- Custom: CBL-8891 (CLM-2860) Sales Agents contract search limitation
- Custom: CBL-9350 (CLM-2872) Salary project extension - employee flag update and usage
- Custom: CLM 813 (CBL-1249) Hide client's phone number
- Custom: CLM-99 (CBL-31) Commodity Module separation
- Custom: Contract - Service tab - Cancel service action
- Custom: Contract detail
- Custom: Debt catalogue detail
- Custom: List of contracts - Default
- Custom: List of contracts - KZ
- Custom: List of contracts - VN
- Custom: LOR-10198 Integration to new version of PIF endpoint
- Custom: LOR-8797 - Remove call to LAP for getting the evaluation information
- Custom: LOR-8823 - Hide evaluation information field on application detail
- Custom: LOR-8961 CBL-18782 Masking of PII in PIF
- Custom: LOR-9306 - Update direct debit mandate from Application detail via DDM REST API
- Custom: LOR-9342 - Validate direct debit mandates via DDM REST API
- Custom: Tab-Services
- Logical: Card Management - Related functionalities
- Use Case: 2BoD processing
- Use Case: Change disbursement channel
- Use Case: Change repayment channel
- Use Case: Client management
- Use Case: Communication records
- Use Case: Contract detail
- Use Case: Contract Early Termination request creation
- Use Case: Contract origination
- Use Case: Contract search
- Use Case: Contract signing
- Use Case: Cooling-off period request
- Use Case: Fill in application
- Use Case: Full early repayment request - via GUI
- Use Case: Inform client
- Use Case: Installment schedule management
- Use Case: Installment Schedule management
- Use Case: Manage contract commodities
- Use Case: PER request creation - via GUI
- Use Case: Reprint credit documentation use cases
- Use Case: Show Insurance commodity
