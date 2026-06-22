---
type: UseCase
stereotype: ""
package: "HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4153 (CLM-1594) Contract search - new access rights for predefined filters"
domain: "Requirements Model"
element_id: 1822352
diagrams: 13
connections: 49
tags:
  - usecase
  - requirements-model
---

# 🎯 {MOD}01.300 Search for contract

> **Type**: UseCase
> **Package**: HomerSelect/BSL/Requirements Model/Finished/CLM/CBL-4153 (CLM-1594) Contract search - new access rights for predefined filters

## 📝 Notes

This use case enables to find contracts that match entered criteria(manually or based on supported link Redirect links rule). There are several prepared filters that enable to find contract according to the special criteria.

## 🔗 Connections (47)

- ← UseCase «include»: [[01.305 Inform client (UseCase 626513)]]
- ← Dependency: [[Search for contract (GUIElement 1817347)]]
- → Dependency: [[TicketCounts]]
- → Realisation: [[01.300 Search for contract (Reimbursed)]]
- → Realisation: [[{ADD}01.300 Search for contract (CRM Search)]]
- → Realisation: [[01.300 Search for contract (all salesrooms)]]
- → Dependency «invokes»: [[01.083 Fill in application - 2BoD (UseCase 1811345)]]
- → Realisation: [[01.300 Search for contract (all sales areas)]]
- → Realisation: [[01.300 Search for contract (sales agent)]]
- → Realisation: [[01.300 Search for contract (hidden contracts)]]
- → Realisation: [[01.300 Search for contract (Created by me)]]
- → Realisation: [[01.300 Search for contract (active)]]
- → Realisation: [[01.300 Search for contract (filter for BO administrator)]]
- → Realisation: [[01.300 Search for contract (Canceled contracts)]]
- → Dependency «invokes»: [[{MOD}01.210 Show contract detail]]
- → Realisation: [[01.300 Search for contract (custom search)]]
- → Realisation: [[01.300 Search for contract (filter for FO user)]]
- → Dependency: [[Search with unlimited number of results]]
- → Realisation: [[01.300 Search for contract (before sign)]]
- → Realisation: [[01.300 Search contract by code]]
- → Realisation: [[01.300 Search for contract (remotely created contracts)]]
- → Dependency: [[Access control to contract search results]]
- → Realisation: [[01.300 Search for contract]]
- → Realisation: [[{ADD}01.300 Search for contract (BO Limited Search)]]
- → Realisation: [[01.300 Search for contract (InProcess)]]
- → Realisation: [[01.300 Search for contract (Nonreimbursed)]]
- → Realisation: [[01.300 Search for contract (Disbursement channel change)]]
- → Realisation: [[01.300 Search for contract (telesales)]]
- → Dependency: [[Access control to Contract search panel]]
- → Realisation: [[01.300 Search for contract (Remote contracts for 2BoD filling)]]
- → Dependency: [[{MOD}Contract search filter]]
- → Realisation: [[01.300 Search for contract (cancel reject)]]
- → Realisation: [[01.300 Search for contract (after active)]]
- → Realisation: [[01.300 Search for contract (predefined + custom search)]]
- → Realisation: [[01.300 Search for contract (custom SNM search)]]
- → Realisation: [[01.300 Search for contract (remotely created not disbursed)]]
- → Realisation: [[01.300 Search for contract (signed)]]
- → Realisation: [[01.300 Search for contract (ForRegistration)]]
- → Realisation: [[01.300 Search for contract (custom BO search)]]
- → Dependency: [[Redirect links rule (Requirement 1878427)]]
- → Realisation: [[01.300 Search for contract (predefined search)]]
- → Realisation: [[01.300 Search for contract (Remote contracts for signature)]]
- → Realisation: [[01.300 Search for contract (filter for BO user)]]
- → Dependency: [[TicketInfos (Boundary 1868333)]]
- → Realisation: [[01.300 Search for contract (Drafts)]]
- ← Dependency: [[Search for contract (Screen 1822408)]]
- ← UseCase: [[User (Actor 1880892)]]

## 📊 Appears In (13 diagrams)

- Custom: CBL-4153 (CLM-1594) Contract search - new access rights for predefined filters
- Custom: CBL-7036 (CLM-2233) Restrict Contract search function for SA
- Custom: CBL-8891 (CLM-2860) Sales Agents contract search limitation
- Custom: Contract search - Access Rights
- Custom: Contract search - statuses
- Custom: LOR-9719 New contract search - with contract code only
- Custom: REQ #2 - Implement BO Limited Search
- Custom: REQ #3 - Implement CRM Search
- Custom: Search for contract
- Use Case: 2BoD processing
- Use Case: Contract detail
- Use Case: Contract origination
- Use Case: Contract search
